

const biblia = ["Josue", "Rute", "Ester", "Proverbios", "Eclesiastes", "Daniel", "Ezequiel", "Mateus", "Marcos", "Lucas", "João", "Atos"]; // Array de exemplo.
console.log("Array original ", biblia);

//1- FUNÇÕES DE MANIPULAÇÃO DE ARRAYS


// PUSH - Função utilizada pada adicionar um elemento ao FINAL de um array:
biblia.push("Apocalipse");
console.log("Array com Push (elemento inserido no final) ", biblia);

//UNSHIFT - Função utilizada para inserir um elemento no INICIO de um array:
biblia.unshift("Salmos");
console.log("Array com Unshift (elemento inserido no inicio) ", biblia);

//POP - Função utilizada para remover o ultimo elemento do array e retorna-lo na própria função:
const ultimoElemento = biblia.pop(); // Constante que irá receber o retorno da função pop().
console.log("Com a função .pop(), o ultimo elemento do array biblia foi removido, a saber: ", ultimoElemento);
console.log(biblia);

//SHIFT - Função utilizada para remover o primeiro elemento de um array e retorna-lo na própria função:
const primeiroElemento = biblia.shift(); // Constante que irá receber o retorno da função shift().
console.log("Com a função .shift(), o primeiro elemento do array biblia foi removido,a saber: ", primeiroElemento);
console.log(biblia);


//2- FUNÇÕES DE PESQUISAS DE ELEMENTOS EM ARRAYS

//INCLUDES - Função utilizada para verificar se o array possui algum elemento especifico, retornando um valor booleano:
const inclui = biblia.includes("Marcos"); // Pesquisando por um elemento que existe no array.
const naoInclui = biblia.includes("Salmos"); // pesquisando por um elemento que não existe no array. 
console.log("Existe um elemento 'Marcos' no array biblia? ", inclui);
console.log("Existe o elemento 'Salmos'no array biblia? ", naoInclui);

//indexOF - Função utilizada para pesquisar o indice de um elemanto dentro de um array:
console.log(biblia);
const indice = biblia.indexOf("Lucas");
console.log("O indice do elemento pesquisado 'Lucas' é:", indice);


//3- FUNÇÕES PARA CORTAR E CONCATENAR UM ARRAY

//SLICE(cortar) - Função utlizada para copiar(não modifica o array original) uma parte de um array e salvar em outro array:
const livrosHistAT = biblia.slice(0, 3); // Le-se as referências (0, 3) da seguinte maneira: partindo do indice 0 até o indice antes de 3.
console.log(biblia);
console.log("Utilizando a função .slice() copiamos do array biblia os livros historicos do AT, a saber: ", livrosHistAT)
const livrosHistNT = biblia.slice(11);// Le-se as referências (2, 6) da seguinte maneira: partindo do indice 2 até o indice antes de 6.
console.log("Utilizando a função .slice() copiamos do array biblia os livros historicos do NT, a saber: ", livrosHistNT);

//CONCAT(concatenar) - Função utilizada para concatenar arrays:
const livrosHistBiblia = livrosHistAT.concat("Juizes", "1 Samuel", "2 Cronicas", livrosHistNT);
console.log(livrosHistBiblia);


//OUTRAS FUNÇÕES

//SPLICE - Função utilizada para deletar um elemento do array e inserir outro em seu lugar, uma  substituição.

const elementosRemovidos = biblia.splice(9, 1, "Lucas, o Médico"); //Entende-se a instrução da função .splice do seguinte modo: .splice(indice de partida, quantidade de arrays a serem removidos, dados que serão inseridos respectivamente em seus lugares).
console.log(biblia)
console.log(elementosRemovidos);
