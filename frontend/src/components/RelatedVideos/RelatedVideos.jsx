import React, { useState, useEffect } from 'react';


const RelatedVideos = ({video, update}) => {

    const [relVideos, setRelVideos] = useState([]);
    const url = `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${video}&type=video&maxResults=5&key=AIzaSyD7bQoBgQwYItZFD-_1_F5APxb2R4lXkwg.&part=snippet`

    useEffect(()=> {
        async function fetchRelatedVideos () {
            try {
              let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${video}&type=video&maxResults=5&key=AIzaSyD7bQoBgQwYItZFD-_1_F5APxb2R4lXkwg.&part=snippet`)
              console.log (response.data.items)
              setRelVideos(response.data.items)
            } catch (error) {
              console.log(error)
            }
            }
              useEffect (()=>{
                fetchRelatedVideos(`search?part=snippet&q=${videos}`).then((data)=> setRelVideos(data.items))
            }, [videos]);
    })
    return ( 
        <div className='related-videos'>
            <h3>Related Videos</h3>
        </div>
     );
}
 
export default RelatedVideos;