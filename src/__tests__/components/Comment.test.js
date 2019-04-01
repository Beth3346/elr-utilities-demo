import React from 'react';
import { getByText } from 'dom-testing-library';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Comment from '@/components/Comment/Comment';
import cat1 from '@/assets/images/cat1.jpg';

describe('Comment', () => {
  const replies = [
    {
      id: 4,
      avatar: cat1,
      author: 'Jeff Winger',
      body: 'This is a reply',
      timestamp: '30 minutes ago',
      comments: []
    },
    {
      id: 5,
      avatar: cat1,
      author: 'Jeff Winger',
      body: 'This is another reply',
      timestamp: '30 minutes ago',
      comments: []
    }
  ];
  const comp = render(
    <Comment
      comment={{
        id: 2,
        avatar: cat1,
        author: 'Jeff Winger',
        body: 'This site always has such good articles',
        timestamp: '30 minutes ago',
        comments: []
      }}
    />
  );
  it('should display a comment', () => {
    const { container } = comp;

    getByText(container, 'This site always has such good articles');
    getByText(container, 'Jeff Winger');
    getByText(container, '30 minutes ago');
  });
  it('should display an avatar', () => {
    const { container } = comp;
    const avatar = container.getElementsByTagName('img');
    expect(avatar).toHaveLength(1);
    expect(avatar[0]).toHaveAttribute('src', 'cat1.jpg');
    expect(avatar[0]).toHaveAttribute('alt', 'Jeff Winger');
  });
  it('should toggle display reply form when reply button is clicked', () => {
    const { container } = comp;
    const button = getByText(container, 'reply', { selector: 'button' });

    expect(container.getElementsByTagName('form')).toHaveLength(0);

    button.click();
    expect(container.getElementsByTagName('form')).toHaveLength(1);

    button.click();
    expect(container.getElementsByTagName('form')).toHaveLength(0);
  });
  it('should display replies', () => {
    const { container } = render(
      <Comment
        comment={{
          id: 2,
          avatar: cat1,
          author: 'Jeff Winger',
          body: 'This site always has such good articles',
          timestamp: '30 minutes ago',
          comments: replies
        }}
      />
    );
    getByText(container, 'This is a reply');
    getByText(container, 'This is another reply');
  });
  it('should display comments recursively', () => {
    const nestedReplies = [
      {
        id: 4,
        avatar: cat1,
        author: 'Jeff Winger',
        body: 'This is a reply',
        timestamp: '30 minutes ago',
        comments: [
          {
            id: 6,
            avatar: cat1,
            author: 'Annie Edison',
            body: 'I totally agree Jeff!',
            timestamp: '45 minutes ago',
            comments: [
              {
                id: 9,
                avatar: cat1,
                author: 'Annie Edison',
                body: 'Another nested reply!',
                timestamp: '45 minutes ago',
                comments: []
              },
              {
                id: 10,
                avatar: cat1,
                author: 'Annie Edison',
                body: 'Yet another nested reply!',
                timestamp: '45 minutes ago',
                comments: []
              }
            ]
          },
          {
            id: 7,
            avatar: cat1,
            author: 'Annie Edison',
            body: 'I really totally agree Jeff!',
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
        comments: [
          {
            id: 8,
            avatar: cat1,
            author: 'Annie Edison',
            body: 'Another reply!',
            timestamp: '45 minutes ago',
            comments: []
          }
        ]
      }
    ];
    const { container } = render(
      <Comment
        comment={{
          id: 2,
          avatar: cat1,
          author: 'Jeff Winger',
          body: 'This site always has such good articles',
          timestamp: '30 minutes ago',
          comments: nestedReplies
        }}
      />
    );
    getByText(container, 'This is a reply');
    getByText(container, 'This is another reply');
    getByText(container, 'I totally agree Jeff!');
    getByText(container, 'Another nested reply!');
    getByText(container, 'Yet another nested reply!');
    getByText(container, 'I really totally agree Jeff!');
  });
  it('should add a reply', () => {});
});
