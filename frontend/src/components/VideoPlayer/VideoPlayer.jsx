import React from "react";

const VideoPlayer = (props) => {

    const url = 'https://www.youtube.com/embed/'

    return ( 
        <div className="videoplayer">
            <iframe id="ytplayer" type="text/html" width="550" height="270"
            src={`https://www.youtube.com/embed/${props.videoId}?autoplay=1&origin=http://example.com`}
            frameborder="0"></iframe>
        </div>
     );


}
 
export default VideoPlayer;