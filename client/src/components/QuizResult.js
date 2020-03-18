import React from 'react';
import GoldStar from "../assets/icons/star.png"
const QuizResult = () => {        
    
    var quizGrade = 100
    var starsEarned = 1
    var passed = true;
    const questionBox = {
        backgroundColor: "royalblue",
        textAlign: 'center',
        display: 'inline-block',
        borderRadius: '20px',
        margin: 'auto'        
    }
    const innerDiv = {
        margin: '100px',
    }
    const answerButtonStyling = {
                        
    }
    const answerTextStyling = {
        fontSize: '1.1vw',        
    }
    const questionText = {
        width: '25vw',        
        margin: "15px",
        fontSize: '1.3vw'        
    }
    const questionTextContainer = {
        backgroundColor: 'white',
        borderRadius: '20px',
        marginBottom: '30px'
    }
    const nextButtonStyling = {
        margin: '15px',
        marginTop: '0px',
        fontSize: '1.1vw',
        borderRadius: '15px'
    }
    const answer = "This is a placeholder for answer text."
    return (                
        <div style={questionBox}>
            <div style={innerDiv}>
                <div style={questionTextContainer}><h3 style={questionText}>You scored a {quizGrade}% and earned {starsEarned} gold stars.</h3></div>
                <img src={GoldStar}/>          
            </div>                 
        </div>
    );
}

export default QuizResult;
