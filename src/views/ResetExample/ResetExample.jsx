import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const ResetExample = () => (
  <div>
    <Header heading="Reset">Reset Example</Header>
    <ContentMain>
      <section id="reset">
        <ExampleSection heading="" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default ResetExample;
