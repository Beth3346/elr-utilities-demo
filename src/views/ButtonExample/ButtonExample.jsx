import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import './ButtonExample.css';

const ButtonExample = () => (
  <div>
    <Header heading="Buttons">Buttons Example</Header>
    <ContentMain>
      <section id="buttons">
        <ExampleSection heading="" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default ButtonExample;
