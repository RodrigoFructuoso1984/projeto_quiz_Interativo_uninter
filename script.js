/* Quiz matemática  */

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')
let e = document.querySelector('#e')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q1 = {
    numQuestao   : 1,
    pergunta     : "Na construção de um shopping, foi planejado que no estacionamento houvesse 10 fileiras e que, em cada uma delas, coubessem 12 veículos, então a capacidade máxima desse estacionamento é de:",
    alternativaA : "120.",
    alternativaB : "130.",
    alternativaC : "90.",
    alternativaD: "82.",
    alternativaE: "70.",
    correta      : "A) 120.",
}

const q2 = {
    numQuestao   : 2,
    pergunta     :"O leite, fonte rica em cálcio e outras vitaminas, sempre esteve entre as bebidas mais consumidas pela população. Buscando atender esse mercado, um pequeno produtor dispõe de 6 vacas leiteiras, que produzem diariamente, em média, 5 litros de leite por dia. Então, a quantidade de leite produzida em uma semana em média é igual a:",
    alternativaA : "30.",
    alternativaB : "150.",
    alternativaC : "180.",
    alternativaD: "210.",
    alternativaE: "270.",
    correta      : "D) 210.",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "A dúzia é uma unidade bastante comum para a venda de alguns produtos, como ovos. Um restaurante tem um consumo diário de 3 dúzias e meia por dia, então o número de ovos consumidos durante um dia nesse restaurante é igual a:",
    alternativaA : "18.",
    alternativaB : "36.",
    alternativaC : "42.",
    alternativaD: "48.",
    alternativaE: "52.",
    correta      : "C) 42.",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Em um cinema, a sala é composta por cadeiras separadas em colunas de A até J com cadeiras numeradas de 1 a 12. Então, o número de cadeiras que existem nessa sala é igual a:",
    alternativaA : "120.",
    alternativaB : "180.",
    alternativaC : "240.",
    alternativaD: "250.",
    alternativaE: "300.",
    correta      : "A) 120.",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Um corretor de redações leva, em média, 4 minutos para corrigir uma redação. Se em uma determinada semana ele corrigiu 450 redações, o tempo que ele levou para corrigir essas redações foi de:",
    alternativaA : "20 horas.",
    alternativaB : "25 horas.",
    alternativaC : "30 horas.",
    alternativaD: "45 horas.",
    alternativaE: "60 horas.",
    correta      : "C) 30 horas.",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Um prestador de serviço, após a realização do trabalho para o qual foi contratado, recebeu o pagamento em 4 notas de R$ 50,00, 2 notas de R$ 20,00 e 3 notas de R$ 2,00. Então, o valor recebido pelo serviço prestado foi igual a:",
    alternativaA : "R$ 198,00.",
    alternativaB : "R$ 206,00.",
    alternativaC : "R$ 230,00.",
    alternativaD: "R$ 246,00.",
    alternativaE: "R$ 316,00.",
    correta      : "D) R$ 246,00.",
}

const q7 = {
    numQuestao   : 7,
    pergunta     : "Uma fábrica de sapatos possui 5235 pares de calçados em estoque e recebe um pedido, de um único cliente, de 4989 pares de calçados. Quantas unidades de calçados sobraram em estoque após a entrega desse pedido?",
    alternativaA : "326.",
    alternativaB : "256.",
    alternativaC : "235.",
    alternativaD: "246.",
    alternativaE: "396.",
    correta      : "D) 246.",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "A um número foi somado 7854 e o resultado obtido foi 20000. Que número é esse?",
    alternativaA : "12146.",
    alternativaB : "12478.",
    alternativaC : "13457.",
    alternativaD: "12353.",
    alternativaE: "13953.",
    correta      : "A) 12146.",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Um torneio agrupou 2450 pessoas na praça principal de uma cidade do interior de Goiás. Dessas, 1289 eram do sexo masculino. Quantas pessoas estavam na praça principal dessa cidade do sexo feminino?",
    alternativaA : "1164.",
    alternativaB : "1161.",
    alternativaC : "1176.",
    alternativaD: "1563.",
    alternativaE: "1132.",
    correta      : "B) 1161.",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Em uma lanchonete, ao final de um dia de trabalho, sobraram 37 empadas de frango e queijo. Se 19 empadas são de frango, quantas empadas de queijo sobraram?",
    alternativaA : "18.",
    alternativaB : "19.",
    alternativaC : "22.",
    alternativaD: "37.",
    alternativaE: "16.",
    correta      : "A) 18.",
}


// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)
console.log(totalDeQuestoes)
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = 'A) ' + q1.alternativaA
b.textContent = 'B) ' + q1.alternativaB
c.textContent = 'C) ' + q1.alternativaC
d.textContent = 'D) ' + q1.alternativaD
e.textContent = 'E) ' + q1.alternativaE

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')
e.setAttribute('value', '1E')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    console.log(nQuestao)
    numero.textContent = nQuestao;
    console.log(numero)
    numQuestao.textContent = questoes[nQuestao -1].numQuestao
    pergunta.textContent   = questoes[nQuestao -1].pergunta
    a.textContent = 'A) ' + questoes[nQuestao -1].alternativaA
    b.textContent = 'B) ' + questoes[nQuestao -1].alternativaB
    c.textContent = 'C) ' + questoes[nQuestao -1].alternativaC
    d.textContent = 'D) ' + questoes[nQuestao -1].alternativaD
    e.textContent = 'E) ' + questoes[nQuestao -1].alternativaE
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
    e.setAttribute('value', nQuestao+'E')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
    e.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
    e.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao -1].correta
    console.log("RespC " + certa)

    let respostaEsta = ""

    if(respostaEscolhida === certa) {
        console.log("Acertou")
        respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        console.log("Errou!")
        respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar
    console.log(placar)

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        console.log(numeroDaQuestao)
        proxima = numeroDaQuestao + 1;

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""

    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""
    d.textContent = ""
    e.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')
    e.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        pontos = 0 // zerar placar
        location.reload();
    }, 2000)
}