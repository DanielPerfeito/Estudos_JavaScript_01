/*EXERCICIO: Teste de Velocidade

Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)*/

//Resolução do exercicio:

//Entrada de dados do primeiro carro:
let carro1 = prompt("Insira o nome do 1° carro:");
let velocidade1 = prompt("Insira a velocidade registrada de " + carro1 + ":");

//Entrada de dados do segundo carro:
let carro2 = prompt("Insira o nome do 2° carro:");
let velocidade2 = prompt("Insira a velocidade registrada de " + carro2 + ":");

if (velocidade1 > velocidade2) {

    alert(carro1 + " possui velocidade registrada de " + velocidade1 + " km/h." + "\n" + carro2 + " possui velocidade registrada de " + velocidade2 + " km/h." + "\n" + carro1 + " é o carro mais rapido!");

} else if (velocidade1 < velocidade2) {

    alert(carro1 + " possui velocidade registrada de " + velocidade1 + " km/h." + "\n" + carro2 + " possui velocidade registrada de " + velocidade2 + " km/h." + "\n" + carro2 + " é o carro mais rapido!");

} else {

    alert(carro1 + " possui velocidade registrada de " + velocidade1 + " km/h." + "\n" + carro2 + " possui velocidade registrada de " + velocidade2 + " km/h." + "\n" + carro1 + " e " + carro2 + " estão empatados em velocidade!");
} // Estrutura condicional para testar as velocidades.

