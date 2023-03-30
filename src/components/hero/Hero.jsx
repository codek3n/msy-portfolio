import React from 'react';
import { Link } from 'react-router-dom';
import './hero.scss';


const Hero = () => {


  return (
    <div className='hero' id='home'>
      <div className='hero__container'>

        <h4>
          Hi, my name is
        </h4>

        <h1>
          Melquesedec Yabut.
        </h1>

        <h2>
          I develop digital experiences.
        </h2>

        <p className='hero__description'>
          Designing websites that are so pretty, they'll make your eyes water (or maybe that's just the result of staring at a computer screen for too long)
        </p>


        <button className='hero__btn'>
          <Link to='/resume' target='_blank' className='resume__link'>
            {/* <Link to='/resume' target='_blank'> */}
            Check out my resume!
          </Link>
        </button>

      </div>

    </div>
  )
}

export default Hero