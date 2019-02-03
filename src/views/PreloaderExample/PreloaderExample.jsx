import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import Spinner from '@/components/Spinner/Spinner';

const PreloaderExample = () => (
  <div>
    <Header heading="Preloader">Preloader Example</Header>
    <ContentMain>
      <section id="buttons">
        <ExampleSection heading="Preloaders" subheading="">
          <Spinner color="#1976d2" />
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default PreloaderExample;
