import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const ThumbnailExample = () => (
  <div>
    <Header heading="Thumbnail">Thumbnail Example</Header>
    <ContentMain>
      <section id="thumbnails">
        <ExampleSection heading="" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default ThumbnailExample;
