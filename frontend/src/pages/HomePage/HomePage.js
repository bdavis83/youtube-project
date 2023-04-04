import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import {KEY} from '../../localKey';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";


import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = () => {

  const [user, token] = useAuth();
  const [videos, setVideos] = useState([
    {
        "kind": "youtube#searchResult",
        "etag": "qsr7m8n9_Exu2XqcELMziicedVQ",
        "id": {
            "kind": "youtube#video",
            "videoId": "8w_RUuGQf90"
        },
        "snippet": {
            "publishedAt": "2023-03-27T16:31:48Z",
            "channelId": "UCqhnX4jA0A5paNd1v-zEysw",
            "title": "GoPro | Skiing Party Line Down a Steep Chute | Chris Whatford #Shorts",
            "description": "Friends on a pow day? #GoProAwards recipient Chris Whatford's squad rolls deep when the terrain is steep. Shot on ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/8w_RUuGQf90/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/8w_RUuGQf90/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/8w_RUuGQf90/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "GoPro",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-27T16:31:48Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "Efr94y7lITudRAJaUEANNC9CXLg",
        "id": {
            "kind": "youtube#video",
            "videoId": "sTlMUrd9YcY"
        },
        "snippet": {
            "publishedAt": "2023-02-12T17:00:10Z",
            "channelId": "UCaEXnwWYRc5ph2QqQQviWlA",
            "title": "Skiing The STEEPEST Runs At COPPER MOUNTAIN!!",
            "description": "Filmed on the Insta260 X3, link below!! What an absolute dream of a day skiing the bowls of Copper Mountain. As an east coast ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/sTlMUrd9YcY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/sTlMUrd9YcY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/sTlMUrd9YcY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "The Bag o' Tricks",
            "liveBroadcastContent": "none",
            "publishTime": "2023-02-12T17:00:10Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "N6iOu0LXdO0BKXnGN53YnErpbac",
        "id": {
            "kind": "youtube#video",
            "videoId": "fbqHK8i-HdA"
        },
        "snippet": {
            "publishedAt": "2021-11-03T12:00:10Z",
            "channelId": "UCTtEhdlWz5erVK734-Gn0VQ",
            "title": "The Most Insane Ski Run Ever Imagined - Markus Eder&#39;s The Ultimate Run",
            "description": "Watch the exclusive behind the scenes on Red Bull TV https://www.redbull.com/int-en/episodes/the-ultimate-run-s1-e2 ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/fbqHK8i-HdA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/fbqHK8i-HdA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/fbqHK8i-HdA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Red Bull Snow",
            "liveBroadcastContent": "none",
            "publishTime": "2021-11-03T12:00:10Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "dvvR1JcwXLEw5vYND8Pv2kCcjXs",
        "id": {
            "kind": "youtube#video",
            "videoId": "iZ-W2oEZfVg"
        },
        "snippet": {
            "publishedAt": "2022-02-07T08:48:06Z",
            "channelId": "UCTl3QQTvqHFjurroKxexy2Q",
            "title": "Alpine Skiing Beijing 2022 | Men&#39;s downhill highlights",
            "description": "Subscribe to @olympics: http://oly.ch/Subscribe Switzerland's Beat Feuz won the men's Olympic downhill at Beijing 2022, clocking ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/iZ-W2oEZfVg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/iZ-W2oEZfVg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/iZ-W2oEZfVg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Olympics",
            "liveBroadcastContent": "none",
            "publishTime": "2022-02-07T08:48:06Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "etag": "J3q6byVLhi7BqYdbT1zPK0ReVhU",
        "id": {
            "kind": "youtube#video",
            "videoId": "uJl98t69m2k"
        },
        "snippet": {
            "publishedAt": "2023-03-14T15:00:39Z",
            "channelId": "UCTtEhdlWz5erVK734-Gn0VQ",
            "title": "Freestyle Skiing Through a School",
            "description": "First thing you want to do after finally graduating from school?! Get out as soon as possible to do what you are destined to do.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/uJl98t69m2k/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/uJl98t69m2k/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/uJl98t69m2k/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Red Bull Snow",
            "liveBroadcastContent": "none",
            "publishTime": "2023-03-14T15:00:39Z"
        }
    }
]);
  const navigate = useNavigate()
  // const [videos, setVideos] = useState([]);
  
  async function fetchVideos () {
    try {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=skiing&key=AIzaSyD7bQoBgQwYItZFD-_1_F5APxb2R4lXkwg&part=snippet&type=video&maxResults=5`, )
      console.log (response.data.items)
      setVideos(response.data.items)
    } catch (error) {
      console.log(error)
    }
    }
      useEffect (()=>{
      fetchVideos();
    }, []);

  return (
    <div className="container">
      <h1>Home Page for {user.username}</h1>
      <div className="searchBar">
        <SearchBar fetchVideos = {fetchVideos}></SearchBar>
      </div>
      <div className='body-container-grid'>
      {videos && videos.map((video)=>{
        return (
          <li key={video.id.videoId}>{video.snippet.title}</li>
        )
      })}
      </div>

      
      
    </div>
  );
};

export default HomePage;
