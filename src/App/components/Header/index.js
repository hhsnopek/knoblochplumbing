import React from 'react'
import Ionicon from 'react-ionicons'
import { withSiteData } from 'react-static'

import logo from '../../images/knobloch-logo.png'
import './index.sss'

const Nav = ({ phoneNumber }) => (
  <nav>
    <ul>
      <li id="logo">
        <img src={logo} alt="Knobloch Plumbing Inc. logo" />
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
      <li id="phone">
        <a href={`tel:${phoneNumber}`}>{`+${phoneNumber.replace('-', ' ')}`}</a>
      </li>
    </ul>
    <div id="chev-right">
      <Ionicon icon="ios-arrow-forward" />
    </div>
  </nav>
)

export default withSiteData(Nav)
