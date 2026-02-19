function calcular(operacao) {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    const resultadoElemento = document.getElementById("resultado");

    if (isNaN(n1) || isNaN(n2)) {
        resultadoElemento.innerText = "Digite números válidos";
        return;
    }

    let resultado;

    switch (operacao) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            if (n2 === 0) {
                resultadoElemento.innerText = "Não é possível dividir por zero";
                return;
            }
            resultado = n1 / n2;
            break;
    }

    resultadoElemento.innerText = resultado;
}
