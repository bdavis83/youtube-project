import React, { useState } from 'react';
import { Button } from '@mui/material';
import './SearchBar.css'



const SearchBar = (props) => {
    const [search, setSearch] = useState('')

    function handleSubmit(event){
        event.preventDefault();
        props.fetchVideos(search)
        
    }

    return ( 
        <div className='search-bar-wrapper'>
            <div className='searchbar-component' >
                <form onSubmit={handleSubmit}>
                    <input className='searchbar' type='text' name='search'  value = {search} onChange = {(event)=>setSearch(event.target.value)}/>

                        <Button className='search-button' type = "submit" onClick={handleSubmit}variant="contained">Search</Button>

                </form>
            </div>
        </div>
        
     );
}
 
export default SearchBar;