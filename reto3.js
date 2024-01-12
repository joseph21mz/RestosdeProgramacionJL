/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

const numbers = 50;
let n0 = 0;
let n1 = 1;

for (let i = 1; i <= numbers; i++) {
    console.log(n0);

    const fib = n0 + n1;
    n0 = n1;
    n1 = fib;
}

