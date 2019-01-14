import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const TypographyExample = () => (
  <div>
    <Header heading="Typography">Typography Example</Header>
    <ContentMain>
      <section id="typography">
        <ExampleSection heading="" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default TypographyExample;
