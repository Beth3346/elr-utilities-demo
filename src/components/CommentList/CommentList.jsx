import React, { useState } from 'react';
import Comment from '@/components/Comment/Comment';
import cat from '@/assets/images/cat5.jpg';

const CommentList = ({ initialComments }) => {
  const [comments, setComments] = useState(initialComments);
  const updateComments = (newReply, id) => {
    // find comment by id
    // add reply to reply array
    const newComments = [...comments];
    const current = newComments.find(comment => {
      return comment.id === id;
    });
    const newId = 7;

    current.comments.push({
      id: newId,
      author: 'Author',
      avatar: cat,
      timestamp: 'Just Now',
      body: newReply,
      comments: []
    });

    setComments(newComments);
  };

  return (
    <div className="comments">
      {comments.map(comment => (
        <Comment
          key={comment.id}
          comment={comment}
          updateComments={updateComments}
        />
      ))}
    </div>
  );
};

export default CommentList;
