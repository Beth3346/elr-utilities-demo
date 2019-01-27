import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const BreadcrumbsExample = () => (
  <div>
    <Header heading="Breadcrumbs">Breadcrumbs Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Breadcrumbs" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default BreadcrumbsExample;
