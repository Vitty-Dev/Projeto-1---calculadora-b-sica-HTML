const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expressao = "";

/* Atualiza o visor */
function atualizarDisplay() {
    display.value = expressao || "0";
}

/* Adiciona valor */
function adicionarValor(valor) {
    expressao += valor;
    atualizarDisplay();
}

/* Limpar tudo */
function limpar() {
    expressao = "";
    atualizarDisplay();
}

/* Apagar último caractere */
function apagar() {
    expressao = expressao.slice(0, -1);
    atualizarDisplay();
}

/* Calcular resultado */
function calcular() {
    try {
        if (expressao === "") return;

        // Substitui símbolos visuais pelos reais
        let expressaoCorrigida = expressao
            .replace(/÷/g, "/")
            .replace(/×/g, "*")
            .replace(/−/g, "-");

        let resultado = eval(expressaoCorrigida);

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

/* Clique nos botões */
buttons.forEach(botao => {
    botao.addEventListener("click", () => {

        const valor = botao.getAttribute("data-value");
        const acao = botao.getAttribute("data-action");

        if (valor) {
            adicionarValor(valor);
        }

        if (acao === "clear") {
            limpar();
        }

        if (acao === "delete") {
            apagar();
        }

        if (acao === "equals") {
            calcular();
        }
    });
});

/* Permitir digitação pelo teclado */
document.addEventListener("keydown", (event) => {

    const tecla = event.key;

    if (!isNaN(tecla) || "+-*/.%".includes(tecla)) {
        adicionarValor(tecla);
    }

    if (tecla === "Enter") {
        calcular();
    }

    if (tecla === "Backspace") {
        apagar();
    }

    if (tecla === "Escape") {
        limpar();
    }
});
