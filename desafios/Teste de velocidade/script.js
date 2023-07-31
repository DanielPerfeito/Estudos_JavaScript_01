// Velocidade maxima de até 70 kmh
//A cada 5km acima do limite de velocidade o motorista ganha 1 ponto na carteira.

// Caso a quantidades de pontos acrescidos na carteira seja maior do que 12 a carteira do motorista deverá ser suspensa. 

//=======================================================

const velocidade = parseFloat(prompt("Informe a velocidade registrada no radar:"));

const limiteVelocidade = 70;

const kmPorPonto = 5; // <-Área de declação das variáveis

function verificarVelocidade() {

    if (velocidade <= limiteVelocidade) {
        alert("OK, o motorista está dentro do limite de velocidade permitido.");
    } // <- mensagem exibida na tela caso o motorista esteja dentro do limite de velocidade permitido.

    else {

        const pontos = Math.floor((velocidade - limiteVelocidade) / kmPorPonto); // <- Operação matemática que calcula quantos pontos o motorista vai levar na carteira caso ultrapasse o limite de velocidade.

        if (pontos >= 12) {
            alert("A carteira do motorista está suspensa!");
        }

        else {
            alert("O motorista está acima do limite de velocidade permitido e receberá " + pontos + " pontos na carteira.")
        }
    } // < - será executado caso o motorista esteja acima do limite de velocidade permitida.

} 

verificarVelocidade(); //Função para testar a velocidade

