import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const ListsExample = () => (
  <div>
    <Header heading="Lists">Lists Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Lists" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default ListsExample;
