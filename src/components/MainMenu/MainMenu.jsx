import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainMenu.css';

const MainMenu = () => (
  <ul className="main-menu">
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/css">CSS</NavLink>
    </li>
    <li>
      <a href="/">Sass</a>
    </li>
    <li>
      <a href="/">About</a>
    </li>
    <li>
      <a href="/">Contact Me</a>
    </li>
    <li>
      <a href="https://github.com/Beth3346">GitHub</a>
    </li>
  </ul>
);

export default MainMenu;
