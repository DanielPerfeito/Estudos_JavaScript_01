//EXERCÍCIO 002 - Remover elementos duplicados:

/*Crie um array com elementos duplicados e escreva um programa que remova todos os elementos duplicados, deixando apenas valores únicos no array resultante.*/

// Resolução:

// Array com elementos duplicados
let array = [1, 4, 1, 2, 3, 4, 10, 10, 12, 4];

// Array que conterá os valores únicos após a remoção das duplicatas
let uniqueArray = [];

// Variável de verificação
let check;

// Percorre o array original
for (let i = 0; i < array.length; i++) {
    // Verifica se o elemento já existe em uniqueArray
    check = uniqueArray.includes(array[i]);

    // Se o elemento não existir em uniqueArray, adiciona-o
    if (!check) {
        uniqueArray.push(array[i]);
    }
}

// Exibe o array resultante com valores únicos
console.log("Array único: " + uniqueArray);
