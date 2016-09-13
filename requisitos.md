# Alcance de las variables (Locales-Globales)

El ámbito de una variable (llamado "scope" en inglés) es la zona del programa en la que se define la variable. JavaScript define dos ámbitos para las variables: global y local.

El siguiente ejemplo ilustra el comportamiento de los ámbitos:

```
function creaMensaje() {
var mensaje = “Mensaje de prueba”;
}
creaMensaje();
alert(mensaje);
```

El ejemplo anterior define en primer lugar una función llamada **creaMensaje** que crea una variable llamada **mensaje**. A continuación, se ejecuta la función mediante la llamada **creaMensaje();** y seguidamente, se muestra mediante la función **alert()** el valor de una variable llamada **mensaje**.

Sin embargo, al ejecutar el código anterior no se muestra ningún mensaje por pantalla. La razón es que la variable **mensaje** se ha definido dentro de la función **creaMensaje()** y por tanto, es una variable local que solamente está definida dentro de la función.

Cualquier instrucción que se encuentre dentro de la función puede hacer uso de esa
variable, pero todas las instrucciones que se encuentren en otras funciones o fuera de
cualquier función no tendrán definida la variable **mensaje**. De esta forma, para mostrar el mensaje en el código anterior, la función **alert()** debe llamarse desde dentro de la función **creaMensaje()**:

```
function creaMensaje() {
var mensaje = “Mensaje de prueba”;
alert(mensaje);
}
creaMensaje();
```

Además de variables locales, también existe el concepto de variable global, que está
definida en cualquier punto del programa (incluso dentro de cualquier función).

```
var mensaje = “Mensaje de prueba”;
function muestraMensaje() {
alert(mensaje);
}
```

El código anterior es el ejemplo inverso al mostrado anteriormente. Dentro de la función **muestraMensaje()** se quiere hacer uso de una variable llamada **mensaje** y que no ha sido definida dentro de la propia función. Sin embargo, si se ejecuta el código anterior, sí que se muestra el mensaje definido por la variable **mensaje**.

El motivo es que en el código JavaScript anterior, la variable **mensaje** se ha definido fuera de cualquier función. Este tipo de variables automáticamente se transforman en **variables globales** y están disponibles en cualquier punto del programa (incluso dentro de cualquier función).

De esta forma, aunque en el interior de la función no se ha definido ninguna variable
llamada mensaje, la variable global creada anteriormente permite que la instrucción
alert() dentro de la función muestre el mensaje correctamente.

Si una variable se declara fuera de cualquier función, automáticamente se transforma en variable global independientemente de si se define utilizando la palabra reservada var o no. Sin embargo, las variables definidas dentro de una función pueden ser globales o locales.

Si en el interior de una función, las variables se declaran mediante var se consideran
locales y las variables que no se han declarado mediante var, se transforman
automáticamente en variables globales.

Por lo tanto, se puede rehacer el código del primer ejemplo para que muestre el mensaje correctamente. Para ello, simplemente se debe definir la variable dentro de la función sin la palabra reservada var, para que se transforme en una variable global:

```
function creaMensaje() {
mensaje = "Mensaje de prueba";
}
creaMensaje();
alert(mensaje);
```

¿Qué sucede si una función define una variable local con el mismo nombre que una
variable global que ya existe? En este caso, las variables locales prevalecen sobre las
globales, pero sólo dentro de la función:

```
var mensaje = "gana la de fuera";
function muestraMensaje() {
var mensaje = "gana la de dentro";
alert(mensaje);
}
alert(mensaje);
muestraMensaje();
alert(mensaje);

```

El código anterior muestra por pantalla los siguientes mensajes:

```
gana la de fuera
gana la de dentro
gana la de fuera
```

Dentro de la función, la variable local llamada mensaje tiene más prioridad que la
variable global del mismo nombre, pero solamente dentro de la función.

¿Qué sucede si dentro de una función se define una variable global con el mismo nombre que otra variable global que ya existe? En este otro caso, la variable global definida dentro de la función simplemente modifica el valor de la variable global definida anteriormente:

