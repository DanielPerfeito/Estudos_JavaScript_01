// EXERCICIO: Procurando Palíndromos
/*Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve mostrar a palavra lida da esquerda para direita e da direita para esquerda.*/

//Resolução do Exercício:

// Solicita ao usuário que informe uma palavra
const palavra = prompt("Informe uma palavra:");

// Inicializa uma variável para armazenar a palavra invertida
let palavraInvertida = "";

// Loop for que inverte a palavra
for (let i = palavra.length - 1; i >= 0; i--) {
    // Concatena cada caractere da palavra original na variável 'palavraInvertida' em ordem inversa
    palavraInvertida += palavra[i];
}

// Verifica se a palavra original é igual à palavra invertida
if (palavra === palavraInvertida) {
    // Se forem iguais, é um palíndromo
    alert("A palavra '" + palavra + "' é um palíndromo, pois sua inversão é igual a ela: '" + palavraInvertida + "'.");
} else {
    // Se não forem iguais, não é um palíndromo
    alert("A palavra '" + palavra + "' não é um palíndromo, pois sua inversão não é igual a ela: '" + palavraInvertida + "'.");
}

