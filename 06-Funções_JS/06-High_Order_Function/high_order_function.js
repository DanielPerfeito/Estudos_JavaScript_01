
//High Order Functions: São funçoes que recebem outras funções como parametros.

function calcular(a, b, operacao){
    console.log("Realizando operação:");
    const resultado = operacao(a, b);
    return resultado;
}

function somar(a, b){
    console.log("Somando...")
    return console.log(a + " + " + b + " = " + (a+b));
}

function subtrair(a, b){
    console.log("Subtraindo...")
    return console.log(a + " - " + b + " = " + (a-b));
}

function multiplicar(a, b){
    console.log("Multiplcando...")
    return console.log(a + " x " + b + " = " + (a*b));
}

function dividir(a, b){
    console.log("Dividindo...")
    return console.log(a + " / " + b + " = " + (a/b));
}
calcular(5, 2, somar);
calcular(5, 2, subtrair);
calcular(5, 2, multiplicar);
calcular(5, 2, dividir);