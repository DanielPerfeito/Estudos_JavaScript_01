
// Função Recursiva: É uma função que chama a si própria. (Efeito recursão).

// A função "dividir" recebe um número como argumento.
function dividir(num) {
    // Exibe o número atual no console.
    console.log(num);

    // Verifica se o número é divisível por 2 (par).
    if (num % 2 === 0) {
        // Se for par, chama recursivamente a função "dividir" com o número dividido por 2.
        dividir(num / 2);
    } else {
        // Se o número for ímpar, a função retorna o número.
        return num;
    }
}

// Chama a função "dividir" com o argumento 40.
//dividir(40);

// Observação Importante: É fundamental que toda função recursiva tenha uma condição de parada
// (como exemplificado acima com a estrutura condicional) para evitar execução contínua e
// prevenir o estouro do limite de chamadas da pilha, o que pode resultar em erros ou falhas no programa.