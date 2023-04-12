import React, { useState, useEffect } from 'react';
import axios from 'axios';
import useAuth from '../../hooks/useAuth';

const DisplayComments = (props) => {
    
    const [comments, setComments] = useState ([])
    const [user, token] = useAuth()
   
    async function fetchComments () {
        try {
          let response = await axios.get(`http://127.0.0.1:8000/api/comments/${props.videoId}`, 
          {headers: {
            Authorization: 'Bearer ' + token,
            }})
          console.log (response.data)
          setComments(response.data)
        } catch (error) {
          console.log(error)
        }
        }
          useEffect (()=>{
          fetchComments(comments);
        }, []);
    
    return ( 
        <div className='comments'>
            
            <div>
              {comments && comments.map((comment, index) => {
                return (
                  <div className='comment-container'>
                    <div key={index}>Name: {comment.user.username}</div>
                    <div> Text: {comment.text}</div>
                    {/* <div> {comment.text}</div>
                    <div> {comment.text}</div> */}
                  </div>
                )
              })}
            </div>
            
        </div>
     );
}
 
export default DisplayComments;