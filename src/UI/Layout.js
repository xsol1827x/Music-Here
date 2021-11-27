import React from 'react'
import classes from './Layout.module.css'
import { Navbar } from './Navbar'
import Box from '@mui/material/Box'

export const Layout = (props) => {
    return (
        <div className={classes.layout}>
            <Navbar />
            <Box justifyContent="center" alignItems="center" textAlign="center">
                {props.children}
            </Box>
        </div>
    )
}
