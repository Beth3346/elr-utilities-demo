import React, { Component } from 'react';
import './Flipper.css';

class Flipper extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    this.setState(({ isClicked }) => ({
      isClicked: isClicked ? false : true
    }));
  };

  render() {
    const classes = this.state.isClicked
      ? `flipper-container active flipper-${this.props.shape}-container`
      : `flipper-container flipper-${this.props.shape}-container`;

    return (
      <div className="flipper">
        <div
          onClick={this.handleClick}
          className={classes}
          role="button"
          aria-pressed={this.state.isClicked}
        >
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
