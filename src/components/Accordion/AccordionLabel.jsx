import React from 'react';

const AccordionLabel = ({ label, handleToggle, id, status }) => (
  <h2
    data-testid={`accordion-label-${id}`}
    onClick={() => handleToggle(id)}
    className={`elr-accordion-label ${status === 'show' && 'active'}`}
  >
    <i className="elr-accordion-icon fa fa-angle-down" />
    {label}
  </h2>
);

export default AccordionLabel;
