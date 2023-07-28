const question = [
    {
        question: 'which type of memory allows us to unconsciously know how to tie our shoe lace?',
        answers: [
            { text: "Procedural Memory", correct: true},
            { text: "Semantic Memory", correct: false},
            { text: "Declarative Memory", correct: false},
            { text: "Episody Memory", correct: false},
        ]
    },
    {
        
        question: 'which tree is known for it"s extremely thick trunk?',
        answers: [
            { text: "umbrella", correct: false},
            { text: "tampoli", correct: false},
            { text: "Baobab", correct: true},
            { text: "mopane", correct: false},
        ]
    },
    {


    question: "Who is the Head of goverment in Germany?", 
    answers: [
        { text: "Queen", correct: false},
        { text: "Prime Minister", correct: false},
        { text: "Chancellor", correct: true},
        { text: "Premier", correct: false},
    ]
    },

    {
    question: 'A Biological Cell Must first create a replica of its DNA before it can?',
    answers: [
        { text: "Fight Infection", correct: false},
        { text: "undergo Apoptosis", correct: false},
        { text: "signal to other cells", correct: false},
        { text: "divide", correct: true},
    ]
},
{
  question: 'What is the capital of France?',
  answers: [
    { text: 'Paris', correct: true },
    { text: 'London', correct: false },
    { text: 'Berlin', correct: false },
    { text: 'Madrid', correct: false },
  ]
},
{
  question: 'Which planet is known as the "Red Planet"?',
  answers: [
    { text: 'Venus', correct: false },
    { text: 'Mars', correct: true },
    { text: 'Jupiter', correct: false },
    { text: 'Saturn', correct: false },
  ]
},
{
  question: 'What is the chemical symbol for water?',
  answers: [
    { text: 'H2O', correct: true },
    { text: 'CO2', correct: false },
    { text: 'O2', correct: false },
    { text: 'CH4', correct: false },
  ]
},
{
  question: 'Who wrote the play "Romeo and Juliet"?',
  answers: [
    { text: 'William Shakespeare', correct: true },
    { text: 'Charles Dickens', correct: false },
    { text: 'Jane Austen', correct: false },
    { text: 'Mark Twain', correct: false },
  ]
},
{
  question: 'Which country is known as the "Land of the Rising Sun"?',
  answers: [
    { text: 'China', correct: false },
    { text: 'Japan', correct: true },
    { text: 'South Korea', correct: false },
    { text: 'Thailand', correct: false },
  ]
},
{
  question: 'What is the largest mammal on Earth?',
  answers: [
    { text: 'Elephant', correct: false },
    { text: 'Giraffe', correct: false },
    { text: 'Blue Whale', correct: true },
    { text: 'Hippopotamus', correct: false },
  ]
}
    ];

    const questionElement = document.getElementById('question');
    const answerButton = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn');
    const scoreElement = document.getElementById('score');
    const totalQuestionsElement = document.getElementById('total-questions');
    const timeElement = document.getElementById('time');
    const tryAgainButton = document.getElementById('try-again');
    const tryAgainButtonBtn = document.getElementById('try-again-btn');
    
    let totalQuestions = question.length;
    let correctAnswers = 0;
    let currentQuestionIndex = 0;
    let remainingTime = 30;
    let answered = false;
    let timer;
    
    
    function updateScore() {
      scoreElement.textContent = correctAnswers;
      totalQuestionsElement.textContent = totalQuestions;
    }
    
    
    function showNextQuestion() {
      answered = false;
      if (currentQuestionIndex < totalQuestions) {
        currentQuestionIndex++;
        showQuestion();
        startTimer(30);
      } else {
        endQuiz();
      }
    
      nextButton.style.display = 'none';
      remainingTime = 30;
    }
    
    
    function startTimer(duration) {
      let minutes, seconds;
      remainingTime = duration;
      timer = setInterval(() => {
        minutes = Math.floor(remainingTime / 60);
        seconds = remainingTime % 60;
        timeElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    
        if (--remainingTime < 0) {
          clearInterval(timer);
          if (!answered) {
            currentQuestionIndex++;
            if (currentQuestionIndex < totalQuestions) {
              showQuestion();
              startTimer(30);
            } else {
              endQuiz();
            }
            nextButton.style.display = 'none';
          }
        }
      }, 1000);
    }
    
    
    function tryAgain() {
      answerButton.querySelectorAll('.btn').forEach((btn) => {
        btn.classList.remove('correct', 'incorrect');
        btn.disabled = false;
      });
      tryAgainButton.style.display = 'none';
    }
    
    
    function endQuiz() {
      alert('Congratulations! You have completed the Quiz');
    }
    
    
    function checkAnswer(isCorrect, event) {
      if (isCorrect) {
        correctAnswers++;
        event.target.classList.add('correct');
        tryAgainButton.style.display = 'none';
        nextButton.style.display = 'block';
      } else {
        event.target.classList.add('incorrect');
        tryAgainButton.style.display = 'block';
        nextButton.style.display = 'none';
      }
    
      answered = true;
    
      for (let i = 0; i < answerButton.children.length; i++) {
        answerButton.children[i].disabled = true;
      }
    
      updateScore();
    }
    
    
    function startQuiz() {
      currentQuestionIndex = 0;
      correctAnswers = 0;
      nextButton.innerHTML = "Next";
      showQuestion();
      startTimer(30);
    
      tryAgainButton.style.display = 'none';
      updateScore();
    }
    
    
    function showQuestion() {
      let currentQuestion = question[currentQuestionIndex];
      let questionNo = currentQuestionIndex + 1;
      questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    
      answerButton.innerHTML = '';
    
      currentQuestion.answers.forEach((answer) => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', (event) => checkAnswer(answer.correct, event));
        answerButton.appendChild(button);
      });
    }
    
    
    nextButton.addEventListener('click', showNextQuestion);
    tryAgainButtonBtn.addEventListener('click', tryAgain);
    
    
    startQuiz();
    nextButton.style.display = 'none';
    
    alert('GoodLuck!');
    