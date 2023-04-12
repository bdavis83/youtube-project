import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";
import SearchPage from "../SearchPage/SearchPage";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import './HomePage.css'

const HomePage = () => {

  const [user, token] = useAuth();
  const [video, setVideo] = useState([
    
]);

  
async function fetchVideos (searchTerm = "skiing") {
  try {
    let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=AIzaSyD7bQoBgQwYItZFD-_1_F5APxb2R4lXkwg&part=snippet&type=video&maxResults=6`, )
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
    <h2>YouTube Project</h2>
      <SearchBar fetchVideos={fetchVideos}/>
      <div className='wrapper'>
          
  
      <ul className='video-list'>
          {video && video.map((video)=> {
              return (
                  <li className='videocards' key={video.id.videoId}>
                      <div>
                         <Link to={`/video/${video.id.videoId}`}> <img src={video.snippet.thumbnails.medium.url} alt=""/></Link>
                      </div>
                      <h5 className='title'>{video.snippet.title} </h5>
                      <h6 className='description'>{video.snippet.description.slice(0,50)}</h6>
                      
                  </li>
                      
              )
          })}
      </ul>
      </div>
  </div>
)}

export default HomePage;