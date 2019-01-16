import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainMenu.scss';

const MainMenu = () => (
  <ul className="main-menu">
    <li>
      <NavLink to="/">Home</NavLink>
    </li>
    <li>
      <NavLink to="/css">CSS</NavLink>
    </li>
    <li>
      <NavLink to="/sass">Sass</NavLink>
    </li>
    <li>
      <NavLink to="/about">About</NavLink>
    </li>
    <li>
      <NavLink to="/contact">Contact Me</NavLink>
    </li>
    <li>
      <a href="https://github.com/Beth3346">GitHub</a>
    </li>
  </ul>
);

export default MainMenu;
