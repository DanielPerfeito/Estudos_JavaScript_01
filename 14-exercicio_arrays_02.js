//EXERCICIO: Praticando Arrays 02 - Maior e Menor Elemento::

/*Crie um programa que encontre e imprima o maior e o menor elemento de um array de números*/

//Resolução:

const numeros = [14, 2, 7, 56, 0,100,-14,54, -5, 33];

let maiorNumero = Number.NEGATIVE_INFINITY; // Use essas constantes quando comparar valores para encontrar um extremo (maior ou menor).
let menorNumero = Number.POSITIVE_INFINITY;// São úteis quando não se sabe o valor exato para iniciar a comparação, comum ao buscar extremos, como maior ou menor valor.

for(let i = 0; i < numeros.length; i++){

    if(numeros[i] > maiorNumero){
        maiorNumero = numeros[i];
    }
    if(numeros[i] < menorNumero){
        menorNumero = numeros[i];
    }
}

console.log("Maior número do array: " + maiorNumero);
console.log("Menor número do array: " + menorNumero);