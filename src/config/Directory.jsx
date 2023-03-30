import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Resume from '../pages/resume/Resume';

const Directory = () => {
  return (
    <Routes>
      <Route path='/' element={
        <Home />
      } />

      <Route path='/resume' element={
        <Resume />
      } />
    </Routes>
  )
}

export default Directory