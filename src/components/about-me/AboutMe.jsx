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
              Well, hello there! My name is Melquesdec you can call me Sedic and I'm a <span>frontend developer</span>  who used to be a <span>graphic artist. </span>
              I like to think of myself as a "designosaur" who evolved into a "webosaurus".
            </p>

            <br />

            <p>
              After a year of building websites, I've become an expert in creating websites that not only <span>look great</span>  but also <span>function flawlessly. </span>
              {/* It's like being a ninja, but with code. */}
            </p>

            <br />
            <p>
              As a former graphic artist, I've always had a passion for <span>creativity</span>  and <span>design.</span>  And now, as a developer,
              I get to combine that passion with my love of <span>problem-solving. </span>
              It's like the perfect combination of brains and beauty.
            </p>

            <br />

            {/* <p>
              When I'm not busy coding, I'm strumming my guitar like nobody's business.
              My favorite genres include rock, blues, and anything that gets my feet tapping.
              And if I'm not playing music, you can find me exploring the virtual worlds or catching up on my favorite gaming streamers
              (I swear, it's for research purposes). I have a passion for adventure and strategy games,
              and nothing beats the rush of a hard-earned victory.
            </p> */}

            {/* <br /> */}

            <p>
              I'm always on the hunt for new challenges and opportunities to level up my skills.
              So, if you're looking for a developer who's as <span>enthusiastic</span>  about your project as you are,
              let's make some web magic happen!
            </p>

            <br />

            <p>
              Here are a few tools and technologies I’ve been working with:
            </p>

            <br />

            <div className='about-me__tech-list'>
              <ul className='tech-list--left'>

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

              <ul>

                <li className='tech-list__bullet'>
                  <RxTriangleRight className='bullet--icon' /> AutoCAD
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