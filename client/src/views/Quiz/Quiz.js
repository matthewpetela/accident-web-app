import React, {useState, useEffect} from 'react';
import QuizQuestion from "../../components/QuizQuestion";
import QuizResult from "../../components/QuizResult";
import './Quiz.css';
import NavBar from "../../components/Header/NavBar";

function Quiz() {
    const [questionIndex, editIndex] = useState(0)
    const [userAnswers, editUAnswers] = useState([])
    const [currentAnswer, editCurrentA] = useState("")

    const titleStyling = {
        textAlign: 'center',
        marginBottom: '100px',
        marginTop: '30px'
    }
	const pageStyling = {
        
    }
    const containerStyling = {       
        margin: '0 auto',
        textAlign: 'center'
    }
    const quizBackground = {
        marginTop: '125px'       
    }
	return (       
        <div>
            <input type="text" placeholder="Search"/>
            <div className="head">
                <h1>City Traffic </h1>
            </div>
            <NavBar/>
            <div style={quizBackground}>
                <div style={containerStyling}>
                    <QuizQuestion/>
                </div>
            </div>            
             
        </div>
        
    );
}

export default Quiz;
