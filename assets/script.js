var container = document.querySelector(".container")
var control = document.querySelector(".controls")
var buttons = document.querySelector(".btn-grid")
var currentQuestionIndex = 0
var question = document.querySelector(".question")
var buttonParent = document.getElementById("answer-buttons")
var timeLeft =document.getElementById("time-left")
var current = {}
var timerEl = 1000
var time = 60
var timerId;
var score = 0
var correctAnswers = 0
var form =document.querySelector(".form")
var nameInput = document.querySelector("#name")
var emptyArray = []

var questionsArray = [
    {
        num:1, 
        question: "Commonly used data types do Not include:",
        answers: ["1.Strings","2.Booleans","3.Alerts","4.Numbers"], 
        correct: "3.Alerts" 
    },
    
    {
        num:2, 
        question: "The condition in an if/else statement is enclosed with ______.",
        answers: ["1.quotes","2.curly brackets","3.parenthesis","4.square brackets"], 
        correct: "3.parenthesis" 
    },
    
    {
        num:3, 
        question: "Arrays in JavaScript can be used ot store _____.",
        answers: ["1.numbers and strings","2.booleans","3.other arrays","4.all of the above"], 
        correct: "4.all of the above" 
    },
    
    {
        num:4, 
        question: "String comments must be enclosed within _____ when being assigned to variables. ",
        answers: ["1.commas","2.curly brackets","3.quotes","4.parenthesis"], 
        correct: "3.quotes" 
    },
    
    {
        num:5, 
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1.JavaScript","2.terminal/bash","3.for loops","4.console.log"], 
        correct: "4.console.log" 
    }
]

form.setAttribute("hidden", true)

function startQuiz() {
    control.setAttribute("hidden", true)
    container.removeAttribute("hidden")
    getCurrentQuestion()
    timerId = setInterval(tickTimer, 1000)
    
    
}

function getCurrentQuestion() {
    var currentQuestion = questionsArray[currentQuestionIndex]
    current = currentQuestion
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        const answer = currentQuestion.answers[i];
        buttons.children[i].textContent = answer
        buttons.children[i].setAttribute("value", answer)
    }

    const questionText = document.getElementById('question')
    questionText.innerHTML ="<h3> " + currentQuestion.question + "</h3>"
    currentQuestionIndex++
}

function handleSubmit(event) {
    event.preventDefault()
    if (event.target.value!== questionsArray[currentQuestionIndex].correct) {
        document.body.appendChild("Wrong Answer")
    }  
    
    if (event.target.value== questionsArray[currentQuestionIndex].correct){
        getCurrentQuestion()
    }      
    
}

function endQuiz() {
    clearInterval(timerId)
    form.removeAttribute("hidden")

}

function tickTimer() {
    
    time--;
    timeLeft.innerHTML=time
    
    if(time == 0) {
        endQuiz()
       
    }
    
}

function optionSelection(event) {
    
    var totalCorrectAnswers = questionsArray.length
    
    if (event.target.value.toLowerCase() === current.correct.toLowerCase()) { 
        alert('correct')
        
        correctAnswers++
        
    } else { 
        alert('not correct')
        time-=5
        
    }
    
    if (currentQuestionIndex < questionsArray.length) {
        getCurrentQuestion()
    } else{
        alert(correctAnswers + "/" + totalCorrectAnswers)
        
    }
}

function submitForm(event) {
    event.preventDefault()
    localStorage.setItem("name", nameInput.value)
    localStorage.setItem("correct-answers", correctAnswers)
    localStorage.getItem()

}
 

control.addEventListener("click", startQuiz)
buttonParent.addEventListener("click", optionSelection)
form.addEventListener('submit',submitForm)









