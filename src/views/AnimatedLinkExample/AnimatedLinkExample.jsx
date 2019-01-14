import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import './AnimatedLinkExample.css';
import SimpleLineTabs from '@/components/SimpleLineTabs/SimpleLineTabs';
import DoubleLineTabs from '@/components/DoubleLineTabs/DoubleLineTabs';

const AnimatedLinkExample = () => (
  <div>
    <Header heading="Animated Links">Animated Links Example</Header>
    <ContentMain>
      <section id="animated-links">
        <ExampleSection heading="Tab Bar Transitions" subheading="">
          <div className="example-instructions">
            <p>
              These are simple line transitions that take place when a link is
              clicked. These animations can be incorporated into tab-based
              content. They are not recommended for navbars that link to other
              pages as the animation will not be visible to the user.
            </p>
            <p>
              Requires some JavaScript to toggle the current class when a link
              is clicked. Example JavaScript is included in the source code
              below.
            </p>
          </div>
          <div className="elr-col-full">
            <h4 className="example-subheading">Simple Line</h4>
          </div>
          <div className="elr-col-full example-holder">
            <SimpleLineTabs />
          </div>
          <div className="elr-col-full">
            <h4 className="example-subheading">Double Line</h4>
          </div>
          <div className="elr-col-full example-holder">
            <DoubleLineTabs />
          </div>
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default AnimatedLinkExample;
