import React from 'react'
import Home from './Home';
import Navbar from './Navbar';
import ScrollToTop from "react-scroll-to-top";
import B from './1';
import P from './3';
import L from './4';
import J from './2';

function Front() {
  return (
    <div className='blur'>
      <Navbar />
      <Home /><br /><br /><br /><br /><br /><br />
      <B /><br /><br /><br /><br /><br /><br />
      <J /><br /><br /><br /><br /><br />
      <P /><br /><br /><br /><br /><br />
      <L /><br /><br />
      <ScrollToTop smooth />
    </div>
  )
}

export default Front
