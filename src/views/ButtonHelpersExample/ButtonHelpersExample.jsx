import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const ButtonHelpersExample = () => (
  <div>
    <Header heading="Button Helpers">ButtonHelpers Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection
          heading="Button Helpers"
          subheading="Some simple button classes"
        >
          <button className="elr-button">Button</button>
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default ButtonHelpersExample;
