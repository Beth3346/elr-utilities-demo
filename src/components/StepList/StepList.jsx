import React from 'react';
import './StepList.scss';
import StepItem from '../StepItem/StepItem';

const StepList = ({ steps }) => (
  <nav className="elr-step-list">
    <ul className="elr-step-item-list">
      {steps.map(step => (
        <StepItem key={step.id} title={step.title} status={step.status} />
      ))}
    </ul>
  </nav>
);

export default StepList;
