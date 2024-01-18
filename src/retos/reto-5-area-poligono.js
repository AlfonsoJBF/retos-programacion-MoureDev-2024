/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

const rectangulo = {
    tipo: 'rectangulo',
    altura: '15',
    ancho: '20'
}

const triangulo = {
    tipo: 'triangulo',
    altura: '10',
    ancho: '5'
}

const cuadrado = {
    tipo: "cuadrado",
    lado: "10"
}

const calcularAreaPoligono = (poligono) => {

    switch (poligono.tipo) {
        case "rectangulo":
            console.log("El area de este rectanculo es: " + poligono.altura * poligono.ancho)
            break
        case "triangulo":
            console.log("El area de este triangulo es: " + ((poligono.altura * poligono.ancho) / 2))
            break
        case "cuadrado":
            console.log("El area de este cuadrado es: " + poligono.lado ** 2)
            break
        default:
            console.log("¡Algo ha fallado! El area del poligono que has introducido no puede ser calculada")
    }
}

calcularAreaPoligono(rectangulo)
calcularAreaPoligono(triangulo)
calcularAreaPoligono(cuadrado)