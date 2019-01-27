import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const InputGroupsExample = () => (
  <div>
    <Header heading="Input Groups">Input Groups Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Input Groups" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default InputGroupsExample;
