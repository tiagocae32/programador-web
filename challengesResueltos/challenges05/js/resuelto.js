//Definimos nuestro string
//var stringOriginal = "Usamos MetOdos de string en JAVASCRIPT";
var stringOriginal = prompt("ingresa un texto", "pepe");
// Creamos nuestra funcion pasandole como parametro el string antes definido

function contadorVocales(palabra) {
    // Declaramos nuestro contador en 0
    var cantidadVocales = 0;
    var contadorEspacios = 0;
    if (palabra.length < 5) {
        alert("el string tiene que ser mayor a 5 letras");
        return "el string tiene que ser mayor a 5 letras";
    }

    // Pasamos el string a minusculas para no tener que validad letras mayusculas o minusculas
    palabra = palabra.toLowerCase();
    // Detectamos donde se encuentra la primer letra "a"
    console.log(palabra.indexOf("a"));


    // Recorremos nuestro string y comparamos si corresponde a una vocal, de ser asi, incrementamos nuestro contador.
    for (letra in palabra) {

        var letraActual = palabra[letra];
        if (letraActual === "a" || letraActual === "e" || letraActual === "i" || letraActual === "o" || letraActual === "u") {
            cantidadVocales++;
        } else if (letraActual === " ") { // si el contenido de letraActual es un espacio incrementamos una variable de espacios
            contadorEspacios++;
        }
    }

    // Mostramos en pantalla la cantidad de letras original
    console.log("cantidad de letras de la palabra = " + (palabra.length - contadorEspacios));
    // retornamos la cantidad de vocales
    return cantidadVocales;
}

var vocales = contadorVocales(stringOriginal);