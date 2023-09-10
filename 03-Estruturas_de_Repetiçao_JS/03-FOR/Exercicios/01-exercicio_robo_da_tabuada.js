// EXERCICIO: Robô da Tabuada
/*Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar*/

// Resolução do exercício:

// Solicita ao usuário que informe um número para calcular a tabuada
let numero = parseInt(prompt("Informe um número para ver a sua Tabuada:"));

// Inicializa uma variável 'tabuada' para armazenar a tabuada do número
let tabuada = "ROBÔ DA TABUADA \n\n A Tabuada do número " + numero + " é:";

// Loop 'for' que calcula a tabuada do número de 1 a 20
for (let multiplicador = 1; multiplicador <= 20; multiplicador++) {
    // Concatena cada linha da tabuada na variável 'tabuada'
    tabuada = tabuada + "\n" + numero + " x " + multiplicador + " = " + (numero * multiplicador);
}

// Exibe a tabuada completa ao usuário
alert(tabuada);