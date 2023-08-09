// EXERCICIO: Visitando Novas Cidades
/*Escreva um programa em javascript que peça o nome de um turista e então pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o nome da cidade e o armazene em uma variável, e então continue perguntando se o turista visitou alguma outra cidade até que a resposta seja não. No fim, o programa deve exibir o nome do turista, quantas e quais cidades ele visitou.*/

// Resolução do exercício:

const nomeTurista = prompt("Olá turista! como se chama?"); //Coleta o nome do usuário.

let visita = prompt(nomeTurista +", você ja visitou outra cidade? \n\n Digite [1] para SIM\n Digite [2] para NÃO"); //Primeira pergunta.

switch(visita){
    case "1":
        let cidades = prompt("Qual cidade?"); // variavel que armazenará os nomes de cada cidade.
        let contagem = 1; // Variavel que contará o número de cidades visitadas.

        visita = prompt("Você ja visitou alguma outra cidade? \n\n Digite [1] para SIM\n Digite [2] para NÃO"); // Segunda pergunta sobre visita. (Primeira já dento do case positivo).

        while(visita == "1"){

            cidades = cidades + ", " + prompt("Qual cidade?");

            contagem++;
            
            visita = prompt("Você ja visitou alguma outra cidade? \n\n Digite [1] para SIM\n Digite [2] para NÃO");
        } // Bloco de repetição que funcionará enquantoo usuário responder ativamente.

        alert("Turista: " + nomeTurista + "\n" + "Cidades Visitadas: " + cidades + "\n" + "Número de cidades visitadas: " + contagem); // Mensagem de resumo das viagens.

        break

    case "2": 
        alert("Viajar é bom, experimente!");
        break

    default: 
        alert("Resposta invalida!");
        break
    }