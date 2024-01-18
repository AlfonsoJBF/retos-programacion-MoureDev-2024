/* COMPROBAR SI ES UN ANAGRAMA (RETO #2 DE 2022)
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const esAnagrama = (palabra1, palabra2) => {

    const letrasPalabra1Ordenadas = Array.from(palabra1.toLowerCase()).sort().join('')
    const letrasPalabra2Ordenadas = Array.from(palabra2.toLowerCase()).sort().join('')

    const compararLetras = letrasPalabra1 === letrasPalabra2 ? true : false

    console.log(compararLetras)
}

esAnagrama("hOla", "halo") 