//Declaramos el array y le asignamos 10 elementos numericos
var listadoNumeros = [9, 700, 800, 200, 1000, 880, 360, 355, 100, 158]
// Declaramos y definimos el valor 0 a los contadores
var contadorMayores = 0;
var contadorIguales = 0;
var contadorMenores = 0;
// Declaramos nuestra variable limite y le asignamos un valor numerico random y redondeado
var limite = Math.round(Math.random() * 1000);

//mediante un for recorremos el array
for (var i = 0; i < listadoNumeros.length; i++) {
  // realizamos las comparaciones segun sea mayor, menor o igual
    if (listadoNumeros[i] > limite) {
      // si es mayor incrementamos a 1 la variable correspondiente.
        contadorMayores++;
    } else if (listadoNumeros[i] == limite) {
        contadorIguales++;
    } else {
        contadorMenores++;
    }

}

//console.log("cantidad de elementos mayores a 500: " + contador);
