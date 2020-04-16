import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className = "header">
            <nav class="navbar navbar-expand-sm navbar-light bg-light">
                <div class="navbar-nav">
                    <a class="nav-item nav-link" href="/home">Home</a>
                    <a class="nav-item nav-link" href="/about">About</a>
                    <a class="nav-item nav-link" href="/weather">Weather</a>
                    <a class="nav-item nav-link" href="/rankings">Rankings</a>
                    <a class="nav-item nav-link" href="/login">Log In</a>
                    <a class="nav-item nav-link" href="/signup">Sign Up</a>
                    <a class="nav-item nav-link" href="/quiz">Quiz</a>
                    <a class="nav-item nav-link" href="/admin">Admin</a>
                </div>
            </nav>
        </div>
    )
};

export default NavBar;
