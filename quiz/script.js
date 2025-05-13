

const questions = [
    {
        question: "O limite recomendável de carga a ser transportada por um caminhão é 10000 kg. Ao transportar uma carga que excede em 300 kg esse limite, o consumo de combustível é 2% maior que o consumo observado ao transportar 10000 kg. Em uma rodovia, o consumo de combustível desse caminhão é proporcional à quilometragem percorrida, quando considerada uma mesma carga transportada. Sabe-se que, transportando 10000 kg por 90 km nessa rodovia, esse caminhão consome 60 litros de combustível. Suponha que esse caminhão irá transportar uma carga de 10300 kg por 75 km nessa rodovia. Quantos litros de combustível esse caminhão consumirá para efetuar esse transporte? ",
        answers: [
            { id: 1, text: "A)- 49,0", correct: true },
            { id: 2, text: "B)- 50,0", correct: false},
            { id: 3, text: "C)-  51,0", correct: false},
            { id: 4, text: "D)- 58,8", correct: false},
            { id: 5, text: "E)-  61,2", correct: false},
        ],
    },
    
    {
        question: "Três amigos foram a um restaurante que vende diferentes opções de pratos, cada um deles comercializados a um mesmo valor fixo, em real. Eles consumiram, juntos, R$ 16,50 em sucos e cada um pediu exatamente um desses pratos, sendo esses os únicos gastos efetuados no restaurante. O valor total da conta foi de R$ 82,50, incluída nesse valor uma taxa de serviço de 10%, calculada sobre todos os gastos efetuados. Qual é o preço cobrado, em real, de cada prato comercializado nesse restaurante? ",
        answers: [
            { id: 1, text: "A)- 19,25", correct: false },
            { id: 2, text: "B)- 19,50", correct: false},
            { id: 3, text: "C)- 19,80", correct: false},
            { id: 4, text: "D)- 20,00", correct: false},
            { id: 5, text: "E)- 24,20 ", correct: true},
        ],
    },
    {
        question: "Uma piscina tem capacidade de 2 500 000 litros. Seu sistema de abastecimento foi regulado para ter uma vazão constante de 6 000 litros de água por minuto. O mesmo sistema foi instalado em uma segunda piscina, com capacidade de 2750000 litros, e regulado para ter uma vazão, também constante, capaz de enchê-la em um tempo 20% maior que o gasto para encher a primeira piscina. A vazão do sistema de abastecimento da segunda piscina, em litro por minuto, é: ",
        answers: [
            { id: 1, text: "8250.", correct: false },
            { id: 2, text: "7920.", correct: false},
            { id: 3, text: "6545.", correct: true},
            { id: 4, text: "5500.", correct: false},
            { id: 5, text: "5280.", correct: false},
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
