import React, { useEffect, useState } from 'react';
import { Slant as Hamburger } from 'hamburger-react';
import logo from '../../assets/svg/logo.svg';

import './navbar.scss';

// import { HashLink as Link } from 'react-router-hash-link';
import { HashLink as Linking } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar');
  const [isOpen, setOpen] = useState(false);

  let lastScroll = 0

  const scrolling = () => {

    const currentPosition = window.scrollY

    if (currentPosition > lastScroll) {
      setNavbarClass('navbar scrolling-down')
    }

    if (currentPosition < lastScroll) {
      setNavbarClass('navbar scrolling-up')
    }

    if (currentPosition <= 0) {
      setNavbarClass('navbar')
    }

    lastScroll = currentPosition
  }

  useEffect(() => {
    window.addEventListener('scroll', scrolling)

    return () => {
      window.removeEventListener('scroll', scrolling)
    }
  }, [])


  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen])


  return (
    <>
      <div className={navbarClass}>
        <div className='navbar__container'>

          <Linking to='#home' smooth>
            {/* <div className='navbar__logo' onClick={() => setOpen(false)}> */}
              {/* LOGO */}
              <img src={logo} className='logo__img' alt="logo" onClick={() => setOpen(false)}/>
            {/* </div> */}
          </Linking>


          <ul className={isOpen ? 'navbar__menu is-open' : 'navbar__menu'}>

            <li onClick={() => setOpen(false)}>
              <Linking to='#about-me' smooth>
                <span>01.</span> About
              </Linking>
            </li>

            <li onClick={() => setOpen(false)}>
              <Linking to='#experience' smooth>
                <span>02.</span> Experience
              </Linking>
            </li>

            <li onClick={() => setOpen(false)}>
              <Linking to='#projects' smooth>
                <span>03.</span> Work
              </Linking>
            </li>

            <li onClick={() => setOpen(false)}>
              <Linking to='#contact' smooth>
                <span>04.</span> Contact
              </Linking>
            </li>

          </ul>

          <button className='navbar__hamburger-menu--btn'>

            <Hamburger
              size={22}
              // color='#64ffda'
              toggled={isOpen}
              toggle={setOpen}
            />

          </button>

        </div>
      </div>

      <div className={isOpen ? 'background__black--active' : 'background__black'} />
    </>
  )
}

export default Navbar