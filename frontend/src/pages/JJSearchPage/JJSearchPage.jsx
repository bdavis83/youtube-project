import { useState, useEffect } from "react";





export default function JJSearchPage(){
    
    const [video, setVideo] = useState([])
    // BONUS TODO: set up a useEffect to search for a random search term when the component loads

    async function searchForVideos(searchTerm){

        // AXIOS REQUEST (GET videos from YouTube Data API) -> using searchTerm in the URL
        // setVideo(response.data) -> triggers a new map of videos you searched for

    }
    
    return(
        <div>
            <SearchBar searchForVideos={searchForVideos} />
            
            
            {video && video.map(video => <p>{video.title}</p>)}
        </div>
    )

}

export function SearchBar(props){
    const [searchTerm, setSearchTerm] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        props.searchForVideos(searchTerm)

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

            </form>
        </div>
    )
}