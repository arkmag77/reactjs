import React from 'react';



import {
    Link
  } from "react-router-dom";

import './Navbar.css';


function Navbar() {
    return (
      <div className="Navbar">
        <ul className='TheList'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/signin">Sign in</Link></li>
        </ul>
      </div>
    );
}

export default Navbar;
  