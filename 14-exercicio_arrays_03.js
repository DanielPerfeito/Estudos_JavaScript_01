//EXERCICIO: Praticando Arrays 03 - Contagem de Ocorrências:

/*Faça um programa que conte quantas vezes um determinado elemento aparece em um array.*/

//Resolução:

const numeros = [1, 5, 6, 7, 2, 4, 9, 7, 5, 6, 3, 5, 4, 1, 1, 1];

const numeroPesquisado = 1; // Número que será buscado no Array.
let ocorrencias = 0; // variável contadora

for(let i = 0; i < numeros.length; i++)/*Percorre todo o Array*/{
    if(numeros[i] === numeroPesquisado)/*Verifica se o elemento da posição atual é igual ao número pesquisado*/{
        ocorrencias += 1; // Se a condição for atendida, a variável contadora é incrementada.
    }
}

console.log("O " + numeroPesquisado + " ocorre " + ocorrencias + " vezes no array.");