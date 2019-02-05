import React from 'react';
import './ToolTip.scss';

const ToolTip = ({ show, children, direction }) => {
  return (
    <div className={`elr-tooltip elr-tooltip-${direction} ${show && 'active'}`}>
      <div className="elr-tooltip-inner">{children}</div>
    </div>
  );
};

export default ToolTip;
