import React from 'react';
import '../ContentCard/ContentCard.scss';

const IconCard = ({ children, title, buttonText, icon }) => (
  <div className="elr-card-border elr-card-centered elr-icon-card">
    <div className="elr-card-header">
      <div className="elr-header-content">
        {icon}
        <h3 className="elr-card-title">{title}</h3>
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
