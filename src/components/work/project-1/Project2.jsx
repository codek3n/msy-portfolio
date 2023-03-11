import React, { useState } from 'react';

import zcShoppy1 from '../../../assets/images/zc-shoppy1.png';
import zcShoppy2 from '../../../assets/images/zc-shoppy2.png';
import { RxTriangleRight } from 'react-icons/rx';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { FiGithub } from 'react-icons/fi';

const Project2 = () => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className='work__project project--2'>

      <div className='project__card card--2'>

        <p className='project__featured--project'>
          Featured Project
        </p>

        <div className='project__header__container'>

          <h2 className='project__title'>
            ZC-Shoppy
          </h2>

          <div className='header__icon__container'>

            <a href="https://github.com/codek3n/zc-shoppy" target='_blank'>
              <FiGithub className='header__icon' />
            </a>

            <a href="https://zc-shoppy.netlify.app/" target='_blank'>
              <HiArrowTopRightOnSquare className='header__icon arrow__redirect' />
            </a>

          </div>

        </div>

        <br />

        <div className='project__container project__container--2'>

          <div className='project__image__container project__image--2' onMouseMove={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>

            {isHovering ?
              <a href="https://zc-shoppy.netlify.app/" target='_blank'>
                <img src={zcShoppy2} alt='movie app picture' className='project__image' />
              </a>
              : <a href="https://zc-shoppy.netlify.app/" target='_blank'>
                <img src={zcShoppy1} alt='movie app picture' className='project__image' />
              </a>}

          </div>

          <div className='project__description__container'>
            <div>
              <RxTriangleRight className='bullet--icon' />
            </div>
            <p className='project__description'>
              My first frontend project was a responsive <span>online shopping web app</span>  for a small business.
              Although the app didn't have payment integration, it was designed to showcase the business's products
              and to provide customers with an easy way to browse and contact the business.
              Through this project, I developed my skills in frontend development,
              including designing a user-friendly and visually appealing app that meets the needs of both the business and its customers.
            </p>
          </div>

        </div>




      </div>

    </div>
  )
}

export default Project2