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
}
    ];

    const questionElement = document.getElementById('question');
    const answerButton = document.getElementById('answer-buttons');
    const nextButton = document.getElementById('next-btn')
    const scoreElement = document.getElementById('score');
    const totalQuestionsElement = document.getElementById('total-questions');
    let totalQuestions = question.length;
    
    const timeElement = document.getElementById('time');
    let timeLeft = 0;

    var currentQuestionIndex = 0;
    var score = 0;
    let timer;

    function checkAnswer(isCorrect, event) {
        if (isCorrect) {
          score++;
          event.target.classList.add('correct');
        } else {
          event.target.classList.add('incorrect');
          answerButton.children[currentQuestion.answers.findIndex((answer) => answer.correct)].classList.add('correct');
        }
      
        for (let i = 0; i < answerButton.children.length; i++) {
          answerButton.children[i].disabled = true;
        }
        scoreElement.textContent = score;
        totalQuestionsElement.textContent = totalQuestions;
      }

    function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
        startTimer(300);
    }

    function startTimer(duration) {
        let timer = duration;
        let minutes, seconds;
        timeLeft = timer;
        const timerInterval = setInterval(() => {
          minutes = Math.floor(timer / 60);
          seconds = timer % 60;
          timeElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      
          if (--timer < 0) {
            clearInterval(timerInterval);
            endQuiz();
          }
        }, 1000);
      }

      function showQuestion() {
        let currentQuestion = question[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
      
        answerButton.innerHTML = ''; // Clear existing answer buttons
      
        currentQuestion.answers.forEach((answer) => {
          const button = document.createElement('button');
          button.innerHTML = answer.text;
          button.classList.add('btn');
          button.addEventListener('click', (event) => checkAnswer(answer.correct, event)); // Pass 'event' here
          answerButton.appendChild(button);
        });
      }
      
startQuiz();


alert('GoodLuck!');