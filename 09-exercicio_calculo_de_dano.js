/*EXERCICIO: Cálculo de Dano

Escreva um programa que permita inserir o nome e o poder de ataque de um personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de outro personagem e se ele possui um escudo, e então calcule a quantidade de dano causado baseado nas seguintes regras:

- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo, o dano causado será igual a diferença entre o ataque e a defesa.
- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o dano causado será igual a metade da diferença entre o ataque e a defesa.
- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.

Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de vida do personagem defensor e exibir na tela a quantidade de dano e as informações atualizadas de ambos os personagens.*/

// Resolução do exercicio:

//Entradas de dados para o personagem atacante.
let atacante = prompt("Insira um nome para o atacante:");
let ataque = parseInt(prompt("Informe o poder de ataque de " + atacante + ":"));

console.log(atacante, ataque);

let defensor = prompt("Insira um nome para o defensor:");
let pontosVida = parseInt(prompt("Informe quantos ponto de vida " + defensor + " possui:"));
let armadura = parseInt(prompt("Informe quantos pontos de armadura (defesa) " + defensor + " possui:"));

let escudo = prompt(defensor + " possui um escudo? \n\n Digite [sim] para sim. \n Digite [não] para não.");

let dano;


if (ataque > armadura && escudo == "não"){ 
    dano = (ataque - armadura);
}
else if (ataque > armadura && escudo == "sim"){

    dano = (ataque - armadura)/2;
}
else{
    dano = 0
}

alert("Atacante: " + atacante + "\n" + "Poder do ataque: " + ataque + "\n\n" + "Defensor: " + defensor + "\n" + "Vida inicial: " + pontosVida + "\n" + "Armadura: " + armadura + "\n" + "Possui escudo: " + escudo + "\n" + "Dano sofrido: " + dano + "\n" + "Vida restante: " + (pontosVida - dano));

console.log(defensor, pontosVida, armadura, escudo);
console.log(dano);
