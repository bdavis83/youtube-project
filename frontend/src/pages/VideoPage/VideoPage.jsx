import React, { useState } from 'react';
import CommentForm from '../../components/CommentForm/CommentForm';
import DisplayComments from '../../components/DisplayComments/DisplayComments';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const VideoPage = (props) => {
const [videoId, setVideoId] = useState("8w_RUuGQf90")

    return ( 
        <div>
            <div>
                <VideoPlayer videoId = {videoId}/>
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