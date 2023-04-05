import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';

const VideoCard = ({videoId, snippet}) => {
    return ( 
        <Card sx={{width: '320px'}}>
            <Link to={videoId ? `/video/${videoId}`: `/video/sTlMUrd9YcY`} >
                <CardMedia image={snippet?.thumbnails?.high?.url } />
            </Link>
            <CardContent sx={{ backgroundColor: "gray", height: '106px' }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/sTlMUrd9YcY` } >
        <Typography variant="subtitle1" fontWeight="bold" color="white">
          {snippet?.title.slice(0, 60)}
        </Typography>
      </Link>
    </CardContent>   

        </Card>
     );
}
 
export default VideoCard;