import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const PaginationExample = () => (
  <div>
    <Header heading="Pagination">Pagination Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Pagination" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default PaginationExample;
