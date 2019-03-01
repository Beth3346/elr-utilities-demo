import React from 'react';
import './Modal.scss';

const Modal = ({ show, handleClose, handleAccept, handleCancel }) => {
  return (
    <div className={`elr-modal ${show && 'active'}`}>
      <div className="elr-modal-header">
        <button onClick={handleClose} className="elr-modal-close">
          &times;
        </button>
        <div className="elr-modal-headings">
          <h2 className="elr-modal-heading-main">Terms of Service</h2>
          <h3 className="elr-modal-heading-sub">Please read this</h3>
        </div>
      </div>
      <div className="elr-modal-body">
        <div className="elr-modal-content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            tenetur cumque veritatis reprehenderit odit nobis natus dolores
            ullam repellendus, unde vero maiores, molestiae fuga quaerat vel,
            provident nostrum assumenda voluptates.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quod quasi molestias id beatae deserunt consectetur possimus ex
            perferendis fugiat!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            tenetur cumque veritatis reprehenderit odit nobis natus dolores
            ullam repellendus, unde vero maiores, molestiae fuga quaerat vel,
            provident nostrum assumenda voluptates.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quod quasi molestias id beatae deserunt consectetur possimus ex
            perferendis fugiat!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            tenetur cumque veritatis reprehenderit odit nobis natus dolores
            ullam repellendus, unde vero maiores, molestiae fuga quaerat vel,
            provident nostrum assumenda voluptates.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quod quasi molestias id beatae deserunt consectetur possimus ex
            perferendis fugiat!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum
            tenetur cumque veritatis reprehenderit odit nobis natus dolores
            ullam repellendus, unde vero maiores, molestiae fuga quaerat vel,
            provident nostrum assumenda voluptates.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            quod quasi molestias id beatae deserunt consectetur possimus ex
            perferendis fugiat!
          </p>
        </div>
      </div>
      <div className="elr-modal-footer">
        <button
          className="elr-button elr-button-primary"
          onClick={handleAccept}
        >
          Accept
        </button>
        <button className="elr-button elr-button-danger" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Modal;
