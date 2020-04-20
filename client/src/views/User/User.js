import React, {useState, useEffect} from 'react';
import request from 'request';
import NavBar from "../../components/Header/NavBar";
import UserIcon from "../../assets/icons/user.png"

function User() {    
    function getDetails(){
        const loginDetails = localStorage.getItem('token')
        var accountDetails
        request.get("https://accident-web-app.herokuapp.com/api/users/userAccount", loginDetails, accountDetails)
        Email = accountDetails.email
        Name = accountDetails.name
        var quizGrade = accountDetails.quizGrade
        if(quizGrade == 100)
        {
            quizComplete = "passed"
        }
        else
        {
            quizComplete = "not passed"
        }
    }
    function logout(){
        localStorage.removeItem('token')
        window.location.replace("https://accident-web-app.herokuapp.com/home");
    }

    var Email
    var Name
    var quizComplete

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
    const LogoutStyle = {
        backgroundColor: 'red',
        color: 'white',
        borderRadius: '20px',
        margin: 'auto',
        textAlign: 'center',
        display: 'block',
        marginTop: '3vh',
        fontSize: '3vmin'
    
    }
    getDetails()
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
                    <div>Quiz: {quizComplete}</div> 
                </div>                             
            </div>
            <button style={LogoutStyle} onClick={(e) => logout()}>Logout</button>            
        </div>
        
    );
}

export default User;
