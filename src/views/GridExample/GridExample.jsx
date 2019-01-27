import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const GridExample = () => (
  <div>
    <Header heading="Grid">Grid Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Grid" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default GridExample;
