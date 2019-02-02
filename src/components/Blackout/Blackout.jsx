import React from 'react';
import './Blackout.scss';

const Blackout = ({ children, show, toggle }) => {
  return (
    <div className={`elr-blackout ${show && 'active'}`}>
      <button onClick={() => toggle(false)} className="elr-blackout-close">
        &times;
      </button>
      {children}
    </div>
  );
};

export default Blackout;
