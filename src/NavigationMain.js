import React from 'react';
// import './App.css';
import './NavigationMain.css';

const navigationMain = () => {
  return (
    <nav className="navigation-main">
      <p className="logo">ELR Utilities</p>
      <ul className="main-menu">
        <li>
          <a href="">CSS</a>
        </li>
        <li>
          <a href="">Sass</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Contact Me</a>
        </li>
        <li>
          <a href="">GitHub</a>
        </li>
      </ul>
    </nav>
  );
};

export default navigationMain;
