import React from 'react';
import MainMenu from './MainMenu';
import './NavigationMain.css';

const navigationMain = () => {
  return (
    <nav className="navigation-main">
      <div className="navigation-inner">
        <p className="logo">ELR Utilities</p>
        <MainMenu />
      </div>
    </nav>
  );
};

export default navigationMain;
