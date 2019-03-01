import React from 'react';
import './ButtonBasic.scss';

const ButtonBasic = ({ children, classes }) => (
  <button className={`elr-button ${classes}`}>{children}</button>
);

export default ButtonBasic;