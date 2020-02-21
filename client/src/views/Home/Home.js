import React from 'react';
import logo from '../../assets/logo.svg';
import './Home.css';

function Home() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Accident Web App
                </p>
                <p>
                  <i> Created by  Grant Boicheff, Kareem Joudeh, Brock Major, Matthew Petela, Ethan Sodikromo, Elijah Springer, & Adam Van Belkum </i>
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
        </div>
    );
}

export default Home;
