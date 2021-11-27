import React from 'react'
import { FeaturedContent } from './FeaturedContent';
import { Login } from '../UI/Login';

//get the code every time the user logs in
const code = new URLSearchParams(window.location.search).get('code');

const Featured = () => {
    return (
        <div>
            <h1>New Releases</h1>
            {code ? <FeaturedContent code={code} /> : <div>
                <p>To view this page, please login with Spotify</p>
                <Login />
            </div>
            }
        </div>
    )
}

export default Featured
