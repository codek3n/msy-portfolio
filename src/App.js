import React from 'react';
import Navbar from './components/navbar/Navbar';
import Directory from './config/Directory';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Directory />
      </div>
    </BrowserRouter>
  )
}

export default App