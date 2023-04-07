import React, { useEffect, useState } from 'react';
import CommentForm from '../../components/CommentForm/CommentForm';
import DisplayComments from '../../components/DisplayComments/DisplayComments';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import RelatedVideos from '../../components/RelatedVideos/RelatedVideos';
import { useParams } from 'react-router';

const VideoPage = (props) => {
  const {id}  = useParams()
    const [videoId, setVideoId] = useState(id)
    console.log (id)

    useEffect (()=>{
        setVideoId(id)
    }, [id])


    return ( 
        <div>
            <div>
                <VideoPlayer videoId = {videoId} />
            </div>
            <div>
                <RelatedVideos videoId = {videoId} setVideoId={setVideoId}/>
            </div>
            <div>
                <CommentForm videoId = {videoId}/>
            </div>
            <div>
                <DisplayComments videoId = {videoId}/>
            </div>
        </div>
     );
}
 
export default VideoPage;