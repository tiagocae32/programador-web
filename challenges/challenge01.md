# Nombre y Operaciones

* Declarar una variable con el nombre "*primerNombre*" y pedir un nombre mediante un prompt.

* Declarar una variable con el nombre "*primerNumero*" y asignarle un valor del tipo **Number**, declarar una segunda variable con el nombre "*segundoNumero*" y asignarle el contenido de un prompt en el cual se solicita un numero del 1 al 100, Sumar estas dos variables y guardarlas en una variable llamada "*primerResultado*".

* Declaramos una nueva variable con el nombre "*tercerNumero*" solicitar el valor mediante prompt y le restamos el resultado anterior guardando el valor en una variable con el nombre "*segundoResultado*".

* Declarar dos nuevas variables "*cuartoNumero*" y "*quintoNumero*" solicitar los valores mediante prompt, multiplicarlos entre si y guardar el resultado en una variable con el nombre "*tercerResultado*". Dividir el valor de "*segundoResultado*" y "*tercerResultado*" y guardarlo en una variable "*resultadoFinal*"

# Resolución

* Primer Punto:

  var nuevoNombre = prompt("Ingresa tu nombre");
  alert("Bienvenido " + nuevoNombre + "al curso" );

* Segundo Punto

  var numeroGuardado = 5;
  var solicitarNumeroSuma = prompt("indicame un numero", 5);
  var resultadoOperacionSuma = numeroGuardado + solicitarNumero;
  console.log("Resultado de la suma: "+resultadoOperacionSuma);

* Tercer Punto

  var numeroParaResta = prompt("indicame un numero para restar al resultado anterior", 1);
  var resultadoResta = resultadoOperacionSuma - numeroParaResta;
  console.log("Resultado de la resta: "+resultadoResta);

* Cuarto Punto
  var primerMultiplicador = prompt("indicame un numero para restar al resultado anterior", 1);
  var segundoMultiplicador = prompt("indicame un numero para restar al resultado anterior", 1);

  var resultadoFinal = (primerMultiplicador * segundoMultiplicador)/resultadoResta
  console.log("Resultado final: "+resultadoFinal);
