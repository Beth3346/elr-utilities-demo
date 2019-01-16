import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import MediaBox from '@//components/MediaBox/MediaBox';
import art from '@/assets/images/art002.jpg';

const ContentBlockExample = () => (
  <div>
    <Header heading="Content Blocks">Content Block Example</Header>
    <ContentMain>
      <section id="content-block">
        <ExampleSection heading="Media Box" subheading="">
          <MediaBox image={art} heading="Beth Rogers" buttonText="See More">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              sequi nesciunt pariatur expedita sint molestiae, ut at dolor,
              voluptates nemo non error doloribus? Incidunt, amet officiis
              pariatur assumenda, rerum quaerat libero, unde eum laborum
            </p>
          </MediaBox>
        </ExampleSection>
      </section>
    </ContentMain>
  </div>
);

export default ContentBlockExample;
