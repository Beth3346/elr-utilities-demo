import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const ModalExample = () => (
  <div>
    <Header heading="Modal">Modal Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Modal" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default ModalExample;
