import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import IconAnimated from '@/components/IconAnimated/IconAnimated';
import IconCard from '@/components/IconCard/IconCard';

const AnimatedIconExample = () => (
  <div>
    <Header heading="CSS">Animated Icons Example</Header>
    <ContentMain>
      <section id="animated-icons">
        <ExampleSection
          heading="Animated Icons"
          subheading="Icons animate when moused over"
        >
          <div className="elr-col-2">
            <IconAnimated type="icon-border">
              <i className="fa fa-phone" />
            </IconAnimated>
          </div>
          <div className="elr-col-2">
            <IconAnimated type="icon-border-pop">
              <i className="fa fa-gift" />
            </IconAnimated>
          </div>
          <div className="elr-col-2">
            <IconAnimated type="icon-dash">
              <i className="fa fa-home" />
            </IconAnimated>
          </div>
          <div className="elr-col-2">
            <IconAnimated type="icon-dash-rotate">
              <i className="fa fa-leaf" />
            </IconAnimated>
          </div>
          <div className="elr-col-2">
            <IconAnimated type="icon-border-pull">
              <i className="fa fa-lock" />
            </IconAnimated>
          </div>
          <div className="elr-col-2">
            <IconAnimated type="icon-background-fade">
              <i className="fa fa-paw" />
            </IconAnimated>
          </div>
        </ExampleSection>
        <ExampleSection
          heading="Animated Icon Card"
          subheading="Icons animate when moused over"
        >
          <IconCard title="Content Title" buttonText="Button Text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              dapibus nisi eget enim vehicula, a rutrum nulla eleifend. Morbi et
              ante vitae nunc tincidunt finibus ut eu lectus. Cras ut est urna.
              Etiam sit amet tellus fermentum, eleifend ex ac, pharetra neque.
              Nam fermentum sem sed ornare faucibus.
            </p>
          </IconCard>
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default AnimatedIconExample;
