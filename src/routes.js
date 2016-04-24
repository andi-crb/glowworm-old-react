import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Home from './components/Home'


module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
  </Router>
)
