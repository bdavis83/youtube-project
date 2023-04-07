import React, { useState, useEffect } from 'react';
import axios from 'axios';


const RelatedVideos = () => {

    const [relVideos, setRelVideos] = useState([]);
    const url = `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${video.id.videoId}&type=video&maxResults=5&key=AIzaSyD7bQoBgQwYItZFD-_1_F5APxb2R4lXkwg.&part=snippet`

    
        async function fetchRelatedVideos (searchTerm = {}) {
            try {
              let response = await axios.get(url)
              console.log (response.data.items)
              setRelVideos(response.data.items)
            } catch (error) {
              console.log(error)
            }
            }
              useEffect (()=>{
                fetchRelatedVideos(`search?part=snippet&q=${video}`).then((data)=> setRelVideos(data.items))
            }, []);
    
    return ( 
        <div className='related-videos'>
            <h3>Related Videos</h3>
        </div>
     );
}
 
export default RelatedVideos;