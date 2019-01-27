import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const PasswordsExample = () => (
  <div>
    <Header heading="Passwords">Passwords Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Passwords" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default PasswordsExample;
