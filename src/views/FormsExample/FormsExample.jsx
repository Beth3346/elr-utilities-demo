import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const FormsExample = () => (
  <div>
    <Header heading="Forms">Forms Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Forms" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default FormsExample;
