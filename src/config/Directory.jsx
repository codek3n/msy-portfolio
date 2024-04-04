import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Resume from '../pages/resume/Resume';
import PortfolioPDF from '../pages/resume/PortfolioPDF';

const Directory = () => {
  return (
    <Routes>
      <Route path='/' element={
        <Home />
      } />

      <Route path='/resume' element={
        <Resume />
      } />

      <Route path='/portfolio' element={
        <PortfolioPDF />
      } />
    </Routes>
  )
}

export default Directory