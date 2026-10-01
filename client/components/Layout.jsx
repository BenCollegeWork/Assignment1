import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout() {
    return (
        <div>
            <div className="banner">
                <img src="../src/assets/Custom_Logo.png" alt="Logo" width="170" height="100" />
                <h1>Benjamin Oliveria's Portfolio</h1>
            </div>
            
            <hr />
            <nav className="navigationBar">
                <Link to="/">Home</Link> |
                <Link to="/about"> About</Link> |
                <Link to="/project"> Project</Link> |
                <Link to="/education"> Education</Link> |
                <Link to="/services"> Services</Link> |
                <Link to="/contact"> Contact</Link>
            </nav>
            <hr />
        </div>
    );
}