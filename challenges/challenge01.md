# Nombre y Operaciones

* Pedir nombre mediante prompt y disparar un alert con un texto que indique "Bienvenido al curso"
* Pedir un número mediante prompt y sumarlo a otro que este guardado en una variable
* Pedir un número y restarlo al resultado de la operacion anterior.
* Pedir dos números mediante prompt, multiplicarlos y el resultado de este dividirlo al resultado de la resta anterior.

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
