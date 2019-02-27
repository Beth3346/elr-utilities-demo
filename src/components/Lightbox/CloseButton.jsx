import React from 'react';

const CloseButton = ({ handleClick }) => (
  <button className="elr-lightbox-close" onClick={handleClick}>
    &times;
  </button>
);

export default CloseButton;
