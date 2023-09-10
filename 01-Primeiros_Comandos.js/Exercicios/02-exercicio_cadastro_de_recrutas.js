/* EXERCICIO: Cadastro de Recrutas
Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:
- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento
Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).*/

//Resolução do exercicio:

// Solicita ao usuário informações do recruta
let nome = prompt("== CADASTRO DE RECRUTA ==\n\nInsira seu primeiro nome:");
let sobrenome = prompt("Insira o seu sobrenome:");
let anoNasc = parseInt(prompt("Informe o ano do seu nascimento:"));
let campoEstudo = prompt("Informe o seu campo de estudo:");

// Concatena o primeiro nome e sobrenome para formar o nome completo
let nomeCompleto = nome + " " + sobrenome;

// Calcula a idade com base no ano de nascimento e no ano atual (assumindo 2023)
let idade = 2023 - anoNasc;

// Exibe uma mensagem com os dados do recruta
alert("RECRUTA CADASTRADO COM SUCESSO!\n\nNome completo: " + nomeCompleto + "\nIdade: " + idade + "\nCampo de estudo: " + campoEstudo);

// Esta mensagem será exibida ao final da execução do programa
