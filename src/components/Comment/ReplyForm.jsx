import React, { useState } from 'react';
import './ReplyForm.scss';

const ReplyForm = ({ handleSubmit }) => {
  const [reply, setReply] = useState('Hello');
  const handleChange = event => {
    setReply(event.target.value);
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
        />
      </div>
      <button className="elr-button elr-button-info" type="submit">
        Post Reply
      </button>
    </form>
  );
};

export default ReplyForm;
