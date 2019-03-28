import React, { useState } from 'react';
import './Accordion.scss';
import AccordionItem from './AccordionItem';
import PropTypes from 'prop-types';

const Accordion = ({ items, initialCurrent }) => {
  const [current, setCurrent] = useState(initialCurrent);

  const handleToggle = itemIndex => {
    const newCurrent = itemIndex === current ? 0 : itemIndex;
    setCurrent(newCurrent);
  };

  return (
    <div className="elr-accordion">
      {items.map(({ id, label, content }) => (
        <AccordionItem
          handleToggle={handleToggle}
          id={id}
          label={label}
          status={current === id ? 'show' : 'hide'}
          key={id}
        >
          {content}
        </AccordionItem>
      ))}
    </div>
  );
};

Accordion.defaultProps = {
  items: [],
  initialCurrent: 1
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  initialCurrent: PropTypes.number
};

export default Accordion;
