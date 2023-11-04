// Resolução:

// FUNÇÕES GERAIS ============================================================================

function verificarValorNumerico(valor01 = 0, valor02 = 0, valor03 = 0) {

    if (isNaN(valor01) == true || isNaN(valor02) == true || isNaN(valor03) == true) {

        alert("Houve um erro! \nCertifique-se de que os valores inseridos são números.");
        return false // retorna falso, caso algum dos valores não seja numérico.
    } else {
        return true // retorna verdadeiro só se todos os valores forem numéricos
    }
} // Esta função verifica se os valores inseridos no prompt são númericos.

// FUNÇÕES DE CALCULO ========================================================================

function calcularTriangulo(base, altura) {

    let areaTriangulo = (base * altura) / 2;

    let valorNumerico = verificarValorNumerico(base, altura); // Aqui é atribuido à variavel 'valorNumerico' o valor retornado pela função 'verificarValorNumerico()' que pode ser true ou false, conforme determinado na própria função. 

    if (valorNumerico === true) {
        alert("A área de um triangulo com base " + base + " e altura " + altura + " é " + areaTriangulo);
    }// Este bloco só será executado se todas as entradas do prompt forem de fato valores númericos, conforme testados na função 'verificarValorNumerico()'.

} // Esta função calcula a área do triangulo.

function calcularRetangulo(base, altura) {

    let areaRetangulo = base * altura;

    let valorNumerico = verificarValorNumerico(base, altura); // Aqui é atribuido à variavel 'valorNumerico' o valor retornado pela função 'verificarValorNumerico()' que pode ser true ou false, conforme determinado na própria função. 

    if (valorNumerico === true) {
        alert("A área de um retangulo com base " + base + " e altura " + altura + " é " + areaRetangulo);
    }// Este bloco só será executado se todas as entradas do prompt forem de fato valores númericos, conforme testados na função 'verificarValorNumerico()'.

} // Esta função calcula a área do retangulo.

function calcularQuadrado(lado) {

    let areaQuadrado = lado ** 2;

    let valorNumerico = verificarValorNumerico(lado); // Aqui é atribuido à variavel 'valorNumerico' o valor retornado pela função 'verificarValorNumerico()' que pode ser true ou false, conforme determinado na própria função. 

    if (valorNumerico === true) {
        alert("A área de um quadrado com lado " + lado + " é " + areaQuadrado);
    }// Este bloco só será executado se todas as entradas do prompt forem de fato valores númericos, conforme testados na função 'verificarValorNumerico()'.

} // Esta função calcula a área do quadrado

function calcularTrapezio(baseMaior, baseMenor, altura) {

    let areaTrapezio = (baseMaior + baseMenor) * altura / 2;

    let valorNumerico = verificarValorNumerico(baseMaior, baseMenor, altura); // Aqui é atribuido à variavel 'valorNumerico' o valor retornado pela função 'verificarValorNumerico()' que pode ser true ou false, conforme determinado na própria função. 

    if (valorNumerico === true) {
        if (baseMenor >= baseMaior){
            return alert("Houve um erro! \nCertifique-se que a 'Base menor' será sempre menor do que a 'Base maior'.");
        } else {
            return alert("A área de um trapézio com base maior " + baseMaior + ", base menor " + baseMenor + " e altura " + altura + " é " + areaTrapezio);
        }
    }// Este bloco só será executado se todas as entradas do prompt forem de fato valores númericos, conforme testados na função 'verificarValorNumerico()'.

} // Esta função calcula a área de um trapézio.

function calcularCirculo(raio) {

    const pi = 3.14;

    let areaCirculo = pi * (raio ** 2);

    let valorNumerico = verificarValorNumerico(raio); // Aqui é atribuido à variavel 'valorNumerico' o valor retornado pela função 'verificarValorNumerico()' que pode ser true ou false, conforme determinado na própria função. 

    if(valorNumerico === true){
        alert("A área de um circulo com raio " + raio + " é " + areaCirculo);
    }// Este bloco só será executado se todas as entradas do prompt forem de fato valores númericos, conforme testados na função 'verificarValorNumerico()'.

} // Esta Função calcula a área de um circulo.



// CONSTRUÇÂO DO MENU INTERATIVO =============================================================

let escolha; // Esta variável guardará a opção escolhida pelo usuário.

do{

    escolha = prompt("CALCULADORA GEOMÉTRICA\n" +
    "\nDigite o número da forma geomértrica que deseja calcular:" +
    "\n[1] Triangulo" + 
    "\n[2] Retãngulo" + 
    "\n[3] Quadrado" +
    "\n[4] Trapézio" +
    "\n[5] Círculo" +
    "\n[0] Sair"
    ); // Prompt de entrada da escolha do usuário.

    switch(escolha){

        case "1":
            calcularTriangulo(parseFloat(prompt("Informe a base do triangulo:")),parseFloat(prompt("Informe a altura do triangulo:")));
            break // Caso a opção [1] seja escolhida, a função calcularTriangulo() será chamada e terá como argumento os valores inseridos no prompt pelo usuário.  
        case "2": 
            calcularRetangulo(parseFloat(prompt("Informe a base do retangulo:")), parseFloat(prompt("Informe a altura do retangulo:")));
            break // Caso a opção [2] seja escolhida, a função calcularRetangulo() será chamada e terá como argumento os valores inseridos no prompt pelo usuário. 
        case "3":
            calcularQuadrado(parseFloat(prompt("Informe o lado do quadrado:")));
            break // Caso a opção [3] seja escolhida, a função calcularQuadrado() será chamada e terá como argumento os valores inseridos no prompt pelo usuário. 
        case "4":
            calcularTrapezio(parseFloat(prompt("Informe a base maior do trapézio:")), parseFloat(prompt("Informe a base menor do trapézio:")), parseFloat(prompt("Informe a altura do trapézio:")));
            break // Caso a opção [4] seja escolhida, a função calcularTrapezio() será chamada e terá como argumento os valores inseridos no prompt pelo usuário. 
        case "5":
            calcularCirculo(parseFloat(prompt("Informe o raio do circulo:")));
            break // Caso a opção [5] seja escolhida, a função calcularCirculo() será chamada e terá como argumento os valores inseridos no prompt pelo usuário. 
        case "0":
            alert("Operação Encerrada.");
            break // Caso a opção [0] seja escolhida, a mensagem acima será exibida e o programa será encerrado, conforme descrito no menu.
        default:
            alert("Opção Invalida!")
            break // Caso o valor inserido não corresponda a nenhuma opção, o programa exibirá a mensagem acima e retornará para o menu.
    }

}while(escolha !== "0"); // O menu continuará sendo exibido até que a opção [0] seja escolhida.