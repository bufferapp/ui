const fs = require('fs'); // for file system reading
const path = require('path'); // package for working with paths
const chalk = require('chalk'); // for coloring the command line output
const { parse } = require('react-docgen'); // lib that will look at our components and pull out the metadata out of our components code
const chokidar = require('chokidar'); // used to watch files and then run a function in a cross-platform way

// get the paths of examples and components and output the component data to the config folder
const paths = {
  examples: path.join(__dirname, '../src', 'docs', 'examples'),
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(__dirname, '../config', 'componentData.js'),
};


function getDirectories(filePath) {
  return fs.readdirSync(filePath).filter(file => fs.statSync(path.join(filePath, file)).isDirectory());
}

function getFiles(filepath) {
  return fs.readdirSync(filepath).filter(file => fs.statSync(path.join(filepath, file)).isFile());
}

function writeFile(filepath, content) {
  fs.writeFile(filepath, content, err => (err ? console.log(chalk.red(err)) : console.log(chalk.green('Component data saved.'))));
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

function getExampleFiles(examplesPath, componentName, folder) {
  let exampleFiles = [];
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName, folder));
  } catch (e) {
    console.log(chalk.red(`No examples found for ${componentName},`));
  }
  return exampleFiles;
}

function getExampleFolders(examplesPath, componentName) {
  let exampleFiles = [];
  try {
    exampleFiles = getDirectories(path.join(examplesPath, componentName));
  } catch (e) {
    console.log(chalk.red(`No examples found for ${componentName},`));
  }
  return exampleFiles;
}

function getExampleData(examplesPath, componentName) {
  const folders = getExampleFolders(examplesPath, componentName);
  return folders.map((folder) => {
    const examples = getExampleFiles(examplesPath, componentName, folder);
    return examples.map((file) => {
      const filePath = path.join(examplesPath, componentName, folder, file);
      const content = readFile(filePath);
      const info = parse(content);

      return {
        // By convention, component name should match the filename
        // So remove the .js extension to get the component name
        name: file.slice(0, -4),
        description: info.description,
        code: content,
        title: folder,
      };
    });
  });
}


/** react-doc-gen's parse method reads the content of our components
 * and returns the metadata (comments, proptypes, examples...) */
function getComponentData(componentPath, componentName) {
  const content = readFile(path.join(paths.components, componentName, `${componentName}.jsx`));

  const info = parse(content);
  return {
    name: componentName,
    description: info.description,
    props: info.props,
    code: content,
    examples: getExampleData(componentPath.examples, componentName),
  };
}


/** Generate our component documentation by getting all the components
 * directories, and for each component, generating component data and
 * writing that to our output file */
function generate(componentPaths) {
  const errors = [];
  const componentData = getDirectories(componentPaths.components).map((componentName) => {
    try {
      return componentName !== 'style' ?  getComponentData(componentPaths, componentName) : false;
    } catch (error) {
      errors.push(`An error occurred while attempting to generate metadata for ${componentName}. ${error}`);
    }
    return false;
  });
  // write the array of data to our output file
  writeFile(componentPaths.output, `module.exports = ${JSON.stringify(errors.length ? errors : componentData)}`);
}


const enableWatchMode = process.argv.slice(2) === '--watch'; // check for a watch flag
if (enableWatchMode) {
  // Regenerate component metadata when components or examples change.
  chokidar.watch([paths.examples, paths.components]).on('change', () => generate(paths));
} else {
  generate(paths);
}
