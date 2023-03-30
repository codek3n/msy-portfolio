import React, { useEffect } from 'react';
// import Navbar from './components/navbar/Navbar';
// import SideNav from './components/side-nav/SideNav';
import Directory from './config/Directory';
import { BrowserRouter } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <div className='app'>
        {/* <Navbar /> */}
        <Directory />
        {/* <SideNav /> */}
      </div>
    </BrowserRouter>
  )
}

export default App