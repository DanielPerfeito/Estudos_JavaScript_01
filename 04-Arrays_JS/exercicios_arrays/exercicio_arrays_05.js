// EXERCICIO: Praticando Arrays 06 - Multiplicação de Elementos:

/* Neste exercício, estamos criando um programa que multiplica cada elemento de um array por um valor especificado e imprime o novo array resultante. */

// Definimos um array chamado 'numeros' com alguns números.
let numeros = [2, 4, 6, 8, 10];

let multiplicador = 2; // Definimos o valor pelo qual cada elemento do array será multiplicado.

let numerosMult = []; // Inicializamos um novo array vazio para armazenar os resultados da multiplicação.

// Usamos um loop 'for' para iterar sobre os elementos do array 'numeros'.
for(i = 0; i < numeros.length; i++){

    numerosMult[i] = numeros[i] * multiplicador; // Multiplicamos cada elemento do array 'numeros' pelo 'multiplicador' e armazenamos o resultado no novo array 'numerosMult'.

}

// Após o loop, exibimos o array original 'numeros' e o novo array 'numerosMult' resultante da multiplicação.
console.log("Array original: " + numeros);
console.log("Array após multiplicação: " + numerosMult);
