var container = document.querySelector(".container")
var control = document.querySelector(".controls")
var buttons = document.querySelector(".btn-grid")
var currentQuestionIndex = 0
var question = document.querySelector(".question")
var buttonParent = document.getElementById("answer-buttons")
var current = {}
var timerEl = 1000


var questionsArray = [
    {
        num:1, 
        question: "Commonly used data types do Not include:",
        answers: ["1.Strings","2.Booleans","3.Alerts","4.Numbers"], // answer choices
        correct: "3.Alerts" // Correct answer
    },
    
    {
        num:2, 
        question: "The condition in an if/else statement is enclosed with ______.",
        answers: ["1.quotes","2.curly brackets","3.parenthesis","4.square brackets"], // answer choices
        correct: "3.parenthesis" // Correct answer
    },
    
    {
        num:3, 
        question: "Arrays in JavaScript can be used ot store _____.",
        answers: ["1.numbers and strings","2.booleans","3.other arrays","4.all of the above"], // answer choices
        correct: "4.all of the above" // Correct answer
     },
    
     {
        num:4, 
        question: "String comments must be enclosed within _____ when being assigned to variables. ",
        answers: ["1.commas","2.curly brackets","3.quotes","4.parenthesis"], // answer choices
        correct: "3.quotes" // Correct answer
    },
    
    {
        num:5, 
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1.JavaScript","2.terminal/bash","3.for loops","4.console.log"], // answer choices
        correct: "4.console.log" // Correct answer
    },
    
  
    
    

]


function startQuiz() {
    control.setAttribute("hidden", true)
    container.removeAttribute("hidden")
     getCurrentQuestion()
    //  startTimer()


}

function getCurrentQuestion() {
    // console.log("Getting Question")
    var currentQuestion = questionsArray[currentQuestionIndex]
    current = currentQuestion
    for (let i = 0; i < currentQuestion.answers.length; i++) {
        
        const answer = currentQuestion.answers[i];
        buttons.children[i].textContent = answer
        buttons.children[i].setAttribute("value", answer)
        
    }
// console.log(currentQuestion)
    
    // set the question txt in the index to the questions text in the loop
    const questionText =document.getElementById('question')
    questionText.innerHTML ="<h3> " + currentQuestion.question + "</h3>"
    currentQuestionIndex++
}


function handleSubmit(event) {
    // console.log(event)
    event.preventDefault()
    if (event.target.value!== questionsArray[currentQuestionIndex].correct) {
        document.body.appendChild("Wrong Answer")
    }   //figure out how to hook up the for answer buttons to this function!!



    if (event.target.value== questionsArray[currentQuestionIndex].correct){
        // console.log(correct)
        getCurrentQuestion()
    }      

}

//  function startTimer(time) {
//     console.log("timer start")
//     var time = questions.length * 15;
// }



function optionSelection(event) {
    // console.log(current)
    if(currentQuestionIndex < questionsArray.length){
        
        console.log(event.target)
        console.log(current)    
            
        
        
        
        
        getCurrentQuestion()

    }

}
 

control.addEventListener("click", startQuiz)
buttonParent.addEventListener("click", optionSelection)


