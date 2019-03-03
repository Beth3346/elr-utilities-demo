import React from 'react';

const AccordionItem = ({ label, status, children, handleToggle, index }) => {
  return (
    <div className="accordion-item">
      <h2
        data-testid={`accordion-label-${index}`}
        onClick={() => handleToggle(index)}
        className={`elr-accordion-label ${status === 'show' && 'active'}`}
      >
        <i className="elr-accordion-icon fa fa-angle-down" />
        {label}
      </h2>
      <div
        data-testid={`accordion-content-${index}`}
        className={`elr-accordion-content ${status === 'show' && 'active'}`}
      >
        {children}
      </div>
    </div>
  );
};

export default AccordionItem;
