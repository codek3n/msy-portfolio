import React from 'react';
import Hero from '../../components/hero/Hero';
import AboutMe from '../../components/about-me/AboutMe';
import Experience from '../../components/experience/Experience';
import Work from '../../components/work/Work';
import Contact from '../../components/contact/Contact';

import Navbar from '../../components/navbar/Navbar';
import SideNav from '../../components/side-nav/SideNav';

import './home.scss';

const Home = () => {
  
  return (
    <div className='home'>
      <Navbar />
      <Hero />
      <AboutMe />
      <Experience />
      <Work />
      <Contact />
      <SideNav />
    </div>
  )
}

export default Home