import React, { useState } from 'react';
import { useNavigate } from 'react-router';


const SearchBar = () => {
    const [userInput, setUserInput]= useState('')
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault();
        
        if (userInput){
            navigate(`/search/${userInput}`);

            setUserInput('')
        }
    }

    return ( 
        <div>
            <div className='searchbar-component' style={{maxWidth: '300px'}}>
                <form onSubmit={handleSubmit}>
            <input type='text' placeholder ='search' onChange = {(event)=>setUserInput(event.target.value)} value = {userInput}/>
            <button className='search-button' type = "submit" onClick={handleSubmit}>Search</button>
            </form>
        </div>
        </div>
     );
}
 
export default SearchBar;