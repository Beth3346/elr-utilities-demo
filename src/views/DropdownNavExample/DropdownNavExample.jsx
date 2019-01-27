import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const DropdownNavExample = () => (
  <div>
    <Header heading="Dropdown Nav">Dropdown Nav Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Dropdown Nav" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default DropdownNavExample;
