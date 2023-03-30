import React from 'react';
// import resumeFile from '../../assets/PDF/MSY_RESUME.pdf;
import msyResume from '../../assets/PDF/msyResume.pdf'

import './resume.scss';


const Resume = () => {

  // window.onload = function () {
  //   var iframe = document.getElementById("myPDF");
  //   iframe.width = iframe.contentWindow.document.body.scrollWidth;
  //   iframe.height = iframe.contentWindow.document.body.scrollHeight;
  // }

  return (
    <div className='resume__container'>
      <iframe src={msyResume} frameborder="0" id='myPDF' allow='true'>
      </iframe>
    </div>
  )
}

export default Resume