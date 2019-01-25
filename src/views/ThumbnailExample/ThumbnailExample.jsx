import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import img from '@/assets/images/cat.jpg';
import img2 from '@/assets/images/cat2.jpg';
import img3 from '@/assets/images/cat3.jpg';
import ImageThumbnail from '../../components/ImageThumbnail/ImageThumbnail';

const ThumbnailExample = () => (
  <div>
    <Header heading="Thumbnail">Thumbnail Example</Header>
    <ContentMain>
      <section id="thumbnails">
        <ExampleSection heading="Thumbnails" subheading="">
          <ImageThumbnail image={img} />
          <ImageThumbnail image={img2} shape="rounded" />
          <ImageThumbnail image={img3} shape="round" />
          <ImageThumbnail image={img} shape="rectangle" />
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default ThumbnailExample;
