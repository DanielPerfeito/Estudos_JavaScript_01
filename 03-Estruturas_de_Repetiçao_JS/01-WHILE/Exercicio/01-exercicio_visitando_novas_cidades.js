// Solicita o nome do turista
const nomeTurista = prompt("Olá turista! Como se chama?");

// Inicializa a variável 'visita' com a resposta sobre a primeira visita à cidade
let visita = prompt(nomeTurista + ", você já visitou outra cidade? \n\nDigite [1] para SIM\nDigite [2] para NÃO");

switch (visita) {
    case "1":
        let cidades = prompt("Qual cidade?"); // Variável para armazenar os nomes das cidades
        let contagem = 1; // Variável para contar o número de cidades visitadas

        // Pergunta se o turista visitou outras cidades (dentro do case positivo)
        visita = prompt("Você já visitou alguma outra cidade? \n\nDigite [1] para SIM\nDigite [2] para NÃO");

        while (visita === "1") {
            cidades += ", " + prompt("Qual cidade?"); // Acrescenta o nome da cidade à lista
            contagem++; // Incrementa a contagem de cidades visitadas

            // Pergunta se o turista visitou mais cidades
            visita = prompt("Você já visitou alguma outra cidade? \n\nDigite [1] para SIM\nDigite [2] para NÃO");
        }

        // Exibe um resumo das viagens
        alert("Turista: " + nomeTurista + "\n" +
              "Cidades Visitadas: " + cidades + "\n" +
              "Número de cidades visitadas: " + contagem);
        break;

    case "2":
        alert("Viajar é bom, experimente!");
        break;

    default:
        alert("Resposta inválida!");
        break;
}