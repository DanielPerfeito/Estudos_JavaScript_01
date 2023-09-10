// ARRAYS - Uma estrutura de dados em JavaScript para armazenar listas de elementos. Cada elemento é identificado por um índice inteiro, começando em 0, e um array pode conter elementos de qualquer tipo e tamanho.

// Para criar um array, utilizamos colchetes vazios [].
var array = []; // Criação de um array vazio.

// Atribuição de valores a um array pode ser feita de duas maneiras:

// 1° - Atribuindo valores ao criar o array de uma vez:
array = [1, 2, 3, 4, 5]; // Atribuição de múltiplos valores de uma só vez.

console.log(array);

// 2° - Atribuição de valores individualmente, referenciando os índices:
// Supondo que já temos um array com os valores [1, 2, 3, 4, 5] e seus índices correspondentes [0, 1, 2, 3, 4],
// podemos adicionar os valores 6 e 7 referenciando seus índices:
array[5] = 6; // Índice 5 recebe o valor 6.
array[6] = 7; // Índice 6 recebe o valor 7.

console.log(array);