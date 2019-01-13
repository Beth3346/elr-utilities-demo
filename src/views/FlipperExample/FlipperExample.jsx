import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import Flipper from '@/components/Flipper/Flipper';
import './FlipperExample.css';

const FlipperExample = () => (
  <div>
    <Header heading="CSS">Fade Example</Header>
    <ContentMain>
      <section id="flipper">
        <ExampleSection heading="Flipper" subheading="Reveal content on click.">
          <div className="elr-col-half flip-box">
            <Flipper front="Click Here" shape="circle">
              This is some circle content
            </Flipper>
          </div>
          <div className="elr-col-half flip-box">
            <Flipper front="Click Here" shape="square">
              This is a square component
            </Flipper>
          </div>
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default FlipperExample;
