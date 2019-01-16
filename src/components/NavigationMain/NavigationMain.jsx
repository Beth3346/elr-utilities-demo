import React from 'react';
import { Link } from 'react-router-dom';
import MainMenu from '@/components/MainMenu/MainMenu';
import './NavigationMain.scss';

const NavigationMain = () => (
  <nav className="navigation-main">
    <div className="navigation-inner">
      <p className="logo">
        <Link to="/">ELR Utilities</Link>
      </p>
      <MainMenu />
    </div>
  </nav>
);

export default NavigationMain;
