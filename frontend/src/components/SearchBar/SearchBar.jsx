import React, { useState } from 'react';


const SearchBar = ({userInput, setUserInput}) => {


    return ( 
        <div className='searchbar-component' style={{maxWidth: '100px'}}>
            <input type='text' placeholder ='search' onChange = {(e)=>setUserInput(e.target.value)} value = {userInput}/>
            {/* <button className='search-button' type = "button" onClick={handleSubmit}>Search</button> */}
        </div>
     );
}
 
export default SearchBar;