$("document").ready(function() {

    if (diaSemana === "sabado" || diaSemana === "domingo") {
        diaSemana = "finde";
    }
    $("#" + diaSemana).css("background-color", "green");



    $("#primerNumero").text(primerNumero);
    $("#segundoNumero").text(segundoNumero);
    $("#sumar").text(sumar(primerNumero, segundoNumero));



    if (valorDeParOImpar) {
        $("#tipoNumero").text("Par");
    } else {
        $("#tipoNumero").text("Impar");
    }
});