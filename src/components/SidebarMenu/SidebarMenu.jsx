import React, { Component } from 'react';
import ListItem from '@/components/ListItem/ListItem';
import './SidebarMenu.scss';

class SidebarMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      items: [
        {
          id: 1,
          name: 'Animations',
          url: '/',
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
          subLinks: [
            {
              id: 1,
              name: 'Accordion',
              url: '/accordion'
            },
            {
              id: 15,
              name: 'Alert',
              url: '/alerts'
            },
            {
              id: 2,
              name: 'Cards',
              url: '/cards'
            },
            {
              id: 3,
              name: 'Comments',
              url: '/comments'
            },
            {
              id: 4,
              name: 'Data Patterns',
              url: '/data-patterns'
            },
            {
              id: 5,
              name: 'Labels',
              url: '/labels'
            },
            {
              id: 17,
              name: 'Lightbox',
              url: '/lightbox'
            },
            {
              id: 13,
              name: 'Modal',
              url: '/modals'
            },
            {
              id: 14,
              name: 'Notification',
              url: '/notification'
            },
            {
              id: 11,
              name: 'Popovers',
              url: '/popovers'
            },
            {
              id: 6,
              name: 'Preloaders',
              url: '/preloaders'
            },
            {
              id: 7,
              name: 'Pricing Tables',
              url: '/pricing-tables'
            },
            {
              id: 8,
              name: 'Progress Meters',
              url: '/progress-meters'
            },
            {
              id: 9,
              name: 'Steps',
              url: '/steps'
            },
            {
              id: 16,
              name: 'Tabs',
              url: '/tabs'
            },
            {
              id: 10,
              name: 'Thumbnails',
              url: '/thumbnails'
            },
            {
              id: 12,
              name: 'Tooltip',
              url: '/tooltips'
            }
          ]
        },
        {
          id: 4,
          name: 'CSS Helpers',
          url: '/',
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
          subLinks: [
            {
              id: 1,
              name: 'Images',
              url: '/images'
            },
            {
              id: 2,
              name: 'Lists',
              url: '/lists'
            },
            {
              id: 3,
              name: 'Tables',
              url: '/tables'
            },
            {
              id: 4,
              name: 'Videos',
              url: '/videos'
            }
          ]
        },
        {
          id: 6,
          name: 'Flex Helpers',
          url: '/flex-helpers',
          subLinks: []
        },
        {
          id: 7,
          name: 'Forms',
          url: '/',
          subLinks: [
            {
              id: 1,
              name: 'Inputs',
              url: '/inputs'
            },
            {
              id: 2,
              name: 'Input Groups',
              url: '/input-groups'
            },
            {
              id: 3,
              name: 'Passwords',
              url: '/passwords'
            },
            {
              id: 4,
              name: 'Forms',
              url: '/forms'
            }
          ]
        },
        {
          id: 8,
          name: 'Grid',
          url: '/grid',
          subLinks: []
        },
        {
          id: 9,
          name: 'Navigation',
          url: '/',
          subLinks: [
            {
              id: 1,
              name: 'Dropdown Nav',
              url: '/dropdown-nav'
            },
            {
              id: 2,
              name: 'Sticky Nav',
              url: '/sticky-nav'
            },
            {
              id: 3,
              name: 'Breadcrumbs',
              url: '/breadcrumbs'
            },
            {
              id: 4,
              name: 'Pagination',
              url: '/pagination'
            },
            {
              id: 5,
              name: 'Navigation',
              url: '/navigation'
            }
          ]
        },
        {
          id: 10,
          name: 'Layout Helpers',
          url: '/',
          subLinks: [
            {
              id: 1,
              name: 'Layout Utilities',
              url: '/layout-utilities'
            },
            {
              id: 2,
              name: 'Metro Grid',
              url: '/metro-grid'
            },
            {
              id: 3,
              name: 'Shapes',
              url: '/shapes'
            }
          ]
        },
        {
          id: 11,
          name: 'Typography',
          url: '/',
          subLinks: [
            {
              id: 1,
              name: 'Headings',
              url: '/styled-headings'
            },
            {
              id: 2,
              name: 'Text Effects',
              url: '/text-effects'
            }
          ]
        }
      ]
    };
  }

  showMenu = (e, id) => {
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
  };

  render() {
    const { items, current } = this.state;
    return (
      <ul className="sidebar-menu">
        {items.map(item => {
          return (
            <ListItem
              onClick={(e, id) => this.showMenu(e, id)}
              key={item.id}
              item={item}
              open={current === item.id ? true : false}
            />
          );
        })}
      </ul>
    );
  }
}

export default SidebarMenu;
