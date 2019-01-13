import React from 'react';
import './ExampleSection.css';

const ExampleSection = props => (
  <div className="elr-container example-section">
    <div className="elr-row">
      <div className="elr-col-full example-headings">
        <h3 className="example-heading">{props.heading}</h3>
        <p>{props.subheading}</p>
      </div>
      <div className="elr-col-full example-holder">{props.children}</div>
    </div>
  </div>
);

export default ExampleSection;
