import React from 'react'
import { Login } from '../UI/Login';
import NewContent from './NewContent';

//get the code every time the user logs in
const code = new URLSearchParams(window.location.search).get('code');

export const New = () => {
    return (
        <div>
            <h1>Featured Playlists</h1>
            {code ? <NewContent code={code} /> : <div>
                <p>To view this page, please login with Spotify</p>
                <Login />
            </div>
            }
        </div>
    )
}
