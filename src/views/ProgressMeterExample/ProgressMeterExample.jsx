import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import ProgressBar from '@/components/ProgressBar/ProgressBar';

const ProgressMeterExample = () => (
  <div>
    <Header heading="Progress Bar">Progress Meter Example</Header>
    <ContentMain>
      <section id="progress-bar">
        <ExampleSection heading="Progress Bar" subheading="">
          <ProgressBar progress={80} />
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default ProgressMeterExample;
