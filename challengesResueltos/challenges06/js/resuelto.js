var texto = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.morbi vel gravida diam, ultricies interdum libero.etiam tempor, nunc eu dignissim rutrum, erat enim blandit magna, ut pretium risus nulla a sem.sed ut augue est.quisque pellentesque condimentum ligula vulputate tempus.curabitur non ex vitae urna vehicula gravida sit amet sit amet quam"

var cantidadCaracteres = texto.length;
var parrafos = 0;
var cantidadEspaciosPuntos = 0;

function leerTexto(stringTexto) {
    var estado = stringTexto;
    for (letras in stringTexto) {
        // console.log("letra " + stringTexto[letras]);
        var caracterActal = stringTexto[letras];
        if (caracterActal === ".") {
            parrafos++
            var siguienteLetra = stringTexto[++letras];
            var siguienteLetraMayus = siguienteLetra.toUpperCase();
            cantidadEspaciosPuntos++

            estado = estado.replace("." + siguienteLetra, ". " + siguienteLetraMayus);
        } else if (caracterActal === " ") {
            cantidadEspaciosPuntos++
        }


    }
    //console.log(estado);
    return estado;
}

var resultado = leerTexto(texto);
var cantidadLetras = cantidadCaracteres - cantidadEspaciosPuntos;