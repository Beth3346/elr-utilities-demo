import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem';

class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      items: [
        {
          id: 1,
          name: 'Animations',
          url: '/',
          open: true,
          subLinks: [
            {
              id: 1,
              name: 'Fade',
              url: '/'
            },
            {
              id: 2,
              name: 'Flipper',
              url: '/'
            }
          ]
        },
        {
          id: 2,
          name: 'Blocks',
          url: '/',
          open: false
        },
        {
          id: 3,
          name: 'Components',
          url: '/',
          open: false
        },
        {
          id: 4,
          name: 'CSS Helpers',
          url: '/',
          open: false
        },
        {
          id: 5,
          name: 'Elements',
          url: '/',
          open: false
        },
        {
          id: 6,
          name: 'Flex',
          url: '/',
          open: false
        },
        {
          id: 7,
          name: 'Forms',
          url: '/',
          open: false
        },
        {
          id: 8,
          name: 'Grid',
          url: '/',
          open: false
        },
        {
          id: 9,
          name: 'Navigation',
          url: '/',
          open: false
        },
        {
          id: 10,
          name: 'Sass Layout',
          url: '/',
          open: false
        },
        {
          id: 11,
          name: 'Typography',
          url: '/',
          open: false
        }
      ]
    };
    this.showMenu = this.showMenu.bind(this);
  }
  showMenu(e) {
    e.preventDefault();
    console.log('clicked');

    this.setState(prevState => ({ open: !prevState.open }));
  }
  render() {
    return (
      <ul className="sidebar-menu">
        {this.state.items.map(item => (
          <ListItem
            onClick={e => this.showMenu(e)}
            key={item.id}
            item={item}
            open={this.state.open}
          />
        ))}
      </ul>
    );
  }
}

export default SidebarMenu;
