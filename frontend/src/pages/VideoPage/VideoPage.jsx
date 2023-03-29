import React, { useState } from 'react';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';

const VideoPage = (props) => {
const [videoId, setVideoId] = useState("8w_RUuGQf90")

    return ( 
        <div>
            <div>
                <VideoPlayer videoId = {videoId}/>
            </div>
            <div>
                comment form
            </div>
            <div>
                comment mapper
            </div>
        </div>
     );
}
 
export default VideoPage;