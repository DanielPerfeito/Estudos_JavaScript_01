// EXERCICIO: Praticando Arrays 03 - Contagem de Ocorrências

/* Neste exercício, o objetivo é contar quantas vezes um determinado elemento aparece em um array. */

// Definimos um array chamado 'numeros' que contém os números onde iremos buscar ocorrências.
const numeros = [1, 5, 6, 7, 2, 4, 9, 7, 5, 6, 3, 5, 4, 1, 1, 1];

const numeroPesquisado = 1; // Definimos o número que desejamos encontrar e contar no array.
let ocorrencias = 0; // Inicializamos uma variável 'ocorrencias' para contar as vezes que o número aparece.

// Usamos um loop 'for' para iterar sobre cada elemento do array.
for (let i = 0; i < numeros.length; i++) {
    // Dentro do loop, comparamos cada elemento com o 'numeroPesquisado'.
    
    // Se o elemento atual for igual ao 'numeroPesquisado', incrementamos a variável 'ocorrencias'.
    if (numeros[i] === numeroPesquisado) {
        ocorrencias += 1;
    }
}

// Após o loop, exibimos o resultado contando quantas vezes o número pesquisado aparece no array.
console.log("O " + numeroPesquisado + " ocorre " + ocorrencias + " vezes no array.");
