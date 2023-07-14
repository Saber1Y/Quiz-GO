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

    var currentQuestionIndex = 0;
    var score = 0;

    function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "Next";
        showQuestion();
    }

    function showQuestion() {
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;


    currentQuestion.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerHTML = answers.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
    });
    }  

    startQuiz();


alert(5);