import React from 'react';
import './ImageThumbnail.scss';

const ImageThumbnail = ({ image, shape, alt }) => {
  const classes =
    shape && (shape === 'rounded' || shape === 'round')
      ? `elr-thumbnail elr-${shape}-thumbnail`
      : 'elr-thumbnail';

  return (
    <figure className={classes}>
      <img src={image} alt={alt} />
    </figure>
  );
};

export default ImageThumbnail;
