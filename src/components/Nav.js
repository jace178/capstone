import React from "react";
import logo from '../images/Logo .svg'


const Nav = () => {
    return (
        <nav>
            <h1>Nav</h1>
            <a href="/">
            <img src={logo} alt="logo"/>
            </a>
            <li>
                <a href="/">Home</a>
            </li>
            <li>
                <a href="/">About</a>
            </li>
            <li>
                <a href="/">Services</a>
            </li>
            <li>
                <a href="/">Menu</a>
            </li>
            <li>
                <a href="/">Reservations</a>
            </li>
            <li>
                <a href="/">Order Online</a>
            </li>
            <li>
                <a href="/">Login</a>
            </li>
        </nav>
    )
};

export default Nav;