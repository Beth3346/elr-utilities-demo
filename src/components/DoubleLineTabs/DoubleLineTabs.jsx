import React, { Component } from 'react';
import './DoubleLineTabs.css';
import TabItem from '@/components/TabItem/TabItem';

class DoubleLineTabs extends Component {
  state = {
    current: 0
  };

  items = ['Article 1', 'Article 2', 'Article 3', 'Article 4', 'Article 5'];

  handleClick = buttonIndex => {
    this.setState(() => ({ current: buttonIndex }));
  };

  render() {
    return (
      <nav className="menu-animated menu-double-lines">
        <ul className="menu">
          {this.items.map((item, index) => (
            <TabItem
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

export default DoubleLineTabs;
