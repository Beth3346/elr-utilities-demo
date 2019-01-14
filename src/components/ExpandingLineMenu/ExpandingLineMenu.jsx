import React, { Component } from 'react';
import './ExpandingLineMenu.css';
import MenuItem from '@/components/MenuItem/MenuItem';

class ExpandingLineMenu extends Component {
  state = {
    current: 0
  };

  items = ['Article 1', 'Article 2', 'Article 3', 'Article 4', 'Article 5'];

  handleClick = buttonIndex => {
    this.setState(() => ({ current: buttonIndex }));
  };

  render() {
    return (
      <nav className="menu-animated menu-expanding-lines">
        <ul className="menu">
          {this.items.map((item, index) => (
            <MenuItem
              key={item}
              index={index}
              current={this.state.current === index ? true : false}
              item={item}
              handleClick={this.handleClick}
            />
          ))}
        </ul>
      </nav>
    );
  }
}

export default ExpandingLineMenu;
