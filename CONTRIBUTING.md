# Contributing 💛

Thanks so much for helping us develop this project and being a part of the Buffer community. Here are a few guidelines that will help you along the way.

## Submitting a pull request

Buffer Shared-Components is an open source project, so pull requests are always welcome, although we also recommend opening an issue to discuss your ideas/changes it with the maintainers.

When in doubt, it's best to keep your pull requests small, by not bundling more than one feature or bug fix per pull request :).

### Branch Structure

All stable releases are tagged ([view tags](https://github.com/bufferapp/ui/tags)), and the `main` branch represents the latest development version of the library.
Patches or hotfix releases are prepared on an independent branch.


## Getting started

Please create a new branch from an up to date main on your fork.

1. Fork the repository on Github
2. Clone your fork to your local machine `git clone git@github.com:<yourname>/bufferapp/ui.git`
3. Create a branch `git checkout -b my-topic-branch`
4. Make your changes, lint, then push to to GitHub with `git push --set-upstream origin my-topic-branch`.
5. Visit GitHub and make your pull request.

If you have an existing local repository, please update it before you start, to minimise the chance of merge conflicts.

```sh
git remote add upstream git@github.com:bufferapp/ui.git
git checkout main
git pull upstream main
git checkout -b my-topic-branch
yarn
```

### Testing the documentation site

The documentation site is built with Shared-Components and contains examples of all the components.
To get started:

```sh
yarn start
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

Tests can be run with `yarn test`.


### Building locally

To build the package locally, run:
```sh
yarn build:lib
```

### Publishing your code

To publish your code changes, you can run the following command from the root of the package:
```sh
yarn publish {major|minor|patch}
```
this will automatically tag the release, generate a build, and deploy to npm and github with your changes.
Under the hood, this runs the script `scripts/publish.sh`

### Coding style

Please follow the coding style of the project. We use eslint, so if possible, enable linting in your editor to get real-time feedback. The linting rules can be run manually with the following command `yarn lint`.


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

## Working with Icons

All of our Icon components (in `components/Icon/Icons/**`) are pulled, processed, and automagically ✨ generated from a **Figma file**. This is done with the `gen:icons` command.

### The Figma File

👉 [https://www.figma.com/file/D9T6BuWxbTVKhlDU8faZSQ9G/](https://www.figma.com/file/D9T6BuWxbTVKhlDU8faZSQ9G/BDS-Icons?node-id=0%3A1)

### Figma API Access

Before you can run this script you need to get a **Figma personal access token** and place it in an `.env` file in the `ui` directory. This file and token is unique to you **and should never be commited.**

To get your access token, go to [Figma.com](https://figma.com) and click your name in the top-left to open 'Account Settings' ([See screenshot](http://hi.buffer.com/eb0077a51d19)). Once there click the button to 'Create a new personal access token' ([Screenshot](http://hi.buffer.com/5e9ae694c27d)). Copy the new token and paste it into a file called `.env` inside the `ui` folder, like so:

```bash
FIGMA_ACCESS_TOKEN=<your-token>
```

|⚠️  &nbsp;**Important**|
|--|
|You'll also need to make sure you have access to the file containing our icons (see link above). If you don't have access talk to someone on the **#prod-design** channel in Slack.|

### Updating Icons

Now that you have your token, you can run the script to create / update the Icon components!  **You only need to do this if icons have been added or changed in the Figma file.**

```bash
$ yarn gen:icons
```

**Note**: ESLint Fix is applied as a part of this process, so make sure you've got its [CLI](https://eslint.org/docs/user-guide/command-line-interface) installed

To help you out the script will automatically check the `lastModified` time on the Figma file and compare it what's in the [local icon cache](/config/cachedIconData.json). If the Figma file is newer, it'll pull down the new data, otherwise it'll build the icons based on the cache.

Once the icons are generated you can commit and push them as you would any other code changes.

### How it works

1. We fetch the Icon data from the Figma API as SVG (if cached data is out-of-date.)
2. We prompt the user to choose the frame that contains the icons.
2. We process the SVGs with [`svgo`](https://github.com/svg/svgo/) and also convert them to a React-compatible JSX syntax.
3. As part of the processing we remove all `stroke` and `fill` colors. This ensures we can redefine the icon colors when they're used in React.
2. We generate the component name for each icon absed on the name of the layer in Figma. We convert to `CamelCase` and remove any `ico-` or `icon-` prefixs. Ex. `ico-arrow-down` becomes `ArrowDown`.


### 🎨 Guidelines for icon designers

There are a few important things to keep in mind when adding or changing new Icons in Figma.

1. As long as you add your new icon as layer next to all the other icons, it will be visible to our automatic script. Feel free to create other artboards for WIP / non-flattened icons if needed, since the script lets the user pick the artboard to generate from.
1. **Make sure you flatten all your shapes.** So instead of compound shapes or masks just use the path tools to subtract as needed and create a flattened shape.
2. **Flatten strokes**. Right click and click "Outline stroke" in Figma so that these export correctly.
3. Ensure the icon layer is `16x16` in size.
4. **tl:dr;** Honestly, most of the issues we see are fixed if you outline strokes. :wink:

When you're done adding or changing icons be sure to let an engineer in the **[#proj-design-system](https://app.slack.com/client/T0258KQ7G/CE4NLGLR5)** channel know, so we can run the command to regenerate them next chance we get.

## License

By contributing your code to the bufferapp/ui GitHub repository, you agree to license your contribution under the MIT license.
