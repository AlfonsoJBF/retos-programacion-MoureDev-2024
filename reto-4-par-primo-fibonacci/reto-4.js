/* PRIMO, PAR Y FIBONACCI (RETO #4 DE 2023)
 * Escribe un programa que, dado un número, compruebe y muestre si es primo,
 * fibonacci y par.
 * Ejemplos:
 * - Con el número 2, nos dirá: "2 es primo, fibonacci y es par"
 * - Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"
 */


const comprobarNumero = (num) => {

    let resultado = `El numero ${num} `

    const comprobarPar = (num) => {
        if (num % 2 === 0) {
            resultado += 'es par, '
            return
        }

        resultado += 'es impar, '
    }

    const comprobarPrimo = (num) => {

        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                resultado += ' no es primo, '
                return
            }
        }

        resultado += 'es primo, '
    }

    const comprobarFibonnaci = (num) => {
        const raizPositiva = 5 * num ** 2 + 4
        const raizNegativa = 5 * num ** 2 - 4

        const comprobarRaiz = (num) => {
            const raiz = Math.sqrt(num)
            return raiz === Math.floor(raiz)
        }

        if (comprobarRaiz(raizPositiva) || comprobarRaiz(raizNegativa)) {
            resultado += 'pertenece a la secuencia de Fibonacci'
        } else {
            resultado += 'no pertenece a la secuencia de Fibonacci'
        }
    }



    comprobarPar(num)
    comprobarPrimo(num)
    comprobarFibonnaci(num)
    console.log(resultado)
}

comprobarNumero(2)
comprobarNumero(7)
comprobarNumero(8)
comprobarNumero(1)