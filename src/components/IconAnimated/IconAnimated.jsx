import React from 'react';
import './IconAnimated.css';

const IconAnimated = props => (
  <div className={`icon-animated ${props.type}`}>{props.children}</div>
);

export default IconAnimated;
