import React from 'react';
import './PopOver.scss';

const PopOver = ({ show, direction, children }) => {
  return (
    <div
      aria-hidden={!show}
      className={`elr-popover elr-popover-${direction} ${show && 'active'}`}
    >
      <div className="elr-popover-inner">{children}</div>
    </div>
  );
};

export default PopOver;
