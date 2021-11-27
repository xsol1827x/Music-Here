import React from 'react'
import { Button } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material'
import classes from './Login.module.css'

const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=c9813aba37d8468b84f8fcecad111a73&response_type=code&redirect_uri=http://localhost:3000/featured"

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF"
        }
    }
})

export const Login = () => {
    return (
        <div className={classes.button}>
            <ThemeProvider theme={theme}>
                <a href={AUTH_URL}><Button variant="outlined" color="primary" style={{ fontWeight: "bold" }}>Login with Spotify</Button></a>
            </ThemeProvider>
        </div>
    )
}


