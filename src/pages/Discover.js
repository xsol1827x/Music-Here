import { Button } from '@mui/material'
import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import classes from './Discover.module.css'

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF"
        }
    }
})

const Discover = () => {
    return (
        <div className={classes.content}>
            <div className={classes.text}>
                <h4 className={classes.intro}>THIS MONTH'S DISCOVERY</h4>
                <h1 className={classes.title}>THE KOREAN INDIE SCENE:</h1>
                <p className={classes.desc}>K-Indie, or Korean indie, is the independent music in South Korea. Developed in the 1990s in Hongdae, an area in northwest Seoul, the authentic messages of the musicians stand out, and in the fact that most artists do not have publishing and distribution contracts with companies - some sign after gaining popularity.
                    Source: Wikipedia
                </p>
            </div>
            <h2>ARTISTS LIKE:</h2>
            <ul className={classes.list}>
                <li>
                    <a href="https://open.spotify.com/artist/07OePkse2fcvU9wlVftNMl"><img src="https://i.scdn.co/image/ab67706c0000bebbeeae32e2c5e576067048295b" alt="artist1" /></a>
                    <h3>SE SO NEON</h3>
                </li>
                <li>
                    <a href="https://open.spotify.com/artist/3tLTzUmenYSz1FS9ijEUuX"><img src="https://i.scdn.co/image/ab6761610000e5eb8d41dbcc1e0c1474537b6d54" alt="artist2" /></a>
                    <h3>CRYSTAL TEA</h3>
                </li>
                <li>
                    <a href="https://open.spotify.com/artist/5A5DAxEQJ5F7HA4wVVHV8a?autoplay=true"><img src="https://pbs.twimg.com/profile_images/1418097208394608643/a1zjJ-c6_400x400.jpg" alt="artist3" /></a>
                    <h3>ADIOS AUDIO</h3>
                </li>
            </ul>
            <ThemeProvider theme={theme}>
                <a href="https://open.spotify.com/playlist/37i9dQZF1DXdTb8AG95jne"><Button variant="outlined" color="primary" style={{ fontWeight: "bold" }} className={classes.button}>EXPLORE THE K-INDIE PLAYLIST</Button></a>
            </ThemeProvider>
        </div>
    )
}

export default Discover
