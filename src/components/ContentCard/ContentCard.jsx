import React from 'react';
import './ContentCard.scss';

const ContentCard = ({
  children,
  title,
  subtitle,
  buttonText,
  classes,
  icon,
  image,
  thumbnail
}) => (
  <div className={classes}>
    <div className="elr-card-header">
      <div className="elr-header-content">
        {thumbnail && (
          <figure className="elr-card-thumbnail">
            <img src={thumbnail} alt="" />
          </figure>
        )}
        {image && (
          <figure className="elr-card-full-image">
            <img src={image} alt="" />
          </figure>
        )}
        {icon}
        <div className="elr-card-headings">
          <h2 className="elr-card-title">{title}</h2>
          {subtitle && <h3 className="elr-card-subtitle">{subtitle}</h3>}
        </div>
      </div>
    </div>
    <div className="elr-card-body">
      <div className="elr-card-content">{children}</div>
    </div>
    <div className="elr-card-footer">
      <div className="elr-card-actions">
        <a className="elr-button elr-button-primary">{buttonText}</a>
      </div>
    </div>
  </div>
);

export default ContentCard;
