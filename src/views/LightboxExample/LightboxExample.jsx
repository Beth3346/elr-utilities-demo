import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import Lightbox from '@/components/Lightbox/Lightbox';
import img from '@/assets/images/cat.jpg';
import img2 from '@/assets/images/cat2.jpg';
import img3 from '@/assets/images/cat3.jpg';

const LightboxExample = () => {
  const images = [
    {
      id: 1,
      src: img,
      caption: 'A photo of a cute cat'
    },
    { id: 2, src: img2, caption: 'Another photo of a cute cat' },
    { id: 3, src: img3, caption: 'Yet another photo of a cute cat' }
  ];

  return (
    <div>
      <Header heading="Lightbox">Lightbox Example</Header>
      <ContentMain>
        <section id="lightbox">
          <ExampleSection heading="Lightbox" subheading="">
            <Lightbox images={images} />
          </ExampleSection>
        </section>
      </ContentMain>
    </div>
  );
};

export default LightboxExample;
