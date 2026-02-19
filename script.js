/* Reset básico */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Fundo da página */
body {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #141E30, #243B55);
}

/* Estrutura principal */
.calculator {
    width: 340px;
    padding: 25px;
    border-radius: 25px;
    background: rgba(20, 20, 20, 0.95);
    box-shadow: 
        0 25px 50px rgba(0, 0, 0, 0.6),
        inset 0 -5px 10px rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
}

/* Display */
.display-container {
    margin-bottom: 20px;
}

.display {
    width: 100%;
    height: 70px;
    border: none;
    border-radius: 15px;
    background: #1e1e1e;
    color: #ffffff;
    font-size: 28px;
    text-align: right;
    padding: 15px;
    outline: none;
    box-shadow: inset 0 5px 10px rgba(0,0,0,0.5);
}

/* Grade de botões */
.buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
}

/* Botões gerais */
.btn {
    height: 60px;
    border: none;
    border-radius: 15px;
    font-size: 20px;
    cursor: pointer;
    transition: all 0.2s ease;
}

/* Números */
.btn-number {
    background: #2c2c2c;
    color: white;
}

.btn-number:hover {
    background: #3a3a3a;
}

/* Operadores */
.btn-operator {
    background: #ff9500;
    color: white;
}

.btn-operator:hover {
    background: #e08900;
}

/* Botão igual */
.btn-equals {
    background: #00c853;
    color: white;
    grid-column: span 1;
}

.btn-equals:hover {
    background: #00a844;
}

/* Botão limpar */
.btn-clear {
    background: #d32f2f;
    color: white;
}

.btn-clear:hover {
    background: #b71c1c;
}

/* Botão deletar */
.btn-delete {
    background: #616161;
    color: white;
}

.btn-delete:hover {
    background: #424242;
}

/* Zero ocupa duas colunas */
.btn-zero {
    grid-column: span 2;
}

/* Efeito clique */
.btn:active {
    transform: scale(0.95);
}
