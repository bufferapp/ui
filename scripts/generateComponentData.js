const fs = require('fs'); // for file system reading
const path = require('path'); // package for working with paths
const chalk = require('chalk'); // for coloring the command line output
const { parse } = require('react-docgen'); // lib that will look at our components and pull out the metadata out of our components code
const chokidar = require('chokidar'); // used to watch files and then run a function in a cross-platform way

// get the paths of examples and components and output the component data to the config folder
const paths = {
  examples: path.join(__dirname, '../src', 'docs', 'examples'),
  documents: path.join(__dirname, '../src', 'docs', 'components', 'pages', 'markdown'),
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(__dirname, '../config', 'componentData.js'),
  documentsOutput: path.join(__dirname, '../config', 'documentsData.js'),
};


function getDirectories(filePath) {
  return fs.readdirSync(filePath).filter(file => fs.statSync(path.join(filePath, file)).isDirectory());
}

function getFiles(filepath) {
  return fs.readdirSync(filepath).filter(file => fs.statSync(path.join(filepath, file)).isFile());
}

function writeFile(filepath, content) {
  fs.writeFile(filepath, content, err => (err ? console.info(chalk.red(err)) : console.info(chalk.green('Component data saved.'))));
}

function readFile(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

function getDocumentFiles(documentPath, folder) {
  let documentFiles = [];
  try {
    documentFiles = getFiles(path.join(documentPath, folder));
  } catch (e) {
    console.error(chalk.red('No documents found.'));
  }
  return documentFiles;
}

function getExampleFiles(examplesPath, componentName, folder) {
  let exampleFiles = [];
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName, folder));
  } catch (e) {
    console.error(chalk.red(`No examples found for ${componentName},`));
  }
  return exampleFiles;
}

function getExampleFolders(examplesPath, componentName) {
  let exampleFiles = [];
  try {
    exampleFiles = getDirectories(path.join(examplesPath, componentName));
  } catch (e) {
    console.error(chalk.red(`No examples found for ${componentName},`));
  }
  return exampleFiles;
}

function getDocumentationFolders(documentationPath) {
  let exampleFiles = [];
  try {
    exampleFiles = getDirectories(documentationPath);
  } catch (e) {
    console.error(chalk.red(`No documents found for ${documentationPath},`));
  }
  return exampleFiles;
}

function getExampleData(examplesPath, componentName) {
  // Get all the folders in src/docs/examples
  const folders = getExampleFolders(examplesPath, componentName);

  // for each folder in examples, get the example files and generate the example object
  return folders.map((folder) => {
    const examples = getExampleFiles(examplesPath, componentName, folder);
    return examples.map((file) => {
      const filePath = path.join(examplesPath, componentName, folder, file);
      const content = readFile(filePath);
      const info = parse(content);

      return {
        // By convention, component name should match the filename
        // So remove the .jsx extension to get the component name
        name: file.slice(0, -4),
        description: info.description,
        code: content,
        title: folder,
      };
    });
  });
}


function getDocumentsData(documentsPath) {
  const folders = getDocumentationFolders(documentsPath);

  return folders.map((folder) => {
    const documents = getDocumentFiles(documentsPath, folder);
    const folderByUppercase = folder.split(/(?=[A-Z])/);
    const folderId = folderByUppercase.join('-').toLowerCase();


    return {
      id: folderId,
      fileName: folder,
      name: folderByUppercase.join(' '),
      parentName: folder,
      level: 0,
      children: documents.filter(doc => doc !== folder).map((document) => {
        const fileName = document.slice(0, -3);
        const splitByUppercase = fileName.split(/(?=[A-Z])/);
        const fileId = splitByUppercase.join('-').toLowerCase();
        return {
          id: fileId,
          fileName,
          name: splitByUppercase.join(' '),
          level: 1,
          parentName: folder,
        };
      }),
    };
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
    level: 1,
    id: componentName.toLowerCase(),
    parentName: 'ui',
    examples: getExampleData(componentPath.examples, componentName),
  };
}


/** Generate our component documentation by getting all the components
 * directories, and for each component, generating component data and
 * writing that to our output file */
function generate(componentPaths) {
  const errors = [];
  // we need to exclude the style folder here
  const componentData = {
    id: 'ui',
    fileName: 'ui',
    level: 0,
    name: 'UI Components',
    parentName: 'ui',
    children: getDirectories(componentPaths.components).filter(folder => folder !== 'style').map((componentName) => {
      try {
        return getComponentData(componentPaths, componentName);
      } catch (error) {
        errors.push(`An error occurred while attempting to generate metadata for ${componentName}. ${error}`);
      }
      return false;
    }),
  };
  // write the array of data to our output file
  writeFile(componentPaths.output, `module.exports = ${JSON.stringify(errors.length ? errors : componentData)}`);
}


/** Generate our component documentation by getting all the components
 * directories, and for each component, generating component data and
 * writing that to our output file */
function generateDocumentation(documentPaths) {
  const errors = [];
  const documentsData = getDocumentsData(documentPaths.documents);
  // write the array of data to our output file
  writeFile(documentPaths.documentsOutput, `module.exports = ${JSON.stringify(errors.length ? errors : documentsData)}`);
}


const enableWatchMode = process.argv.slice(2) === '--watch'; // check for a watch flag
if (enableWatchMode) {
  // Regenerate component metadata when components or examples change.
  chokidar.watch([paths.examples, paths.components, paths.documents]).on('change', () => {
    generate(paths);
    generateDocumentation(paths);
  });
} else {
  generate(paths);
  generateDocumentation(paths);
}
