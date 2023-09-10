// Declaração de variáveis
let escolha;
let imoveis = [];

// Loop principal que exibe o menu interativo
do {
    // Exibe o menu com a quantidade de imóveis cadastrados
    escolha = prompt("CADASTRO DE IMÓVEIS\n" +
        "\nImóveis cadastrados: " + imoveis.length + "\n" +
        "\nDigite o número da opção desejada: \n" +
        "\n[1] - CADASTRAR NOVO IMÓVEL" +
        "\n[2] - LISTAR IMÓVEIS" +
        "\n[0] - SAIR");

    // Utiliza uma estrutura switch para tratar a escolha do usuário
    switch (escolha) {
        case "1":
            // Cria um objeto vazio para representar um novo imóvel
            let imovel = {};

            // Coleta informações do usuário
            imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:");
            imovel.quartos = prompt("Informe a quantidade de quartos do imóvel:");
            imovel.banheiros = prompt("Informe a quantidade de banheiros do imóvel:");
            imovel.garagem = prompt("O imóvel possui garagem? [sim/não]").toLowerCase();

            // Verifica se as entradas são válidas
            if (!isNaN(imovel.quartos) && !isNaN(imovel.banheiros) && (imovel.garagem === "sim" || imovel.garagem === "não")) {
                // Solicita confirmação ao usuário
                const confirmacao = confirm("Deseja salvar este imóvel?\n" +
                    "\nProprietário: " + imovel.proprietario +
                    "\nQuantidade de quartos: " + imovel.quartos +
                    "\nQuantidade de banheiros: " + imovel.banheiros +
                    "\nGaragem: " + imovel.garagem);

                // Se o usuário confirmar, adiciona o imóvel à lista de imóveis
                if (confirmacao === true) {
                    imoveis.push(imovel);
                    alert("Imóvel cadastrado com sucesso!");
                } else {
                    alert("Retornando ao menu inicial!")
                }
            } else {
                // Se as entradas forem inválidas, exibe um alerta de erro
                alert("Entrada inválida! \n\nCertifique-se de que a quantidade de quartos e banheiros seja um número e garagem seja 'sim' ou 'nao'.")
            }
            break;

        case "2":
            // Lista todos os imóveis cadastrados
            for (let i = 0; i < imoveis.length; i++) {
                alert("Imóvel " + (i + 1) + " de " + imoveis.length +
                    "\nProprietário: " + imoveis[i].proprietario +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiros +
                    "\nGaragem: " + imoveis[i].garagem);
            }
            break;

        case "0":
            // Encerra o programa
            alert("Operação encerrada!")
            break;

        default:
            // Trata opções inválidas ou inexistentes
            alert("Opção inválida ou inexistente!")
            break;
    }
} while (escolha !== "0"); // Garante que o menu só será encerrado quando a opção "SAIR" for escolhida.