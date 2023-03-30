import React from 'react';
// import resumeFile from '../../assets/PDF/MSY_RESUME.pdf;
import msyResume from '../../assets/PDF/msyResume.pdf'

import './resume.scss';


const Resume = () => {
  return (
    <div className='resume__container'>
      <iframe src={msyResume} frameborder="0"
        //  id='myPDF' style={{width: '100%', height: '110'}}></iframe>
        id='myPDF'></iframe>
    </div>
  )
}

export default Resume