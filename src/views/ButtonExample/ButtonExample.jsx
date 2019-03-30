import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import ButtonBasic from '@/components/Buttons/ButtonBasic';
import './ButtonExample.scss';

const ButtonExample = () => (
  <div>
    <Header heading="Buttons">Buttons Example</Header>
    <ContentMain>
      <section id="buttons">
        <ExampleSection heading="Buttons" subheading="A basic button">
          <ButtonBasic handleClick={() => alert('clicked')}>
            Basic Button
          </ButtonBasic>
          <ButtonBasic
            classes="elr-button-raised"
            handleClick={() => alert('raised button clicked')}
          >
            Raised Button
          </ButtonBasic>
        </ExampleSection>
        <ExampleSection
          heading="Context Buttons"
          subheading="Use context buttons when you need to assign a special meaning to a button."
        >
          <ButtonBasic
            classes="elr-button-danger"
            handleClick={() => alert('danger clicked')}
          >
            Danger Button
          </ButtonBasic>
          <ButtonBasic
            classes="elr-button-warning"
            handleClick={() => alert('warning clicked')}
          >
            Warning Button
          </ButtonBasic>
          <ButtonBasic
            classes="elr-button-success"
            handleClick={() => alert('success clicked')}
          >
            Success Button
          </ButtonBasic>
          <ButtonBasic
            classes="elr-button-muted"
            handleClick={() => alert('muted clicked')}
          >
            Muted Button
          </ButtonBasic>
          <ButtonBasic
            classes="elr-button-info"
            handleClick={() => alert('info clicked')}
          >
            Info Button
          </ButtonBasic>
        </ExampleSection>
        <ExampleSection heading="Pill Buttons" subheading="">
          <ButtonBasic
            handleClick={() => alert('info clicked')}
            classes="elr-button-pill"
          >
            Pill Button
          </ButtonBasic>
          <ButtonBasic
            handleClick={() => alert('info clicked')}
            classes="elr-button-pill elr-button-success"
          >
            Success!
          </ButtonBasic>
        </ExampleSection>
        <ExampleSection heading="Gradient Buttons" subheading="">
          <ButtonBasic
            handleClick={() => alert('info clicked')}
            classes="elr-button-gradient"
          >
            Gradient
          </ButtonBasic>
          <ButtonBasic
            handleClick={() => alert('info clicked')}
            classes="elr-button-gradient elr-button-pill"
          >
            Gradient
          </ButtonBasic>
        </ExampleSection>
        <ExampleSection heading="Glass Buttons" subheading="">
          <ButtonBasic
            handleClick={() => alert('info clicked')}
            classes="elr-button-glass"
          >
            Glass Button
          </ButtonBasic>
          <ButtonBasic
            handleClick={() => alert('info clicked')}
            classes="elr-button-glass elr-button-pill"
          >
            Glass Button
          </ButtonBasic>
        </ExampleSection>
        <ExampleSection
          heading="Ghost Buttons"
          subheading="Use ghost buttons to deemphasize an action."
        >
          <ButtonBasic
            classes="elr-button-ghost elr-button-primary"
            handleClick={() => alert('info clicked')}
          >
            Ghost Button
          </ButtonBasic>
          <ButtonBasic
            classes="elr-button-ghost elr-button-pill elr-button-secondary"
            handleClick={() => alert('info clicked')}
          >
            Ghost Button
          </ButtonBasic>
        </ExampleSection>
        <ExampleSection
          heading="Icon Buttons"
          subheading="Use context buttons when you need to assign a special meaning to a button."
        >
          <ButtonBasic
            handleClick={() => alert('info clicked')}
            icon={<i className="fas fa-cat" />}
            classes="elr-button-icon"
          >
            <span className="elr-button-text">Icon Button</span>
          </ButtonBasic>
          <ButtonBasic
            handleClick={() => alert('info clicked')}
            icon={<i className="fas fa-cat" />}
            classes="elr-button-icon elr-button-info"
          >
            <span className="elr-button-text">Icon Button</span>
          </ButtonBasic>
          <ButtonBasic
            handleClick={() => alert('info clicked')}
            icon={<i className="fas fa-cat" />}
            classes="elr-button-icon elr-button-ghost elr-button-pill elr-button-primary"
          >
            <span className="elr-button-text">Icon Button</span>
          </ButtonBasic>
          <ButtonBasic
            handleClick={() => alert('info clicked')}
            classes="elr-button-icon elr-button-icon-square"
            icon={<i className="fas fa-cat" />}
          />
          <ButtonBasic
            handleClick={() => alert('info clicked')}
            classes="elr-button-icon elr-button-icon-round"
            icon={<i className="fas fa-cat" />}
          />
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default ButtonExample;
