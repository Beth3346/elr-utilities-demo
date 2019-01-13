import React from 'react';
import './ExampleSection.css';

const ExampleSection = ({ heading, subheading, children }) => (
  <div className="elr-container example-section">
    <div className="elr-row">
      <div className="elr-col-full example-headings">
        <h3 className="example-heading">{heading}</h3>
        <p>{subheading}</p>
      </div>
      <div className="elr-col-full example-holder">{children}</div>
    </div>
  </div>
);

export default ExampleSection;
