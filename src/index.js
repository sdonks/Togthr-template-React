import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import Portfolio from './views/portfolio'
import Home from './views/home'
import Services from './views/services'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Contact} exact path="/contact" />
        <Route component={Portfolio} exact path="/portfolio" />
        <Route component={Home} exact path="/" />
        <Route component={Services} exact path="/services" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
