import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import Accordion from '../../components/Accordion/Accordion';

const AccordionExample = () => (
  <div>
    <Header heading="Accordion">Accordion Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Accordion" subheading="Toggle content display">
          <Accordion />
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default AccordionExample;
