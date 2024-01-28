/* INVERTIR CADENAS (RETO #7 DE 2022)
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

const texto = 'Hola mundo'

const invertirCadena = (texto) => {
    const arrayTexto = Array.from(texto)
    let textoInvertido = []

    for (let i = texto.length; i >= 0; i--) {
        textoInvertido.push(arrayTexto[i])
    }

    textoInvertido = textoInvertido.join('')
    console.log(`La cadena original es : '${texto}' y la cadena invertida es '${textoInvertido}' `)

}


invertirCadena(texto)