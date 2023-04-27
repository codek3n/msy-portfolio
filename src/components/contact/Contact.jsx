import React from 'react';
import './contact.scss';

const Contact = () => {
  return (
    <div className='contact' id='contact'>
      <div className='contact__container'>

        <h3 className='subheader'>
          <span> 04.</span> What's Next
        </h3>

        <h1 className='contact__header'>
          Get In Touch
        </h1>

        <p className='contact__content'>
          Hoping to find a frontend job that lets me turn my love for web development into a lifelong career and a legitimate excuse to buy more computer monitors.
        </p>


        <a href='mailto:msycodebiz@gmail.com' rel="noreferrer">
          <button className='contact__btn'>
            Say Hello
          </button>
        </a>


      </div>

    </div>
  )
}

export default Contact