/*EXERCICIO: Calculadora de 4 Operações

Escreve um programa em javascript que permita inserir dois valores numéricos e então calcule o resultado das quatro operações básicas (soma, subtração, multiplicação e divisão).

Após calcular os resultados o programa deve exibi-los na tela.*/

//Resolução do exercicio:

let valor1 = parseFloat(prompt("Insira o primeiro valor numérico:"));
let valor2 = parseFloat(prompt("Insira o segundo valor numérico:"));

//operações:
let soma = valor1 + valor2;
let sub = valor1 - valor2;
let mult = valor1 * valor2;
let div = valor1 / valor2;

alert("RESULTADO\n\n" + "A soma dos valores " + valor1 + " e " + valor2 + " é: " + soma + "\n" + 
"A subtração de " + valor1 + " e " + valor2 + " é: " + sub + "\n" + "O produto da multiplicação de " + valor1 + " por " + valor2 + " é: " + mult + "\n" + "A divisão de " + valor1 + " por " + valor2 + " é: " + div); // Mensagem final exibida na tela.