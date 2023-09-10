// Exercicio 001: Adicionar um elemento no final do array

/* Crie um array vazio e, em seguida, adicione cinco números inteiros ao final do array usando um loop ou o método push().*/

// Resolução:

// Array vazio que será preenchido com números inteiros
let array = [];

// Variável para armazenar o novo elemento a ser inserido no array
let newElement;

// Loop para inserir cinco números inteiros no array
for (let i = 0; i < 5; i++) {
    // Solicita ao usuário o valor numérico
    newElement = parseInt(prompt("Informe o " + (i + 1) + "° valor numerico a ser inserido no Array: "));
    // Adiciona o novo elemento ao final do array usando o método push()
    array.push(newElement);
}

// Exibe o array resultante
console.log(array);