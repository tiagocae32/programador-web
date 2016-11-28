function mostrarTareas() {
    var listadoTareas = document.getElementById('listadoTareas');
    while (listadoTareas.hasChildNodes()) {
        listadoTareas.removeChild(listadoTareas.firstChild);
    }
    for (var i = 0; i < localStorage.length; i++) {
        var datoLocal = JSON.parse(localStorage.getItem(localStorage.key(i)));
        var fila = document.createElement("tr");
        fila.innerHTML = '<td>' + datoLocal.fecha + '</td><td>' + datoLocal.tarea + '</td><td>' + datoLocal.estado + '</td><td> <a href="#" id="' + localStorage.key(i) + '" class="eliminar">eliminar</a></td>';

        listadoTareas.appendChild(fila);
        var btnEliminar = document.getElementsByClassName("eliminar");

        for (var i = 0; i < btnEliminar.length; i++) {
            btnEliminar[i].addEventListener('click', borrar, false);
        }


    }

}


function borrar(e) {
    console.log("llegamos aca" + e.currentTarget.id);
    var miClave = e.currentTarget.id;
    localStorage.removeItem(miClave);
    mostrarTareas()

}