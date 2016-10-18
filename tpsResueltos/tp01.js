// Definimos nuestra variable y le asignamos un array de 5 elementos del tipo number

var nuevoArray = [5,8,1,2,3];

// Incrementamos en 1 el primer elemento

var primerElemento = ++nuevoArray[0] /* Recuerda que el orden asignado puede modificar
                                        el resultado en este caso primero incrementa el
                                        valor y despues asigna el valor a la variable.*/

// Modificamos el segundo elemento por el string JavaScript.
nuevoArray[1]= "JavaScript"; // Primero le asignamos el string al segundo elemento del Array
var segundoElemento = nuevoArray[1];  // Asignamos el valor del segundo elemento modificado a una nueva variable

//Sumarle al Tercer elemento el primer elemento y multiplicarlo por 12

var resultado = (nuevoArray[0] + nuevoArray[2]) * 12;

// Si lo multiplicamos por un numero random usariamos:

  /* Math.random genera un numero random entre 0 y 1
      multiplicamos por un valor el cual va a servir como limite
      y por ultimo utilzamos Math.round() para redondear a un numero entero.*/
var random =  Math.round(Math.random()*100);
var resultado = (nuevoArray[0] + nuevoArray[2]) * random;

// Decrementamos en 1 el cuarto elemento
var cuartoElemento = --nuevoArray[3];

// Obtener el modulo entre el resultado del punto 3 y el elemento numero 5

var modulo = resultado%nuevoArray[4];
