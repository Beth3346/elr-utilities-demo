import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const ListExample = () => (
  <div>
    <Header heading="Lists">Lists Example</Header>
    <ContentMain>
      <section id="lists">
        <ExampleSection heading="Lists" subheading="some lists">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default ListExample;
