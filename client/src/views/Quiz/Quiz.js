import React, {useState, useEffect} from 'react';
import QuizQuestion from "./QuizQuestion";
import QuizResult from "./QuizResult";
import './Quiz.css';
import NavBar from "../../components/Header/NavBar";
import QuizData from "./DummyData";
import request from 'request';
import axios from 'axios';

function Quiz() {
    const [questionIndex, editIndex] = useState(0)
    const [userAnswers, editUAnswers] = useState([])
    const [currentAnswer, editCurrentA] = useState("")

    var quizComplete
    var quizGrade

    function isQuizComplete()
    {
        const loginDetails = localStorage.getItem('token')
        var accountDetails

        axios
        .get(process.env.NODE_ENV === 'production'?'https://accident-web-app.herokuapp.com/api/users/userAccount':'http://localhost:5000/api/users/userAccount',
        { headers: {"Authorization" : `bearer ${loginDetails}`} })
        .then(res=>{
          console.log(res);
          quizGrade = res.data.quizGrade

        })
        .catch(error => {
          console.log(error)
        })

        if(quizGrade == 100)
        {
            quizComplete = "passed"
            localStorage.setItem("quizStatus", "true")
        }
        else
        {
            quizComplete = "not passed"
            localStorage.setItem("quizStatus", "false")
        }
    }

    const titleStyling = {
        textAlign: 'center',
        marginBottom: '100px',
        marginTop: '30px'
    }
    const containerStyling = {
        margin: '0 auto',
        textAlign: 'center'
    }
    const quizBackground = {
        marginTop: '125px'
    }
    isQuizComplete()
    if(localStorage.getItem("quizStatus") == "false" || localStorage.getItem("quizStatus") == "")
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
