import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import './FadeExample.css';

const FadeExample = () => (
  <div>
    <Header heading="Fade">Fade Example</Header>
    <ContentMain>
      <section id="fade">
        <ExampleSection
          heading="Smooth Fade"
          subheading="Element fades when user hovers over its container"
        >
          <div className="elr-col-half fade-box">
            <p>Hover and the box will appear</p>
            <div className="fade-in">
              <div className="fade-item box">
                <p>Now you can see me</p>
              </div>
            </div>
          </div>
          <div className="elr-col-half fade-box">
            <p>Hover and the box will disappear</p>
            <div className="fade-out">
              <div className="fade-item box">
                <p>Now you can see me</p>
              </div>
            </div>
          </div>
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default FadeExample;
