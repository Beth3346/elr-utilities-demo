import React, { useState } from 'react';
import './Lightbox.scss';

const Lightbox = ({ images }) => {
  // // Declare a new state variable, which we'll call "count"
  const [current, setCurrent] = useState(1);
  const len = images.length;

  const prev = () =>
    current === 1 ? setCurrent(len) : setCurrent(current - 1);

  const next = () =>
    current === len ? setCurrent(1) : setCurrent(current + 1);

  return (
    <div className="elr-lightbox">
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
