import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import Tabs from '@/components/Tabs/Tabs';
// import './SpinExample.scss';

const TabsExample = () => (
  <div>
    <Header heading="Tabs">Tabs Example</Header>
    <ContentMain>
      <section id="tabbed-content">
        <ExampleSection
          heading="Tabbed Content"
          subheading="displays tabbed content"
        >
          <Tabs />
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default TabsExample;
