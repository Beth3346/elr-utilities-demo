import React, { useState } from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import Modal from '@/components/Modal/Modal';
import './ModalExample.scss';

const ModalExample = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <Header heading="Modal">Modal Example</Header>
      <ContentMain>
        <section id="modals">
          <ExampleSection heading="Modal" subheading="">
            <button
              onClick={() => setShow(true)}
              className="elr-button elr-button-success button-modal-show"
            >
              Show Modal
            </button>
            <Modal
              handleClose={() => setShow(false)}
              handleAccept={() => setShow(false)}
              handleCancel={() => setShow(false)}
              show={show}
            />
          </ExampleSection>
        </section>
      </ContentMain>
    </div>
  );
};
export default ModalExample;
