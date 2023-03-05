import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { SiIndeed } from 'react-icons/si';
import { Link } from 'react-router-dom';
import './side-nav.scss';


const SideNav = () => {
  return (
    <div className='side-nav'>
      <div className='side-nav__container'>
        <div className='side-nav__icons__container'>

          <a href="https://github.com/codek3n" target='_blank' rel="noreferrer">
            <FiGithub className='side-nav--icon' />
          </a>



          <a href="https://profile.indeed.com/?hl=en_PH&co=PH&from=gnav-jobseeker-profile--profile-one-frontend"
            target='_blank' rel="noreferrer">
            <SiIndeed className='side-nav--icon' />
          </a>

          <a href="https://www.linkedin.com/in/msycodebiz?original_referer=" target='_blank' rel="noreferrer">
            <FiLinkedin className='side-nav--icon' />
          </a>

          <div className='side-nav__line'></div>
        </div>

        <div className='side-nav__gmail'>

          <a href='mailto:msycodebiz@gmail.com' className='side-nav__gmail--contact' rel="noreferrer">
            msycodebiz@gmail.com
          </a>

          <div className='side-nav__line'></div>
        </div>
      </div>
    </div>
  )
}

export default SideNav