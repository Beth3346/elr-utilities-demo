import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const VideosExample = () => (
  <div>
    <Header heading="Videos">Videos Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Videos" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default VideosExample;
