const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expressao = "";

/* Atualiza visor */
function atualizarDisplay() {
    display.value = expressao || "0";
}

/* Adiciona valor */
function adicionarValor(valor) {
    // Evita dois operadores seguidos
    const operadores = ["+", "-", "*", "/", "%"];
    const ultimo = expressao.slice(-1);

    if (operadores.includes(ultimo) && operadores.includes(valor)) {
        expressao = expressao.slice(0, -1) + valor;
    } else {
        expressao += valor;
    }

    atualizarDisplay();
}

/* Limpar */
function limpar() {
    expressao = "";
    atualizarDisplay();
}

/* Apagar */
function apagar() {
    expressao = expressao.slice(0, -1);
    atualizarDisplay();
}

/* Calcular */
function calcular() {
    try {
        if (!expressao) return;

        let resultado = eval(expressao);

        if (!isFinite(resultado)) {
            display.value = "Erro";
            expressao = "";
            return;
        }

        expressao = resultado.toString();
        atualizarDisplay();

    } catch {
        display.value = "Erro";
        expressao = "";
    }
}

/* Clique */
buttons.forEach(botao => {
    botao.addEventListener("click", () => {

        const valor = botao.getAttribute("data-value");
        const acao = botao.getAttribute("data-action");

        if (valor) adicionarValor(valor);
        if (acao === "clear") limpar();
        if (acao === "delete") apagar();
        if (acao === "equals") calcular();
    });
});

/* Teclado */
document.addEventListener("keydown", (event) => {

    const tecla = event.key;

    if (!isNaN(tecla) || "+-*/.%".includes(tecla)) {
        adicionarValor(tecla);
    }

    if (tecla === "Enter") calcular();
    if (tecla === "Backspace") apagar();
    if (tecla === "Escape") limpar();
});
