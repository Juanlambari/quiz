
document.querySelector('.custom-btn').addEventListener('click', () => {

let duration = 60

display = document.getElementById('timer');
timer(duration, display);
})

const timer = (duration, display) => {
    let timer = duration;
    setInterval(() =>{
        seconds = timer;
        display.innerHTML = `${timer}`
        timer = timer < 10 ? '0' + timer : timer;

        timer -= 1;
        if(timer < 0){
            display.innerHTML = 'ACABOU!!!';
            setTimeout(function(){
                window.location.reload(true);
            }, 1000);
            
        }

    }, 1000)
}

const questions = [
    {
        question: "Uma incorporadora põe à venda diversos apartamentos de 2 e de 3 quartos. Os de 2 quartos têm varanda e custam R$ 220 000,00. Alguns apartamentos de 3 quartos não têm varanda e custam R$ 300 000,00. Se tiverem varanda, o preço será 15% maior. A previsão do mercado é de que imóveis de 2 quartos possam ser revendidos daqui a 12 meses por 5% a mais que o preço pelo qual foram comprados, enquanto apartamentos de 3 quartos poderão ser revendidos daqui a 12 meses por 4% a mais do que o valor pago, independentemente de terem varanda. Uma agência imobiliária tem R$ 1000 000,00 para investir e decidiu comprar alguns desses apartamentos. A intenção é revendê-los daqui a 12 meses com o maior lucro possível. As possibilidades de compra foram analisadas e, levando em conta o valor a investir e a previsão do mercado, uma decisão sobre a compra foi tomada. A decisão quanto à quantidade e ao tipo de apartamentos a comprar foi de ",
        answers: [
            { id: 1, text: "A)- 4 de 2 quartos.", correct: false },
            { id: 2, text: "B)- 3 de 3 quartos sem varanda.", correct: false},
            { id: 3, text: "C)-  3 de 3 quartos com varanda.", correct: false},
            { id: 4, text: "D)- 3 de 2 quartos e 1 de 3 quartos sem varanda.", correct: true},
            { id: 5, text: "E)-  1 de 2 quartos, 1 de 3 quartos sem varanda e 1 de 3 quartos com varanda.", correct: false},
        ],
    },
    /*
    {
        question: "Uma incorporadora põe à venda diversos apartamentos de 2 e de 3 quartos. Os de 2 quartos têm varanda e custam R$ 220 000,00. Alguns apartamentos de 3 quartos não têm varanda e custam R$ 300 000,00. Se tiverem varanda, o preço será 15% maior. A previsão do mercado é de que imóveis de 2 quartos possam ser revendidos daqui a 12 meses por 5% a mais que o preço pelo qual foram comprados, enquanto apartamentos de 3 quartos poderão ser revendidos daqui a 12 meses por 4% a mais do que o valor pago, independentemente de terem varanda. Uma agência imobiliária tem R$ 1000 000,00 para investir e decidiu comprar alguns desses apartamentos. A intenção é revendê-los daqui a 12 meses com o maior lucro possível. As possibilidades de compra foram analisadas e, levando em conta o valor a investir e a previsão do mercado, uma decisão sobre a compra foi tomada. A decisão quanto à quantidade e ao tipo de apartamentos a comprar foi de ",
        answers: [
            { id: 1, text: "A)- 4 de 2 quartos.", correct: false },
            { id: 2, text: "B)- 3 de 3 quartos sem varanda.", correct: false},
            { id: 3, text: "C)-  3 de 3 quartos com varanda.", correct: false},
            { id: 4, text: "D)- 3 de 2 quartos e 1 de 3 quartos sem varanda.", correct: true},
            { id: 5, text: "E)-  1 de 2 quartos, 1 de 3 quartos sem varanda e 1 de 3 quartos com varanda.", correct: false},
        ],
    },
    {
        question: "Uma incorporadora põe à venda diversos apartamentos de 2 e de 3 quartos. Os de 2 quartos têm varanda e custam R$ 220 000,00. Alguns apartamentos de 3 quartos não têm varanda e custam R$ 300 000,00. Se tiverem varanda, o preço será 15% maior. A previsão do mercado é de que imóveis de 2 quartos possam ser revendidos daqui a 12 meses por 5% a mais que o preço pelo qual foram comprados, enquanto apartamentos de 3 quartos poderão ser revendidos daqui a 12 meses por 4% a mais do que o valor pago, independentemente de terem varanda. Uma agência imobiliária tem R$ 1000 000,00 para investir e decidiu comprar alguns desses apartamentos. A intenção é revendê-los daqui a 12 meses com o maior lucro possível. As possibilidades de compra foram analisadas e, levando em conta o valor a investir e a previsão do mercado, uma decisão sobre a compra foi tomada. A decisão quanto à quantidade e ao tipo de apartamentos a comprar foi de ",
        answers: [
            { id: 1, text: "4 de 2 quartos.", correct: false },
            { id: 2, text: "3 de 3 quartos sem varanda.", correct: false},
            { id: 3, text: "3 de 3 quartos com varanda.", correct: false},
            { id: 4, text: "3 de 2 quartos e 1 de 3 quartos sem varanda.", correct: true},
            { id: 5, text: "1 de 2 quartos, 1 de 3 quartos sem varanda e 1 de 3 quartos com varanda.", correct: false},
        ],
    },
    {
        question: "Uma incorporadora põe à venda diversos apartamentos de 2 e de 3 quartos. Os de 2 quartos têm varanda e custam R$ 220 000,00. Alguns apartamentos de 3 quartos não têm varanda e custam R$ 300 000,00. Se tiverem varanda, o preço será 15% maior. A previsão do mercado é de que imóveis de 2 quartos possam ser revendidos daqui a 12 meses por 5% a mais que o preço pelo qual foram comprados, enquanto apartamentos de 3 quartos poderão ser revendidos daqui a 12 meses por 4% a mais do que o valor pago, independentemente de terem varanda. Uma agência imobiliária tem R$ 1000 000,00 para investir e decidiu comprar alguns desses apartamentos. A intenção é revendê-los daqui a 12 meses com o maior lucro possível. As possibilidades de compra foram analisadas e, levando em conta o valor a investir e a previsão do mercado, uma decisão sobre a compra foi tomada. A decisão quanto à quantidade e ao tipo de apartamentos a comprar foi de ",
        answers: [
            { id: 1, text: "A)- 4 de 2 quartos.", correct: false },
            { id: 2, text: "B)- 3 de 3 quartos sem varanda.", correct: false},
            { id: 3, text: "C)-  3 de 3 quartos com varanda.", correct: false},
            { id: 4, text: "D)- 3 de 2 quartos e 1 de 3 quartos sem varanda.", correct: true},
            { id: 5, text: "E)-  1 de 2 quartos, 1 de 3 quartos sem varanda e 1 de 3 quartos com varanda.", correct: false},
        ],
    },*/
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const comecarButton = document.getElementById("custom-btn");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex= 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function resetState() {
    nextButton.style.display = "none";
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
    const correctAnswer = answers.filter((answer) => answer.correct == true[0])

    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.id == correctAnswer.id;
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
        nextButton.innerHTML = "Play Again";
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
