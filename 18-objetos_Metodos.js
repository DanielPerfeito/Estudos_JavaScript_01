// OBJETOS - Metodos

//O métodos de um objeto é basicamente uma função dentro de um objéto.

//=========================================

function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2;
}

var aluno = {
    nome: "Daniel", 
    notas: [10, 6],

    media: calcMedia

}

var aluno1 = {
    nome: 'João', 
    notas: [8, 8],

    media: calcMedia

}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());