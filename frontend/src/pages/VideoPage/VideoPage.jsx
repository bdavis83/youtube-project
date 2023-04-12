import React, { useEffect, useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';

import CommentForm from '../../components/CommentForm/CommentForm';
import DisplayComments from '../../components/DisplayComments/DisplayComments';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import { useParams } from 'react-router';
import './VideoPage.css';


const VideoPage = (props) => {
  const {id}  = useParams()
    const [videoId, setVideoId] = useState(id)
    console.log (id)

    useEffect (()=>{
        setVideoId(id)
    }, [id])


    return ( 
        <div className='videopage-wrapper'>

            <div className='searchbar-wrapper'>

            <SearchBar fetchVideos={props.fetchVideos}/>
                

            </div>
            <div className='videoplayer-wrapper'>
                <VideoPlayer videoId = {videoId} />
            
            </div>
            <div className='related-videos-wrapper'>
                <RelatedVideos videoId = {videoId} setVideoId={setVideoId}/>
            </div>
            <div className='comment-form-wrapper'>
                <CommentForm videoId = {videoId}/>
            </div>
            <div className='display-comments-wrapper'>
                <DisplayComments videoId = {videoId}/>
            </div>
        </div>
     );
}
 
export default VideoPage;