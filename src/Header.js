import React from 'react';
import './App.css';

const header = ({ heading, children }) => {
  return (
    <header className="App-header">
      <h1 className="App-title">{heading}</h1>
      <p className="App-intro">{children}</p>
    </header>
  );
};

export default header;
