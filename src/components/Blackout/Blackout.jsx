import React from 'react';
import './Blackout.scss';
import PropTypes from 'prop-types';

const Blackout = ({ children, show, handleToggle }) => {
  return (
    <div
      onClick={handleToggle}
      className={`elr-blackout ${show && 'active'}`}
      data-testid="blackout"
    >
      <button
        onClick={e => {
          e.stopPropagation();
          handleToggle();
        }}
        data-testid="blackout-close"
        className="elr-blackout-close"
      >
        &times;
      </button>
      {children}
    </div>
  );
};

Blackout.propTypes = {
  show: PropTypes.bool,
  handleToggle: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};

export default Blackout;
