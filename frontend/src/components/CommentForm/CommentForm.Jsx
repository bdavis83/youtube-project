import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";


const CommentForm = (props) => {
  const [user, token] = useAuth();
  const [text, setText] = useState();
  const navigate = useNavigate();
  // const [formData, handleInputChange, handleSubmit, reset] = useCustomForm ({}, postNewComment)

  async function handleSubmit(event) {
    event.preventDefault();
    let newComment = {
      user: user.id,
      video_id: props.videoId,
      text: text,
      likes: 0,
      dislikes: 0,
    };
    debugger;
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/comments/`,
        newComment,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(newComment)
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div className="comment-form-container">
      <form className="form" onSubmit={handleSubmit}>
        <label>
          Comment: {""}
          <input
            name="text"
            type="text"
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </label>
        <button type="submit" className="comment-button">
          Post
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
