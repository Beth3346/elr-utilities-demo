import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import ButtonBasic from '@/components/Buttons/ButtonBasic';
import ButtonSuccess from '@/components/Buttons/ButtonSuccess';
import ButtonDanger from '@/components/Buttons/ButtonDanger';
import ButtonWarning from '@/components/Buttons/ButtonWarning';
import ButtonInfo from '@/components/Buttons/ButtonInfo';
import ButtonMuted from '@/components/Buttons/ButtonMuted';
import ButtonIcon from '@/components/Buttons/ButtonIcon';
import ButtonGhost from '@/components/Buttons/ButtonGhost';
import ButtonPill from '@/components/Buttons/ButtonPill';
import ButtonIconRound from '@/components/Buttons/ButtonIconRound';
import ButtonRaised from '@/components/Buttons/ButtonRaised';
import './ButtonExample.scss';

const ButtonExample = () => (
  <div>
    <Header heading="Buttons">Buttons Example</Header>
    <ContentMain>
      <section id="buttons">
        <ExampleSection heading="Buttons" subheading="A basic button">
          <ButtonBasic>Basic Button</ButtonBasic>
          <ButtonRaised>Raised Button</ButtonRaised>
        </ExampleSection>
        <ExampleSection
          heading="Context Buttons"
          subheading="Use context buttons when you need to assign a special meaning to a button."
        >
          <ButtonDanger>Danger Button</ButtonDanger>
          <ButtonWarning>Warning Button</ButtonWarning>
          <ButtonSuccess>Success Button</ButtonSuccess>
          <ButtonMuted>Muted Button</ButtonMuted>
          <ButtonInfo>Info Button</ButtonInfo>
        </ExampleSection>
        <ExampleSection heading="Pill Buttons" subheading="">
          <ButtonPill>Pill Button</ButtonPill>
          <ButtonPill classes="elr-button-success">Success!</ButtonPill>
          <button className="elr-button-gradient">Gradient</button>
          <button className="elr-button-glass">Glass Button</button>
        </ExampleSection>
        <ExampleSection
          heading="Ghost Buttons"
          subheading="Use ghost buttons to deemphasize an action."
        >
          <ButtonGhost>Ghost Button</ButtonGhost>
        </ExampleSection>
        <ExampleSection
          heading="Icon Buttons"
          subheading="Use context buttons when you need to assign a special meaning to a button."
        >
          <ButtonIcon icon={<i className="fas fa-cat" />}>
            <span className="elr-button-text">Icon Button</span>
          </ButtonIcon>
          <ButtonIcon
            classes="elr-button-info"
            icon={<i className="fas fa-cat" />}
          >
            <span className="elr-button-text">Icon Button</span>
          </ButtonIcon>
          <ButtonIcon icon={<i className="fas fa-cat" />} />
          <ButtonIconRound icon={<i className="fas fa-cat" />} />
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default ButtonExample;
