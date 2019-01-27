import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const PopoverExample = () => (
  <div>
    <Header heading="Popover">Popover Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Popover" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default PopoverExample;
