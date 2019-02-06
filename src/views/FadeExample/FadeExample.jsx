import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import './FadeExample.scss';

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
            <div className="elr-fade-in">
              <div className="elr-fade-item box">
                <p>Now you can see me</p>
              </div>
            </div>
          </div>
          <div className="elr-col-half fade-box">
            <p>Hover and the box will disappear</p>
            <div className="elr-fade-out">
              <div className="elr-fade-item box">
                <p>Now you can see me</p>
              </div>
            </div>
          </div>
        </ExampleSection>
        <div className="implementation">
          <h4>Installation</h4>
          <pre>npm install elr-scss-animations --save</pre>
          <pre>yarn add elr-scss-animations</pre>
          <a href="https://github.com/Beth3346/elr-scss-animations">
            See Documentation
          </a>
        </div>
      </section>
    </ContentMain>
  </div>
);

export default FadeExample;
