import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import PricingTable from '../../components/PricingTable/PricingTable';

const PricingTableExample = () => (
  <div>
    <Header heading="Pricing Table">Pricing Table Example</Header>
    <ContentMain>
      <section id="buttons">
        <ExampleSection
          heading="Pricing Table"
          subheading="Show pricing options"
        >
          <div className="elr-flex pricing-table-container">
            <PricingTable
              features={[
                'a cool feature',
                'a cool feature',
                'a cool feature',
                'a cool feature'
              ]}
              price="$38"
              duration="per month"
              name="Bronze Package"
              description="Bronze level package"
              buttonText="Select"
            />
          </div>
        </ExampleSection>
        <ExampleSection
          heading="Pricing Tables"
          subheading="Show pricing options"
        >
          <div className="elr-flex pricing-table-container">
            <PricingTable
              features={[
                'a cool feature',
                'a cool feature',
                'a cool feature',
                'a cool feature'
              ]}
              price="$38"
              duration="per month"
              name="Bronze Package"
              description="Bronze level package"
              buttonText="Select"
            />
            <PricingTable
              features={[
                'a cool feature',
                'a cool feature',
                'a cool feature',
                'a cool feature'
              ]}
              price="$68"
              duration="per month"
              name="Silver Package"
              description="Silver level package"
              buttonText="Select"
              popular={true}
            />
            <PricingTable
              features={[
                'a cool feature',
                'a cool feature',
                'a cool feature',
                'a cool feature'
              ]}
              price="$98"
              duration="per month"
              name="Gold Package"
              description="Gold level package"
              buttonText="Select"
            />
          </div>
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default PricingTableExample;
