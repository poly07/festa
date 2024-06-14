
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Vamo ver se você realmente sabe fazer aquele festinha?",
        alternativas: [
            {
                texto: "feijão?",
                afirmacao: "Nunca vi festa com feijão."
            },
            {
                texto: "Doces!",
                afirmacao: "Isso e FESTA!."
            }
        ]
    },
    {
        enunciado: "Qual você prefere para aquela festinha?",
        alternativas: [
            {
                texto: "sagu eca",
                afirmacao: "sagu só em festa junina."
            },
            {
                texto: "brigadeirão delicia",
                afirmacao: "hummmmmmmmmmmmmmmm bão né?."
            }
        ]
    },
    {
        enunciado: "Qual a melhor bebida?",
        alternativas: [
            {
                texto: "Suco",
                afirmacao: "fitnes."
            },
            {
                texto: "Cervejinha",
                afirmacao: "Aí sim em."
            }
        ]
    },
    {
        enunciado: "Qual o melhor pra ouvir no churrasquinho?",
        alternativas: [
            {
                texto: "BTS",
                afirmacao: "Viado."
            },
            {
                texto: "Sertanejo",
                afirmacao: "vamo arrasta o chifre junto."
            }
        ]
    },
    {
        enunciado: "Pôs festa qual e melhor ",
        alternativas: [
            {
                texto: "Afterzinho",
                afirmacao: "que preguiça."
            },
            {
                texto: "caminha",
                afirmacao: "mó ronco."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
