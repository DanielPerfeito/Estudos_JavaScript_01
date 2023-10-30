// Retornos de uma função:

/*Conceito: O retorno de uma função em JavaScript se refere ao valor ou resultado que a função produz e "retorna" quando é chamada. Quando você chama uma função em JavaScript, ela pode realizar uma série de operações e, em seguida, produzir um valor como resultado. Esse valor é o que a função "retorna" para quem a chamou.

Para definir o valor de retorno de uma função em JavaScript, você usa a instrução return. O valor retornado pode ser de qualquer tipo de dado, como números, strings, objetos, arrays, ou até mesmo outra função.*/

// Definindo uma função chamada calcularMedia que recebe dois parâmetros a e b.
function calcularMedia(a, b) {
    // Dentro da função, calculamos a média dos valores a e b.
    const media = (a + b) / 2;
    // Em seguida, retornamos o valor da média.
    return media;
}

// Chamamos a função calcularMedia com os valores 10 e 8 e armazenamos o resultado em uma variável chamada resultado.
const resultado = calcularMedia(10, 8);

// Imprimimos o resultado no console.
console.log(resultado);

// Definindo uma função chamada criarProduto que recebe dois parâmetros nome e preço.
function criarProduto(nome, preço) {
    // Dentro da função, criamos um objeto chamado produto com as propriedades nome, preço e estoque.
    const produto = {
        nome,
        preço,
        estoque: 1
    }
    // Em seguida, retornamos o objeto produto.
    return produto;
}

// Chamamos a função criarProduto com os valores "Sansung Galaxy A34 128GB" e "R$ 1545,00" e armazenamos o resultado em uma variável chamada smartphone.
const smartphone = criarProduto("Samsung Galaxy A34 128GB", "R$ 1545,00");

// Imprimimos o objeto smartphone no console.
console.log(smartphone);

// As funções podem ter mais de uma opção de retorno se usarmos uma estrutura condicional.

// Definindo uma função chamada maioridade que recebe um parâmetro idade.
function maioridade(idade) {
    // Verificamos se a idade é maior ou igual a 18.
    if (idade >= 18) {
        // Se a condição for verdadeira, retornamos a string "Maior de Idade".
        return "Maior de Idade";
    } else {
        // Se a condição for falsa, retornamos a string "Menor de idade".
        return "Menor de idade";
    }
}

// Chamamos a função maioridade com diferentes valores de idade e imprimimos o resultado no console.
console.log(maioridade(24)); // Deve imprimir "Maior de Idade"
console.log(maioridade(14)); // Deve imprimir "Menor de idade"