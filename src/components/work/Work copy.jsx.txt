import React, { useState } from 'react';
import caster1 from '../../assets/images/caster1.jpg';
import caster2 from '../../assets/images/caster2.jpg';
import { RxTriangleRight } from 'react-icons/rx';
// import { BsBoxArrowUpRight } from 'react-icons/bs';
// import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { FiGithub } from 'react-icons/fi';

import './work.scss';


const Work = () => {
  const [isHovering, setIsHovering] = useState(false)
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

        <div className='work__project project--1'>

          <div className='project__card'>

            <p className='project__featured--project'>
              Featured Project
            </p>

            <div className='project__header__container'>

              <h2 className='project__title'>
                Caster
              </h2>

              <div className='header__icon__container'>

                <a href="https://github.com/codek3n/caster-movie-trailer-app-2" target='_blank'>
                  <FiGithub className='header__icon' />
                </a>

                <a href="https://caster-movie-app.netlify.app/" target='_blank'>
                  <HiArrowTopRightOnSquare className='header__icon arrow__redirect' />
                </a>

              </div>

            </div>

            <br />

            <div className='project__image__container' onMouseMove={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>

              {/* {isHovering ?
                <img src={caster2} alt='movie app picture' className='project__image' />
                : <img src={caster1} alt='movie app picture' className='project__image' />} */}

              {isHovering ?
                <a href="https://caster-movie-app.netlify.app/" target='_blank'>
                  <img src={caster2} alt='movie app picture' className='project__image' />
                </a>
                : <a href="https://caster-movie-app.netlify.app/" target='_blank'>
                  <img src={caster1} alt='movie app picture' className='project__image' />
                </a>}

            </div>

            <div className='project__description__container'>
              <div>
                <RxTriangleRight className='bullet--icon' />
              </div>
              <p className='project__description'>
                Caster is a <span>movie app</span>  that is perfect place to discover new movies and watch their trailers.
                With a simple and easy-to-use interface,
                you can quickly browse through its <span>extensive collection of trailers</span>  and find the perfect movie to watch.
                You can search for specific movies, filter by genre or release date.
                Stay up-to-date with the latest movie news and never miss a trailer release again.
              </p>
            </div>


          </div>

        </div>

      </div>
    </div>
  )
}

export default Work