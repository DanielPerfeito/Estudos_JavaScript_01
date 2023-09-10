// Variável (pode ser modificada e reatribuída, possui escopo global)
var num1 = 4;

// Let (pode ser modificada e reatribuída, possui escopo local)
let num2 = 5;

// Constante (não pode ser reatribuída, possui escopo local)
const num3 = 6;

// Imprimindo os valores das variáveis no terminal
console.log(num1); // Imprime 4
console.log(num2); // Imprime 5
console.log(num3); // Imprime 6

// Exemplo de modificação e reatribuição de variáveis
num1 = 10; // É permitido para 'var'
num2 = 15; // É permitido para 'let'
// num3 = 20; // Isso geraria um erro, pois 'const' não pode ser reatribuída

// Imprimindo os valores atualizados
console.log(num1); // Imprime 10
console.log(num2); // Imprime 15
console.log(num3); // Continua imprimindo 6 (não é permitida a reatribuição)