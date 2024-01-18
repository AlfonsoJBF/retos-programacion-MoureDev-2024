/* EL FAMOSO FIZZ-BUZZ V2 (RETO #0 DE 2023)
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

const printFizzBuzzTillNumber = (maxNumber) => {

    for (let i = 0; i <= maxNumber; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizz-Buzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else {
            console.log(i)
        }
    }
}

printFizzBuzzTillNumber(100)