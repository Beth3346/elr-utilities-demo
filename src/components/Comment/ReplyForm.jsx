import React, { useState } from 'react';
import './ReplyForm.scss';

const ReplyForm = ({ handleSubmit, comment }) => {
  const [reply, setReply] = useState();
  const handleChange = event => {
    setReply({ body: event.target.value, id: comment.id });
  };

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleSubmit(reply);
      }}
      className="elr-comment-reply-form"
    >
      <div className="elr-form-input-group">
        <label htmlFor="reply-body">Comment:</label>
        <textarea
          onChange={handleChange}
          name="reply-body"
          id="reply-body"
          cols="30"
          rows="5"
          value={reply}
          placeholder="Add a reply"
        />
      </div>
      <button className="elr-button elr-button-info" type="submit">
        Post Reply
      </button>
    </form>
  );
};

export default ReplyForm;
