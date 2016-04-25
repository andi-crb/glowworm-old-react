import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Home from './components/Home'
import Profile from './components/Profile'
import Recommendations from './components/Recommendations'
import Reviews from './components/Reviews'
import Signup from './components/Signup'
import Stories from './components/Stories'
import Story from './components/Story'


module.exports = (
  <Router history={browserHistory}>
    <Route path="/" component={Home}></Route>
    <Route path="profile" component={Profile}></Route>
    <Route path="recommendations" component={Recommendations}></Route>
    <Route path="reviews" component={Reviews}></Route>
    <Route path="signup" component={Signup}></Route>
    <Route path="stories" component={Stories}></Route>
    <Route path="story" component={Story}></Route>
  </Router>
)
