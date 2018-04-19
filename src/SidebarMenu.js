import React, { Component } from 'react';

class SidebarMenu extends Component {
  render() {
    return (
      <ul className="sidebar-menu">
        <li>
          <a href="/">Animations</a>
        </li>
        <li>
          <a href="/">Components</a>
        </li>
        <li>
          <a href="/">CSS Helpers</a>
        </li>
        <li>
          <a href="/">Elements</a>
        </li>
        <li>
          <a href="/">Flex</a>
        </li>
        <li>
          <a href="/">Forms</a>
        </li>
        <li>
          <a href="/">Grid</a>
        </li>
        <li>
          <a href="/">Navigation</a>
        </li>
        <li>
          <a href="/">Sass Layout</a>
        </li>
        <li>
          <a href="/">Typography</a>
        </li>
      </ul>
    );
  }
}

export default SidebarMenu;
