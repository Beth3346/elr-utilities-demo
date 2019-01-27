import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const LayoutUtilitiesExample = () => (
  <div>
    <Header heading="Layout Utilities">Layout Utilities Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Layout Utilities" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default LayoutUtilitiesExample;
