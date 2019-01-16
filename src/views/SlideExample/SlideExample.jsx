import React, { Component } from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import './SlideExample.scss';

class SlideExample extends Component {
  state = {
    isClicked: false
  };

  handleClick = () => {
    this.setState(({ isClicked }) => ({ isClicked: !isClicked }));
  };

  render = () => (
    <div>
      <Header heading="Slide">Slide Example</Header>
      <ContentMain>
        <section id="slide">
          <ExampleSection
            heading="Slide Down"
            subheading="Content slides into view on click. Useful for dropdown menus and buttons."
          >
            <div className="slide-box">
              <div className="slide-down">
                <button
                  className="elr-slide-down-trigger"
                  onClick={this.handleClick}
                >
                  Slide Down
                </button>
                <ul
                  className={`elr-slide-down elr-unstyled-list ${
                    this.state.isClicked ? 'active' : ''
                  }`}
                >
                  <li>Item One</li>
                  <li>Item Two</li>
                  <li>Item Three</li>
                  <li>Item Four</li>
                </ul>
              </div>
            </div>
          </ExampleSection>
        </section>
      </ContentMain>
    </div>
  );
}

export default SlideExample;
