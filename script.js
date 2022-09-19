
//Global

var nota01 = 9;

var nota02 = 9;

var media = (nota01 + nota02) / 2;

console.log(media);

var conceito = "";

// Estrutura condicional If Else

if (media >= 7) {
    
    conceito = "Bom";
}

else if (media >= 5 && media < 7) {
    
    conceito = "Regular";
}

else {

    conceito = "Ruim";
}

// Estrutura condicional Switch

switch (conceito) {

    case "Bom": console.log("Você passou com " + media + ", Parabens!");
        break

    case "Regular":
        console.log("Você passou com " + media + ", mas pode melhorar.");
        break

    case "Ruim":
        console.log("Sua média " + media + " não foi sufissiente.");
        break

    default: console.log("Houve algum erro!");
        break
}

console.log("Conceito: " + conceito);