$("document").ready(function() {
    $("#contenedorTexto").append("<p>" + texto + "</p>");
    $("#contenedorCantidadCaracteres").text(cantidadCaracteres + " Caracteres");
    $("#contenedorCantidadParrafos").text(parrafos + " parrafos  ");
    $("#contenedorCantidadEspacios").text(cantidadEspaciosPuntos + " espacios y puntos  ");
    $("#contenedorCantidadLetras").text(cantidadLetras + " letras");

    $("#resultado").append("<p>" + resultado + "</p>");

});