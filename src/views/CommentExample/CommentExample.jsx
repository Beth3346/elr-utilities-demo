import React from 'react';
import Header from '@/components/Header/Header';
import ContentMain from '@/components/ContentMain/ContentMain';
import ExampleSection from '@/components/ExampleSection/ExampleSection';
import CommentList from '@/components/CommentList/CommentList';
import './CommentExample.css';
import cat from '@/assets/images/cat5.jpg';
import cat1 from '@/assets/images/cat1.jpg';
import cat2 from '@/assets/images/cat2.jpg';

const initialComments = [
  {
    id: 1,
    avatar: cat,
    author: 'Annie Edison',
    body: 'This article is so interesting!',
    timestamp: '10 minutes ago',
    comments: [
      {
        id: 4,
        avatar: cat1,
        author: 'Jeff Winger',
        body: 'This is a reply',
        timestamp: '30 minutes ago',
        comments: [
          {
            id: 6,
            avatar: cat,
            author: 'Annie Edison',
            body: 'I totally agree Jeff!',
            timestamp: '45 minutes ago',
            comments: []
          }
        ]
      },
      {
        id: 5,
        avatar: cat1,
        author: 'Jeff Winger',
        body: 'This is another reply',
        timestamp: '30 minutes ago',
        comments: []
      }
    ]
  },
  {
    id: 2,
    avatar: cat1,
    author: 'Jeff Winger',
    body: 'This site always has such good articles',
    timestamp: '30 minutes ago',
    comments: []
  },
  {
    id: 3,
    avatar: cat2,
    author: 'Annie Edison',
    body:
      "This is a really really long comment. This person is just going on and on and on forever and ever. Jerry: You want me to take an overview? I see a very cheap man holding a sweater trying to get away with something. That's my overview.Newman: I'm a little offended, Jerry. Jerry: You're not a little anything, Newman.\" George: I would give up red meat just to get a glimpse of you in a bra? Newman: But you remember this: when you control the mail, you control... information. Kramer: I don’t know. But I woke up in the Hudson river in a SACK. Homeless man: The government! Jerry: Women don't respect salad eaters. Jerry: You want me to take an overview? I see a very cheap man holding a sweater trying to get away with something. That's my overview. Jerry: People with guns don't understand. That's why they get guns: too many misunderstandings. Jerry: So, has the summer of George begun? Or are you still decomposing. Newman: You see, my dear, all certified mail is registered… but registered mail is not necessarily certified.",
    timestamp: '2 days ago',
    comments: []
  }
];

const CommentExample = () => {
  return (
    <div>
      <Header heading="Comments">Comments Example</Header>
      <ContentMain>
        <section id="comments">
          <ExampleSection heading="Comment List" subheading="">
            <CommentList initialComments={initialComments} />
          </ExampleSection>
        </section>
      </ContentMain>
    </div>
  );
};

export default CommentExample;
