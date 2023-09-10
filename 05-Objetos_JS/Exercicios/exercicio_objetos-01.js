//EXERCÍCIO 01 - OBJETOS

/* 1 - Criar um Objeto: Crie um objeto chamado pessoa com propriedades como nome, idade e cidade.*/

//Resolução:

let pessoa = {
    nome: "Daniel",
    idade: 26 ,
    cidade: "Rio de Janeiro"
}

/* 2 - Acessar Propriedades: Acesse as propriedades do objeto pessoa que você criou no exercício 1 e imprima seus valores no console.*/

//Resolução:

console.log("Resolução do exercicio 2:")
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cidade);

/* 3 - Modificar Propriedades: Modifique a idade da pessoa no objeto pessoa e, em seguida, imprima o objeto atualizado no console.*/

//Resolução:

console.log("Resolução do exercicio 3:")
console.log(pessoa); // Objeto antes da alteração da propriedade idade.

pessoa.idade = 27;

console.log(pessoa); // Objeto depois da alteração da propriedade idade.

/* 4 - Adicionar Propriedades: Adicione uma nova propriedade, como "profissão", ao objeto pessoa e, em seguida, imprima o objeto atualizado no console.*/

//Resolução:

pessoa["profissão"] = "Desenvolvedor Web";
console.log("Resolução do exercicio 4:")
console.log(pessoa);

/* 5 - Crie um objeto chamado carro com propriedades como marca, modelo e ano de fabricação. Em seguida, crie um objeto proprietario com informações de nome e idade do proprietário do carro. Aninhe o objeto proprietario dentro do objeto carro como uma propriedade. Imprima o objeto carro no console.*/

//Resolução:

let carro = {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2021,
    proprietario: pessoa
}

console.log("Resolução do exercicio 5:")
console.log(carro);