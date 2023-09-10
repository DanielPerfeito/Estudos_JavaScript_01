// EXERCÍCIO:Controle Financeiro
/*Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.*/

//Resolução do exercício:

// Solicita o saldo inicial ao usuário e converte para um número de ponto flutuante (float)
let saldo = parseFloat(prompt("Informe o seu saldo inicial:"));

let valorDeposito;
let valorSaque;
let operacao;

// Utiliza a estrutura 'do...while' para criar um menu de operações bancárias até que o usuário escolha sair (opção 0)
do {
    // Apresenta o saldo disponível e as opções de operações ao usuário
    operacao = prompt("Saldo disponível: R$" + saldo +
        "\n\nInforme a operação desejada:" +
        "\n[1] Depositar dinheiro" +
        "\n[2] Sacar dinheiro" +
        "\n[0] Sair");

    switch (operacao) {
        case "1":
            // Solicita o valor do depósito e o converte para um número de ponto flutuante (float)
            valorDeposito = parseFloat(prompt("Quanto deseja depositar?"));

            if (valorDeposito <= 0) {
                alert("Valor inválido!"); // Mensagem de erro se o valor for menor ou igual a zero
            }
            else if (isNaN(valorDeposito)) {
                alert("O valor informado não é um número!"); // Mensagem de erro se o valor não for um número válido
            }
            else {
                saldo += valorDeposito; // Atualiza o saldo com o valor depositado
                alert("O valor de R$ " + valorDeposito + " foi depositado com sucesso!\n\n" +
                    "Saldo atual: R$ " + saldo);
            }
            break;

        case "2":
            // Solicita o valor do saque e o converte para um número de ponto flutuante (float)
            valorSaque = parseFloat(prompt("Quanto deseja sacar?"));

            if (valorSaque <= 0) {
                alert("Valor inválido!"); // Mensagem de erro se o valor for menor ou igual a zero
            }
            else if (valorSaque > saldo) {
                alert("Saldo insuficiente!"); // Mensagem de erro se o valor do saque for maior que o saldo disponível
            }
            else if (isNaN(valorSaque)) {
                alert("O valor informado não é um número!"); // Mensagem de erro se o valor não for um número válido
            }
            else {
                saldo -= valorSaque; // Atualiza o saldo após o saque
                alert("O valor de R$ " + valorSaque + " foi sacado com sucesso!\n\n" +
                    "Saldo atual: R$ " + saldo);
            }
            break;
    }
} while (operacao !== "0"); // O loop continua enquanto o usuário não escolher sair (opção 0)

alert("Operação encerrada."); // Mensagem final quando o usuário escolhe sair