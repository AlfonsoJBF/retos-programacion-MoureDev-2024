/* SUCESION DE FIBONACCI (RETO #3 DE 2022)
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

const imprimeFibonacci = () => {
    let numeroAnterior = 0;
    let numeroActual = 1;

    for (let i = 0; i <= 50; i++) {
        console.log(numeroActual);

        let sumaActual = numeroAnterior + numeroActual;
        numeroAnterior = numeroActual;
        numeroActual = sumaActual;
    }
}

imprimeFibonacci();