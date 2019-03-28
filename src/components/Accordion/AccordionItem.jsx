import React from 'react';
import AccordionLabel from './AccordionLabel';
import AccordionContent from './AccordionContent';
import PropTypes from 'prop-types';

const AccordionItem = ({ label, status, children, handleToggle, id }) => {
  return (
    <div className="accordion-item">
      <AccordionLabel
        label={label}
        status={status}
        handleToggle={handleToggle}
        id={id}
      />
      <AccordionContent status={status} id={id}>
        {children}
      </AccordionContent>
    </div>
  );
};

AccordionItem.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.oneOf(['show', 'hide']).isRequired,
  children: PropTypes.element.isRequired,
  handleToggle: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default AccordionItem;
