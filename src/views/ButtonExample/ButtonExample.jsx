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
import './ButtonExample.scss';

const ButtonExample = () => (
  <div>
    <Header heading="Buttons">Buttons Example</Header>
    <ContentMain>
      <section id="buttons">
        <ExampleSection heading="Buttons" subheading="">
          <ButtonBasic>Basic Button</ButtonBasic>
          <ButtonDanger>Danger Button</ButtonDanger>
          <ButtonWarning>Warning Button</ButtonWarning>
          <ButtonSuccess>Success Button</ButtonSuccess>
          <ButtonMuted>Muted Button</ButtonMuted>
          <ButtonInfo>Info Button</ButtonInfo>
          <ButtonPill>Pill Button</ButtonPill>
          <ButtonGhost>Ghost Button</ButtonGhost>
          <ButtonIcon icon={<i class="fas fa-cat" />}>Icon Button</ButtonIcon>
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default ButtonExample;
