import React, { useEffect, useState } from 'react';

import './navbar.scss';

import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  const [navbarClass, setNavbarClass] = useState('navbar')

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


  return (
    <div className={navbarClass}>
      <div className='navbar__container'>

        <Link to='#home' smooth>
          <h1>
            LOGO
          </h1>
        </Link>


        <ul>

          <li>
            <Link to='#about-me' smooth>
              <span>01.</span> About
            </Link>
          </li>

          <li>
            <Link to='#experience' smooth>
              <span>02.</span> Experience
            </Link>
          </li>

          <li>
            <Link to='#projects' smooth>
              <span>03.</span> Work
            </Link>
          </li>

          <li>
            <Link to='#contact' smooth>
              <span>04.</span> Contact
            </Link>
          </li>

        </ul>

      </div>
    </div>
  )
}

export default Navbar