# Shared Components

[![Build Status](https://travis-ci.org/ivanaszuber/shared-components.svg?branch=master)](https://travis-ci.org/bufferapp/buffer-components)

A shared set of UI Components using React and Styled Components.

Documentation and Style Guide: https://ivanaszuber.github.io/shared-components/


## Component Development

- [Quick Start](#quick-start)
- [Test](#test)
- [Adding a new Component](#adding-a-new-component)

## Quick Start

Install Node Modules

```sh
npm i
```

Start Documentation App

```sh
npm start
```

Open http://localhost:3000 where you'll find the components documentation system.

## Test

For testing we're using automated snapshot testing with `jest-auto-snapshots`. In order to create a new snapshot test, just create the test file for the given component and add:

```
import snap from 'jest-auto-snapshots';
import MyComponent from '../MyComponent';

snap(MyComponent, '../MyComponent.jsx');
```

This will generate snapshot tests for all the different possible rendering state of that component by detecting the different prop types that component uses.

Run Linter And Test

```sh
npm run t
```


## Adding a new Component

- Create a new folder with the component name under components
- In that folder create:
    - `ComponentName.jsx` file with the component code,
    - `index.js` with the default export,
    - `style.js` with components styles using styled-components library
    - `ComponentName.test.js` with a snapshot test
- The documentation site should be automatically refreshed and you should see your new component there
- In the examples folder create a new folder named after your component
    - add a new file for each version of your component, named `ExampleVersion.jsx`
