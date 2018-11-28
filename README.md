# ✨ Shared Components ✨

<div align="center">
  <a href="https://www.styled-components.com">
    <img alt="styled-components" src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-LFNym8ScnaWKWBQFWTw%2Favatar.png?generation=1529427935328806&alt=media" height="150px" />
  </a>
</div>

<br />

<div align="center">
  <strong>Buffer's Component library and Style Guide for the Buffer Platform and the community</strong>
  <br />
  <br />
</div>

[![Build Status](https://travis-ci.org/ivanaszuber/shared-components.svg?branch=master)](https://travis-ci.org/bufferapp/buffer-components)


**Hi there!**

Welcome to the official Buffer components library 🎉! This is where we host all the components used by the Buffer applications ([Publish](https://publish.buffer.com), [Analyze](https://analyze.buffer.com) and [Reply](https://reply.buffer.com)), as well as our official [Style Documentation](https://ivanaszuber.github.io/shared-components/#Button).
This library is open source and free for you to explore and use!

If you'd like to dive into our components and how to use them in your projects, please head to our ➡️ [Documentation site](https://ivanaszuber.github.io/shared-components/#Button).

If you'd like to contribute to this project, keep reading and check out the relevant information below 😊.


## Component Development

In order to start using this project locally, you'll need to clone this repository and install the dependent packages. After that you can checkout our scripts for starting the app, running tests and building the documentation site.

Here are some useful links to get started with:

- [Quick Start](#quick-start)
- [Test](#test)
- [Adding a new Component](#adding-a-new-component)
- [FAQ](#faq)

## Quick Start

### Install Node Modules

```sh
npm install
```

### Start Documentation App

```sh
npm start
```

This script generates the documentation site and watches any changes in the app in order to hot reload the documentation.

Open http://localhost:3000 where you'll find the components documentation system.

## Test

For testing we're using automated snapshot testing with `jest-auto-snapshots`. In order to create a new snapshot test, just create the test file for the given component and add:

```
import snap from 'jest-auto-snapshots';
import MyComponent from '../MyComponent';

snap(MyComponent, '../MyComponent.jsx');
```

This will generate snapshot tests for all the different possible rendering state of that component by detecting the different prop types that component uses.

### Run Tests

```sh
npm run test
```


## Adding a new Component

Our components are organizes in folders, in the following structure:

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


## Styling the Component

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

## Creating Component Documentation

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


## FAQ

**What is a component?**

In the current implementation components are all [functional and stateless](https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.ukhlhrqlw).

This means that UI is a function of state since we're using pure functions to build our views.

```
UI = f(state)
```

**How do I determine the scope of a component?**

This is a tough question, it really depends. But as a general rule, a component should be simple enough to be reusable across multiple applications and be not much longer than 150 lines of code. This is a good one to seek advice if you're not sure.

**What's the development workflow look like?**

Note: this is *a way* to do this, but not necessarily *the way* to build components. For this workflow let's create a component called `NewComponent`.

1. Create a branch with the name of the new component

Note: also make sure you're up to date

```
git checkout master
git pull -r
git checkout -b task/add-newcomponent
```

2. Install dependencies and start the documentation system

```
npm i && npm start
```

open http://localhost:3000 in your browser

3. Create a `NewComponent` folder under `src/components` (see [Adding a new Component](#adding-a-new-component))
```
components/
+-- NewComponent/
```

4. Create the `index.js` file and add the default export
```
components/
+-- NewComponent/
  -- index.js
```


5. Create the `style.js` file and add components styles
```
components/
+-- NewComponent/
  -- index.js
```

6. Create a test file with the snapshot (see [Test](#test) for more information)

```
src/
+-- NewComponent/
 -- NewComponent.test.js
```


6. Implement your component

```
import React from 'react';
import PropTypes from 'prop-types';
import style from 'styled-components';
import * as Styles from './style';

const NewComponentStyled = style.div`
  ${Styles.base};
  ${props => Styles[props.size]};
  ${props => Styles[props.type]};
`;

/** Component Description  */
const Button = ({
  children,
  prop
}) => (
  <NewComponentStyled
    prop={prop}
  >
    {children}
  </NewComponentStyled>
);


NewComponentStyled.propTypes = {
  /** Children node */
  children: PropTypes.node.isRequired,
};


Button.defaultProps = {
};


export default NewComponentStyled;


```



7. Create the `NewComponent` folder under `src/docs` and add the `ExampleNewComponent.jsx` file

```
import React from 'react';
import NewComponent from '@bufferapp/components/NewComponent';

/** NewComponent example */
export default function ExampleNewComponent() {
  return <NewComponent type="text" onClick={() => {}}></NewComponent>;
}
```

Restart the documentation site!


Now when you go to http:localhost:3000 you should see your new component listed 🎉


8. Run the test for the first time

It's important to note that this creates a snapshot of the component. All tests ran in the future will be tested against this snapshot to ensure they haven't changed.

```sh
npm t
```

7. Commit it!

```sh
git add .
git commit -m "Add NewComponent"
git push -u origin task/add-newcomponent
```

At this point it's a good idea to generate a PR on github :)

**How do I write tests for a component?**

This automatically happens when you write the first test. They are tested with jest snapshots under the hood.

Since components are [functional and stateless](https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.ukhlhrqlw) we can use snapshot testing to get complete coverage.

You're verifying that each property change has the expected outcome in HTML.

The first time the test is run it generates a new snapshot. The **second** time it's checked against the snapshot.

**How Do I Update A Snapshot**

```
npm run test-update
```
