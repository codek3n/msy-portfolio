import React, { useEffect, useState } from 'react';
import { Slant as Hamburger } from 'hamburger-react'

import './navbar.scss';

import { HashLink as Link } from 'react-router-hash-link';

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

          <Link to='#home' smooth>
            <h1 onClick={() => setOpen(false)}>
              LOGO
            </h1>
          </Link>

          <ul className={isOpen ? 'navbar__menu is-open' : 'navbar__menu'}>

            <li onClick={() => setOpen(false)}>
              <Link to='#about-me' smooth>
                <span>01.</span> About
              </Link>
            </li>

            <li onClick={() => setOpen(false)}>
              <Link to='#experience' smooth>
                <span>02.</span> Experience
              </Link>
            </li>

            <li onClick={() => setOpen(false)}>
              <Link to='#projects' smooth>
                <span>03.</span> Work
              </Link>
            </li>

            <li onClick={() => setOpen(false)}>
              <Link to='#contact' smooth>
                <span>04.</span> Contact
              </Link>
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