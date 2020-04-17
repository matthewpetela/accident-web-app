import React from 'react';
import logo from '../../assets/icons/logo.png';
import NavBar from "../../components/Header/NavBar";
import Options from "../../components/Options";
import Services from "../../components/Services";
import './Home.css';

function Home() {
    const textBlock = {         
        fontSize: '1.1vw',
        backgroundColor: 'royalblue',           
        width: '90%',
        margin: 'auto',
        flex: '1',
        marginBottom: '18px',
        marginTop: '18px',
        borderRadius: '20px',
        border: '2px solid'
    }
	
	return (
        <div className="App">
            <div className="head">
                <h1> Welcome to City Traffic </h1>
            </div>
            <NavBar />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
            </header>
            <Options/>
            <Services/>
        </div>
    );
}

export default Home;
