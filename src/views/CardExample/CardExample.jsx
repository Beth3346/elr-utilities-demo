import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import './CardExample.css';

const CardExample = () => (
  <div>
    <Header heading="Cards">Cards Example</Header>
    <ContentMain>
      <section id="cards">
        <ExampleSection heading="" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default CardExample;
