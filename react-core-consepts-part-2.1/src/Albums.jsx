import { useEffect, useState } from "react";
import Album from "./Album";


const Albums = () => {

    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/albums')
        .then(res => res.json())
        .then(data => setAlbums(data))
    } ,[])

    return (
        <div>
            <h2>Albums: {albums.length} </h2>

            {
                albums.map(album => <Album album = {album}> </Album> )
            }
        </div>
    );
};

export default Albums;