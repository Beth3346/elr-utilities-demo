import React from 'react';
import ButtonBasic from './ButtonBasic';

const ButtonIcon = ({ children, icon, classes, handleClick }) => (
  <ButtonBasic handleClick={handleClick} classes={`button-icon ${classes}`}>
    <div className="icon">{icon}</div>
    {children}
  </ButtonBasic>
);

export default ButtonIcon;
