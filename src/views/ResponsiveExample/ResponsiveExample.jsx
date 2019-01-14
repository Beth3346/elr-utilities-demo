import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const ResponsiveExample = () => (
  <div>
    <Header heading="Responsive">Responsive Example</Header>
    <ContentMain>
      <section id="responsive">
        <ExampleSection heading="" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default ResponsiveExample;
