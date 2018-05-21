import React from 'react'
import Ionicon from 'react-ionicons'
import { withSiteData } from 'react-static'

import logoWhite from '../../images/knobloch-logo-white.png'
import './index.sss'

const Footer = ({ phoneNumber, address }) => (
  <footer id="contact">
    <div id="info">
      <div id="logo" className="half">
        <img src={logoWhite} alt="Knobloch Plumbing Inc. white logo" />
      </div>
      <div className="half">
        <div className="location">
          <Ionicon icon="ios-pin" />
          <span>{address}</span>
        </div>
        <a href={`tel:${phoneNumber}`}>{`+${phoneNumber.replace('-', ' ')}`}</a>
        <p>license: 058-177908</p>
      </div>
    </div>

    <div id="copyright">
      <p>© 2018 Knobloch Plumbing Incorporated · All rights reserved.</p>
    </div>
  </footer>
)

export default withSiteData(Footer)
