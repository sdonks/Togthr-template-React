import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navigation-links1.css'

const NavigationLinks1 = (props) => {
  return (
    <nav className={`navigation-links1-nav ${props.rootClassName} `}>
      <Link to="/" className="navigation-links1-navlink">
        {props.text}
      </Link>
      <Link to="/projects" className="navigation-links1-navlink1">
        {props.text1}
      </Link>
      <Link to="/services" className="navigation-links1-navlink2">
        {props.text2}
      </Link>
      <Link to="/contact" className="navigation-links1-navlink3">
        {props.text3}
      </Link>
    </nav>
  )
}

NavigationLinks1.defaultProps = {
  text1: 'Projects',
  text: 'Home',
  text3: 'Contact',
  rootClassName: '',
  text2: 'Services',
}

NavigationLinks1.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
}

export default NavigationLinks1
