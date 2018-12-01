# Contributing 💛

Thanks so much for helping us develop this project and being a part of the Buffer community. Here are a few guidelines that will help you along the way.

## Submitting a pull request

Buffer Shared-Components is an open source project, so pull requests are always welcome, but, before working on a large change, it is best to open an issue first to discuss it with the maintainers.

When in doubt, try to keep your pull requests small, by not bundling more than one feature or bug fix per pull request :).

### Branch Structure

All stable releases are tagged ([view tags](https://github.com/bufferapp/shared-components/tags)), and the `master` branch represents the latest development version of the library.
Patches or hotfix releases are prepared on an independent branch.


## Getting started

Please create a new branch from an up to date master on your fork.

1. Fork the repository on Github
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/bufferapp/shared-components.git`
3. Create a branch `git checkout -b my-topic-branch`
4. Make your changes, lint, then push to to GitHub with `git push --set-upstream origin my-topic-branch`.
5. Visit GitHub and make your pull request.

If you have an existing local repository, please update it before you start, to minimise the chance of merge conflicts.

```sh
git remote add upstream git@github.com:bufferapp/shared-components.git
git checkout master
git pull upstream master
git checkout -b my-topic-branch
yarn
```

### Testing the documentation site

The documentation site is built with Shared-Components and contains examples of all the components.
To get started:

```sh
npm run start
```

You can now access the documentation site [locally](http://localhost:3000). This script generates the documentation site and watches any changes in the app in order to hot reload the documentation.


### Test

For testing we're using automated snapshot testing with `jest-auto-snapshots`. In order to create a new snapshot test, just create the test file for the given component and add:

```
import snap from 'jest-auto-snapshots';
import MyComponent from '../MyComponent';

snap(MyComponent, '../MyComponent.jsx');
```

This will generate snapshot tests for all the different possible rendering state of that component by detecting the different prop types that component uses.

Tests can be run with `npm run test`.


### Building locally

To build the package locally, run:
```sh
npm run build:lib
```

### Coding style

Please follow the coding style of the project. We use eslint, so if possible, enable linting in your editor to get real-time feedback. The linting rules can be run manually with the following command `npm run lint`.


## Adding a new Component

Our components are organized in folders, in the following structure:

```sh
src/ # root
+-- components/ # components root
  +-- MyComponent/ # component root
    -- MyComponent.jsx # React component
    -- MyComponent.test.js # Component's test file
    -- index.js # default export
    -- style.js # component's CSS
+-- docs/ # documentation site components
```

When creating a new component, please follow the same structure and create a `.jsx` file for the React component, `index.js` file with the default export (we need this to be able to have nice imports in our components),
a `style.js` with all the style variations for that component, and `test.js` with the snapshot test configuration explained in the [Test](#test) section.

Here are the basic steps:
- Create a new folder with the component name under components
- In that folder create:
    - `ComponentName.jsx` file with the component code,
    - `index.js` with the default export,
    - `style.js` with components styles using styled-components library
    - `ComponentName.test.js` with a snapshot test
- The documentation site should be automatically refreshed and you should see your new component there
- In the examples folder create a new folder named after your component
    - add a new file for each version of your component, named `ExampleVersion.jsx`


### Styling the Component

For component styling, we're using the [styled-components](https://www.styled-components.com) library. In the `Button` component example, styles for each button variation (`primary`, `secondary`, `text`...)
and size (`large`, `small`, `default`) are defined in the `style.js` file. Those styles are then imported in the main Button component in order to construct the `styled-component` like this:

```
const ButtonStyled = style.div`
  ${Styles.buttonbase};
  ${props => Styles[props.size]};
  ${props => Styles[props.type]};
`;
```

Please make sure to use the color, font, border, etc. variables instead of fixed values in CSS. In case the variable you need is not defined, feel free to add it in the corresponding file.

## Adding Component Documentation

When you add new folder in components, the documentation system will automatically pick it up and read from the comments and PropTypes in order to create the documentation.
To make the documentation complete, there are a few steps needed for every new component created:

- Make sure the name of the component file is the same as the name of the folder it's located
- Add a main component description above the component name
- Add a comment for every Prop type
- Add default prop types
- in the `docs/examples` folder create a newfolder named after the component
    - in that folder create a new `ExampleComponentType.jsx` file that contains all the different variations of that component, for example
    ```
    import React from 'react';
    import Button from '@bufferapp/components/Button';

    /** Primary type buttons */
    export default function ExamplePrimary() {
      return [
        <Button type="primary" size="large" onClick={() => {}}>Primary Large</Button>,
        <Button type="primary" onClick={() => {}}>Primary Button</Button>,
        <Button type="primary" size="small" onClick={() => {}}>Primary Small</Button>,
      ];
    }
    ```
    - this will be shown as three different primary buttons in the documentation together with the code examples


## License

By contributing your code to the bufferapp/shared-components GitHub repository, you agree to license your contribution under the MIT license.