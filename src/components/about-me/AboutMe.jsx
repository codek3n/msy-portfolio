import React, { useState } from 'react';
import './about-me.scss';
import myPicture from '../../assets/images/picture2.png';
import myPictureOverLay from '../../assets/images/picture1.png';
import { RxTriangleRight } from 'react-icons/rx';


const AboutMe = () => {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <div className='about-me' id='about-me'>
      <div className='about-me__container'>
        <div className='about-me__header__container'>

          <h1 className='about-me__header'>
            <span className='header--number'>01.</span> About Me
          </h1>

          <div className='header--line'></div>

        </div>

        <br />
        <br />

        <div className='about-me__content__container'>
          <div className='about-me__left'>

            <p>
              Hello, I'm Melquesdec, or simply Sedic. As a <span> graphic artist</span>, I specialize in crafting <span>captivating</span> visual experiences that leave a lasting impression.
            </p>

            <br />

            <p>
              With a <span>keen eye</span> for design and a passion for creativity, I thrive on turning ideas into stunning artworks. From concept to completion, I infuse each project with innovation and flair, ensuring it stands out in a crowded digital landscape.
            </p>

            <br />
            <p>
              I'm constantly seeking inspiration and pushing the boundaries of my craft. Whether it's designing logos, illustrations, web designs or branding materials, I'm committed to delivering excellence in every pixel.
            </p>

            <br />


            <p>
              If you're looking for a dedicated graphic artist who can bring your <span>vision</span> to life with <span>style</span> and <span>finesse</span>, let's collaborate and create something extraordinary together.
            </p>

            <br />

            <p>
              Here are a few tools and technologies I’ve been working with:
            </p>

            <br />

            <div className='about-me__tech-list'>
              <ul className='tech-list--left'>


                <li className='tech-list__bullet'>
                  <RxTriangleRight className='bullet--icon' /> Figma
                </li>

                <li className='tech-list__bullet'>
                  <RxTriangleRight className='bullet--icon' /> Adobe XD
                </li>

                <li className='tech-list__bullet'>
                  <RxTriangleRight className='bullet--icon' /> Adobe Photoshop
                </li>


                <li className='tech-list__bullet'>
                  <RxTriangleRight className='bullet--icon' /> Adobe Illustrator
                </li>

                <li className='tech-list__bullet'>
                  <RxTriangleRight className='bullet--icon' /> AutoCAD
                </li>

              </ul>

              <ul>

                <li className='tech-list__bullet'>
                  <RxTriangleRight className='bullet--icon' /> HTML5
                </li>

                <li className='tech-list__bullet'>
                  <RxTriangleRight className='bullet--icon' /> CSS
                </li>

                <li className='tech-list__bullet'>
                  <RxTriangleRight className='bullet--icon' /> JavaScript (ES6+)
                </li>

                <li className='tech-list__bullet'>
                  <RxTriangleRight className='bullet--icon' /> React.JS
                </li>

              </ul>
            </div>



          </div>

          <div className='about-me__picture__container' onMouseMove={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
            {isHovering ?
              <img src={myPicture} className='my-picture' alt='picture' />
              : <img src={myPictureOverLay} className='my-picture' alt='picture' />}
            {/* <div className='my-picture__frame'></div> */}
          </div>
        </div>


      </div>

    </div>
  )
}

export default AboutMe