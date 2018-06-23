import React from 'react';
import './Header.css';

const Header = props => {
  return (
    <header className="App-header">
      <div className="header-inner">
        <h1 className="App-title">{props.heading}</h1>
        <p className="App-intro">{props.children}</p>
      </div>
    </header>
  );
};

export default Header;
