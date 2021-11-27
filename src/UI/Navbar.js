import React from 'react'
import classes from './Navbar.module.css'
import logo from '../images/logo.png'
import { NavLink } from 'react-router-dom'
import { Burger } from './Burger'

export const Navbar = () => {
    return (
        <div>
            <div className={classes.nav}>
                <header>
                    <NavLink to="/" className={classes.logo}><img src={logo} alt="logo" /></NavLink>
                    <nav>
                        <ul className={classes.nav}>
                            <li><NavLink to="/" style={({ isActive }) => ({ color: isActive ? 'rebeccapurple' : 'white', fontWeight: isActive ? 'bold' : '' })}>Home</NavLink></li>
                            <li><NavLink to="/featured" style={({ isActive }) => ({ color: isActive ? 'rebeccapurple' : 'white', fontWeight: isActive ? 'bold' : '' })}>New</NavLink></li>
                            <li><NavLink to="/new-releases" style={({ isActive }) => ({ color: isActive ? 'rebeccapurple' : 'white', fontWeight: isActive ? 'bold' : '' })}>Featured</NavLink></li>
                            <li><NavLink to="/discover" style={({ isActive }) => ({ color: isActive ? 'rebeccapurple' : 'white', fontWeight: isActive ? 'bold' : '' })}>Discover</NavLink></li>
                        </ul>
                    </nav>
                </header>
            </div>

            <div className={classes.mobileMenu}>
                <Burger />
            </div>
        </div>
    )
}
