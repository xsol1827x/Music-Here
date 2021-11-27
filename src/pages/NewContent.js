import { useState, useEffect } from 'react'
import axios from 'axios'
import classes from './NewContent.module.css';

const NewContent = () => {
    const token = window.localStorage.getItem("token")
    const [playlists, getPlaylists] = useState([])

    useEffect(() => {
        if (token) {
            axios.get('https://api.spotify.com/v1/browse/featured-playlists', {
                headers: {
                    "Accept": "application/json",
                    "Authorization": "Bearer " + token,
                    'Content-Type': 'application/json',
                }
            }).then(res => {
                const response = res.data.playlists.items
                getPlaylists(response)
            }).catch((error) => {
                console.log(error)
            })
        }
    }, [token])

    return (
        <div className={classes.container}>
            <ul className={classes.content}>
                {playlists && playlists.map((i, idx) =>
                    <li key={idx}>
                        <a href={i.external_urls.spotify}>
                            <img src={i.images[0].url} alt="playlistCover" />
                        </a>
                        <h3>{i.name}</h3>
                        <h4>{i.description}</h4>
                    </li>)}
            </ul>
        </div>
    )
}

export default NewContent
