
// OBJETOS - Propriedades

// Como declarar um objeto
var aluno = {
    nome: "Daniel",
    sobrenome: "Perfeito",
    idade: 26,
};

// Exibindo o objeto aluno no console
console.log("Objeto aluno inicial:");
console.log(aluno);

/*
Em JavaScript, um objeto é caracterizado por chaves {}.
Os objetos possuem propriedades, que são como atributos desses objetos. No exemplo acima, o objeto aluno possui 3 propriedades: nome, sobrenome e idade, cada uma acompanhada de seu respectivo valor. As propriedades podem armazenar qualquer tipo de dado, incluindo números, strings, arrays e até mesmo outros objetos.
*/

// Adicionando propriedades aos objetos:

// 1. Usando a notação de ponto
aluno.turno = "Noturno"; // Sintaxe: objeto.propriedade = valor

// 2. Usando a notação de colchetes
aluno["curso"] = "Sistemas de Informação"; // Sintaxe: objeto["propriedade"] = valor

// Exibindo o objeto aluno após adicionar propriedades
console.log("\nObjeto aluno após adicionar propriedades:");
console.log(aluno);

