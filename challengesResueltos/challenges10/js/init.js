(function() {
    if (localStorage) {

        console.log("iniciamos el sistema correctamente");
        mostrarTareas();

    } else {
        alert("no se puede usar el sistema aca");
    }

}());