import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const DataPatternExample = () => (
  <div>
    <Header heading="Data Patterns">Data Patterns Example</Header>
    <ContentMain>
      <section id="data-patterns">
        <ExampleSection heading="Address" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default DataPatternExample;
