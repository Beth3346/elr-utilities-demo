import React from 'react';

const AccordionContent = ({ id, status, children }) => (
  <div
    data-testid={`accordion-content-${id}`}
    className={`elr-accordion-content ${status === 'show' && 'active'}`}
  >
    {children}
  </div>
);

export default AccordionContent;
