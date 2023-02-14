import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Contact from './views/contact'
import WorkExamples from './views/work-examples'
import Home from './views/home'
import Page from './views/page'
import Services from './views/services'
import Maintenance from './views/maintenance'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Contact} exact path="/contact" />
        <Route component={WorkExamples} exact path="/work-examples" />
        <Route component={Home} exact path="/" />
        <Route component={Page} path="**" />
        <Route component={Services} exact path="/services" />
        <Route component={Maintenance} exact path="/maintenance" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
