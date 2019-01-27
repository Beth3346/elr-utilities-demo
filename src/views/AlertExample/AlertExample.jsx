import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const AlertExample = () => (
  <div>
    <Header heading="Alert">Alert Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Alert" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default AlertExample;
