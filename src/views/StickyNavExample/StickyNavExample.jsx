import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const StickyNavExample = () => (
  <div>
    <Header heading="Sticky Navigation Bar">
      Sticky Navigation Bar Example
    </Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Sticky Navigation Bar" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default StickyNavExample;
