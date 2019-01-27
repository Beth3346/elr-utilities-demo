import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const ShapesExample = () => (
  <div>
    <Header heading="Shapes">Shapes Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Shapes" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default ShapesExample;
