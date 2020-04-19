import React, {useState, useEffect} from 'react';
import request from 'request';
import NavBar from "../../components/Header/NavBar";
import UserIcon from "../../assets/icons/user.png"

function User() {
    function getEmail()
    {
        localStorage.getItem("token")
        
        return "placeholder@gmail.com"
    }
    function getName() {
        return "John T Smith"
    }
    function getStars() {
        return "completed"
    }
    const IconSpacing = {
        textAlign: 'center',             
        color: 'blue',
        margin: 'auto',
        marginTop: '5vh',
        marginBottom: '5vh'
    }
    const Icon = {
        width: '25vmin',
        height: '25vmin'
    }
    const DetailsContainer = {
        width: '52%',
        margin: 'auto',
        textAlign: 'left',
        border: '2px solid',
        borderRadius: '20px',
        fontSize: '2.5vmin' 
    }
    const Details = {
        margin: '2vmin'
    }
    
    const Email = getEmail()
    const Name = getName()
    const StarsEarned = getStars()
	return (       
        <div>
            <div className="head">
                <h1>City Traffic </h1>
            </div>
            <NavBar/>
            <div style={IconSpacing}><img style={Icon} src={UserIcon}/></div> 
            <div style={DetailsContainer}>
                <div style={Details}>
                    <div>Name: {Name}</div>
                    <div>Email: {Email}</div>
                    <div>Quiz: {StarsEarned}</div> 
                </div>
                             
            </div>            
        </div>
        
    );
}

export default User;