```
var mensaje = "gana la de fuera";
function muestraMensaje() {
mensaje = "gana la de dentro";
alert(mensaje);
}
alert(mensaje);
muestraMensaje();
alert(mensaje);
```

En este caso, los mensajes mostrados son:

```
gana la de fuera
gana la de dentro
gana la de dentro
```

La recomendación general es definir como variables locales todas las variables que sean de uso exclusivo para realizar las tareas encargadas a cada función. Las variables
globales se utilizan para compartir variables entre funciones de forma sencilla.

# Valores de retorno dentro una función

Las funciones más sencillas no necesitan ninguna información para producir sus
resultados. Sin embargo, la mayoría de funciones de las aplicaciones reales deben
acceder al valor de algunas variables para producir sus resultados.

Las variables que necesitan las funciones se llaman argumentos. Antes de que pueda
utilizarlos, la función debe indicar cuántos argumentos necesita y cuál es el nombre de cada argumento. Además, al invocar la función, se deben incluir los valores que se le van a pasar a la función. Los argumentos se indican dentro de los paréntesis que van detrás del nombre de la función y se separan con una coma (,).

Teniendo como referencia la siguiente funcion: 

```
function suma_y_muestra() {
resultado = numero1 + numero2;
alert("El resultado es " + resultado);
}
```

Tal  función debe indicar que necesita dos argumentos, correspondientes a los dos números que tiene que sumar:

```
function suma_y_muestra(primerNumero, segundoNumero) { ... }
```

Dentro de la función, el valor de la variable primerNumero será igual al primer valor que se le pase a la función y el valor de la variable segundoNumero será igual al segundo valor que se le pasa. Para pasar valores a la función, se incluyen dentro de los paréntesis utilizados al llamar a la función:

```
// Definición de la función

function suma_y_muestra(primerNumero, segundoNumero) { ... }
var resultado = primerNumero + segundoNumero;
alert("El resultado es " + resultado);
}

// Declaración de las variables

var numero1 = 3;
var numero2 = 5;
// Llamada a la función
suma_y_muestra(numero1, numero2);
```

En el código anterior, se debe tener en cuenta que:

* Aunque casi siempre se utilizan variables para pasar los datos a la función, se podría haber utilizado directamente el valor de esas variables:  suma_y_muestra(3, 5);

* El número de argumentos que se pasa a una función debería ser el mismo que el  número de argumentos que ha indicado la función. No obstante, JavaScript no muestra ningún error si se pasan más o menos argumentos de los necesarios.
 
* El orden de los argumentos es fundamental, ya que el primer dato que se indica en la llamada, será el primer valor que espera la función; el segundo valor indicado
en la llamada, es el segundo valor que espera la función y así sucesivamente.
 
* Se puede utilizar un número ilimitado de argumentos, aunque si su número es muy grande, se complica en exceso la llamada a la función.

* No es obligatorio que coincida el nombre de los argumentos que utiliza la función y el nombre de los argumentos que se le pasan. En el ejemplo anterior, los argumentos que se pasan son numero1 y numero2 y los argumentos que utiliza la función son primerNumero y segundoNumero.

A continuación se muestra otro ejemplo de una función que calcula el precio total de un producto a partir de su precio básico:

```
// Definición de la función
function calculaPrecioTotal(precio) {
var impuestos = 1.16;
var gastosEnvio = 10;
var precioTotal = ( precio * impuestos ) + gastosEnvio;
}
// Llamada a la función
calculaPrecioTotal(23.34);
```

La función anterior toma como argumento una variable llamada precio y le suma los
impuestos y los gastos de envío para obtener el precio total. Al llamar a la función, se
pasa directamente el valor del precio básico mediante el número 23.34.

No obstante, el código anterior no es demasiado útil, ya que lo ideal sería que la función pudiera devolver el resultado obtenido para guardarlo en otra variable y poder seguir trabajando con este precio total:

```
function calculaPrecioTotal(precio) {
var impuestos = 1.16;
var gastosEnvio = 10;
var precioTotal = ( precio * impuestos ) + gastosEnvio;
}
// El valor devuelto por la función, se guarda en una variable
var precioTotal = calculaPrecioTotal(23.34);
// Seguir trabajando con la variable "precioTotal"
```

