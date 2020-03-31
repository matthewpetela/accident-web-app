import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className = "header">
            {/* Page Links */}
            <div className = "nav-items">
                <Link className = "nav-link" to='/home'>Home</Link>
                <Link className = "nav-link" to='/about'>About</Link>
                <Link className = "nav-link" to='/rankings'>Rankings</Link>
                <Link className = "nav-link" to='/admin'>Admin</Link>
                <Link className = "nav-link" to='/login'>Log In</Link>
                <Link className = "nav-link" to='/signin'>Sign In</Link>
                <Link className = "nav-link" to='/quiz'>Quiz</Link>
            </div>

        </div>
    )
};

export default NavBar;
