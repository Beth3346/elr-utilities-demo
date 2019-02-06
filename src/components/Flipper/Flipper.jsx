import React, { Component } from 'react';
import './Flipper.scss';

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
      ? `elr-flipper-container active elr-flipper-${this.props.shape}-container`
      : `elr-flipper-container elr-flipper-${this.props.shape}-container`;

    return (
      <div className="elr-flipper">
        <div
          onClick={this.handleClick}
          className={classes}
          role="button"
          aria-pressed={this.state.isClicked}
        >
          <div
            className={`elr-flipper-front elr-flipper-${
              this.props.shape
            }-front`}
          >
            <p>{this.props.front}</p>
          </div>
          <div
            className={`elr-flipper-back elr-flipper-${this.props.shape}-back`}
          >
            <p>{this.props.children}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Flipper;
