//EXERCICIO: Praticando Arrays 01 - Soma dos Elementos:

/*Escreva um programa que calcule e imprima a soma de todos os elementos em um array de números.*/

//Resolução:

// Definimos um array chamado 'elementos' contendo os números que desejamos somar.
const elementos = [2, 2, 2];

// Inicializamos uma variável 'soma' com o valor 0 para armazenar a soma dos elementos.
let soma = 0;

// Usamos um loop 'for' para iterar sobre cada elemento do array.
for (let i = 0; i < elementos.length; i++) {
    // Dentro do loop, somamos o elemento atual ao valor armazenado na variável 'soma'.
    soma += elementos[i];
}

// Após o loop, exibimos a soma total dos elementos na tela.
console.log("A soma dos elementos é " + soma);