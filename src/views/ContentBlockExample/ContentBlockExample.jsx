import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const ContentBlockExample = () => (
  <div>
    <Header heading="Content Blocks">Content Block Example</Header>
    <ContentMain>
      <section id="content-block">
        <ExampleSection heading="" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default ContentBlockExample;
