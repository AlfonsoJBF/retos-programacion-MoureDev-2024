/* CONTADOR DE PALABRAS (RETO #7 DE 2022)
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const texto = 'En el tranquilo bosque, los pájaros cantan su melodía mientras el sol se filtra entre las ramas. Los árboles danzan con el viento, creando sombras en el suelo. En este rincón de la naturaleza, la armonía se repite día tras día. La paz envuelve cada rincón, como una suave melodía que nunca se cansa de sonar.'

const texto2 = 'En el misterioso rincón del universo, donde las estrellas titilan con secretos cósmicos, un viajero intrépido se aventura en el cosmos infinito. Con su nave espacial, surca galaxias desconocidas y descubre mundos alienígenas. Entre nebulosas danzantes y planetas exóticos, la maravilla y el asombro se entrelazan. En un planeta lejano, habitado por criaturas bioluminiscentes, la noche se transforma en un espectáculo de luces. Los seres alienígenas emiten destellos coloridos, creando un paisaje nocturno único. El viajero observa maravillado, sumergiéndose en la magia intergaláctica. En la vastedad del espacio, encuentra una civilización avanzada, donde la tecnología y la sabiduría convergen. Los habitantes del planeta comparten conocimientos sobre la energía cuántica y las maravillas de la teletransportación. El viajero absorbe cada detalle, llevando consigo el legado de mundos lejanos. Sin embargo, el cosmos también guarda peligros inesperados. En una región tumultuosa, enfrenta tormentas de asteroides y agujeros de gusano desestabilizadores. La destreza del viajero se pone a prueba mientras sortea los desafíos del espacio desconocido. A medida que avanza, el viajero se sumerge en la filosofía cósmica, contemplando la conexión entre las estrellas y el destino entrelazado de todos los seres. En esta odisea intergaláctica, el conocimiento y la exploración se entrelazan, tejiendo una epopeya que perdurará en la eternidad del universo.'

const contarPalabras = (texto) => {
    const arrayTexto = texto.toLowerCase().split(' ').map(word => word.replace(/[,.]$/, ''))

    const palabrasUnicas = Array.from(new Set(arrayTexto))
    let contadorPalabras = {

    }

    for (let i = 0; i < palabrasUnicas.length; i++) {
        contadorPalabras[palabrasUnicas[i]] = 0
        for (let j = 0; j < arrayTexto.length; j++) {
            if (palabrasUnicas[i] === arrayTexto[j]) {
                contadorPalabras[palabrasUnicas[i]] += 1;
            }
        }
    }

    console.log(contadorPalabras)
}

contarPalabras(texto2)