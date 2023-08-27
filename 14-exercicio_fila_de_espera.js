// EXERCICIO DE ARRAYS - FILA DE ESPERA

//Escreva um programa em javascript para simular uma fila de espera em um consultório médico.

//Instruções:
//1- O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem, mostrando sua posição ao lado do nome (ex.: 1° Daniel, 2° Maria, etc).

//2- O menu também deve permitir escolher entre as opções de "NOVO PACIENTE", para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), "CONSULTAR PACIENTE", que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e "SAIR". O programa só poderá ser encerrado se a opção "sair" for selecionada, caso contrário deve voltar ao menu

//Resolução do exercicio:

let fila = []; // Declaração do array.

let atendimento; // Variavel utilizada para testes da opção do menu.

do {
    let lista = "Fila de espera: \n"; //Variavel para armanzenar a lista que será exibida no menu com as posições e nomes dos paciente.

    for (let i = 0; i < fila.length; i++) {

        lista += (i + 1) + "° " + fila[i] + "\n"; //Relaciona a posição na fila com o nome do do paciente.
    } // Contador da fila.

    atendimento = prompt("MENU DE ATENDIMENTO\n\n" +
        lista +
        "\n[1] NOVO PACIENTE" +
        "\n[2] ATENDER PACIENTE" +
        "\n[0] SAIR"); // Descrições do menu interativo e suas opções.

    if (atendimento === "1") {
        let novoPaciente = prompt("Informe o nome do paciente:");
        fila.push(novoPaciente);
    } else if (atendimento === "2") {
        if (fila.length === 0)/*Testa se a fila está vazia*/ {
            alert("Não há pacientes aguardando atendimento.")
        } else {
            let pacienteAtendido = fila.shift();
            alert("Paciente " + pacienteAtendido + " foi encaminhado para o consultório.");
        }
    } else if (atendimento === "0") {
        alert("O atendimento está sendo encerrado!");
    } else {
        alert("Opção invalida!");
    }

} while (atendimento !== "0"); // Looping de repetição
