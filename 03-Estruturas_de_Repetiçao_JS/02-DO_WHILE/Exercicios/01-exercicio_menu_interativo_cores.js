//EXERCÍCIO - Menu Interativo (cor favorita);
/*Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.*/

//Resolução do exercício:

let escolha;
let cor;

// Utiliza a estrutura 'do...while' para criar um menu interativo até que o usuário escolha a opção "Encerrar" (0)
do {
    // Apresenta o menu de opções ao usuário
    escolha = prompt("Qual dessas cores você mais gosta?\n\n" +
        "[1] Para Vermelha\n" +
        "[2] Para Azul\n" +
        "[3] Para Amarelo\n" +
        "[4] Outra\n" +
        "[0] Encerrar\n");

    // Utiliza condicionais para determinar a ação com base na escolha do usuário
    if (escolha === "1") {
        cor = "Vermelho";
        alert("A sua cor favorita é: " + cor + ".");
    }
    else if (escolha === "2") {
        cor = "Azul";
        alert("A sua cor favorita é: " + cor + ".");
    }
    else if (escolha === "3") {
        cor = "Amarelo";
        alert("A sua cor favorita é: " + cor + ".");
    }
    else if (escolha === "4") {
        cor = prompt("Informe a sua cor favorita:");
        alert("A sua cor favorita é: " + cor + ".");
    }
    else if (escolha === "0") {
        alert("Nenhuma cor foi escolhida. \n\nEste programa está sendo encerrado.")
    }
    else {
        alert("Escolha inválida!"); // Mensagem exibida se a escolha não for válida
    }
} while (escolha !== "0"); // O loop continua enquanto a escolha não for "Encerrar"

// O código é encerrado quando o usuário escolhe "Encerrar"