import React from 'react'
import {FaTwitter, FaInstagram, FaFacebookF} from 'react-icons/fa'

import './footer.styles.scss'
import { RiCopyrightLine } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-body-container">
        <div className="footer-body">
          <div className="about-us">
            <h3>How Can We Help</h3>
            <span>how it works?</span>
          </div>
          <div className="about-us">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <div className="icon"><FaFacebookF /></div>
              <div className="icon"><FaInstagram /></div>
              <div className="icon"><FaTwitter /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-foot">
        <RiCopyrightLine />
        <span>2020 Bonga Kawewe</span>
      </div>
    </div>
  )
}

export default Footer
