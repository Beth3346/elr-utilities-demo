import React from 'react';
import './PricingTable.scss';

const PricingTable = ({
  name,
  description,
  features,
  price,
  duration,
  buttonText,
  popular
}) => (
  <div
    className={`elr-pricing-package${
      popular ? ' elr-pricing-package-popular' : ''
    }`}
  >
    <div className="elr-pricing-package-header">
      <h3 className="elr-pricing-package-name">{name}</h3>
      <p className="elr-pricing-package-description">{description}</p>
    </div>
    <div className="elr-pricing-package-body">
      <ul className="elr-pricing-package-features">
        {/* safe to use index as key because this will never be dynamic */}
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="elr-pricing-package-details">
        <p>
          <span className="elr-pricing-package-price">{price}</span>
          <span className="elr-pricing-package-duration">{duration}</span>
        </p>
      </div>
    </div>
    <div className="elr-pricing-package-footer">
      <a className="elr-button elr-button-primary">{buttonText}</a>
    </div>
  </div>
);

export default PricingTable;
