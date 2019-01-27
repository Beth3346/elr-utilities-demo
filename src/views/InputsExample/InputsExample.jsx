import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const InputsExample = () => (
  <div>
    <Header heading="Inputs">Inputs Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Inputs" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default InputsExample;
