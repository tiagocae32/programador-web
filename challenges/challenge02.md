# Días de la semana

    * Crear un array con todos los dias de la semana *
    Recorrerlos y mostrar cuando sea domingo o sabado un mensaje en consola.

#Resolución

var arrayDias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for (var i = 0; i <= arrayDias.length; i++;) {
    var diaSemana = arrayDias[i];
    if(diaSemana ===  "sabado" || diaSemana=== "domingo"){
      console.log("hoy es sabado o domingo")
      }
}
