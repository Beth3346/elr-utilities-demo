import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import './CommentExample.css';

const CommentExample = () => (
  <div>
    <Header heading="Comments">Comments Example</Header>
    <ContentMain>
      <section id="comments">
        <ExampleSection heading="" subheading="" />
      </section>
    </ContentMain>
  </div>
);

export default CommentExample;
