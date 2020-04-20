import React, {useState, useEffect} from 'react';
import request from 'request';
import NavBar from "../../components/Header/NavBar";
import UserIcon from "../../assets/icons/user.png"
import axios from 'axios';

function User() {
    function getDetails(){
        const loginDetails = localStorage.getItem('token')
        var accountDetails

        //request.get("https://accident-web-app.herokuapp.com/api/users/userAccount", loginDetails, accountDetails)

        axios
        .get(process.env.NODE_ENV === 'production'?'https://accident-web-app.herokuapp.com/api/users/userAccount':'http://localhost:5000/api/users/userAccount',
        { headers: {"Authorization" : `bearer ${loginDetails}`} })
        .then(res=>{
          console.log(res);
          quizGrade = res.data.quizGrade
          localStorage.setItem("email", res.data.email)
          localStorage.setItem("name", res.data.name)

        })
        .catch(error => {
          console.log(error)
        })


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
    var quizGrade
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

	return (
        <div>
        {getDetails()}
            <div className="head">
                <h1>City Traffic </h1>
            </div>
            <NavBar/>
            <div style={IconSpacing}><img style={Icon} src={UserIcon}/></div>
            <div style={DetailsContainer}>
                <div style={Details}>
                    <div>Name: {localStorage.getItem("name")}</div>
                    <div>Email: {localStorage.getItem("email")}</div>
                    <div>Quiz: {quizComplete}</div>
                </div>
            </div>
            <button style={LogoutStyle} onClick={(e) => logout()}>Logout</button>
        </div>

    );
}

export default User;
