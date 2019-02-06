import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import './SpinExample.scss';

const SpinExample = () => (
  <div>
    <Header heading="Spin">Spin Example</Header>
    <ContentMain>
      <section id="spin-animation">
        <ExampleSection
          heading="Spin Animation"
          subheading="Displays a series of steps"
        >
          <div className="elr-spin">
            <p>this rotates</p>
          </div>
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default SpinExample;
