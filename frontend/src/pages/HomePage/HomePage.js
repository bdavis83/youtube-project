import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import {KEY} from '../../localKey';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";


import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = () => {

  const [user, token] = useAuth();
  const [videos, setVideos] = useState([
    
]);

  
  async function fetchVideos () {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=skiing&key=AIzaSyD7bQoBgQwYItZFD-_1_F5APxb2R4lXkwg&part=snippet&type=video&maxResults=5`, )
      console.log (response.data.items)
      setVideos(response.data.items)
    } catch (error) {
      console.log(error)
    }
    }
      useEffect (()=>{
        fetchVideos(`search?part=snippet&q=${videos}`).then((data)=> setVideos(data.items))
    }, []);

  return (
    <div className="container">
      <h1>Home Page for {user.username}</h1>
      <div className="searchBar">
        <SearchBar fetchVideos = {fetchVideos}></SearchBar>
      </div>
      <div className='body-container-grid'>
      {videos && videos.map((video)=>{
        return (
          <li key={video.id.videoId}>{video.snippet.title}</li>
        )
      })}
      </div>

      
      
    </div>
  );
};

export default HomePage;
