import React from 'react';
import { hot } from 'react-hot-loader';
import { Redirect, Route, Switch } from 'react-router-dom';
import DocumentationPages from './app/AppContainer';
const App = () => (React.createElement(Switch, null,
    React.createElement(Route, { exact: true, path: "/", render: () => React.createElement(Redirect, { to: "/GettingStarted/getting-started" }) }),
    React.createElement(Route, { exact: true, path: "/:location/:route/:view?", component: DocumentationPages })));
export default hot(module)(App);
//# sourceMappingURL=App.js.map