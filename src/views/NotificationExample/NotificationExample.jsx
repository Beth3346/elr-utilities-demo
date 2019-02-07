import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import Notification from '@/components/Notification/Notification';

const NotificationExample = () => (
  <div>
    <Header heading="Notification">Notification Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection
          heading="Notification"
          subheading="dismissible alert notifications"
        >
          <Notification type="success" heading="Success!">
            <p>This is a success message</p>
          </Notification>
          <Notification type="warning" heading="Warning!">
            <p>This is a warning message</p>
          </Notification>
          <Notification type="danger" heading="Danger!">
            <p>This is a danger message</p>
          </Notification>
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default NotificationExample;
