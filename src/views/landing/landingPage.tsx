import React from 'react';
import logo from '../../logo.svg';
import './landingPage.css';

function LandingPage() {
  return (
    <header className="landing-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default LandingPage;
