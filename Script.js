let questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Rome"],
        correctAnswer: 0
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Uranus"],
        correctAnswer: 2
    },
    {
        question: "Who painted the famous painting 'The Starry Night'?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Claude Monet"],
        correctAnswer: 1
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Hg", "Pb"],
        correctAnswer: 1
    },
    {
        question: "Who wrote the famous novel 'To Kill a Mockingbird'?",
        options: ["F. Scott Fitzgerald", "Harper Lee", "Jane Austen", "J.K. Rowling"],
        correctAnswer: 1
    }
];

let currentQuestion = 0;
let score = 0;

// Display first question
displayQuestion();

// Submit button click event
document.getElementById('submit-button').addEventListener('click', () => {
    let selectedAnswer = document.querySelector('input[name="option"]:checked');
    if (selectedAnswer) {
        let correctAnswer = questions[currentQuestion].correctAnswer;
        if (selectedAnswer.value === correctAnswer.toString()) {
            score++;
            document.getElementById('feedback').textContent = 'Correct!';
        } else {
            document.getElementById('feedback').textContent = `Incorrect! The correct answer is ${questions[currentQuestion].options[correctAnswer]}.`;
        }
        document.getElementById('score').textContent = `Score: ${score} out of ${currentQuestion + 1}`;
        currentQuestion++;
        if (currentQuestion >= questions.length) {
            document.getElementById('question').textContent = 'Quiz completed!';
            document.getElementById('options').innerHTML = '';
            document.getElementById('submit-button').disabled = true;
        } else {
            displayQuestion();
        }
    } else {
        document.getElementById('feedback').textContent = 'Please select an answer!';
    }
});

// Display question function
function displayQuestion() {
    document.getElementById('question').textContent = questions[currentQuestion].question;
    let optionsHTML = '';
    questions[currentQuestion].options.forEach((option, index) => {
        optionsHTML += `<li><input type="radio" name="option" value="${index}"> ${option}</li>`;
    });
    document.getElementById('options').innerHTML = optionsHTML;
}
