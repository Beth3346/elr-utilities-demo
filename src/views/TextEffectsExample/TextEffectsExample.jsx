import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const TextEffectsExample = () => (
  <div>
    <Header heading="Text Effects">Text Effects Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="TextE ffects" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default TextEffectsExample;
