import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const FlexHelpersExample = () => (
  <div>
    <Header heading="Flex Helpers">Flex Helpers Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Flex Helpers" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default FlexHelpersExample;
