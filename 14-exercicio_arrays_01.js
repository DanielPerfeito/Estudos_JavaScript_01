//EXERCICIO: Praticando Arrays 01 - Soma dos Elementos:

/*Escreva um programa que calcule e imprima a soma de todos os elementos em um array de números.*/

//Resolução:

const elementos = [2, 2, 2];

let soma = 0;

for(let i = 0; i < elementos.length; i++){

    soma += elementos[i];

}

console.log("A soma dos elementos é " + soma);