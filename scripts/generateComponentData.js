let fs = require('fs'); //for file system reading
let path = require('path'); //package for working with paths
let chalk = require('chalk'); //for coloring the command line output
let parse = require('react-docgen').parse; // lib that will look at our components and pull out the metadata out of our components code
let chokidar = require('chokidar'); //used to watch files and then run a function in a cross-platform way


//get the paths of examples and components and output the component data to the config folder
let paths = {
    examples: path.join(__dirname, '../src', 'docs', 'examples'),
    components: path.join(__dirname, '../src', 'components'),
    output: path.join(__dirname, '../config', 'componentData.js')
};

const enableWatchMode = process.argv.slice(2) === '--watch'; //check for a watch flag
if (enableWatchMode) {
    //Regenerate component metadata when components or examples change.
    chokidar.watch([paths.examples, paths.components]).on('change', () => generate(paths))
}
else {
    generate(paths)
}


/** Generate our component documentation by getting all the components
 * directories, and fo each component, generating component data and
 * writing that to our output file*/
function generate(paths) {
    let errors = [];
    let componentData = getDirectories(paths.components).map(componentName => {
        try {
            return getComponentData(paths, componentName)
        } catch (error) {
            errors.push('An error occurred while attempting to generate metadata for ' + componentName + '. ' + error);
        }
    });
    //write the array of data to our output file
    writeFile(paths.output, "module.exports = " + JSON.stringify(errors.length ? errors : componentData));
}

/** react-doc-gen's parse method reads the content of our components
 * and returns the metadata (comments, proptypes, examples...) */
function getComponentData(paths, componentName) {
    let content = readFile(path.join(paths.components, componentName, componentName + '.jsx'));

    let info = parse(content);
    return {
        name: componentName,
        description: info.description,
        props: info.props,
        code: content,
        examples: getExampleData(paths.examples, componentName)
    }
}

function getExampleData(examplesPath, componentName) {
    let examples = getExampleFiles(examplesPath, componentName);
    return examples.map((file) => {
        let filePath = path.join(examplesPath, componentName, file);
        let content = readFile(filePath);

        // a little hack to account for possible multiple components
        // in a single example
        let newContent = content.replace('[', '<div>').replace(']', '</div>')
        let info = parse(newContent);

        return {
            // By convention, component name should match the filename
            // So remove the .js extension to get the component name
            name: file.slice(0, -4),
            description: info.description,
            code: content
        }
    })
}

function getExampleFiles(examplesPath, componentName) {
    let exampleFiles = [];
    try {
        exampleFiles = getFiles(path.join(examplesPath, componentName));
    } catch (e) {
        console.log(chalk.red(`No examples found for ${componentName},`));
    }
    return exampleFiles
}

function getDirectories(filePath) {
    return fs.readdirSync(filePath).filter((file) => fs.statSync(path.join(filePath, file)).isDirectory())
}

function getFiles(filepath) {
    return fs.readdirSync(filepath).filter((file) => fs.statSync(path.join(filepath, file)).isFile())
}

function writeFile(filepath, content) {
    fs.writeFile(filepath, content, (err) => err ? console.log(chalk.red(err)) : console.log(chalk.green("Component data saved.")))
}

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf-8')
}