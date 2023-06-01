/* eslint-disable no-console */
const childProcess = require('child_process')
const { version } = require('../package.json')

const BLUE = '\x1b[34m'

const revision = childProcess
  .execSync('git rev-parse --short HEAD')
  .toString()
  .trim()

const baseVersion = version.replace(/-beta.*/, '')

const betaVersion = `${baseVersion}-beta.${revision}`

childProcess.execSync(`
    yarn version --new-version ${betaVersion} --no-git-tag-version && \
    yarn run build:lib && \
    cd ./lib && \
    yarn publish --tag=beta
  `)

console.log('\n')
console.log(BLUE, 'Published version:', betaVersion, 'successfully!')
