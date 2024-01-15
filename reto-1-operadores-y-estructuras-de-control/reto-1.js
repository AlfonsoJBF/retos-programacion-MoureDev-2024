/*
  EJERCICIO:
  - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
    Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
    (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
  - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
    que representen todos los tipos de estructuras de control que existan
    en tu lenguaje:
    Condicionales, iterativas, excepciones...
  - Debes hacer print por consola del resultado de todos los ejemplos.
 
  DIFICULTAD EXTRA (opcional):
  Crea un programa que imprima por consola todos los números comprendidos
  entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 
  Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

// OPERADORES ÁRITMETICOS

const operadorSuma = (numero1, numero2) => {
    return numero1 + numero2
}
const operadorResta = (numero1, numero2) => {
    return numero1 - numero2
}
const operadorMultiplicar = (numero1, numero2) => {
    return numero1 * numero2
}
const operadorDivision = (numero1, numero2) => {
    return parseFloat(numero1) / numero2
}

const operadorModulo = (numero1, numero2) => {
    return numero1 % numero2
}

const operarAritmetica = (numero1, numero2) => {

    console.log(operadorSuma(numero1, numero2))
    console.log(operadorResta(numero1, numero2))
    console.log(operadorMultiplicar(numero1, numero2))
    console.log(operadorDivision(numero1, numero2))
    console.log(operadorModulo(numero1, numero2))

}

operarAritmetica(50, 11)