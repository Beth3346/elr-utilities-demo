import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import './ListExample.scss';

const ListExample = () => (
  <div>
    <Header heading="Lists">Lists Example</Header>
    <ContentMain>
      <section id="lists">
        <ExampleSection heading="List" subheading="some lists">
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </ExampleSection>
        <ExampleSection heading="Ordered List" subheading="some lists">
          <ol>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
            <li>Item</li>
          </ol>
        </ExampleSection>
        <ExampleSection heading="Unstyled List" subheading="some lists">
          <ul className="elr-unstyled-list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </ExampleSection>
        <ExampleSection heading="Border List" subheading="some lists">
          <ul className="elr-border-list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </ExampleSection>
        <ExampleSection heading="Inline List" subheading="some lists">
          <ul className="elr-inline-list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </ExampleSection>
        <ExampleSection heading="Bulleted List" subheading="some lists">
          <ul className="elr-bullet-list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </ExampleSection>
        <ExampleSection heading="Icon List" subheading="some lists">
          <ul className="elr-icon-list">
            <li>
              <i className="elr-list-icon fas fa-arrow-alt-circle-right" />
              Item 1
            </li>
            <li>
              <i className="elr-list-icon fas fa-arrow-alt-circle-right" />
              Item 2
            </li>
            <li>
              <i className="elr-list-icon fas fa-arrow-alt-circle-right" />
              Item 3
            </li>
            <li>
              <i className="elr-list-icon fas fa-arrow-alt-circle-right" />
              Item 4
            </li>
            <li>
              <i className="elr-list-icon fas fa-arrow-alt-circle-right" />
              Item 5
            </li>
          </ul>
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default ListExample;
