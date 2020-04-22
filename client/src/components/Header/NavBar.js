import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import axios from 'axios';
const NavBar = () => {
    function getDetails(){
        const loginDetails = localStorage.getItem('token')
        var accountDetails
        axios
        .get(process.env.NODE_ENV === 'production'?'https://accident-web-app.herokuapp.com/api/users/userAccount':'http://localhost:5000/api/users/userAccount',
        { headers: {"Authorization" : `bearer ${loginDetails}`} })
        .then(res=>{
          console.log(res);
          localStorage.setItem("name", res.data.name)
        })
        .catch(error => {
          console.log(error)
        })
    }
    if(localStorage.getItem("loggedIn") == "true"){
        return (
            <div className = "header">
                <nav class="navbar navbar-expand-sm navbar-light bg-light">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="/home">Home</a>
                        <a class="nav-item nav-link" href="/about">About</a>
                        <a class="nav-item nav-link" href="/weather">Weather</a>
                        <a class="nav-item nav-link" href="/rankings">Rankings</a>
                        <a class="nav-item nav-link" href="/user">{localStorage.getItem("email")}</a>
                        <a class="nav-item nav-link" href="/quiz">Quiz</a>
                        <a class="nav-item nav-link" href="/admin">Admin</a>
                    </div>
                </nav>
            </div>
        )
    }
    else
    {
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
    }
};

export default NavBar;
