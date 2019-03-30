import React from 'react';
import './ButtonBasic.scss';
import PropTypes from 'prop-types';

const ButtonBasic = ({ children, classes, handleClick, icon }) => (
  <button onClick={handleClick} className={`elr-button ${classes}`}>
    {icon && <div className="icon">{icon}</div>}
    {children}
  </button>
);

ButtonBasic.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  classes: PropTypes.string,
  icon: PropTypes.element
};

export default ButtonBasic;
