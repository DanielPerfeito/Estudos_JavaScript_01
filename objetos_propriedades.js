
// OBJETOS - Propriedades

//=========================================

//Como declarar um objeto

var aluno = { nome: "Daniel", notas:[7.5,5.3]}

console.log(aluno)

//Ou

var aluno2 = new Object()

aluno2.nome = "Ana"
aluno2.notas = [10.0, 9.5]

//=========================================

// Como adicionar propriedades a um objeto

aluno.sobrenome = "Perfeito"

//Ou

aluno2["sobrenome"] = "Paes"

//=========================================

console.log(aluno)
console.log(aluno2)