Afortunadamente, las funciones no solamente puede recibir variables y datos, sino que también pueden devolver los valores que han calculado. Para devolver valores dentro de una función, se utiliza la palabra reservada return. Aunque las funciones pueden devolver valores de cualquier tipo, solamente pueden devolver un valor cada vez que se ejecutan.

```
function calculaPrecioTotal(precio) {
var impuestos = 1.16;
var gastosEnvio = 10;
var precioTotal = ( precio * impuestos ) + gastosEnvio;
return precioTotal;
}
var precioTotal = calculaPrecioTotal(23.34);
// Seguir trabajando con la variable "precioTotal"
```

Para que la función devuelva un valor, solamente es necesario escribir la palabra
reservada return junto con el nombre de la variable que se quiere devolver. En el
ejemplo anterior, la ejecución de la función llega a la instrucción return precioTotal; y
en ese momento, devuelve el valor que contenga la variable precioTotal.

Como la función devuelve un valor, en el punto en el que se realiza la llamada, debe
indicarse el nombre de una variable en el que se guarda el valor devuelto:

```
var precioTotal = calculaPrecioTotal(23.34);
```

Si no se indica el nombre de ninguna variable, JavaScript no muestra ningún error y el
valor devuelto por la función simplemente se pierde y por tanto, no se utilizará en el
resto del programa. En este caso, tampoco es obligatorio que el nombre de la variable
devuelta por la función coincida con el nombre de la variable en la que se va a almacenar ese valor.

Si la función llega a una instrucción de tipo return, se devuelve el valor indicado y
finaliza la ejecución de la función. Por tanto, todas las instrucciones que se incluyen
después de un return se ignoran y por ese motivo la instrucción return suele ser la
última de la mayoría de funciones.

Para que el ejemplo anterior sea más completo, se puede añadir otro argumento a la
función que indique el porcentaje de impuestos que se debe añadir al precio del
producto. Evidentemente, el nuevo argumento se debe añadir tanto a la definición de la función como a su llamada:

```
function calculaPrecioTotal(precio, porcentajeImpuestos) {
var gastosEnvio = 10;
var precioConImpuestos = (1 + porcentajeImpuestos/100) * precio;
var precioTotal = precioConImpuestos + gastosEnvio;
return precioTotal;
}
var precioTotal = calculaPrecioTotal(23.34, 16);
var otroPrecioTotal = calculaPrecioTotal(15.20, 4);

```
Para terminar de completar el ejercicio anterior, se puede rendondear a dos decimales el precio total devuelto por la función:

```
function calculaPrecioTotal(precio, porcentajeImpuestos) {
var gastosEnvio = 10;
var precioConImpuestos = (1 + porcentajeImpuestos/100) * precio;
var precioTotal = precioConImpuestos + gastosEnvio;
return precioTotal.toFixed(2);
}
var precioTotal = calculaPrecioTotal(23.34, 16);
```

# Return

La instrucción return se utiliza para detener la ejecución de una función y devolver el valor del argumento **expression**.Si se omite esta expresión, o si no se ejecuta ninguna instrucción return desde la función, se asigna el valor undefined a la expresión que llamó a la función actual.

En el siguiente ejemplo se muestra el uso de la instrucción return

```
function myfunction(arg1, arg2){
   var r;
   r = arg1 * arg2;
   return(r);
}
```

En el siguiente ejemplo se muestra el uso de la instrucción return para devolver una función.

```
function doWork() {
    return function calculate(y) { return y + 1; };
}

var func = doWork();
var x = func(5);
document.write(x);

// Output: 6
```

# Self Invoking

Las expresiones de una función puede ser autoinvocada, lo cual se hace mediante self-invoking sin la necesidad de que estas sean llamadas.

Las expresiones de una función sera ejecutadas atuomaticamente siempre y cuando dichas expresiones estes seguidad por** "( ) "**  

Se tiene que agregar paréntesis alrededor de la función para indicar que se trata de una expresión de la misma. Por ejemplo:

```
(function () {
    var x = "Hello!!";      // I will invoke myself
})();
```

La función anterior es en realidad una función de auto-invocación anónima (función sin nombre).
