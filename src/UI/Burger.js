import React, { Fragment, useState } from 'react'
import Menu from '@mui/material/Menu';
import { MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import classes from './Burger.module.css'

export const Burger = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <div>
                <div className={classes.topNav}>
                    <img src={logo} alt="logo" />
                    <div>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={handleClose}>
                                <NavLink to="/" style={{ textDecoration: 'none' }}>
                                    <p>Home</p>
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <NavLink to="/featured" style={{ textDecoration: 'none' }}>
                                    <p>New</p>
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <NavLink to="/new-releases" style={{ textDecoration: 'none' }}>
                                    <p>Featured</p>
                                </NavLink>
                            </MenuItem>
                            <MenuItem onClick={handleClose}>
                                <NavLink to="/discover" style={{ textDecoration: 'none' }}>
                                    <p>Discover</p>
                                </NavLink>
                            </MenuItem>
                        </Menu>
                    </div>
                    <div className={classes.icon} style={{ paddingLeft: "16px" }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" onClick={handleClick}>
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
