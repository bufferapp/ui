#!/usr/bin/env node
/* eslint no-console: ["error", { allow: ["log"] }] */

const os = require('os')
const fs = require('fs')
const path = require('path')
const inquirer = require('inquirer')

const { username } = os.userInfo()

const templateComponentName = 'ComponentNamePlaceholder'
const templatePath = path.join(__dirname, 'new-component-template')
const componentsPath = path.join(__dirname, '..', 'src', 'components')

const filesToIgnore = ['README.md']

// https://gist.github.com/kethinov/6658166#gistcomment-2692596
const getAllFiles = (dir) =>
  fs.readdirSync(dir).reduce((files, file) => {
    const name = path.join(dir, file)
    const isDirectory = fs.statSync(name).isDirectory()
    if (filesToIgnore.includes(file)) {
      return files
    }
    return isDirectory ? [...files, ...getAllFiles(name)] : [...files, name]
  }, [])

function componentExists(name) {
  try {
    return fs.statSync(path.join(componentsPath, name)).isDirectory()
  } catch (error) {
    return false
  }
}

function validateName(name) {
  if (name === '') {
    return 'Whoops, please enter a name for your new component!'
  }
  if (!/[A-Z]/.test(name) || /\s/.test(name)) {
    return 'Oops, component names must be in CamelCase with no spaces. (e.g., `MyAwesomeComponent` or `Button`)'
  }
  if (componentExists(name)) {
    return `Sorry, the \`${name}\` component already exists!`
  }
  return true
}

function writeFile(dest, content) {
  const destDir = path.dirname(dest)
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true })
  }
  fs.writeFileSync(dest, content)
}

async function main() {
  console.log(
    `⚡️ Let's create a new component ${username}! (Press Ctrl+C to cancel)\n`,
  )

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What shall we call your new component?',
      validate: validateName,
    },
    {
      type: 'confirm',
      name: 'docs',
      message: 'Do you want to add documentation for this component?',
    },
  ])

  console.log('\nOk, here we go...')

  const templateFiles = getAllFiles(templatePath)

  templateFiles.forEach((templateFilePath) => {
    const relativeFilePath = templateFilePath
      .replace(new RegExp(`${templateComponentName}`, 'g'), answers.name)
      .replace(templatePath, '')

    if (/documentation\//.test(relativeFilePath) && answers.docs === false) {
      return
    }
    const templateContent = fs.readFileSync(templateFilePath).toString()
    const newFilePath = path.join(__dirname, '..', relativeFilePath)
    const newFileContent = templateContent.replace(
      new RegExp(`${templateComponentName}`, 'g'),
      answers.name,
    )

    if (fs.existsSync(newFilePath)) {
      fs.appendFileSync(newFilePath, newFileContent)
      console.log(` + Appended to ${relativeFilePath}`)
    } else {
      writeFile(newFilePath, newFileContent)
      console.log(` ✓ Created ${relativeFilePath}`)
    }
  })

  console.log('\n✨ All done!\n')
}

main()
