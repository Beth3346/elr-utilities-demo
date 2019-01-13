import React, { Component } from 'react';
import ListItem from '@/components/ListItem/ListItem';

class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
              url: '/fade'
            },
            {
              id: 2,
              name: 'Flipper',
              url: '/flipper'
            },
            {
              id: 3,
              name: 'Animated Icons',
              url: '/animated-icons'
            },
            {
              id: 4,
              name: 'Links',
              url: '/links'
            },
            {
              id: 5,
              name: 'Slide',
              url: '/slide'
            }
          ]
        },
        {
          id: 2,
          name: 'Blocks',
          url: '/',
          open: false,
          subLinks: [
            {
              id: 1,
              name: 'Content Block',
              url: '/content'
            }
          ]
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
          url: '/grid',
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
  showMenu(e, id) {
    e.preventDefault();
    const items = this.state.items.map(o => {
      if (o.id === id) {
        o.open = !o.open;
      } else {
        o.open = false;
      }

      return o;
    });

    this.setState(items);
  }
  render() {
    return (
      <ul className="sidebar-menu">
        {this.state.items.map(item => {
          if (item.subLinks && item.subLinks.length) {
            return (
              <ListItem
                onClick={(e, id) => this.showMenu(e, id)}
                key={item.id}
                item={item}
                open={item.open}
              />
            );
          } else {
            return <ListItem key={item.id} item={item} open={item.open} />;
          }
        })}
      </ul>
    );
  }
}

export default SidebarMenu;
