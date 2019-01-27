import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const MetroGridExample = () => (
  <div>
    <Header heading="MetroGrid">MetroGrid Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="MetroGrid" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default MetroGridExample;
