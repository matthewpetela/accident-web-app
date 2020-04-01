import React from 'react';
import GoldStar from "../assets/icons/goldstar.png"
import Fail from "../assets/icons/fail.png"
const QuizResult = (props) => {        
    
    var quizGrade = props.quizGrade.toFixed(0)
    var starsEarned = 1
    const questionBox = {
        backgroundColor: "royalblue",        
        display: 'inline-block',
        borderRadius: '20px',
        maxWidth: '40vw',        
        minHeight: '30vw',
        maxHeight: '30vw',
        margin: 'auto',
        border: '2px solid'        
    }
    const innerDiv = {
        margin: '130px',        
    }    
    const questionText = {
        width: '90%',
        height: '90%',        
        margin: "auto",        
        fontSize: 'vw',
        textAlign: 'center',
        color: 'black'        
    }
    const questionTextContainer = {
        backgroundColor: 'white',
        borderRadius: '20px',
        marginBottom: '100px',        
        
    }    
    if(quizGrade >= 100)
    {
        return (                
            <div style={questionBox}>
                <div style={innerDiv}>
                    <div style={questionTextContainer}><h3 style={questionText}>You scored a {quizGrade}% and earned a gold star.</h3></div>
                    <img src={GoldStar}/>          
                </div>                 
            </div>
        ); 
    }
    else
    {
        return (                
            <div style={questionBox}>
                <div style={innerDiv}>
                    <div style={questionTextContainer}><h3 style={questionText}>You scored a {quizGrade}% and didn't earn any stars.</h3></div>
                    <img src={Fail}/>          
                </div>                 
            </div>
        );
    }
}

export default QuizResult;
