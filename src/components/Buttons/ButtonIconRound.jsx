import React from 'react';
import ButtonBasic from './ButtonBasic';

const ButtonIconRound = ({ children, icon, classes }) => (
  <ButtonBasic classes={`elr-button-icon-round ${classes}`}>
    <div className="icon">{icon}</div>
    {children}
  </ButtonBasic>
);

export default ButtonIconRound;
