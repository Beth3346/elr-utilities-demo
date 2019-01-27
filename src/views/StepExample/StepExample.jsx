import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import StepList from '../../components/StepList/StepList';

const StepExample = () => {
  const steps = [
    {
      id: 1,
      title: 'Step 1',
      status: 'complete'
    },
    {
      id: 2,
      title: 'Step 2',
      status: 'current'
    },
    {
      id: 3,
      title: 'Step 3',
      status: 'incomplete'
    },
    {
      id: 4,
      title: 'Step 4',
      status: 'incomplete'
    }
  ];

  return (
    <div>
      <Header heading="Steps">Steps Example</Header>
      <ContentMain>
        <section id="steps">
          <ExampleSection
            heading="Steps List"
            subheading="Displays a series of steps"
          >
            <StepList steps={steps} />
          </ExampleSection>
        </section>
      </ContentMain>
    </div>
  );
};

export default StepExample;
