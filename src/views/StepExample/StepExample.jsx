import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const StepExample = () => (
  <div>
    <Header heading="Steps">Steps Example</Header>
    <ContentMain>
      <section id="steps">
        <ExampleSection heading="" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default StepExample;
