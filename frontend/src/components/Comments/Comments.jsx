import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = (props) => {
    
    const [comment, setComment] = useState ([])
    const [formData, handleInputChange, handleSubmit] = useCustomForm (initialValues, postNewComment)

    async function fetchComments () {
        try {
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=skiing&key=AIzaSyD7bQoBgQwYItZFD-_1_F5APxb2R4lXkwg&part=snippet&type=video&maxResults=5`, )
          console.log (response.data.items)
          setComment(response.data.items)
        } catch (error) {
          console.log(error)
        }
        }
          useEffect (()=>{
          fetchComments();
        }, []);
    
    return ( 
        <div className='comments'>
            <h3 className="comments-title">Commments</h3>
            <div className='comment-container'>

            </div>
            
        </div>
     );
}
 
export default Comments;