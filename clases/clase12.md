# Selectores

Por un selector entendemos en jQuery lo mismo que en CSS: una forma de permitirnos elegir un elemento (o varios) entre todos los que tenemos en nuestro documento HTML. ¿Para qué? Para luego poder aplicar sobre los elementos seleccionados diversas funciones.

Es decir, jQuery utiliza el poder de los selectores para acceder de una manera rápida y sencilla a un elemento o grupo de elementos del DOM (Document Object Model) y luego poder aplicar sobre los mismos cualquier tipo de instrucción, evento, animación, etc.



-----

## Selectores básicos de JQuery

Los selectores, al menos los más básicos, son parecidos, o iguales, a los que se utilizan en CSS para seleccionar los elementos a los que se desean aplicar ciertos estilos.

 Todas las personas que intenten profundizar en el framework jQuery deben haber conocido CSS anteriormente, no habrá ningún problema para manipular los siguientes selectores:

#### Selector de etiquetas: 

Simplemente indicamos la etiqueta a la que deseamos referirnos, es decir, la etiqueta que queremos seleccionar. Obtendremos con él todas las etiquetas de la página indicada en el selector.

```
$("h1") //selecciona todos los encabezados de nivel 1

```

#### Selector por identificador: 

Sirven para seleccionar los elementos que tengan un identificador dado, que se asigna a las etiquetas a través del atributo id del HTML. Para utilizar este selector se indica primero el carácter "#" y luego el identificador de cuyo elemento se desee seleccionar.

```
$("#idelemento") //selecciona una etiqueta que tiene el atributo id="idelemento"

```
#### Selector por clase: 

Podemos indicar el nombre de una clase (class de CSS) y seleccionar todos los elementos a los que se ha aplicado esta clase. Para ello, como en CSS, comenzamos colocando el carácter "." y luego el nombre de la clase que deseamos seleccionar.

```
$(".miclase") //selecciona todos los elementos que tienen el atributo class="miclase"

```

#### Selector por varias clases: 

Si lo deseamos, podemos indicar varias clases CSS, para obtener todos los elementos que tienen esas clases aplicadas: todas al mismo tiempo. Esto se consigue comenzando por un ".", igual que los selectores de clases, y luego otro "." para separar las distintas clases que queremos utilizar en el selector.

```
$(".clase1.clase2") //selecciona los elementos que tienen class="clase1 clase2"

```

#### Selector asterisco "*": 

Nos sirve para seleccionar todos los elementos de la página.

```
$("*") //selecciona todos los elementos que tiene la página

```

#### Concatenar varios selectores distintos: 

Por último, podemos utilizar varios selectores, para obtener todas las etiquetas que cumplen uno de ellos. No hace falta que cumplan todos los selectores a la vez, sino con que uno de ellos concuerde es suficiente. Para ello colocamos todos los selectores que deseamos, separados por una coma ",".

```
$("div,p") //selecciona todos los elementos división y párrafo 
$(".clase1,.clase2") //selecciona los elementos que tienen la clase "clase1" o "clase2" 
$("#miid,.miclase,ul) //selecciona el elemento con id="miid", los elementos con class="miclase" y todas las listas UL

```
