import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const PreloaderExample = () => (
  <div>
    <Header heading="Preloader">Preloader Example</Header>
    <ContentMain>
      <section id="buttons">
        <ExampleSection heading="" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default PreloaderExample;
