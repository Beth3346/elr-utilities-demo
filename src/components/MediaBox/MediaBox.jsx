import React from 'react';
import './MediaBox.scss';

const MediaBox = ({ buttonText, heading, image, children }) => {
  return (
    <div className="elr-media-box">
      <figure className="elr-media-image">
        <img src={image} alt="" />
      </figure>
      <div className="elr-media-content">
        <div className="elr-media-heading">
          <h2>{heading}</h2>
        </div>
        <div className="elr-media-body">{children}</div>
        <div className="elr-media-footer">
          <a href="#" className="elr-media-button">
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MediaBox;
