import React, {useState, useEffect} from 'react';
import QuizData from "../views/Quiz/DummyData"
import QuizResult from "../components/QuizResult"

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
        maxWidth: '40vw',        
        minHeight: '30vw',
        margin: 'auto'        
    }
    const innerDiv = {
        margin: '100px',
        maxHeight: '18vw'
    }
    const answerButtonStyling = {
                        
    }
    const answerTextStyling = {
        fontSize: '1.1vw',
        textAlign: 'left'        
    }
    const questionText = {
        width: '90%',
        height: '90%',        
        margin: "auto",        
        fontSize: '1.3vw'        
    }
    const questionTextContainer = {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
        minHeight: '5vw',
        borderRadius: '20px',
        marginBottom: '50px'
    }
    const nextButtonStyling = {
        margin: '15px',
        marginTop: '0px',
        fontSize: '1.1vw',
        borderRadius: '15px'
    }
    const questionSpacing = {
        marginBottom: '20px',
        display: 'block'
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
