
let velocidade = 0;

do{
    alert("A velocidade do veiculo é " + velocidade + "km/h");
    velocidade -= 20; // no DO, é garantido que a instução dentro das chaves seja executada pelomenos uma vez, mesmo que a condição do WHILE seja falsa.

}while(velocidade > 0);

alert("A velocidade do veiculo é " + velocidade + "km/h");