import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-logo">LOGO</div>
      <div className="navbar-navigation">
        <div>
          <a href="localhost:3000" className="nav-el">
            NAVIGATION 1
          </a>
        </div>
        <div>
          <a href="localhost:3000" className="nav-el">
            NAVIGATION 2
          </a>
        </div>
        <div>
          <a href="localhost:3000" className="nav-el">
            NAVIGATION 3
          </a>
        </div>
      </div>
      <div className="navbar-userMng">LOGIN AND STUFF</div>
    </div>
  );
}

export default Navbar;
