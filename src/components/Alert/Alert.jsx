import React from 'react';
import Blackout from '@/components/Blackout/Blackout';
import './Alert.scss';
import PropTypes from 'prop-types';

const Alert = ({
  show,
  handleAlert,
  children,
  title,
  buttonText,
  closeAlert
}) => {
  return (
    <Blackout handleToggle={() => closeAlert(false)} show={show}>
      <div className="elr-modal-alert" onClick={e => e.stopPropagation()}>
        <div className="elr-modal-header">
          <h3 className="elr-modal-header-title">{title}</h3>
        </div>
        <div className="elr-modal-body">{children}</div>
        <div className="elr-modal-footer single-action">
          <button
            onClick={e => {
              e.stopPropagation();
              handleAlert(false);
            }}
            className="elr-button elr-button-danger"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </Blackout>
  );
};

Alert.propTypes = {
  show: PropTypes.bool,
  handleAlert: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  closeAlert: PropTypes.func.isRequired
};

export default Alert;
