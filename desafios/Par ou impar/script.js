// Receber uma quantidade de valores para avaliar.
// Criar uma função que exiba na tela se cada número dos valores analizados é par ou impar

// ===================================================

const limite = parseInt(prompt('Informe a quantidade de valores que deseja testar:'))

exibirTipo();

function exibirTipo (){

    for (let i = 1; i <= limite; i++){

        if (i % 2 === 0){
            console.log(i + " PAR");
        }

        else {
            console.log(i + " IMPAR");
        }
    }

   
}