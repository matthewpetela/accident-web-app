import React from 'react';
import QuizQuestion from "../../components/QuizQuestion";
import QuizResult from "../../components/QuizResult";
import './Quiz.css';

function Quiz() {
    const titleStyling = {
        textAlign: 'center',
        marginBottom: '150px',
        marginTop: '30px'
    }
	const pageStyling = {
        
    }
    const containerStyling = {       
        margin: '0 auto',
        textAlign: 'center'
    }
	return (       
        <div>
            <h1 style={titleStyling}>Quiz</h1>            
            <div style={containerStyling}><QuizQuestion/></div>  
        </div>
        
    );
}

export default Quiz;
