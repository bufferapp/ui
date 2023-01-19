const path = require('path');
const fse = require('fs-extra');

const files = [
  'README.md',
  'LICENSE',
  'types',
];


function resolveBuildPath(file) {
  return path.resolve(__dirname, '../lib/', path.basename(file));
}

function copyFile(file) {
  const libPath = resolveBuildPath(file);
  return new Promise((resolve) => {
    fse.copy(
      file,
      libPath,
      (err) => {
        if (err) throw err;
        resolve();
      },
    );
  })
    .then(() => console.info(`Copied ${file} to ${libPath}`));
}

function createPackageFile() {
  return new Promise((resolve) => {
    // read from package.json
    fse.readFile(path.resolve(__dirname, '../package.json'), 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      resolve(data);
    });
  })
    .then(data => JSON.parse(data))
    .then((packageData) => {
      // store these properties in variables
      const {
        author,
        version,
        description,
        keywords,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies,
        publishConfig,
        types,
      } = packageData;


      const minimalPackage = {
        name: '@bufferapp/ui',
        author,
        version,
        description,
        main: './index.js',
        types,
        keywords,
        repository,
        license,
        bugs,
        homepage,
        peerDependencies,
        dependencies,
        publishConfig,
      };

      return new Promise((resolve) => {
        const libPath = path.resolve(__dirname, '../lib/package.json');
        const data = JSON.stringify(minimalPackage, null, 2);
        // Write to a new package.json file
        fse.writeFile(libPath, data, (err) => {
          if (err) throw (err);
          console.info(`Create package.json in ${libPath}`);
          resolve();
        });
      });
    });
}

Promise.all(
  files.map(file => copyFile(file)),
)
  .then(() => createPackageFile());
