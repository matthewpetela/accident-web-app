import React, {useState, useEffect} from 'react';
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import './Quiz.css';
import NavBar from "../../components/Header/NavBar";
import QuizData from "./DummyData";
import request from 'request';

function Quiz() {
    const [questionIndex, editIndex] = useState(0)
    const [userAnswers, editUAnswers] = useState([])
    const [currentAnswer, editCurrentA] = useState("")

    var quizComplete
    //Is this function correct?
    function isQuizComplete()
    {
        const loginDetails = localStorage.getItem('token')
        var accountDetails
        request.get("https://accident-web-app.herokuapp.com/api/users/userAccount", loginDetails, accountDetails)
        var quizGrade = accountDetails.quizGrade
        if(quizGrade == 100)
        {
            quizComplete = true
        }
        else
        {
            quizComplete = false
        }
    }
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
    if(!quizComplete)
    {
        return (       
            <div className="App">
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
	else{
        return (       
            <div className="App">
                <div className="head">
                    <h1>City Traffic </h1>
                </div>
                <NavBar/>
                <div style={quizBackground}>
                    <h1>Quiz already passed!</h1>
                </div>            
                 
            </div>
            
        );
    }
}

export default Quiz;
