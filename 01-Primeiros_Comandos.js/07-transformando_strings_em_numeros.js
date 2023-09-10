// Conversão de strings em números inteiros e decimais

// Declaração de variáveis
var a = "7";      // Uma string que representa um número inteiro
var b = "3.5";    // Uma string que representa um número decimal

// Convertendo as strings em números
var numeroInteiro = parseInt(a);    // Converte "7" em 7 (número inteiro)
var numeroDecimal = parseFloat(b);  // Converte "3.5" em 3.5 (número decimal)

// Realizando uma operação matemática com os números convertidos
var resultado = numeroInteiro + numeroDecimal; // Soma 7 e 3.5

// Imprimindo o resultado
console.log(resultado); // Imprime 10.5 no terminal