import React from 'react';
import './Comment.scss';

const Comment = ({ avatar, author, timestamp, body }) => (
  <div className="elr-comment">
    <figure className="elr-comment-avatar">
      <img src={avatar} alt={author} />
    </figure>
    <div className="elr-comment-content">
      <div className="elr-comment-heading">
        <h3 className="elr-comment-author">{author}</h3>
        <p className="elr-comment-timestamp">{timestamp}</p>
      </div>
      <div className="elr-comment-body">
        <p>{body}</p>
        <button className="elr-comment-reply">Reply</button>
      </div>
    </div>
  </div>
);

export default Comment;
