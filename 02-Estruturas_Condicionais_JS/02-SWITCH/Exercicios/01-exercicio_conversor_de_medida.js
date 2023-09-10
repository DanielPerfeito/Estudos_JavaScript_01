

/*EXERCICIO: Conversor de Medidas

Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso).*/

//Resolução do exercicio:

// Solicita a entrada de uma medida em metros
let medidaMetros = parseFloat(prompt("Informe em metros a medida que deseja converter:"));

// Solicita a escolha da unidade de medida para conversão
let unidadeMedida = prompt(
    "Para qual unidade de medida deseja converter?" + "\n\n" +
    "Digite [1] para milímetro (mm)\n" +
    "Digite [2] para centímetro (cm)\n" +
    "Digite [3] para decímetro (dm)\n" +
    "Digite [4] para decâmetro (dam)\n" +
    "Digite [5] para hectômetro (hm)\n" +
    "Digite [6] para quilômetro (km)\n"
);

let milimetro;
let centimetro;
let decimetro;
let decametro;
let hectometro;
let quilometro; // Variáveis para armazenar as medidas convertidas.

// Utiliza a estrutura 'switch' para escolher a conversão com base na unidade de medida
switch (unidadeMedida) {
    case "1":
        milimetro = medidaMetros * 1000;
        alert(medidaMetros + " metro(s) é equivalente a " + milimetro + " milímetro(s).");
        break;
    case "2":
        centimetro = medidaMetros * 100;
        alert(medidaMetros + " metro(s) é equivalente a " + centimetro + " centímetro(s).");
        break;
    case "3":
        decimetro = medidaMetros * 10;
        alert(medidaMetros + " metro(s) é equivalente a " + decimetro + " decímetro(s).");
        break;
    case "4":
        decametro = medidaMetros / 10;
        alert(medidaMetros + " metro(s) é equivalente a " + decametro + " decâmetro(s).");
        break;
    case "5":
        hectometro = medidaMetros / 100;
        alert(medidaMetros + " metro(s) é equivalente a " + hectometro + " hectômetro(s).");
        break;
    case "6":
        quilometro = medidaMetros / 1000;
        alert(medidaMetros + " metro(s) é equivalente a " + quilometro + " quilômetro(s).");
        break;
    default:
        alert("Opção inválida!!!");
        break;
} // Estrutura condicional 'switch' para realizar a conversão

// O código exibe o resultado da conversão com base na unidade escolhida.