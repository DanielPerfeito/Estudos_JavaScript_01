// Exemplo de estrutura condicional switch com domingo como primeiro dia da semana e sábado como o último dia

// Declara uma variável 'diaDaSemana' com um valor de 3 (representando quarta-feira)
let diaDaSemana = 3;

// Utiliza a estrutura 'switch' para tomar decisões com base no valor da variável 'diaDaSemana'
switch (diaDaSemana) {
    case 1:
        console.log("Hoje é domingo.");
        break;
    case 2:
        console.log("Hoje é segunda-feira.");
        break;
    case 3:
        console.log("Hoje é terça-feira.");
        break;
    case 4:
        console.log("Hoje é quarta-feira.");
        break;
    case 5:
        console.log("Hoje é quinta-feira.");
        break;
    case 6:
        console.log("Hoje é sexta-feira.");
        break;
    case 7:
        console.log("Hoje é sábado.");
        break;
    default:
        console.log("Valor inválido para 'diaDaSemana'.");
}