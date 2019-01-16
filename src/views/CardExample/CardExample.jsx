import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import ContentCard from '@/components/ContentCard/ContentCard';
import './CardExample.css';
import art from '@/assets/images/art004.jpg';

const CardExample = () => (
  <div>
    <Header heading="Cards">Cards Example</Header>
    <ContentMain>
      <section id="cards">
        <ExampleSection heading="Basic Card" subheading="">
          <div className="card-holder">
            <ContentCard
              title="A Content Card"
              buttonText="Click Here"
              classes="elr-card"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                quae! Dolores saepe mollitia praesentium totam dolorum ratione
                asperiores eum aut!
              </p>
            </ContentCard>
          </div>
        </ExampleSection>
        <ExampleSection heading="Border Card" subheading="">
          <div className="card-holder">
            <ContentCard
              title="A Border Card"
              buttonText="Click Here"
              classes="elr-card elr-card-border"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                quae! Dolores saepe mollitia praesentium totam dolorum ratione
                asperiores eum aut!
              </p>
            </ContentCard>
          </div>
        </ExampleSection>
        <ExampleSection heading="Image Card" subheading="">
          <div className="card-holder">
            <ContentCard
              title="Image Card"
              buttonText="Click Here"
              classes="elr-card"
              image={art}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                quae! Dolores saepe mollitia praesentium totam dolorum ratione
                asperiores eum aut!
              </p>
            </ContentCard>
          </div>
        </ExampleSection>
        <ExampleSection heading="Thumbnail Cards" subheading="">
          <div className="card-holder">
            <ContentCard
              title="A Thumbnail Card Centered"
              buttonText="Click Here"
              classes="elr-card elr-card-border elr-card-centered"
              thumbnail={art}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                quae! Dolores saepe mollitia praesentium totam dolorum ratione
                asperiores eum aut!
              </p>
            </ContentCard>
          </div>
          <div className="card-holder">
            <ContentCard
              title="A Thumbnail Card"
              subtitle="A Thumbnail Card"
              buttonText="Click Here"
              classes="elr-card elr-card-border"
              thumbnail={art}
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint,
                quae! Dolores saepe mollitia praesentium totam dolorum ratione
                asperiores eum aut!
              </p>
            </ContentCard>
          </div>
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default CardExample;
