import React from 'react';
import Blackout from '@/components/Blackout/Blackout';
import './Alert.scss';

const Alert = ({ show, handleAlert, children, title, buttonText }) => (
  <Blackout toggle={display => handleAlert(display)} show={show}>
    <div className="elr-modal-alert" onClick={e => e.stopPropagation()}>
      <div className="elr-modal-header">
        <h3 className="elr-modal-header-title">{title}</h3>
      </div>
      <div className="elr-modal-body">{children}</div>
      <div className="elr-modal-footer single-action">
        <button
          onClick={() => handleAlert(false)}
          className="elr-button elr-button-danger"
        >
          {buttonText}
        </button>
      </div>
    </div>
  </Blackout>
);

export default Alert;
