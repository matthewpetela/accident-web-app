import React from 'react';
import GoldStar from "../../assets/icons/goldstar.png"
import Fail from "../../assets/icons/fail.png"
import request from 'request';
const QuizResult = (props) => {
    //Functions for what should happen on quiz submit        
    function saveQuizGrade(){
        //request.post("http://localhost:3000/upload/userQuizResults", quizGrade)

    }
    var quizGrade = props.quizGrade.toFixed(0)
    var starsEarned = 1
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