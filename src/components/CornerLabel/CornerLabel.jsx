import React from 'react';
import './CornerLabel.scss';

const CornerLabel = ({ icon, position }) => {
  let labelClass;

  if (position === 'topRight') {
    labelClass = 'elr-label-corner elr-label-corner-right';
  } else if (position === 'bottomLeft') {
    labelClass = 'elr-label-corner elr-label-corner-bottom';
  } else if (position === 'bottomRight') {
    labelClass = 'elr-label-corner elr-label-corner-bottom-right';
  } else {
    labelClass = 'elr-label-corner elr-label-corner-top';
  }

  return (
    <div className={labelClass}>
      <div className="elr-label-triangle" />
      <span className="elr-label-icon">{icon}</span>
    </div>
  );
};

export default CornerLabel;
