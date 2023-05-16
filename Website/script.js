const quizData = [
    {
        question: "Who did Piccolo fuse with at planet Namek?",
        a: "Porunga",
        b: "King Piccolo",
        c: "Nail",
        d: "Zarbon",
        correct: "c",
    },
    {
        question: "What was the reward for saving the world from Kid Buu, that Mr. Satan gave to Goku?",
        a: "20 million zeni",
        b: "100 million zeni",
        c: "150 million zeni",
        d: "50 million zeni",
        correct: "b",
    },
    {
        question: "What was Android's 18 Name?",
        a: "Marron",
        b: "Gero",
        c: "Lapis",
        d: "Lazuli",
        correct: "d",

    },
    {
        question: "Who became guardian of Earth after Kami?",
        a: "Saonei",
        b: "Piccolo jr",
        c: "Pirina",
        d: "Dende",
        correct: "d",

    },
    {
        question: "Who was the official winner of the Cell games tournament?",
        a: "Vegeta",
        b: "Goku",
        c: "Gohan",
        d: "Mr. Satan",
        correct: "d",

    },
];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll('.answer')
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionE1.innerText = currentQuizData.question 
    a_text.innerText = currentQuizData.a 
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d 

}

function deselectAnswers() {
    answerEls.forEach(answerEl=> answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', ()=> {
    const answer= getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onClick="location.reload()">Reload</button>
            `
        }
    }
})