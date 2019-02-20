import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import Modal from '@/components/Modal/Modal';

const ModalExample = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <Header heading="Modal">Modal Example</Header>
      <ContentMain>
        <section id="accordion">
          <ExampleSection heading="Modal" subheading="">
            <button
              onClick={() => setShow(true)}
              className="elr-button elr-button-success"
            >
              Show Modal
            </button>
            <Modal handleClose={() => setShow(false)} show={show} />
          </ExampleSection>
        </section>
      </ContentMain>
    </div>
  );
};
export default ModalExample;
