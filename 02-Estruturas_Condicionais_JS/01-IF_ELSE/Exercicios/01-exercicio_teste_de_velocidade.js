/*EXERCICIO: Teste de Velocidade

Escreva um programa em javascript que permita inserir o nome e a velocidade de dois veículos e exiba na tela uma mensagem dizendo qual dos dois é mais rápido (ou que as velocidades são iguais se este for o caso)*/

//Resolução do exercicio:

// Solicita informações do primeiro carro
let carro1 = prompt("Insira o nome do 1° carro:");
let velocidade1 = parseFloat(prompt("Insira a velocidade registrada de " + carro1 + " (em km/h):"));

// Solicita informações do segundo carro
let carro2 = prompt("Insira o nome do 2° carro:");
let velocidade2 = parseFloat(prompt("Insira a velocidade registrada de " + carro2 + " (em km/h):"));

// Verifica qual carro é mais rápido ou se eles têm a mesma velocidade
if (velocidade1 > velocidade2) {
    // Se o primeiro carro for mais rápido
    alert(carro1 + " possui velocidade registrada de " + velocidade1 + " km/h." + "\n" + 
          carro2 + " possui velocidade registrada de " + velocidade2 + " km/h." + "\n" + 
          carro1 + " é o carro mais rápido!");
} else if (velocidade1 < velocidade2) {
    // Se o segundo carro for mais rápido
    alert(carro1 + " possui velocidade registrada de " + velocidade1 + " km/h." + "\n" + 
          carro2 + " possui velocidade registrada de " + velocidade2 + " km/h." + "\n" + 
          carro2 + " é o carro mais rápido!");
} else {
    // Se ambos os carros têm a mesma velocidade
    alert(carro1 + " possui velocidade registrada de " + velocidade1 + " km/h." + "\n" + 
          carro2 + " possui velocidade registrada de " + velocidade2 + " km/h." + "\n" + 
          carro1 + " e " + carro2 + " estão empatados em velocidade!");}