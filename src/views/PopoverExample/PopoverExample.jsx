import React, { Component } from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import PopOver from '@/components/PopOver/PopOver';
import './PopoverExample.scss';

class PopoverExample extends Component {
  state = {
    show: false
  };

  handleClick = () => {
    this.setState(show => ({ show: !this.state.show }));
  };

  render() {
    return (
      <div>
        <Header heading="Popover">Popover Example</Header>
        <ContentMain>
          <section id="accordion">
            <ExampleSection
              heading="Popover"
              subheading="Popovers are styled to look like callouts. They are commonly used to provide additional information to the user. We don't recommend putting critical information in popovers. Use the to add a little extra context. Eg. to give the user a hint about how to fill out a form field."
            >
              <div className="popover-holder">
                <PopOver show={true} direction="top">
                  <h3 className="elr-popover-heading">Alert</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam corrupti dolorem provident officiis beatae vero!
                    Placeat cumque nihil excepturi? Rerum.
                  </p>
                </PopOver>
              </div>
              <div className="popover-holder">
                <PopOver show={true} direction="left">
                  <h3 className="elr-popover-heading">Alert</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam corrupti dolorem provident officiis beatae vero!
                    Placeat cumque nihil excepturi? Rerum.
                  </p>
                </PopOver>
              </div>
              <div className="popover-holder">
                <PopOver show={true} direction="right">
                  <h3 className="elr-popover-heading">Alert</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam corrupti dolorem provident officiis beatae vero!
                    Placeat cumque nihil excepturi? Rerum.
                  </p>
                </PopOver>
              </div>
              <div className="popover-holder">
                <PopOver show={true} direction="bottom">
                  <h3 className="elr-popover-heading">Alert</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam corrupti dolorem provident officiis beatae vero!
                    Placeat cumque nihil excepturi? Rerum.
                  </p>
                </PopOver>
              </div>
            </ExampleSection>
            <ExampleSection
              heading="Dynamic Popover Example"
              subheading="use popovers for content that should appear on click"
            >
              <div className="popover-holder dynamic-popover-holder">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam corrupti dolorem provident officiis beatae vero!
                  Placeat cumque nihil excepturi? Rerum.
                </p>
                <PopOver show={this.state.show} direction="top">
                  <h3 className="elr-popover-heading">Alert</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magnam corrupti dolorem provident officiis beatae vero!
                    Placeat cumque nihil excepturi? Rerum.
                  </p>
                </PopOver>
                <button
                  onClick={this.handleClick}
                  className="elr-button elr-button-primary"
                  aria-haspopup="true"
                  aria-expanded={this.state.show}
                >
                  Click Here!
                </button>
              </div>
            </ExampleSection>
          </section>
        </ContentMain>
      </div>
    );
  }
}

export default PopoverExample;
