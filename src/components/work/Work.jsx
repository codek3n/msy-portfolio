import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './work.scss';

import Project1 from './project-1/Project1';
import Project2 from './project-1/Project2';


const Work = () => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className='work' id='projects'>
      <div className='work__container'>
        <div className='work__header__container'>

          <h1 className='work__header'>
            <span className='header--number'>03.</span> Some Things I've Built
          </h1>

          <div className='header--line'></div>

        </div>

      </div>

      <br />
      <br />

      <div className='work__projects__container'>

        <Project1 isHovering={isHovering} setIsHovering={setIsHovering} />

        <br />
        <br />

        <Project2 isHovering={isHovering} setIsHovering={setIsHovering} />

      </div>

      {/* ADDED BUTTON FOR PORTFOLIO PDF */}

      <div className='btn_container'>
        <button className='work__btn'>
          <Link to='/portfolio' target='_blank' className='portfolio__link'>
            {/* <Link to='/resume' target='_blank'> */}
            See more!
          </Link>
        </button>
      </div>



    </div>
  )
}

export default Work