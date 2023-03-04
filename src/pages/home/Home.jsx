import React from 'react';
import Hero from '../../components/hero/Hero';
import SideNav from '../../components/side-nav/SideNav';
import AboutMe from '../../components/about-me/AboutMe';
import Experience from '../../components/experience/Experience';
import Work from '../../components/work/Work';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <AboutMe />
      <Experience />
      <SideNav />
      <Work />
    </div>
  )
}

export default Home