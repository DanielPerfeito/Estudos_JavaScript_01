//EXERCICIO: Praticando Arrays 02 - Maior e Menor Elemento::

/*Crie um programa que encontre e imprima o maior e o menor elemento de um array de números*/

//Resolução:

// Definimos um array chamado 'numeros' que contém os números a serem avaliados.
const numeros = [14, 2, 7, 56, 0, 100, -14, 54, -5, 33];

// Inicializamos duas variáveis, 'maiorNumero' e 'menorNumero', com valores extremos para garantir que qualquer número do array será maior ou menor do que esses valores iniciais.
let maiorNumero = Number.NEGATIVE_INFINITY; // Usamos 'Number.NEGATIVE_INFINITY' para representar o menor valor possível.
let menorNumero = Number.POSITIVE_INFINITY; // Usamos 'Number.POSITIVE_INFINITY' para representar o maior valor possível.

// Usamos um loop 'for' para iterar sobre cada elemento do array.
for (let i = 0; i < numeros.length; i++) {
    // Dentro do loop, comparamos cada elemento com as variáveis 'maiorNumero' e 'menorNumero'.
    
    // Se o elemento atual for maior que o 'maiorNumero' atual, atualizamos o 'maiorNumero'.
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
    
    // Se o elemento atual for menor que o 'menorNumero' atual, atualizamos o 'menorNumero'.
    if (numeros[i] < menorNumero) {
        menorNumero = numeros[i];
    }
}

// Após o loop, exibimos o maior e o menor número encontrados na tela.
console.log("Maior número do array: " + maiorNumero);
console.log("Menor número do array: " + menorNumero);