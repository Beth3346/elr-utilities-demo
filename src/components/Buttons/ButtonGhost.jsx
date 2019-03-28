import React from 'react';

const ButtonGhost = ({ children, classes }) => (
  <button className={`button-ghost ${classes}`}>{children}</button>
);

export default ButtonGhost;
