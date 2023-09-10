// EXERCICIO: Praticando Arrays 05 - Inversão de Array

/* Neste exercício, o objetivo é inverter a ordem dos elementos em um array. */

// Definimos um array chamado 'numeros' com alguns números.
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosInvertidos = []; // Inicializamos um novo array vazio para armazenar os números invertidos.

// Usamos um loop 'for' para iterar sobre os elementos do array 'numeros' em ordem inversa.
for (let i = (numeros.length - 1); i >= 0; i--) {
    // Dentro do loop, adicionamos cada elemento do array original 'numeros' ao novo array 'numerosInvertidos'
    // começando pelo último elemento e indo até o primeiro.
    numerosInvertidos.push(numeros[i]);
}

// Após o loop, exibimos o array original e o array invertido.
console.log("Array original: " + numeros);
console.log("Array Invertido: " + numerosInvertidos);