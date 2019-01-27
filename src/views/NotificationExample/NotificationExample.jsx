import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';

const NotificationExample = () => (
  <div>
    <Header heading="Notification">Notification Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Notification" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default NotificationExample;
