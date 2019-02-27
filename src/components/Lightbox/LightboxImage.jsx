import React from 'react';

const LightboxImage = ({ image }) => {
  const truncate = (str, maxLen = 200) =>
    str.length > maxLen ? `${str.substring(0, maxLen)}...` : str;
  return (
    <div className="elr-lightbox-image">
      <img src={image.src} alt="" />
      <h3 className="elr-lightbox-image-title">{image.title}</h3>
      <p className="elr-lightbox-image-caption">{truncate(image.caption)}</p>
    </div>
  );
};

export default LightboxImage;
