import React from 'react';
import './navbar.css';
import NavElement from './navbarElement/navElement';

function Navbar() {
  return (
    <div className="navbar">
      <NavElement variant="text" title="Logo" href="/"></NavElement>
      <div className="navbar-navigation">
        <div>
          <NavElement variant="outlined" title="NAVIGATION 1" href="login"></NavElement>
        </div>
        <div>
          <NavElement variant="outlined" title="NAVIGATION 2" href="#"></NavElement>
        </div>
        <div>
          <NavElement variant="outlined" title="NAVIGATION 3" href="#"></NavElement>
        </div>
      </div>
      <NavElement variant="outlined" title="LOGIN" href='login'></NavElement>
    </div>
  );
}

export default Navbar;
