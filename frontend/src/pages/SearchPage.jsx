import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { DATA } from '../src/../localData.js'

import SearchBar from '../components/SearchBar/SearchBar';

const SearchPage = (props) => {
    const [video, setVideo] = useState ([])
    
    //below (searchterm is a parameter in the fetchvideos funtion to get us results right when we land on the search page)
    async function fetchVideos (searchTerm = "skiing") {
        try {
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyD7bQoBgQwYItZFD-_1_F5APxb2R4lXkwg&part=snippet&type=video&maxResults=5`, )
          console.log (response.data.items)
          setVideo(response.data.items)
        } catch (error) {
          console.log(error.message)
        }
        }
        ;
     useEffect (()=>{
        fetchVideos()
        }, []);

    return ( 
        <div>
            <SearchBar fetchVideos={fetchVideos}/>
        
            <ul>
                {video && video.map((video)=> {
                    return (
                        <li key={video.id.videoId}>
                            <div>
                               <Link to={`/video/${video.id.videoId}`}> <img src={video.snippet.thumbnails.default.url} alt=""/></Link>
                            </div>
                            <p>{video.snippet.title} </p>
                            <p>{video.snippet.description}</p>

                        </li>
                            
                    )
                })}
            </ul>
        
        </div>
)}
 
export default SearchPage;