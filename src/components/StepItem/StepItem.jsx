import React from 'react';
import './StepItem.scss';

const StepItem = ({ title, status }) => {
  const classes = `elr-step-item elr-step-item-${status}`;
  let icon;

  if (status === 'complete') {
    icon = 'fa-check-circle';
  } else {
    icon = 'fa-clipboard';
  }

  return (
    <li className={classes}>
      <i className={`elr-step-icon fa ${icon}`} />
      <span>{title}</span>
    </li>
  );
};

export default StepItem;
