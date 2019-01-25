import React from 'react';
import './RibbonLabel.scss';

const RibbonLabel = ({ title }) => (
  <div className="elr-label-ribbon">
    <span className="elr-label-ribbon-title">{title}</span>
  </div>
);

export default RibbonLabel;
