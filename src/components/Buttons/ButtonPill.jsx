import React from 'react';

const ButtonPill = ({ children, classes }) => (
  <button className={`button-pill ${classes}`}>{children}</button>
);

export default ButtonPill;
