import React, { Component } from 'react';
import './Flipper.css';

class Flipper extends Component {
  state = {
    isClicked: true,
    classes: `flipper-container flipper-${this.props.shape}-container`
  };

  handleClick = () => {
    this.setState(({ isClicked }) => ({
      isClicked: !isClicked,
      classes: isClicked
        ? `flipper-container active flipper-${this.props.shape}-container`
        : `flipper-container flipper-${this.props.shape}-container`
    }));
  };

  render() {
    return (
      <div className="flipper">
        <div onClick={this.handleClick} className={this.state.classes}>
          <div className={`flipper-front flipper-${this.props.shape}-front`}>
            <p>{this.props.front}</p>
          </div>
          <div className={`flipper-back flipper-${this.props.shape}-back`}>
            <p>{this.props.children}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Flipper;
