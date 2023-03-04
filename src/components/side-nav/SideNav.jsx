import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { SiIndeed } from 'react-icons/si';
import './side-nav.scss';


const SideNav = () => {
  return (
    <div className='side-nav'>
      <div className='side-nav__container'>
        <div className='side-nav__icons__container'>
          <FiGithub className='side-nav--icon' />
          <SiIndeed className='side-nav--icon' />
          <FiLinkedin className='side-nav--icon' />
          <div className='side-nav__line'></div>
        </div>

        <div className='side-nav__gmail'>
          <p className='side-nav__gmail--contact'>
            msycodebiz@gmail.com
          </p>
          <div className='side-nav__line'></div>
        </div>
      </div>
    </div>
  )
}

export default SideNav