import React, {useState, useEffect} from 'react';
import QuizData from "./DummyData"
import QuizResult from "./QuizResult"

const QuizQuestion = (props) => {    
    const [questionIndex, editIndex] = useState(0)
    const [userAnswers, editUAnswers] = useState([])
    const [currentAnswer, editCurrentA] = useState("")
    const [complete, editComplete] = useState(false)
    const [grade, editGrade] = useState(0)
    var maxIndex = QuizData.length - 1
    function uncheckButtons()
    {
        document.getElementById("A").checked = false
        document.getElementById("B").checked = false
        document.getElementById("C").checked = false
        document.getElementById("D").checked = false
    }
    
    function NextQuestion (e)
    {
        e.preventDefault()
        if(currentAnswer == "")
        {                        
            alert("Select an answer to continue")
        }
        else if(questionIndex < maxIndex)
        {
            editUAnswers(userAnswers.concat(currentAnswer))
            editIndex(questionIndex+1)
            editCurrentA("")
            currentQuizQuestion = QuizData[questionIndex].questionText
            answerA = QuizData[questionIndex].answers.answerA
            answerB = QuizData[questionIndex].answers.answerB
            answerC = QuizData[questionIndex].answers.answerC
            answerD = QuizData[questionIndex].answers.answerD
            uncheckButtons()
        }
        else
        {
            var correctAnswers = 0
            var answers = userAnswers.slice()
            for(var i = 0; i < maxIndex; i++)
            {                
                if(answers[i] == QuizData[i].correctAnswer)
                {
                    correctAnswers++
                }
            }            
            editGrade(100 * correctAnswers/maxIndex)
            editComplete(true)            
        }                        
    }
    function selectAnswer (selection)
    {        
        editCurrentA(selection)
    }    
     
    var currentQuizQuestion = QuizData[questionIndex].questionText    
    var answerA, answerB, answerC, answerD
    answerA = QuizData[questionIndex].answers.answerA
    answerB = QuizData[questionIndex].answers.answerB
    answerC = QuizData[questionIndex].answers.answerC
    answerD = QuizData[questionIndex].answers.answerD    

    const questionBox = {
        backgroundColor: "royalblue",        
        display: 'inline-block',
        borderRadius: '20px',
        width: '50vw',        
        minHeight: '30vh',
        margin: 'auto',
        border: '2px solid'         
    }
    const innerDiv = {
        margin: 'calc(3vw + 3vh)',
        minHeight: '26vh'
    }
    const answerButtonStyling = {
        width: '3vmin',
        height: '3vmin',
        
    }
    const answerTextStyling = {
        fontSize: '2vmin',
        width: '80%'
       
    }
    const questionText = {
        width: '90%',
        minHeight: '8vh',        
        margin: "auto",      
        fontSize: '1.8vmin',
        color: 'black',        
    }
    const questionTextContainer = {
        backgroundColor: 'white',
        width: '100%',
        minHeight: '8vh', 
        borderRadius: '20px',
        marginBottom: '5vh',
        color: 'black',

    }
    const nextButtonStyling = {
        margin: 'calc(1vw + 1vh)',
        marginTop: '0px',
        fontSize: '1.8vmin',
        borderRadius: '20px',
        color: 'black',        
    }
    const questionSpacing = {
        marginBottom: '2vh',
        verticalAlign: 'center'
    }
    if(!complete)
    {
        return (
            <form>
                <div style={questionBox}>
                    <div style={innerDiv}>
                        <div style={questionTextContainer}><div style={questionText}>{currentQuizQuestion}</div></div>            
                        <div style={questionSpacing}>
                            <input type="radio" id="A" name="answer" style={answerButtonStyling} onClick={() => selectAnswer("A")}/>
                            <label for="a1" style={answerTextStyling}>{answerA}</label><br></br>
                        </div>
                        <div style={questionSpacing}>
                            <input type="radio" id="B" name="answer" style={answerButtonStyling} onClick={() => selectAnswer("B")}/>
                            <label for="a2" style={answerTextStyling}>{answerB}</label><br></br> 
                        </div>
                        <div style={questionSpacing}>
                            <input type="radio" id="C" name="answer" style={answerButtonStyling} onClick={() => selectAnswer("C")}/>
                            <label for="a3" style={answerTextStyling}>{answerC}</label><br></br> 
                        </div>   
                        <div style={questionSpacing}>
                            <input type="radio" id="D" name="answer" style={answerButtonStyling} onClick={() => selectAnswer("D")}/>
                            <label for="a4" style={answerTextStyling}>{answerD}</label><br></br> 
                        </div>                 
                        
                    </div>
                    <form>
                        <button style={nextButtonStyling} onClick={(e) => NextQuestion(e)}>Next</button>
                    </form>                   
                    
                </div>
            </form>              
           
        );
    }
    else
    {
        return (
            <QuizResult
            quizGrade = {grade}
            />
        );
    }
}
export default QuizQuestion;