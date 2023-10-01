import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import Portfolio from './views/portfolio'
import Home from './views/home'
import Services from './views/services'
import HomeTesting from './views/home-testing'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Contact} exact path="/contact" />
        <Route component={Portfolio} exact path="/portfolio" />
        <Route component={Home} exact path="/" />
        <Route component={Services} exact path="/services" />
        <Route component={HomeTesting} exact path="/home-testing" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
