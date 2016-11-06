(function pedirNombre() {
    var nuevoNombre = prompt("Ingresa tu nombre", "Matias");
    console.log(nuevoNombre)
}());



var resultado;
do {
    var diaSemana = prompt("Indica el nombre de un dia de la semana", "lunes");

} while (diaSemana !== "lunes" && diaSemana !== "martes" && diaSemana !== "miercoles" && diaSemana !== "jueves" && diaSemana !== "viernes" && diaSemana !== "sabado" && diaSemana !== "domingo");

function seleccionDiaSemana(diaSemana) {

    switch (diaSemana) {
        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
            resultado = " el " + diaSemana + " es un día Habil";
            break;
        case "sabado":
        case "domingo":
            resultado = " el " + diaSemana + " es un día de fin de semana";
            break;
        default:
            alert(diaSemana + " NO es un valor correcto");
            break;
    }
}

seleccionDiaSemana(diaSemana);


do {
    var primerNumero = Number(prompt("Ingresa un número entero", "10"));
    var segundoNumero = Number(prompt("Ingresa un número entero", "20"));

} while (isNaN(primerNumero) && isNaN(segundoNumero));

var sumar = function(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}

function parOImpar(numero) {
    if (numero % 2 == 0) {
        // console.log("el numero " + numero + " es par");
        return true;
    } else {
        return false;
    }
}

var valorDeParOImpar = parOImpar(sumar(primerNumero, segundoNumero));