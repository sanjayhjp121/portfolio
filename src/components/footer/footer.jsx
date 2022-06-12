import React from 'react';
import "./footer.css";
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer__logo'>SANJAY</a>

      <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://faceboook.com/i.sanjay121" target='_blank'><FaFacebookF /></a>
        <a href="https://instagram.com/i_sanjay121" target='_blank'><FiInstagram /></a>
        <a href="https://twitter.com/i_sanjay121" target='_blank'><IoLogoTwitter /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sanjay Kumar. All rights reserved.</small>
      </div>
      </footer>
  )
}

export default Footer