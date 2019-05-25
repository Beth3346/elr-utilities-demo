import React, { useState } from 'react';
import ReplyForm from './ReplyForm';
import './Comment.scss';
import PropTypes from 'prop-types';

const Comment = ({ comment, updateComments }) => {
  const addReply = newReply => {
    updateComments(newReply, comment.id);
  };

  const renderComment = comment => {
    const { id, avatar, author, timestamp, body, comments: replies } = comment;
    const [showForm, setShowForm] = useState(false);
    const toggleForm = () => setShowForm(!showForm);

    return (
      <div key={id} className="elr-comment">
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
            <button onClick={toggleForm} className="elr-comment-reply">
              reply
            </button>
          </div>
        </div>
        {showForm && (
          <ReplyForm
            handleSubmit={reply => addReply(reply)}
            comment={comment}
          />
        )}
        <div className="elr-comment-replies">
          {replies.map(reply => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      </div>
    );
  };

  return renderComment(comment);
};

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired
  }).isRequired
};

export default Comment;
