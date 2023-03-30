import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';
import useCustomForm from '../../hooks/useCustomForm'

const CommentForm = (props) => {
    const [user, token]= useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit, reset] = useCustomForm ({}, postNewComment)

    async function postNewComment () {
        let newComment = {
            user:'',
            video_id:'',
            text: '',
            likes:'',
            dislikes: '',

        }
        try{
            let response = await axios.post("http://177.0.0.1:8000/api/comments/", newComment,
            {headers: {
                Authorization: 'Bearer ' + token
            }})
            navigate('/')
            
        } catch (error) {
            console.log(error.message)
        }

    }
  
    return ( 
        <div className='comment-form-container'>
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    Comment: {''}
                    <input
                        name='text'
                        type='text'
                        onChange={handleInputChange}
                        value={formData.text}
                        />
                </label>
            </form>
        </div>
     );
}
 
export default CommentForm;