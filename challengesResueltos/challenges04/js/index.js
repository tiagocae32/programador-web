$("document").ready(function() {

    for (elemento in arrayAutos) {
        $("#muestaInformacion").append("<tr>");

        for (indice in arrayAutos[elemento]) {

            $("#muestaInformacion").append("<td>" + arrayAutos[elemento][indice] + "</td>");

        }
        $("#muestaInformacion").append("</tr>");

    }


});