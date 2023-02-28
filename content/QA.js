let currentQuestion = 0;

function checkAnswer() {
    const answerInput = document.getElementById("answerInput");
    if (answerInput.value.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
        alert("Correct!");
    } else {
        alert("Incorrect. The correct answer is: " + questions[currentQuestion].answer);
    }
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        currentQuestion = 0;
    }
    const questionText = document.getElementById("questionText");
    questionText.innerHTML = questions[currentQuestion].question;
}

