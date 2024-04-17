import React, { useState } from "react";
import logo from '../images/Logo .svg'
import hamburger from '../images/🦆 icon _hamburger menu_.svg'


const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className= {`navbar ${menuOpen ? "open" : ""}`}>
                <a href="/" className="logo">
                <img src={logo} alt="logo"/>
                </a>

            {/* mobile */}
            <div className="menu-icon" onClick={toggleMenu}>
                <img src={hamburger} alt="menu icon"/>
            </div>

            {/* nav items */}
            <ul className={`nav-links ${menuOpen ? "visible" : ""}`}>
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
            </ul>
        </nav>
    );
};

export default Nav;