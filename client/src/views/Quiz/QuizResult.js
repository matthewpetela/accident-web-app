import React from 'react';
import GoldStar from "../../assets/icons/goldstar.png"
import Fail from "../../assets/icons/fail.png"
import request from 'request';
import axios from 'axios';

const QuizResult = (props) => {
    var quizGrade = props.quizGrade.toFixed(0)

    //Functions that should save quiz grade
    function saveQuizGrade(){
        //request.post("https://accident-web-app.herokuapp.com/api/upload/userQuizResults", quizGrade)
        const loginDetails = localStorage.getItem('token')
        var accountDetails
        axios
        .post(process.env.NODE_ENV === 'production'?'https://accident-web-app.herokuapp.com/api/users/userAccount':'http://localhost:5000/api/users/userAccount',
        { data: {quizGrade} })
        .then(res=>{
          console.log(res);         
        })
        .catch(error => {
          console.log(error)
        })        
    }

    const questionBox = {
        backgroundColor: "royalblue",        
        display: 'inline-block',
        borderRadius: '20px',
        width: '50vw',
        height: '58vh',
        margin: 'auto',
        border: '2px solid',    
    }
    const innerDiv = {
        margin: 'calc(3vw + 3vh)'        
    }    
    const questionText = {
        width: '90%',
        height: '90%',        
        margin: "auto",        
        fontSize: '3.2vmin',
        textAlign: 'center',
        color: 'black'        
    }
    const questionTextContainer = {
        backgroundColor: 'white',
        borderRadius: '20px',
        marginBottom: '8vh',        
        
    }   
    const imageStyling = {
        width: '15vmin',
        height: '15vmin',
    } 
    if(quizGrade >= 100)
    {
        saveQuizGrade()
        return (                
            <div style={questionBox}>
                <div style={innerDiv}>
                    <div style={questionTextContainer}><h3 style={questionText}>You scored a {quizGrade}% and earned a gold star.</h3></div>
                    <img style={imageStyling} src={GoldStar}/>          
                </div>                 
            </div>
        ); 
    }
    else
    {
        saveQuizGrade()
        return (                
            <div style={questionBox}>
                <div style={innerDiv}>
                    <div style={questionTextContainer}><h3 style={questionText}>You scored a {quizGrade}% and didn't earn any stars.</h3></div>
                    <img style={imageStyling} src={Fail}/>          
                </div>                 
            </div>
        );
    }
}

export default QuizResult;