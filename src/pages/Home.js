import React from 'react'
import classes from './Home.module.css'
import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material'
import { NavLink } from 'react-router-dom'

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF"
        }
    }
})

export const Home = () => {
    return (
        <div>
            <div className={classes.banner}>
                <h1 className={classes.title}>WATERPARKS</h1>
                <img src="https://cdn.mos.cms.futurecdn.net/AxEJmnKzoW5xfGczRqin5e.jpg" alt="banner" />
            </div>

            <h2>ARTIST OF THE MONTH</h2>
            <h1 className={classes.bandName}>WATERPARKS</h1>

            <div className={classes.about}>
                <a href="https://open.spotify.com/artist/3QaxveoTiMetZCMp1sftiu"><img src="https://secretfangirls.files.wordpress.com/2019/08/waterparks-2019-header.jpg" alt="artist" /></a>
                <div className={classes.innerText}>
                    <p>Waterparks never sit still. The Houston trio—Awsten Knight [vocals, guitar], Otto Wood [drums], and Geoff Wigington [guitar]—manically move forward, shucking and jiving between fits of rock, alternative, and electronic with pop ambition and hip-hop’s bold and blatant disregard for the rules. In 2020, the boys only pick up the pace as they ready new music after signing a new deal with 300 Entertainment. “You don’t have to stick to one thing,” exclaims Awsten. “Over the years, we’ve gotten better at switching it up. By making moves like getting with 300 (an almost exclusively hiphop oriented label) and not forfeiting our guitars once we signed the deal, I think we’re actually taking steps to help rock. Either way, fuck genres and expectations. There’s no reason to be limited.” By doing so, these musicians consistently raise the bar. 2019’s FANDOM elevated them to new critical and commercial peaks. Marking a series of career bests, it landed at #2 on the Billboard Top Alternative Albums Chart, granting their first Top 40 debut on the Billboard Top 200. KERRANG! rated it “4-out-of-5 stars,” and MTV admitted, “We have no choice but to stan.”</p>
                </div>
            </div>

            <h2 className={classes.hitTitle}>TOP HITS</h2>
            <div className={classes.hits}>
                <ul>
                    <li>
                        <a href="https://open.spotify.com/album/1uh8SiLASOMowO5TWEYmbw"><img src="https://upload.wikimedia.org/wikipedia/en/a/a6/Double_Dare_-_Waterparks_-_album_artwork.png" alt="album1" /></a>
                        <p>DOUBLE DARE</p>
                        <p>RELEASE DATE: 4 November 2016</p>
                    </li>
                    <li>
                        <a href="https://open.spotify.com/album/0DUGIaBZCKKPCqIBsRs9pV"><img src="https://upload.wikimedia.org/wikipedia/en/4/4c/Waterparks_Entertainment.jpg" alt="album2" /></a>
                        <p>ENTERTAINMENT</p>
                        <p>RELEASE DATE: 26 January 2018</p>
                    </li>
                    <li>
                        <a href="https://open.spotify.com/album/6W5NAcsq5dV2vMcxPFWXTb"><img src="https://upload.wikimedia.org/wikipedia/en/5/58/Waterparks_Fandom_Cover_Art_2019.jpg" alt="album3" /></a>
                        <p>FANDOM</p>
                        <p>RELEASE DATE: 11 October 2019</p>
                    </li>
                </ul>
            </div>

            <div className={classes.button}>
                <ThemeProvider theme={theme}>
                    <NavLink to="/featured"><Button variant="outlined" color="primary" style={{ fontWeight: "bold" }}>EXPLORE MORE</Button></NavLink>
                </ThemeProvider>
            </div>

        </div>
    )
}
