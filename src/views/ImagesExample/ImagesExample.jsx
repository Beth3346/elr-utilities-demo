import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const ImagesExample = () => (
  <div>
    <Header heading="Images">Images Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Images" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default ImagesExample;
