// EXERCÍCIO:Controle Financeiro
/*Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.*/

//Resolução do exercício:

let saldo = parseFloat(prompt("Informe o seu saldo inicial:"));

let valorDeposito;
let valorSaque;
let operacao;


do {

    operacao = prompt("Saldo disponivel: R$" + saldo +
        "\n\nInforme a operação escolhida:" +
        "\n[1] Depositar dinheiro" +
        "\n[2] Sacar dineiro" +
        "\n[0] Sair");

    switch (operacao) {

        case "1":
            valorDeposito = parseFloat(prompt("Quanto deseja depositar?"));
            if (valorDeposito <= 0) {
                alert("Valor invalido!");
            }

            else if (isNaN(valorDeposito)) {
                alert("O valor informado não é um número!");

            }
            else {
                saldo = saldo + valorDeposito;
                alert("O valor de R$ " + valorDeposito + " foi depositado com sucesso!\n\n" +
                    "Saldo atual: R$ " + saldo);
            }
            break

        case "2":
            valorSaque = parseFloat(prompt("Quanto deseja sacar?"));

            if (valorSaque <= 0) {
                alert("Valor invalido!");
            }

            else if (valorSaque > saldo) {
                alert("Saldo insuficiente!")
            }

            else if (isNaN(valorSaque)) {
                alert("O valor informado não é um número!");

            }
            else {
                saldo = saldo - valorSaque;
                alert("O valor de R$ " + valorSaque + " foi sacado com sucesso!\n\n" +
                    "Saldo atual: R$ " + saldo);
            }
            break
    }


} while (operacao !== "0");

alert("Operação sendo encerrada...");