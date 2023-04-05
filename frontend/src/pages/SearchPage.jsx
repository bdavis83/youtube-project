import axios from 'axios';
import React, { useState, useEffect } from 'react';

import SearchBar from '../components/SearchBar/SearchBar';

const SearchPage = () => {
    const [video, setVideo] = useState ([])
    
    async function fetchVideos () {
        try {
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=skiing&key=AIzaSyD7bQoBgQwYItZFD-_1_F5APxb2R4lXkwg&part=snippet&type=video&maxResults=5`, )
          console.log (response.data.items)
          setVideo(response.data.items)
        } catch (error) {
          console.log(error.message)
        }
        }
        fetchVideos();

    return ( 
        <div>
            <SearchBar fetchVideos={fetchVideos}/>
        
            <ul>
                {video && video.map((video)=> {
                    return (
                        <li key={video.id}>{video.thumbnails}</li>
                    )
                })}
            </ul>
        
        </div>
)}
 
export default SearchPage;