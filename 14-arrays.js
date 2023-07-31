// ARRAYS = É uma estrutura do javascript para se trabalhar com todo tipo de lista. Seus elementos são identificados por um indice inteiro, sempre começando pelo 0. também e capaz de armazenar qualquer tipo de dado e ter qualquer tamanho.

//Os Arrays podem ser criados atráves de colchete [];

var array = []; // Criação de um array.

// A atribuição de valores aos arrays pode ser realizada de duas formas:

// 1° - Atribuindo os valores de uma vez:
array = [1,2,3,4,5]; // Atribuição conjunta.

console.log(array);

// 2° - Atribuição individual (referenciando pelo indice[i]).
//Considerando que no array criado a cima eu tenho os valores [1,2,3,4,5] e o indice de cada valor é respectivamente [0,1,2,3,4], e eu queira adicionar os valores 6 e 7, vou precisar referenciar os indices onde esses valores serão alocados veja abaixo:

array[5] = 6;
array[6] = 7; // O indice respectivo de cada valor está representado  dentro dos colchetes.

console.log(array);