import React, { Component } from 'react';
import ListItem from '@/components/ListItem/ListItem';
import './SidebarMenu.css';

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
              name: 'Animated Links',
              url: '/animated-links'
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
          open: true,
          subLinks: [
            {
              id: 1,
              name: 'Content Block',
              url: '/content-blocks'
            }
          ]
        },
        {
          id: 3,
          name: 'Components',
          url: '/',
          open: true,
          subLinks: [
            {
              id: 1,
              name: 'Cards',
              url: '/cards'
            },
            {
              id: 2,
              name: 'Comments',
              url: '/comments'
            },
            {
              id: 3,
              name: 'Labels',
              url: '/labels'
            },
            {
              id: 4,
              name: 'Preloaders',
              url: '/preloaders'
            },
            {
              id: 5,
              name: 'Pricing Tables',
              url: '/pricing-tables'
            },
            {
              id: 6,
              name: 'Progress Meters',
              url: '/progress-meters'
            },
            {
              id: 7,
              name: 'Steps',
              url: '/steps'
            },
            {
              id: 8,
              name: 'Thumbnails',
              url: '/thumbnails'
            }
          ]
        },
        {
          id: 4,
          name: 'CSS Helpers',
          url: '/',
          open: true,
          subLinks: [
            {
              id: 1,
              name: 'Buttons',
              url: '/buttons'
            },
            {
              id: 2,
              name: 'Headings',
              url: '/headings'
            },
            {
              id: 3,
              name: 'Layout',
              url: '/layout'
            },
            {
              id: 4,
              name: 'Lists',
              url: '/lists'
            },
            {
              id: 5,
              name: 'Positioning',
              url: '/positioning'
            },
            {
              id: 6,
              name: 'Reset',
              url: '/reset'
            },
            {
              id: 7,
              name: 'Responsive',
              url: '/responsive'
            },
            {
              id: 8,
              name: 'Typography',
              url: '/typography'
            }
          ]
        },
        {
          id: 5,
          name: 'Elements',
          url: '/',
          open: true,
          subLinks: []
        },
        {
          id: 6,
          name: 'Flex',
          url: '/',
          open: true,
          subLinks: []
        },
        {
          id: 7,
          name: 'Forms',
          url: '/',
          open: true,
          subLinks: []
        },
        {
          id: 8,
          name: 'Grid',
          url: '/grid',
          open: true,
          subLinks: []
        },
        {
          id: 9,
          name: 'Navigation',
          url: '/',
          open: true,
          subLinks: []
        },
        {
          id: 10,
          name: 'Sass Layout',
          url: '/',
          open: true,
          subLinks: []
        },
        {
          id: 11,
          name: 'Typography',
          url: '/',
          open: true,
          subLinks: []
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

    this.setState(() => ({ items }));
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
