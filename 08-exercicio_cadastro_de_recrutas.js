/* EXERCICIO: Cadastro de Recrutas
Escreva um programa em javascript que permita salvar informações de um recruta. As informações a serem salvas são:
- o primeiro nome
- o sobrenome
- o campo de estudo
- o ano de nascimento
Depois o programa deve exibir o nome completo do recruta, seu campo de estudo e sua idade (apenas baseada no ano de nascimento).*/

//Resolução do exercicio:

let nome = prompt("==CADASTRO DE RECRUTA== \n\n Insira seu primeiro nome:");
let sobrenome = prompt("Insira o seu sobrenome:");
let anoNasc = parseInt(prompt("Informe o ano do seu nascimento:"));
let campoEstudo = prompt("Informe o seu campo de estudo:");

let nomeCompleto = (nome + " " + sobrenome); //Concatenação do nome e sobrenome para formação do nome completo.
let idade = (2023 - anoNasc); // Operação para obter a idade com base no ano atual e ano de nascimento.

alert("RECRUTA CADASTRADO COM SUCESSO!\n" + "\nNome completo: " + nomeCompleto + "\nIdade: " + idade + "\nCampo de estudo: " + campoEstudo); // Mensagem ao ser exibida no final da execução do programa.
