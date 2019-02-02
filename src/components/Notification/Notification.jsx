import React, { Component } from 'react';

class Notification extends Component {
  state = {
    show: false
  };

  render() {
    return (
      <div className="elr-notification">
        <p className="elr-notification-message">Something</p>
      </div>
    );
  }
}

export default Notification;
