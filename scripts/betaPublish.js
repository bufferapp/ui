const childProcess = require('child_process');
const { version } = require('../package.json');

const BLUE='\x1b[34m'

const revision = childProcess
  .execSync('git rev-parse --short HEAD')
  .toString().trim()

const baseVersion = version.replace(/-beta.*/, '');

const betaVersion = `${baseVersion}-beta.${revision}`;

childProcess
  .execSync(`
    npm version ${betaVersion} --git-tag-version=false && \
    npm run build:lib && \
    cd ./lib && \
    npm publish --tag=beta
  `);

console.log('\n');
console.log(BLUE, 'Published version:', betaVersion, 'successfully!');
