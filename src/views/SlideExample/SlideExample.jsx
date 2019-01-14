import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const SlideExample = () => (
  <div>
    <Header heading="Slide">Slide Example</Header>
    <ContentMain>
      <section id="slide">
        <ExampleSection heading="" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default SlideExample;
