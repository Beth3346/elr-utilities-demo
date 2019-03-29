import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import Alert from '@/components/Alert/Alert';

const AlertExample = () => {
  const [show, setShow] = useState(false);

  const handleAlert = show => setShow(show);

  const closeAlert = () => {
    setShow(false);
  };

  return (
    <div>
      <Header heading="Alert">Alert Example</Header>
      <ContentMain>
        <section id="alerts">
          <ExampleSection heading="Alert" subheading="">
            <button
              onClick={() => handleAlert(true)}
              className="elr-button elr-button-primary"
            >
              Launch Alert
            </button>
            <Alert
              title="An Alert"
              handleAlert={handleAlert}
              closeAlert={closeAlert}
              show={show}
              buttonText="Close"
            >
              <p>This is some content</p>
            </Alert>
          </ExampleSection>
        </section>
      </ContentMain>
    </div>
  );
};

export default AlertExample;
