const frases = [
    'É certo que sim',
    'É decididamente assim', 
    'Resposta nebulosa, tente novamente', 
    'Não é possível prever agora', 
    'Não conte com isso', 
    'Minhas fontes dizem não', 
    'A previsão não é tão boa',
    'Sinais apontam que sim'
]

const ballFrase = document.getElementById('ball-frase');
const sendButton = document.getElementById('send-button');
const questionValue = () => {
    const question = document.getElementById('question-user').value;
    return question
}
const response = document.getElementById('response');

const randomFrasesChange = () => {
    let random = Math.floor(Math.random() * 7);
    if (questionValue().length < 6) {
        response.innerHTML = 'Tem certeza que isso é uma pergunta';
    } else {
        ballFrase.innerHTML = frases[random];
        ballFrase.style.fontSize = '15px';
    }
}

sendButton.addEventListener('click', randomFrasesChange);