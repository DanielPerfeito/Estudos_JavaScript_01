// EXERCICIO: Praticando Arrays 07 - Encontrar Elemento:

/* Neste exercício, estamos criando um programa que verifica se um elemento específico existe em um array e imprime uma mensagem apropriada. */

// Definimos um array chamado 'evangelhos' que contém nomes de livros do Novo Testamento.
const evangelhos = ["Mateus", "Marcos", "Lucas", "João"];

// Pedimos ao usuário que insira o nome de um livro que ele deseja consultar no array 'evangelhos'.
const livro = prompt("Qual livro do Novo Testamento deseja consultar no Array Evangelhos?")

// Usamos o método 'includes()' para verificar se o elemento inserido pelo usuário existe no array 'evangelhos'.
const inclui = evangelhos.includes(livro);

// Com base na verificação, exibimos uma mensagem apropriada ao usuário.
if(inclui === true){
    alert("O livro " + livro + " faz parte do Array 'Evangelhos'.");
}
else {
    alert("O livro " + livro + " não faz parte do Array 'Evangelhos'.");
}

