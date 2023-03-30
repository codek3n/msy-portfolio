import React from 'react';
import './hero.scss'
const Hero = () => {

  // window.scrollTo({ top: 0 })

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

        {/* <p className='hero__description'>
          I build websites that are prettier than a rainbow and more functional than a Swiss Army knife. Plus, I can make coffee disappear faster than you can say 'HTML.'"
        </p> */}

        <p className='hero__description'>
          Designing websites that are so pretty, they'll make your eyes water (or maybe that's just the result of staring at a computer screen for too long)
        </p>
        {/* 
        <btn className='hero__resume'>
          <p className='hero__resume__text'>
            Check out my resume!
          </p>
        </btn> */}

        <a href="">
          <button className='hero__btn'>
            Check out my resume!
          </button>
        </a>

      </div>

    </div>
  )
}

export default Hero