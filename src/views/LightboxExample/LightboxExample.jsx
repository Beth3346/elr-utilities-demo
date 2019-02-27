import React, { useState } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import Lightbox from '@/components/Lightbox/Lightbox';
import img from '@/assets/images/cat.jpg';
import img2 from '@/assets/images/cat2.jpg';
import img3 from '@/assets/images/cat3.jpg';

const LightboxExample = () => {
  const [show, setShow] = useState(true);
  const images = [
    {
      id: 1,
      src: img,
      caption:
        'A photo of a cute kitten. This kitten looks like he is playing. So Cute!',
      title: 'A Cat Photo'
    },
    {
      id: 2,
      src: img2,
      caption:
        'Another photo of a cute cat. Paw at your fat belly refuse to come home when humans are going to bed; stay out all night then yowl like i am dying at 4am, and eat the rubberband for curl up and sleep on the freshly laundered towels but dream about hunting birds. Lounge in doorway annoy kitten brother with poking for throw down all the stuff in the kitchen present belly, scratch hand when stroked. Why must they do that spit up on light gray carpet instead of adjacent linoleum, but i’m so hungry i’m so hungry but ew not for that hit you unexpectedly reward the chosen human with a slow blink. ',
      title: 'A Cat Photo'
    },
    {
      id: 3,
      src: img3,
      caption: 'Yet another photo of a cute cat',
      title: 'A Cat Photo'
    }
  ];

  const handleEscPress = () => setShow(false);

  return (
    <div>
      <Header heading="Lightbox">Lightbox Example</Header>
      <ContentMain>
        <section id="lightbox">
          <ExampleSection heading="Lightbox" subheading="">
            <button
              onClick={() => setShow(true)}
              className="elr-button elr-button-primary"
            >
              Show Lightbox
            </button>
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}
            >
              {show && (
                <Lightbox
                  images={images}
                  hideLightbox={() => setShow(false)}
                  handleEscPress={handleEscPress}
                />
              )}
            </ReactCSSTransitionGroup>
          </ExampleSection>
        </section>
      </ContentMain>
    </div>
  );
};

export default LightboxExample;
