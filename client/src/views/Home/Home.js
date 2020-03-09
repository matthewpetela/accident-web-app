import React from 'react';
import logo from '../../assets/logo.svg';
import NavBar from "../../components/Header/NavBar";
import Options from "../../components/Options";
import Services from "../../components/Services";
import './Home.css';

function Home() {
    return (
        <div className="App">
            <input type="text" placeholder="Search"/>
            <div className="head">
            <h1> Welcome to City Traffic </h1>
            </div>
            <NavBar />
            <div className="description">
                <h2>
                    This web app's function is to help the user compare
                    traffic and accident reports from different cities.
                    It also provides information for insurance and weather reports,
                    as well as driving tests to earn stars for insurance discounts.
                </h2>
            </div>
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                </a>
            </header>
            <Options/>
            <Services/>
        </div>
    );
}

export default Home;
