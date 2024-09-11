const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:' vc passa muinto tempo na internet' ,
        alternativas: [
            "sim",
            "nao"
        ]
    },
    {
    enunciado: "vc tem rede socias",
        alternativas: [
        " sim",
        "nao"
        ]
    },
    {
    enunciado: "vc ja  brigou com algem da familia por causa da rede social",
        alternativas: [
        "sim",
        "nao"
        ]
    },
    {
    enunciado: "vc usa  rede socias no trabalho",
        alternativas: [
        "sim ",
        "nao"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){ 
    perguntaAtual= perguntas [atual];
    caixaPerguntas .textContent = perguntaAtual.enunciado;
    }
        
mostraPergunta();
        