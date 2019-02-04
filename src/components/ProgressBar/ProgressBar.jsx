import React from 'react';
import './ProgressBar.scss';

const ProgressBar = ({ progress }) => {
  return (
    <div className="elr-progress-bar">
      <div
        className="elr-progress-bar-inner"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
