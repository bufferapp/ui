const fs = require('fs') // for file system reading
const path = require('path') // package for working with paths
const chalk = require('chalk') // for coloring the command line output
const { parse } = require('react-docgen') // lib that will look at our components and pull out the metadata out of our components code
const chokidar = require('chokidar') // used to watch files and then run a function in a cross-platform way

// get the paths of examples and components and output the component data to the config folder
const paths = {
  examples: path.join(__dirname, '../src', 'documentation', 'examples'),
  documents: path.join(__dirname, '../src', 'documentation', 'markdown'),
  components: path.join(__dirname, '../src', 'components'),
  output: path.join(
    __dirname,
    '../src/documentation/config',
    'componentData.json',
  ),
  documentsOutput: path.join(
    __dirname,
    '../src/documentation/config',
    'documentsData.json',
  ),
}

// some of the folders in components are not actual components, so ignore them
const componentFoldersToIgnore = ['style', 'constants', 'util']

function getDirectories(filePath) {
  return fs
    .readdirSync(filePath)
    .filter((file) => fs.statSync(path.join(filePath, file)).isDirectory())
}

function getFiles(filepath) {
  return fs
    .readdirSync(filepath)
    .filter((file) => fs.statSync(path.join(filepath, file)).isFile())
}

function writeFile(filepath, content) {
  fs.writeFile(filepath, content, (err) =>
    err
      ? console.info(chalk.red(err))
      : console.info(chalk.green(`Component data saved: ${filepath}`)),
  )
}

function readFile(filePath, removeComments = true) {
  const initialFile = fs.readFileSync(filePath, 'utf-8')
  if (removeComments) {
    const commentRegex = /(\/\/| *{\/\*) @ts-expect-error.*(\n)/g
    const contentWithoutComments = initialFile.replace(commentRegex, '')
    return contentWithoutComments
  }
  return initialFile
}

function getDocumentFiles(documentPath, folder) {
  let documentFiles = []
  try {
    documentFiles = getFiles(path.join(documentPath, folder))
  } catch (e) {
    console.error(chalk.red('No documents found.'))
  }
  return documentFiles
}

function getExampleFiles(examplesPath, componentName, folder) {
  let exampleFiles = []
  try {
    exampleFiles = getFiles(path.join(examplesPath, componentName, folder))
  } catch (e) {
    console.error(chalk.red(`No examples found for ${componentName},`))
  }
  return exampleFiles
}

function getExampleFolders(examplesPath, componentName) {
  let exampleFiles = []
  try {
    exampleFiles = getDirectories(path.join(examplesPath, componentName))
  } catch (e) {
    console.error(chalk.red(`No examples found for ${componentName},`))
  }
  return exampleFiles
}

function getDocumentationFolders(documentationPath) {
  let exampleFiles = []
  try {
    exampleFiles = getDirectories(documentationPath)
  } catch (e) {
    console.error(chalk.red(`No documents found for ${documentationPath},`))
  }
  return exampleFiles
}

function getExampleData(examplesPath, componentName) {
  // Get all the folders in src/docs/examples
  const folders = getExampleFolders(examplesPath, componentName)
  const fileExamples = getDocumentFiles(examplesPath, componentName)

  // for each folder in examples, get the example files and generate the example object
  return folders[0]
    ? folders.map((folder) => {
        const examples = getExampleFiles(examplesPath, componentName, folder)
        return examples.map((file) => {
          const filePath = path.join(examplesPath, componentName, folder, file)
          const content = readFile(filePath)
          const info = parse(content)

          return {
            // By convention, component name should match the filename
            // So remove the .jsx extension to get the component name
            name: file.slice(0, -4),
            description: info.description,
            methods: info.methods,
            code: content,
            title: folder,
          }
        })
      })
    : fileExamples.map((file) => {
        const filePath = path.join(examplesPath, componentName, file)
        const content = readFile(filePath)
        const info = parse(content)

        return {
          // By convention, component name should match the filename
          // So remove the .jsx extension to get the component name
          name: file.slice(0, -4),
          description: info.description,
          methods: info.methods,
          code: content,
          title: '',
        }
      })
}

function getDocumentsData(documentsPath) {
  const folders = getDocumentationFolders(documentsPath)

  return folders.map((folder) => {
    const documents = getDocumentFiles(documentsPath, folder)
    const folderByUppercase = folder.split(/(?=[A-Z])/)
    const folderId = folderByUppercase.join('-').toLowerCase()

    return {
      id: folderId,
      fileName: folder,
      name: folderByUppercase.join(' '),
      parentName: folder,
      level: 0,
      children: documents
        .filter((doc) => doc !== folder)
        .map((document) => {
          const fileName = document.slice(0, -3)
          const splitByUppercase = fileName.split(/(?=[A-Z])/)
          const fileId = splitByUppercase.join('-').toLowerCase()
          return {
            id: fileId,
            fileName,
            name: splitByUppercase.join(' '),
            level: 1,
            parentName: folder,
          }
        }),
    }
  })
}

/** react-doc-gen's parse method reads the content of our components
 * and returns the metadata (comments, proptypes, examples...) */
function getComponentData(componentPath, componentName) {
  const content = readFile(
    path.join(paths.components, componentName, `${componentName}.tsx`),
  )

  const splitByUppercase = componentName.split(/(?=[A-Z])/)
  const name = splitByUppercase.join(' ')

  const info = parse(content)
  return {
    name,
    description: info.description,
    props: info.props,
    code: content,
    level: 1,
    id: componentName.toLowerCase(),
    parentName: 'ui',
    examples: getExampleData(componentPath.examples, componentName),
  }
}

/** Generate our component documentation by getting all the components
 * directories, and for each component, generating component data and
 * writing that to our output file */
function generate(componentPaths) {
  const errors = []
  // we need to exclude the style folder here
  const componentData = {
    id: 'ui',
    fileName: 'ui',
    level: 0,
    name: 'Components',
    parentName: 'ui',
    children: getDirectories(componentPaths.components)
      .filter((folder) => !componentFoldersToIgnore.includes(folder))
      .map((componentName) => {
        try {
          return getComponentData(componentPaths, componentName)
        } catch (error) {
          console.info(error)
          errors.push(
            `An error occurred while attempting to generate metadata for ${componentName}. ${error}`,
          )
        }
        return false
      }),
  }
  // write the array of data to our output file
  writeFile(
    componentPaths.output,
    `${JSON.stringify(errors.length ? errors : componentData)}`,
  )
}

/** Generate our component documentation by getting all the components
 * directories, and for each component, generating component data and
 * writing that to our output file */
function generateDocumentation(documentPaths) {
  const errors = []
  const documentsData = getDocumentsData(documentPaths.documents)
  // write the array of data to our output file
  writeFile(
    documentPaths.documentsOutput,
    `${JSON.stringify(errors.length ? errors : documentsData)}`,
  )
}

function debounce(func, wait, immediate) {
  let timeout
  return function () {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      timeout = null
      if (!immediate) func()
    }, wait)
    if (immediate && !timeout) func()
  }
}

function run() {
  generate(paths)
  generateDocumentation(paths)
}

const debouncedRun = debounce(run, 500)

const enableWatchMode = process.argv.slice(2).includes('--watch') // check for a watch flag
if (enableWatchMode) {
  // Regenerate component metadata when components or examples change.
  chokidar
    .watch([paths.examples, paths.components, paths.documents])
    .on('change', () => {
      debouncedRun()
    })
} else {
  run()
}
