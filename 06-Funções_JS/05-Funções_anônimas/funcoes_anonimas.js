
// Funções Anônimas: São funções que não possuem um nome porque são atribuídas às variáveis.

// Definindo a função chamada "somar", que retorna a soma de dois números.
function somar(a, b) {
    return a + b;
}

// Atribuindo a função "somar" à variável chamada "operacao".
let operacao = somar;

// Chamando a função "operacao" (que agora é a função "somar") com os argumentos 4 e 2 e exibindo o resultado.
console.log(operacao(4, 2));

// Reatribuindo a variável "operacao" a uma nova função anônima que realiza a subtração.
operacao = function(a, b) {
    return a - b;
}

// Chamando a nova função "operacao" (função de subtração) com os argumentos 4 e 2 e exibindo o resultado.
console.log(operacao(4, 2));