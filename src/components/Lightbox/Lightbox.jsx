import React, { useState } from 'react';
import './Lightbox.scss';

const Lightbox = ({ images, hideLightbox, handleEscPress }) => {
  const [current, setCurrent] = useState(1);
  const len = images.length;

  const prev = () =>
    current === 1 ? setCurrent(len) : setCurrent(current - 1);

  const next = () =>
    current === len ? setCurrent(1) : setCurrent(current + 1);

  const handleKeyPress = event => {
    if (event.keyCode === 27) {
      handleEscPress(event);
    } else if (event.keyCode === 37) {
      prev();
    } else if (event.keyCode === 39) {
      next();
    }
  };

  return (
    <div tabIndex="0" onKeyDown={handleKeyPress} className="elr-lightbox">
      <button className="elr-lightbox-close" onClick={hideLightbox}>
        &times;
      </button>
      <button onClick={prev} className="elr-lightbox-nav-button">
        Prev
      </button>
      <div className="elr-lightbox-images">
        {images.map(image => (
          <div
            key={image.id}
            className={`elr-lightbox-image ${image.id === current && `active`}`}
          >
            <img src={image.src} alt="" />
            <p className="elr-lightbox-caption">{image.caption}</p>
          </div>
        ))}
      </div>
      <button onClick={next} className="elr-lightbox-nav-button">
        Next
      </button>
    </div>
  );
};

export default Lightbox;
