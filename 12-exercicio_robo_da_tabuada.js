// EXERCICIO: Robô da Tabuada
/*Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número (de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável do tipo string. Depois o programa deve exibir esses resultados e finalizar*/

// Resolução do exercício:

let numero = parseInt(prompt("Informe um número para ver a sua Tabuada:"));

let tabuada = "ROBÔ DA TABUADA \n\n A Tabuada do número " + numero + " é:";

for(let multiplicador = 1; multiplicador <= 20; multiplicador++){

    tabuada = tabuada + "\n" + numero + " x " + multiplicador + " = " + (numero * multiplicador);

}

alert(tabuada);
