import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const NavigationExample = () => (
  <div>
    <Header heading="Navigation">Navigation Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Navigation" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default NavigationExample;
