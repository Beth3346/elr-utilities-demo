import React from 'react';
import './IconCard.css';

const IconCard = ({ children, title, buttonText }) => (
  <div className="card-border card-centered icon-card">
    <div className="elr-card-header">
      <div className="elr-header-content">
        <div className="icon-animated icon-border-pop">
          <i className="fa fa-gift" />
        </div>
        <h3>{title}</h3>
      </div>
    </div>
    <div className="elr-card-body">
      <div className="elr-card-content">{children}</div>
      <div className="elr-card-footer">
        <div className="elr-card-actions">
          <button className="elr-button elr-button-primary">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default IconCard;
