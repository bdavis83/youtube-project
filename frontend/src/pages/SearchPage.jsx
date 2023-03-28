import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const SearchPage = () => {
    const [search, setSearch] = useState ([])
    const navigate = useNavigate()
    useEffect (()=>{
        const fetchVideos = async () => {
            try {
                let response = await axios.get('https://jsonplaceholder.typicode/users');
                setSearch (response.data)
            } catch (error) {
                console.log (error)
            }
        };
        fetchVideos();

    }, []);

    const handleClick = (video) => {
        navigate (`/details/${user.id}`, {
            state: {
                name: video.name,
            }
        })
    }
    return ( 
        <div>
            <h1>Results</h1>
            {search && search.map((video)=>{
                return (
                    <li key={video.id}>
                    <button onClick={()=> handleClick(video)}></button>
                    </li>
                )
            })
                
            }
        </div>
     );
}
 
export default SearchPage;