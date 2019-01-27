import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const StyledHeadingsExample = () => (
  <div>
    <Header heading="Styled Headings">Styled Headings Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Styled Headings" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default StyledHeadingsExample;
