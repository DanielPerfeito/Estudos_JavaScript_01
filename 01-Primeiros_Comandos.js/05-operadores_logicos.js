// OPERADORES LÓGICOS:

// && (E)
// Retorna verdadeiro se ambos os operandos forem verdadeiros.
var condicaoE = true && true; // Verdadeiro, porque ambos são verdadeiros
var condicaoE2 = true && false; // Falso, porque um deles é falso

// || (OU)
// Retorna verdadeiro se pelo menos um dos operandos for verdadeiro.
var condicaoOu = true || false; // Verdadeiro, porque um deles é verdadeiro
var condicaoOu2 = false || false; // Falso, porque ambos são falsos

// ! (Negativo)
// Inverte o valor de uma expressão lógica.
var negacao = !true; // Falso, porque negamos um valor verdadeiro
var negacao2 = !false; // Verdadeiro, porque negamos um valor falso