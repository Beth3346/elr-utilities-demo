import React from 'react';
import './CornerLabel.scss';

const CornerLabel = ({ icon, position }) => {
  const classMap = {
    topRight: 'elr-label-corner-right',
    bottomLeft: 'elr-label-corner-bottom',
    bottomRight: 'elr-label-corner-bottom-right',
    topLeft: 'elr-label-corner-top'
  };

  const labelClass = position ? classMap[position] : 'elr-label-corner-top';

  return (
    <div className={`elr-label-corner ${labelClass}`}>
      <div className="elr-label-triangle" />
      <span className="elr-label-icon">{icon}</span>
    </div>
  );
};

export default CornerLabel;
