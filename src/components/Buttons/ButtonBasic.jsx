import React from 'react';
import './ButtonBasic.scss';
import PropTypes from 'prop-types';

const ButtonBasic = ({ children, classes, handleClick }) => (
  <button onClick={handleClick} className={`elr-button ${classes}`}>
    {children}
  </button>
);

ButtonBasic.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  classes: PropTypes.string
};

export default ButtonBasic;
