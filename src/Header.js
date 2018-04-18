import React, { Component } from 'react';

class Header extends Component {
  render() {
    const style = {
      backgroundColor: '#333',
      padding: '40px 0',
      color: '#fff'
    };
    const titleStyle = {
      fontSize: '42px',
      fontWeight: '900',
      padding: '10px 0'
    };
    const introStyle = {
      fontSize: '18px',
      padding: '10px 0'
    };
    return (
      <header className="App-header" style={style}>
        <div className="header-inner">
          <h1 className="App-title" style={titleStyle}>
            {this.props.heading}
          </h1>
          <p className="App-intro" style={introStyle}>
            {this.props.children}
          </p>
        </div>
      </header>
    );
  }
}

export default Header;
