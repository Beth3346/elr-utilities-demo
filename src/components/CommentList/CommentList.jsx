import React, { useState } from 'react';
import Comment from '@/components/Comment/Comment';
import cat from '@/assets/images/cat5.jpg';

const CommentList = ({ initialComments }) => {
  const [comments, setComments] = useState(initialComments);
  const updateComments = (newReply, id) => {
    // find comment by id
    // add reply to reply array
    // if there is no id its a new comment
    // add to the end of the comments array
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

  const [newComment, setNewComment] = useState();
  const handleChange = event => {
    setNewComment(event.target.value);
  };

  return (
    <div className="comment-list">
      <div className="comments">
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            updateComments={updateComments}
          />
        ))}
      </div>
      <form
        onSubmit={e => {
          e.preventDefault();
          // handleSubmit(reply);
        }}
        className="comment-new"
      >
        <div className="elr-form-input-group">
          <label htmlFor="reply-body">Comment:</label>
          <textarea
            onChange={handleChange}
            name="reply-body"
            id="reply-body"
            cols="30"
            rows="5"
            value={newComment}
          />
        </div>
        <button className="elr-button elr-button-info" type="submit">
          Post Reply
        </button>
      </form>
    </div>
  );
};

export default CommentList;
