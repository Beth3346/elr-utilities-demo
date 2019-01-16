import React from 'react';
import './IconAnimated.scss';

const IconAnimated = props => (
  <div className={`icon-animated ${props.type}`}>{props.children}</div>
);

export default IconAnimated;
