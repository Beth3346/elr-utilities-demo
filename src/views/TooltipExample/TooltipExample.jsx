import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const TooltipsExample = () => (
  <div>
    <Header heading="Tooltips">Tooltips Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Tooltips" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default TooltipsExample;
