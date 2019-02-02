import React from 'react';
import Blackout from '@/components/Blackout/Blackout';
import './Alert.scss';

const Alert = ({ show, handleAlert }) => (
  <Blackout toggle={display => handleAlert(display)} show={show}>
    <div className="elr-modal-alert">
      <div className="elr-modal-header">
        <h3 className="elr-modal-header-title">An Alert</h3>
      </div>
      <div className="elr-modal-body">
        <p>Something Happened</p>
      </div>
      <div className="elr-modal-footer single-action">
        <button
          onClick={() => handleAlert(false)}
          className="elr-button elr-button-danger"
        >
          Close Alert
        </button>
      </div>
    </div>
  </Blackout>
);

export default Alert;
