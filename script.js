// OBJETOS - Metodos

//O métodos de um objeto é basicamente uma função dentro de um objéto.

//=========================================

var calcMedia = function () {
    return (this.notas[0] + this.notas[1]) / 2;
}

var turma = [
    {
        nome: "Daniel",
        notas: [9, 7.5],
        media: calcMedia
    },

    {
        nome: "João",
        notas: [6, 8],
        media: calcMedia
    },

    {
        nome: "Maria",
        notas: [7, 9],
        media: calcMedia
    },

    {
        nome: "Andressa",
        notas: [10, 5],
        media: calcMedia
    },
]

var aluno = turma[0];
console.log(aluno);
console.log(aluno.media());