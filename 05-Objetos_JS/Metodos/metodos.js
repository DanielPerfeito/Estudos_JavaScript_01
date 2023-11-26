// MÉTODOS

//Conceito: Métodos em Js, são funções atreladas a Objetos.

let pessoa = {
    nome: "Daniel",
    idade: 27,
    dizerOla() {
        console.log("olá, Mundo!\n Meu nome é " + this.nome + ", eu tenho " + this.idade + "Anos!"); // O método "this" é usado para referenciar uma propriedade do objeto onde está inserido(contextualizado). Conforme usado aqui, "this.nome" é o mesmo que "pessoa.nome" e "this.idade" é o mesmo que "pessoa.idade".
    } // Esta função "dizerOla()" constitui-se um método por estar sendo chamada no contexto de um objeto.
}