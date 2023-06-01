import React from 'react'
import { hot } from 'react-hot-loader'
import { Redirect, Route, Switch } from 'react-router-dom'
import DocumentationPages from './app/AppContainer'

const App = () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => <Redirect to="/GettingStarted/getting-started" />}
    />
    <Route
      exact
      path="/:location/:route/:view?"
      component={DocumentationPages}
    />
  </Switch>
)

export default hot(module)(App)
