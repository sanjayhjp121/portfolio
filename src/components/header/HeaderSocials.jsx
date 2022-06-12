import React from 'react';
import {BsLinkedin} from "react-icons/bs";
import {FaGithub} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/i-sanjay121" target="_blank"><BsLinkedin/ ></a>
        <a href="https://github.com/sanjayhjp121" target="_blank"><FaGithub/ ></a>
        <a href="https://instagram.com/i_sanjay121" target="_blank"><FiInstagram/ ></a>
    </div>
  )
}

export default HeaderSocials