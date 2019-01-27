import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const TablesExample = () => (
  <div>
    <Header heading="Tables">Tables Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Tables" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default TablesExample;
