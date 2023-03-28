import React from "react";

const VideoPlayer = (props) => {

    const url = 'https://www.youtube.com/embed/'

    return ( 
        <div className="videoplayer">
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
            frameborder="0"></iframe>
        </div>
     );
}
 
export default VideoPlayer;