import { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import classes from './Featured.module.css'

export const FeaturedContent = ({ code }) => {
    const accessToken = useAuth(code)
    const [albums, getAlbums] = useState([]);

    useEffect(() => {
        if (accessToken) {
            axios.get('https://api.spotify.com/v1/browse/new-releases', {
                headers: {
                    "Accept": "application/json",
                    "Authorization": "Bearer " + accessToken,
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                const response = res.data.albums.items
                getAlbums(response)
            }).catch((error) => {
                console.log(error)
            })

        }
    }, [accessToken]);

    return (
        <div className={classes.content}>
            <h3>Discover the new music right here</h3>
            <div className={classes.horizontalScroll}>
                {albums && albums.map((i, idx) =>
                    <div key={idx}>
                        <a href={i.external_urls.spotify}><img src={i.images[1].url} alt="albumArt" /></a>
                        <h3>{i.name}</h3>
                        <h4>{i.artists[0].name}</h4>
                        <h4>Release Date: {i.release_date}</h4>
                    </div>)}
            </div>
        </div>
    )
}
