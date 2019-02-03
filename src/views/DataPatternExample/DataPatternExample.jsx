import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import AddressData from '@/components/Address/AddressData';

const DataPatternExample = () => {
  const address = {
    name: 'Annie Edison',
    street: '1000 Greendale Lane',
    city: 'Greendale',
    state: 'Colorado',
    postal: '98765',
    country: 'United States of America'
  };

  return (
    <div>
      <Header heading="Data Patterns">Data Patterns Example</Header>
      <ContentMain>
        <section id="data-patterns">
          <ExampleSection heading="Address" subheading="">
            <AddressData address={address} />
          </ExampleSection>
        </section>
      </ContentMain>
    </div>
  );
};

export default DataPatternExample;
