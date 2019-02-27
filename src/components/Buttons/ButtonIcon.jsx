import React from 'react';
import ButtonBasic from './ButtonBasic';

const ButtonIcon = ({ children, icon, classes }) => (
  <ButtonBasic classes="elr-button-icon">
    <div class="icon">{icon}</div>
    {children}
  </ButtonBasic>
);

export default ButtonIcon;
