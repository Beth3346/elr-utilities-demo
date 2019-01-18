import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import PillLabel from '@/components/PillLabel/PillLabel';
import CornerLabel from '../../components/CornerLabel/CornerLabel';

const LabelExample = () => (
  <div>
    <Header heading="Labels">Labels Example</Header>
    <ContentMain>
      <section id="labels">
        <ExampleSection heading="Labels" subheading="Pill style labels">
          <PillLabel title="Label" />
          <PillLabel
            title="Likes"
            value="20"
            icon={<i className="fa fa-heart" />}
          />
        </ExampleSection>
        <ExampleSection
          heading="Dismissible Labels"
          subheading="Pill style labels"
        >
          <PillLabel
            dismissible={true}
            title="Likes"
            icon={<i className="fa fa-heart" />}
          />
          <PillLabel
            dismissible={true}
            title="Shares"
            icon={<i className="fa fa-heart" />}
          />
          <PillLabel
            dismissible={true}
            title="Favorites"
            icon={<i className="fa fa-heart" />}
          />
        </ExampleSection>
        <ExampleSection heading="Context Labels">
          <PillLabel contextClass="elr-label-info" title="Information" />
          <PillLabel contextClass="elr-label-danger" title="Danger" />
          <PillLabel contextClass="elr-label-warning" title="Warning" />
          <PillLabel contextClass="elr-label-success" title="Success" />
          <PillLabel contextClass="elr-label-muted" title="Muted" />
        </ExampleSection>
        <ExampleSection heading="Corner Labels">
          <div className="corner-label-box">
            <CornerLabel
              position="topLeft"
              icon={<i className="fa fa-heart" />}
            />
          </div>
          <div className="corner-label-box">
            <CornerLabel
              position="topRight"
              icon={<i className="fa fa-heart" />}
            />
          </div>
          <div className="corner-label-box">
            <CornerLabel
              position="bottomLeft"
              icon={<i className="fa fa-heart" />}
            />
          </div>
          <div className="corner-label-box">
            <CornerLabel
              position="bottomRight"
              icon={<i className="fa fa-heart" />}
            />
          </div>
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default LabelExample;
