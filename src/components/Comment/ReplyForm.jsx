import React from 'react';

const ReplyForm = ({ handleSubmit }) => (
  <form onSubmit={handleSubmit} className="elr-comment-reply-form">
    <h4 className="elr-comment-form-heading">Post a Reply</h4>
    <div className="elr-form-input-group">
      <label htmlFor="reply-body">Comment:</label>
      <textarea name="reply-body" id="reply-body" cols="30" rows="5" />
    </div>
    <button className="elr-button elr-button-info" type="submit">
      Post Reply
    </button>
  </form>
);

export default ReplyForm;
