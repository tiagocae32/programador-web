# Pequeñas funciones

* Crear una funcion que pida nombre y apellido y lo muestre en la consola
* Crear una funcion que en base a un paramentro muestre los dias habiles o de fines de semana en consola (No entiendo lo solicitado)
* Crear una funcion que retorne la suma de 2 numeros solicitados como parametros, este valor pasarlo a otra funcion que diga si es par o impar el numero.

#Resolución

* Primer Punto

var datosUsuario = function(nombre, apellido){
  console.log("mi nombre " + nombre+ " y mi apellido " + apellido);
};

datosUsuario("Matias", "Blayer")

* Tercer Punto


var operacion = function(operador1, operador2){
  return operador1+ operador2;
}
