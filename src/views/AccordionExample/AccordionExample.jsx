import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import Accordion from '../../components/Accordion/Accordion';

const items = [
  {
    id: 1,
    label: 'Accordion Item One',
    content: (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit
          voluptatem quasi maiores officia quo qui id repudiandae ipsa beatae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ex
          libero sapiente adipisci molestias perferendis enim, esse temporibus
          nesciunt, eligendi cumque repellendus possimus aliquam nostrum fugiat
          vel.
        </p>
      </div>
    )
  },
  {
    id: 2,
    label: 'Accordion Item Two',
    content: (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit
          voluptatem quasi maiores officia quo qui id repudiandae ipsa beatae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ex
          libero sapiente adipisci molestias perferendis enim, esse temporibus
          nesciunt, eligendi cumque repellendus possimus aliquam nostrum fugiat
          vel.
        </p>
      </div>
    )
  },
  {
    id: 3,
    label: 'Accordion Item Three',
    content: (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit
          voluptatem quasi maiores officia quo qui id repudiandae ipsa beatae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ex
          libero sapiente adipisci molestias perferendis enim, esse temporibus
          nesciunt, eligendi cumque repellendus possimus aliquam nostrum fugiat
          vel.
        </p>
      </div>
    )
  },
  {
    id: 4,
    label: 'Accordion Item Four',
    content: (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit
          voluptatem quasi maiores officia quo qui id repudiandae ipsa beatae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ex
          libero sapiente adipisci molestias perferendis enim, esse temporibus
          nesciunt, eligendi cumque repellendus possimus aliquam nostrum fugiat
          vel.
        </p>
      </div>
    )
  },
  {
    id: 5,
    label: 'Accordion Item Five',
    content: (
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum odit
          voluptatem quasi maiores officia quo qui id repudiandae ipsa beatae?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ex
          libero sapiente adipisci molestias perferendis enim, esse temporibus
          nesciunt, eligendi cumque repellendus possimus aliquam nostrum fugiat
          vel.
        </p>
      </div>
    )
  }
];

const AccordionExample = () => (
  <div>
    <Header heading="Accordion">Accordion Example</Header>
    <ContentMain>
      <section id="accordion">
        <ExampleSection heading="Accordion" subheading="Toggle content display">
          <Accordion items={items} initialCurrent={1} />
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default AccordionExample;
