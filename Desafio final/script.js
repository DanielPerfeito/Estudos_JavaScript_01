


const vagas = [];


function listarVagas(){

    let listaVagas = "Vagas Abertas \n"

    for(let i = 0; i < vagas.length ; i++){

        listaVagas += (indexOf.vagas[i] + 1) + " - " + vagas[i].nome 
    }
    

}

//Função que cria novas vagas

function criarVaga(){
    const vaga = {
        nome: prompt("Informe o nom da vaga:"),
        sobre: prompt("Descrição da vaga:"),
        data: prompt("informe a data limite da vaga (dd/mm/aaa):")
    }
    const confirmacao = confirm("Confirme as informações antes de enviar\n" +
    "\nNome da vaga: " + vaga.nome +
    "\nDescição: " + vaga.sobre +
    "\nData limite: " + vaga.data);

    if(confirmacao === true){
        vagas.push(vaga);
        alert("Vaga criada com sucesso!")
    } else {
        alert("Cadastro cancelado!")
    }

}



