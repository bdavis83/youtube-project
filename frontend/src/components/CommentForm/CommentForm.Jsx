import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';

const CommentForm = (props) => {
    const [user, token]= useAuth()
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm (initialValues, postNewComment)

    async function postNewComment ()
        try{
            let response = await axios.post("http://177.0.0.1:8000/api/comments/", formData,
            {headers: {
                Authorization: 'Bearer ' + token
            }})
            navigate('/')
            
        } catch (error) {
            console.log(error.message)
        }
    return ( 
        <div className='comment-form-container'>
            <form className='form' onSubmit={handleSubmit}>
                <label>
                    Comment: {''}
                    <input
                        type='text'
                        onChange={handleInputChange}
                        />
                </label>
            </form>
        </div>
     );
}
 
export default CommentForm;