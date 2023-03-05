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
          Although I'm not currently looking for any new opportunities,
          my inbox is always open. Whether you have a question
          or just want to say hi, I'll try my best to get back to you!
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