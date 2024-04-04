import React from 'react';
// import resumeFile from '../../assets/PDF/MSY_RESUME.pdf;
import portfolio from '../../assets/PDF/portfolio.pdf'

import './resume.scss';


const Resume = () => {

  // window.onload = function () {
  //   var iframe = document.getElementById("myPDF");
  //   iframe.width = iframe.contentWindow.document.body.scrollWidth;
  //   iframe.height = iframe.contentWindow.document.body.scrollHeight;
  // }

  return (
    <div className='resume__container'>
      <iframe src={portfolio} frameborder="0" id='myPDF' allow='true'>
      </iframe>
    </div>
  )
}

export default Resume