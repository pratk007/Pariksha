const quizDB = [
    {
        question: "Q1: Who is the President of India?",
        a: "Narendra Modi",
        b: "Pranab Mukherji",
        c: "Droupadi Murmu",
        d: "Rahul Gandhi",
        ans: "ans3"
    },
    {
        question: "Q2: Who is the Prime Minister of India?",
        a: "Narendra Modi",
        b: "Amit Shah",
        c: "Rahul Gandhi",
        d: "Mayawati",
        ans: "ans1"
    },
    {
        question: "Q3: What is the Speaker of Lok Sabha?",
        a: "Arvind Kejriwal",
        b: "Om Birla",
        c: "Asaduddin Owaise",
        d: "Mamata Banerjee",
        ans: "ans2"
    },
    {
        question: "Q4: Who is the Finance Minister of India?",
        a: "Akhilesh Yadav",
        b: "Priyanka Gandhi",
        c: "Nirmala Sitharaman",
        d: "Arun Jaitley",
        ans: "ans3"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((currentAnswerElement) => {
        if(currentAnswerElement.checked){
            answer = currentAnswerElement.id;
        }
    });
    return answer;
}

const deselectAll = () => {
    answers.forEach((currentAnswerElement) => currentAnswerElement.checked = false);
}

submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };

    questionCount++;

    deselectAll();

    if(questionCount<quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML =`
            <h3> You scored ${score}/${quizDB.length} ✌️ </h3>
            <button class="btn" onclick="location.reload()">Retake Test</button>
        `;

        showScore.classList.remove('scoreArea');
    }
})