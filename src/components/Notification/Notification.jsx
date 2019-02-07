import React, { Component } from 'react';
import './Notification.scss';

class Notification extends Component {
  state = {
    show: true
  };

  handleClick = () => this.setState(() => ({ show: false }));

  render() {
    const { type, heading, children } = this.props;

    return (
      <div
        className={`elr-notification elr-notification-${type} ${!this.state
          .show && 'hidden'}`}
      >
        <button onClick={this.handleClick} className="close">
          x
        </button>
        <h2>{heading}</h2>
        {children}
      </div>
    );
  }
}

export default Notification;
