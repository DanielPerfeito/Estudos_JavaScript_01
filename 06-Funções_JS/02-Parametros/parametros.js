// Conceito de parâmetros em funções:

/* Parâmetros são valores que uma função aceita como entradas.
   Eles permitem que você personalize o comportamento da função. */

// Exemplo: Função que calcula o dobro de um número.
function dobro(x){
    alert("O dobro de " + x + " é " + (x * 2) + ".");
}

dobro(8); // Chamando a função dobro com o argumento 8.

// Parâmetros com valor padrão:
/* Os parâmetros podem ter valores padrão para o caso de a função ser chamada sem fornecer um valor específico. */
function dizerOla(nome = "Mundo"){
    alert("Olá, " + nome + "!");
}

dizerOla(); // Exibe a saudação padrão para "Mundo".
dizerOla("Daniel"); // Exibe a saudação personalizada para "Daniel".

// Funções com múltiplos parâmetros:
function soma(a, b){
    alert("A soma de " + a + " e " + b + " é igual a " + (a + b) + ".");
}

soma(10, -5); // Chamando a função soma com os argumentos 10 e -5.

// Observação importante:
/* Se uma função tem vários parâmetros, e alguns deles são opcionais com valores padrão,
   esses parâmetros opcionais devem ser os últimos na ordem dos parâmetros. */

function criarUsuario(nome, email, senha, tipo = "Admin"){
    // Cria um objeto de usuário com as informações fornecidas.
    usuario = {
        nome,
        email,
        senha,
        tipo,
    }
}

criarUsuario("Daniel", "daniel@gmail.com", "1996"); // Chamando a função criarUsuario.
console.log(usuario); // Exibindo o objeto de usuário criado.