

const questions = [
    {
        question: "Júlia acertou 75% das questões de Matemática do teste e Mariana acertou 4/5. Quem acertou mais questões? ",
        answers: [
            { id: 1, text: "A)- Júlia", correct: false },
            { id: 2, text: "B)- Mariana", correct: true},
            { id: 3, text: "C)- As duas acertaram o mesmo número de questões.", correct: false},
        ],
    },
    
    {
        question: "Na promoção de uma loja de eletrodomésticos, um aparelho de som que custava R$ 400,00 teve um desconto de 12%. Quanto o cliente que decidir comprar o equipamento pagará?",
        answers: [
            { id: 1, text: "A)- R$ 372,00", correct: false },
            { id: 2, text: "B)- R$ 342,00", correct: false},
            { id: 3, text: "C)- R$ 362,00", correct: false},
            { id: 4, text: "D)- R$ 352,00", correct: true},
            
        ],
    },
    {
        question: "Em um concurso, 520 candidatos se inscreveram. No dia da prova apenas 364 candidatos compareceram. Neste caso, qual foi a porcentagem dos candidatos que faltaram a prova?",
        answers: [
            { id: 1, text: "A)- 10%", correct: false },
            { id: 2, text: "B)- 20%", correct: false},
            { id: 3, text: "C)- 30%", correct: true},
            { id: 4, text: "D)- 40%", correct: false},
            
        ],
    },
    {
        question: "Em uma indústria, o setor de qualidade constatou que um lote com 4500 peças, 180 apresentavam algum defeito. Para um lote ser aprovado é necessário que o número de peças com defeito seja inferior a 3%. Neste caso, o lote foi aprovado ou reprovado?",
        answers: [
            { id: 1, text: "A)- Aprovado com 1% de peças com defeito.", correct: false },
            { id: 2, text: "B)- Aprovado com 2% de peças com defeito.", correct: false},
            { id: 3, text: "C)-  Reprovado com 3% de peças com defeito.", correct: false},
            { id: 4, text: "D)- Reprovado com 4% de peças com defeito.", correct: true},
    
        ],
    },
    {
        question: "Um instituto de pesquisa constatou que, nos últimos dez anos, o crescimento populacional de uma cidade foi de 135,25%. Qual é a representação decimal da taxa percentual desse crescimento populacional?",
        answers: [
            { id: 1, text: "A)- 13525,0", correct: false },
            { id: 2, text: "B)- 135,25",  correct: false},
            { id: 3, text: "C)- 13,525",  correct: false},
            { id: 4, text: "D)- 1,3525",  correct: true},
            { id: 5, text: "E)- 0,13525", correct: false},
        ],
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const resolucoesButton = document.getElementById("custom-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
    document.querySelector('.custom-btn').style.display = "none"
}

function resetState() {
    nextButton.style.display = "none";
    resolucoesButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.dataset.id = answer.id;
        button.classList.add("btn");
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function selectAnswer(e) {
    answers = questions[currentQuestionIndex].answers;
    const correctAnswer = answers.filter((answer) => answer.correct == true)

    const selectedBtn = e.target;
    const isCorrect = Number(selectedBtn.dataset.id) == correctAnswer[0].id;
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else {
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach((button) => {
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
    function  showScore() {
        resetState();
        questionElement.innerHTML = `Você acertou ${score} de ${questions.length}!`;
        nextButton.innerHTML = "Jogar Denovo";
        resolucoesButton.innerHTML = "Resoluções";
        
        resolucoesButton.style.display = "block";
        nextButton.style.display = "block";
    }

    function handleNextButton() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showScore();
        }
    }

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})
startQuiz();
// https://www.todamateria.com.br/exercicios-de-porcentagem/