import React, { useState } from 'react';



const SearchBar = (props) => {
    const [search, setSearch] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        props.fetchVideos(search)
        
    }

    return ( 
        
            <div className='searchbar-component' >
                <form onSubmit={handleSubmit}>
                    <input type='text' name='search'  value = {search} onChange = {(event)=>setSearch(event.target.value)}/>
                        <button className='search-button' type = "submit" onClick={handleSubmit}>Search</button>
                </form>
        </div>
        
     );
}
 
export default SearchBar;