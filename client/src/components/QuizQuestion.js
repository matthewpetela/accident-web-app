import React from 'react';
const QuizQuestion = () => {
    function nextQuestion() {
        if(questionIndex < questionCount)
        {
            answers.push(currentAnswer)
            questionIndex = questionIndex + 1
            currentQuizQuestion = quizQuestions[questionIndex]                        
        }        
        else
        {
            currentQuizQuestion = "You finished the quiz!"
        }        
    }
    function setAnswer(answer) {
        currentAnswer = answer
    }
    const quizQuestions = ["what is 2 + 2?", "what is 3 + 3?", "what is 6 - 3?"]
    const answer = "This is a placeholder for answer text."
    var questionIndex = 0;
    var currentQuizQuestion = quizQuestions[questionIndex]
    var currentAnswer = " "
    var answer1, answer2, answer3, answer4
    answer1 = answer
    answer2 = answer
    answer3 = answer
    answer4 = answer
    var questionCount = 3
    var answers = []

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
    return (
        <form>
            <div style={questionBox}>
            <div style={innerDiv}>
                <div style={questionTextContainer}><h3 style={questionText}>{currentQuizQuestion}</h3></div>            
                
                <input type="radio" id="a1" name="answer" style={answerButtonStyling} onClick={setAnswer("A")}/>
                <label for="a1" style={answerTextStyling}>{answer1}</label><br></br>
                <input type="radio" id="a2" name="answer" style={answerButtonStyling} onClick={setAnswer("B")}/>
                <label for="a2" style={answerTextStyling}>{answer2}</label><br></br>
                <input type="radio" id="a3" name="answer" style={answerButtonStyling} onClick={setAnswer("B")}/>
                <label for="a3" style={answerTextStyling}>{answer3}</label><br></br>
                <input type="radio" id="a4" name="answer" style={answerButtonStyling} onClick={setAnswer("B")}/>
                <label for="a4" style={answerTextStyling}>{answer4}</label><br></br>
            </div>
            <button style={nextButtonStyling} onClick={nextQuestion}>Next</button>         
            
        </div>
        </form>              
       
    );
}
export default QuizQuestion;
