import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './RelatedVideos.css'



const RelatedVideos = (props) => {

    const [relVideos, setRelVideos] = useState([]);
    const url = `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.videoId}&key=AIzaSyD7bQoBgQwYItZFD-_1_F5APxb2R4lXkwg&part=snippet&type=video&maxResults=5`

    
        async function fetchRelatedVideos () {
            try {
              let response = await axios.get(url)
              console.log (response.data.items)
              setRelVideos(response.data.items)
            } catch (error) {
              console.log(error)
            }
            }
              useEffect (()=>{
                fetchRelatedVideos()
            }, [props.videoId]);
    
    return ( 
        <div className='related-videos'>
            <h3>Related Videos</h3>
            <ul>
                {relVideos && relVideos.map((relVideos)=> {
                    return (
                      <div className='video-box'>
                        <li key={relVideos.id.videoId}>
                            <div>
                               <Link to={`/video/${relVideos.id.videoId}`}> <img src={relVideos.snippet.thumbnails.medium.url} alt=""/></Link>
                            </div>
                            <div className='title'>
                              <h5>{relVideos.snippet.title} </h5>
                            </div>
                            <div className='description-box'>
                              <div className='description'>
                               <p>{relVideos.snippet.description.substr(0,20)}</p>
                            </div>
                            </div>
                            

                        </li>
                      </div>
                    )
                })}
            </ul>
        </div>
     );
}
 
export default RelatedVideos;