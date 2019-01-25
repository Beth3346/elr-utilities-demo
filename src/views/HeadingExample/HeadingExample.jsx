import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const HeadingExample = () => (
  <div>
    <Header heading="Headings">Headings Example</Header>
    <ContentMain>
      <section id="headings">
        <ExampleSection heading="Headings" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default HeadingExample;
