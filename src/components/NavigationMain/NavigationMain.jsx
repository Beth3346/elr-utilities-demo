import React from 'react';
import MainMenu from '@/components/MainMenu/MainMenu';
import './NavigationMain.css';

const NavigationMain = () => (
  <nav className="navigation-main">
    <div className="navigation-inner">
      <p className="logo">ELR Utilities</p>
      <MainMenu />
    </div>
  </nav>
);

export default NavigationMain;
