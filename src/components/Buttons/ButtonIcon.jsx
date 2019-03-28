import React from 'react';
import ButtonBasic from './ButtonBasic';

const ButtonIcon = ({ children, icon, classes }) => (
  <ButtonBasic classes={`button-icon ${classes}`}>
    <div className="icon">{icon}</div>
    {children}
  </ButtonBasic>
);

export default ButtonIcon;
