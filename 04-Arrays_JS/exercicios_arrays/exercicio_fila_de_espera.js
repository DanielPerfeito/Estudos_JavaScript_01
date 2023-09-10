// EXERCICIO DE ARRAYS - FILA DE ESPERA

//Escreva um programa em javascript para simular uma fila de espera em um consultório médico.

//Instruções:
//1- O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem, mostrando sua posição ao lado do nome (ex.: 1° Daniel, 2° Maria, etc).

//2- O menu também deve permitir escolher entre as opções de "NOVO PACIENTE", para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), "CONSULTAR PACIENTE", que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e "SAIR". O programa só poderá ser encerrado se a opção "sair" for selecionada, caso contrário deve voltar ao menu

//Resolução do exercicio:

// Inicializamos um array chamado 'fila' para armazenar os nomes dos pacientes em ordem de chegada.
let fila = [];

let atendimento; // Variável utilizada para receber a escolha do usuário no menu.

do {
    let lista = "Fila de espera: \n";

    // Montamos a lista de pacientes, exibindo suas posições na fila.
    for (let i = 0; i < fila.length; i++) {
        lista += (i + 1) + "° " + fila[i] + "\n";
    }

    // Exibimos o menu interativo ao usuário.
    atendimento = prompt(
        "MENU DE ATENDIMENTO\n\n" +
        lista +
        "\n[1] NOVO PACIENTE" +
        "\n[2] ATENDER PACIENTE" +
        "\n[0] SAIR"
    );

    if (atendimento === "1") {
        // Se o usuário escolher "NOVO PACIENTE", pedimos o nome do paciente e o adicionamos ao final da fila.
        let novoPaciente = prompt("Informe o nome do paciente:");
        fila.push(novoPaciente);
    } else if (atendimento === "2") {
        // Se o usuário escolher "ATENDER PACIENTE", verificamos se há pacientes na fila.
        if (fila.length === 0) {
            alert("Não há pacientes aguardando atendimento.");
        } else {
            // Caso haja pacientes, removemos o primeiro da fila (o paciente atendido) e informamos ao usuário.
            let pacienteAtendido = fila.shift();
            alert("Paciente " + pacienteAtendido + " foi encaminhado para o consultório.");
        }
    } else if (atendimento === "0") {
        // Se o usuário escolher "SAIR", encerramos o programa.
        alert("O atendimento está sendo encerrado!");
    } else {
        // Para qualquer outra opção, informamos que é inválida.
        alert("Opção inválida!");
    }

} while (atendimento !== "0"); // Continuamos no loop enquanto o usuário não escolher "SAIR".
