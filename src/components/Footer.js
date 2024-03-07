import React from "react";
import logo from '../images/Logo .svg'


const Footer = () => {
    return (
        <footer>
            <h1>Footer</h1>
            <div>
                <a href="/">
                <img src={logo} alt="logo"/>
                </a>
                <p>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                </p>
            </div>
            <div>
                <h4>Important Links</h4>
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
            </div>
            <div>
                <h4>Contact</h4>
                <li>
                    <p>Address</p>
                <a href="/">5555 Main Street, Chicago</a>
            </li>
                <li>
                    <p>Phone:</p>
                <a href="/">555-123-4567</a>
            </li>
                <li>
                    <p>Email:</p>
                <a href="/">littllemon@restaurant.com</a>
            </li>
            </div>
            <div>
                <h4>Social Media Links</h4>
                <li>
                <a href="/">Twitter</a>
            </li>
            <li>
                <a href="/">Instagram</a>
            </li>
            <li>
                <a href="/">Facebook</a>
            </li>
            <li>
                <a href="/">Youtube</a>
            </li>
            </div>
        </footer>
    )
};

export default Footer;