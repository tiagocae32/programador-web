var btnSeccionTarea = document.getElementById('btnMostrarSeccionTareas');
var btnNuevaTarea = document.getElementById('agregarTarea');



// Accion de mostrar o quitar la seccion de agregar tareas mediante el agregado de la clase hide
btnSeccionTarea.onclick = function() {
  document.getElementById("seccionTarea").classList.toggle('hide');
};

btnNuevaTarea.onclick = function() {
  var nuevaFecha = document.getElementById("nuevaTareaFecha");
  var nuevaTarea = document.getElementById("nuevaTareaTexto");
  var alertas = document.getElementById("alertas");

  var idAleatoreo = "tarea" + Date.now();

  nuevaFecha = nuevaFecha.value;
  nuevaTarea = nuevaTarea.value;

  if (!nuevaFecha.length || !nuevaTarea.length) {
    generarAvisos(alertas, "Faltan completar datos")

  } else {
    localStorage.setItem(idAleatoreo, JSON.stringify({
      "fecha": nuevaFecha,
      "tarea": nuevaTarea,
      "estado": "Pendiente"
    }));
    generarAvisos(alertas, "Se cargo correctamente la nueva tarea");
    mostrarTareas();
  }





};
