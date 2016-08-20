# Árbol de nodos

Una de las tareas habituales en la programación de aplicaciones web con JavaScript
consiste en la manipulación de las páginas web. De esta forma, es habitual obtener el
valor almacenado por algunos elementos (por ejemplo los elementos de un formulario), crear un elemento (párrafos, div, etc.) de forma dinámica y añadirlo a la página, aplicar una animación a un elemento (que aparezca/desaparezca, que se desplace, etc.).

Todas estas tareas habituales son muy sencillas de realizar gracias a DOM. Sin embargo, para poder utilizar las utilidades de DOM, es necesario "transformar" la página original.

Una página HTML normal no es más que una sucesión de caracteres, por lo que es un
formato muy difícil de manipular. Por ello, los navegadores web transforman
automáticamente todas las páginas web en una estructura más eficiente de manipular.

Esta transformación la realizan todos los navegadores de forma automática y nos
permite utilizar las herramientas de DOM de forma muy sencilla. El motivo por el que se muestra el funcionamiento de esta transformación interna es que condiciona el
comportamiento de DOM y por tanto, la forma en la que se manipulan las páginas.
DOM transforma todos los documentos XHTML en un conjunto de elementos llamados nodos, que están interconectados y que representan los contenidos de las páginas web y las relaciones entre ellos. Por su aspecto, la unión de todos los nodos se llama "árbol de nodos".

La siguiente página XHTML sencilla:

```
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Página sencilla</title>
</head>
<body>
<p>Esta página es <strong>muy sencilla</strong></p>
</body>
</html>
```

Se transforma en el siguiente árbol de nodos:

![](http://i.imgur.com/fhe4W27.jpg)

En el esquema anterior, cada rectángulo representa un nodo DOM y las flechas indican las relaciones entre nodos. Dentro de cada nodo, se ha incluido su tipo.

La raíz del árbol de nodos de cualquier página XHTML siempre es la misma: un nodo de tipo especial denominado "Documento".

A partir de ese nodo raíz, cada etiqueta XHTML se transforma en un nodo de tipo
"Elemento". La conversión de etiquetas en nodos se realiza de forma jerárquica. De esta forma, del nodo raíz solamente pueden derivar los nodos HEAD y BODY. A partir de esta derivación inicial, cada etiqueta XHTML se transforma en un nodo que deriva del nodo correspondiente a su "etiqueta padre".

La transformación de las etiquetas XHTML habituales genera dos nodos: el primero es el nodo de tipo "Elemento" (correspondiente a la propia etiqueta XHTML) y el segundo es un nodo de tipo "Texto" que contiene el texto encerrado por esa etiqueta XHTML.

Así, la siguiente etiqueta XHTML:


```
<title>Página sencilla</title>

```

Genera los siguientes dos nodos:


![](http://i.imgur.com/KAmynLp.jpg)


De la misma forma, la siguiente etiqueta XHTML:

```
<p>Esta página es <strong>muy sencilla</strong></p>
```
Genera los siguientes nodos:

```
* Nodo de tipo "Elemento" correspondiente a la etiqueta <p>.
* Nodo de tipo "Texto" con el contenido textual de la etiqueta <p>.
* Como el contenido de <p> incluye en su interior otra etiqueta XHTML, la etiqueta
* interior se transforma en un nodo de tipo "Elemento" que representa la etiqueta
* **strong** y que deriva del nodo anterior.
* El contenido de la etiqueta <strong> genera a su vez otro nodo de tipo "Texto" que
* deriva del nodo generado por <strong>.
```


![](http://i.imgur.com/2QHV9p7.jpg)


La transformación automática de la página en un árbol de nodos siempre sigue las
mismas reglas:

* Las etiquetas XHTML se transforman en dos nodos: el primero es la propia
 etiqueta y el segundo nodo es hijo del primero y consiste en el contenido textual
de la etiqueta.
* Si una etiqueta XHTML se encuentra dentro de otra, se sigue el mismo  procedimiento anterior, pero los nodos generados serán nodos hijo de su etiqueta padre.

Como se puede suponer, las páginas XHTML habituales producen árboles con miles de nodos. Aun así, el proceso de transformación es rápido y automático, siendo las
funciones proporcionadas por DOM (que se verán más adelante) las únicas que
permiten acceder a cualquier nodo de la página de forma sencilla e inmediata.

En resumen, algunos de los objetos dentro de un árbol de nodos son:

* Elementos:  son los nodos definidos por etiquetas html. Por ejemplo una etiqueta div genera un nodo. Si dentro de ese div tenemos tres etiquetas p, dichas etiquetas definen nodos hijos de la etiqueta div.
* Texto: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto). Los navegadores también crean nodos tipo texto sin contenido para representar elementos como saltos de línea o espacios vacíos.
* Atributo: los atributos de las etiquetas definen nodos, aunque trabajando con JavaScript no los veremos como nodos, sino que lo consideramos información asociada al nodo de tipo element.

# Acceso a los nodos
Una vez construido automáticamente el árbol completo de nodos DOM, ya es posible utilizar las funciones DOM para acceder de forma directa a cualquier nodo del árbol.

Como acceder a un nodo del árbol es equivalente a acceder a "un trozo" de la página, una vez construido el árbol, ya es posible manipular de forma sencilla la página: acceder al valor de un elemento, establecer el valor de un elemento, mover un elemento de la página, crear y añadir nuevos elementos, etc

DOM proporciona dos métodos alternativos para acceder a un nodo específico: acceso a través de sus nodos padre y acceso directo.

Las funciones que proporciona DOM para acceder a un nodo a través de sus nodos padre consisten en acceder al nodo raíz de la página y después a sus nodos hijos y a los nodos hijos de esos hijos y así sucesivamente hasta el último nodo de la rama terminada por el nodo buscado. Sin embargo, cuando se quiere acceder a un nodo específico, es mucho más rápido acceder directamente a ese nodo y no llegar hasta él descendiendo a través de todos sus nodos padre.

Por ese motivo, no se van a presentar las funciones necesarias para el acceso jerárquico de nodos y se muestran solamente las que permiten acceder de forma directa a los nodos.

Por último, es importante recordar que el acceso a los nodos, su modificación y su
eliminación solamente es posible cuando el árbol DOM ha sido construido completamente, es decir, después de que la página XHTML se cargue por completo.

Más adelante se verá cómo asegurar que un código JavaScript solamente se ejecute cuando el navegador ha cargado entera la página XHTML.


-----

## TagName-getElementsByTagName()

Como sucede con todas las funciones que proporciona DOM, la función
**getElementsByTagName()** tiene un nombre muy largo, pero que lo hace autoexplicativo.

La función **getElementsByTagName(nombreEtiqueta)** obtiene todos los elementos de la página XHTML cuya etiqueta sea igual que el parámetro que se le pasa a la función.

El siguiente ejemplo muestra cómo obtener todos los párrafos de una página XHTML:

```
var parrafos = document.getElementsByTagName("p");
```

El valor que se indica delante del nombre de la función (en este caso, document) es el
nodo a partir del cual se realiza la búsqueda de los elementos. En este caso, como se
quieren obtener todos los párrafos de la página, se utiliza el valor document como punto de partida de la búsqueda.

El valor que devuelve la función es un array con todos los nodos que cumplen la
condición de que su etiqueta coincide con el parámetro proporcionado. El valor devuelto es un array de nodos DOM, no un array de cadenas de texto o un array de objetos normales. Por lo tanto, se debe procesar cada valor del array.

De este modo, se puede obtener el primer párrafo de la página de la siguiente manera:

```
var primerParrafo = parrafos[0];
```

De la misma forma, se podrían recorrer todos los párrafos de la página con el siguiente código:

```
for(var i=0; i<parrafos.length; i++) {
var parrafo = parrafos[i];
}
```

La función getElementsByTagName() se puede aplicar de forma recursiva sobre cada
uno de los nodos devueltos por la función. En el siguiente ejemplo, se obtienen todos los enlaces del primer párrafo de la página:

```
var parrafos = document.getElementsByTagName("p");
var primerParrafo = parrafos[0];
var enlaces = primerParrafo.getElementsByTagName("a");
```



-----

## Name-getElementsByName()

La función **getElementsByName()** es similar a la anterior, pero en este caso se buscan los elementos cuyo atributo **name** sea igual al parámetro proporcionado. En el siguiente ejemplo, se obtiene directamente el único párrafo con el nombre indicado:

```
var parrafoEspecial = document.getElementsByName("especial");
<p name="prueba">...</p>
<p name="especial">...</p>
<p>...</p>

```

Normalmente el atributo name es único para los elementos HTML que lo definen, por lo que es un método muy práctico para acceder directamente al nodo deseado. En el caso de los elementos HTML radiobutton, el atributo name es común a todos los radiobutton que están relacionados, por lo que la función devuelve una colección de elementos.

Internet Explorer 6.0 no implementa de forma correcta esta función, ya que sólo la tiene en cuenta para los elementos de tipo  **input** y **img**. Además, también tiene en consideración los elementos cuyo atributo id sea igual al parámetro de la función.


-----

## ID-getElementById()

La función **getElementById()** es la más utilizada cuando se desarrollan aplicaciones web dinámicas. Se trata de la función preferida para acceder directamente a un nodo y poder leer o modificar sus propiedades.

La función **getElementById()** devuelve el elemento XHTML cuyo atributo id coincide con el parámetro indicado en la función. Como el atributo id debe ser único para cada elemento de una misma página, la función devuelve únicamente el nodo deseado.

```
var cabecera = document.getElementById("cabecera");

<div id="cabecera">
<a href="/" id="logo">...</a>
</div>
```

La función **getElementById()** es tan importante y tan utilizada en todas las aplicaciones web, que casi todos los ejemplos y ejercicios que siguen la utilizan constantemente.

Internet Explorer 6.0 también interpreta incorrectamente esta función, ya que devuelve también aquellos elementos cuyo atributo name coincida con el parámetro
proporcionado a la función.

# Creación y eliminación de nodos

Acceder a los nodos y a sus propiedades es sólo una parte de las manipulaciones habituales en las páginas. Las otras operaciones habituales son las de crear y eliminar nodos del árbol DOM, es decir, crear y eliminar "trozos" de la página web.



-----

## Creación de elementos XHTML simples

Crear y añadir a la página un nuevo elemento XHTML sencillo consta decuatro pasos diferentes:

1. Creación de un nodo de tipo Element que represente al elemento.
2. Creación de un nodo de tipo Text que represente el contenido del elemento.
3. Añadir el nodo Text como nodo hijo del nodo Element.
4. Añadir el nodo Element a la página, en forma de nodo hijo del nodo
correspondiente al lugar en el que se quiere insertar el elemento.

De este modo, si se quiere añadir un párrafo simple al final de una página XHTML, es
necesario incluir el siguiente código JavaScript:

```
// Crear nodo de tipo Element
var parrafo = document.createElement("p");

// Crear nodo de tipo Text
var contenido = document.createTextNode("Hola Mundo!");

// Añadir el nodo Text como hijo del nodo Element
parrafo.appendChild(contenido);

// Añadir el nodo Element como hijo de la pagina
document.body.appendChild(parrafo);
```

El proceso de creación de nuevos nodos puede llegar a ser tedioso, ya que implica la
utilización de tres funciones DOM:

* **createElement(etiqueta)**: crea un nodo de tipo Element que representa al elemento XHTML cuya etiqueta se pasa como parámetro.
* **createTextNode(contenido)**: crea un nodo de tipo Text que almacena el
contenido textual de los elementos XHTML.
* **nodoPadre.appendChild(nodoHijo)**: añade un nodo como hijo de otro nodo. Se debe utilizar al menos dos veces con los nodos habituales: en primer lugar se añade el nodo Text como hijo del nodo Element y a continuación se añade el nodo
Element como hijo de algún nodo de la página.



-----

## Eliminación de nodos

Afortunadamente, eliminar un nodo del árbol DOM de la página es mucho más sencillo que añadirlo. En este caso, solamente es necesario utilizar la función **removeChild()**:

```
var parrafo = document.getElementById("provisional");
parrafo.parentNode.removeChild(parrafo);
<p id="provisional">...</p>
```

La función **removeChild()** requiere como parámetro el nodo que se va a eliminar. Además, esta función debe ser invocada desde el elemento padre de ese nodo que se quiere eliminar. La forma más segura y rápida de acceder al nodo padre de un elementoes mediante la propiedad **nodoHijo.parentNode.

Así, para eliminar un nodo de una página XHTML se invoca a la función **removeChild()** desde el valor parentNode del nodo que se quiere eliminar. Cuando se elimina un nodo, también se eliminan automáticamente todos los nodos hijos que tenga, por lo que no es necesario borrar manualmente cada nodo hijo.

# Eventos
Los eventos hacen posible que los usuarios transmitan información a los programas.
JavaScript define numerosos eventos que permiten una interacción completa entre el
usuario y las páginas/aplicaciones web. La pulsación de una tecla constituye un evento, así como pinchar o mover el ratón, seleccionar un elemento de un formulario,
redimensionar la ventana del navegador, etc.

JavaScript permite asignar una función a cada uno de los eventos. De esta forma, cuando se produce cualquier evento, JavaScript ejecuta su función asociada. Este tipo de funciones se denominan "event handlers" en inglés y suelen traducirse por "manejadores de eventos".



-----

## Básicos

Este modelo simple de eventos se introdujo para la versión 4 del estándar HTML y se
considera parte del nivel más básico de DOM. Aunque sus características son limitadas, es el único modelo que es compatible en todos los navegadores y por tanto, el único que permite crear aplicaciones que funcionan de la misma manera en todos los navegadores.



-----

## Estándar

Las versiones más avanzadas del estándar DOM (DOM nivel 2) definen un modelo de
eventos completamente nuevo y mucho más poderoso que el original. Todos los
navegadores modernos lo incluyen, salvo Internet Explorer.

-----

## Tipos

En este modelo, cada elemento o etiqueta XHTML define su propia lista de posibles
eventos que se le pueden asignar. Un mismo tipo de evento (por ejemplo, pinchar el
botón izquierdo del ratón) puede estar definido para varios elementos XHTML
diferentes y un mismo elemento XHTML puede tener asociados varios eventos
diferentes.

El nombre de cada evento se construye mediante el prefijo on, seguido del nombre en
inglés de la acción asociada al evento. Así, el evento de pinchar un elemento con el ratón se denomina onclick y el evento asociado a la acción de mover el ratón se denomina **onmousemove.

La siguiente tabla resume los eventos más importantes definidos por JavaScript:

![](http://i.imgur.com/8F7hhnl.jpg)

Los eventos más utilizados en las aplicaciones web tradicionales son onload para
esperar a que se cargue la página por completo, los eventos onclick, onmouseover,
onmouseout para controlar el ratón y onsubmit para controlar el envío de los
formularios.

Algunos eventos de la tabla anterior (onclick, onkeydown, onkeypress, onreset,
onsubmit) permiten evitar la "acción por defecto" de ese evento. Más adelante se
muestra en detalle este comportamiento, que puede resultar muy útil en algunas
técnicas de programación.

# Manejadores de eventos

Un evento de JavaScript por sí mismo carece de utilidad. Para que los eventos resulten
útiles, se deben asociar funciones o código JavaScript a cada evento. De esta forma,
cuando se produce un evento se ejecuta el código indicado, por lo que la aplicación
puede responder ante cualquier evento que se produzca durante su ejecución.

Las funciones o código JavaScript que se definen para cada evento se denominan
"manejador de eventos" y como JavaScript es un lenguaje muy flexible, existen varias
formas diferentes de indicar los manejadores:

* Manejadores como atributos de los elementos XHTML.
* Manejadores como funciones JavaScript externas.
* Manejadores "semánticos".



-----

## Manejadores de eventos como atributos XHTML

Se trata del método más sencillo y a la vez menos profesional de indicar el código
JavaScript que se debe ejecutar cuando se produzca un evento. En este caso, el código se incluye en un atributo del propio elemento XHTML. En el siguiente ejemplo, se quiere mostrar un mensaje cuando el usuario pinche con el ratón sobre un botón:

```
<input type="button" value="Pinchame y verás" onclick="alert('Gracias por
pinchar');" />
```

En este método, se definen atributos XHTML con el mismo nombre que los eventos que se quieren manejar. El ejemplo anterior sólo quiere controlar el evento de pinchar con el ratón, cuyo nombre es onclick. Así, el elemento XHTML para el que se quiere definir este evento, debe incluir un atributo llamado onclick.

El contenido del atributo es una cadena de texto que contiene todas las instrucciones
JavaScript que se ejecutan cuando se produce el evento. En este caso, el código
JavaScript es muy sencillo (alert('Gracias por pinchar');), ya que solamente se
trata de mostrar un mensaje.

En este otro ejemplo, cuando el usuario pincha sobre el elemento **div** se muestra un mensaje y cuando el usuario pasa el ratón por encima del elemento, se muestra otro mensaje:

```
<div onclick="alert('Has pinchado con el ratón');" onmouseover="alert('Acabas
de pasar el ratón por encima');">
Puedes pinchar sobre este elemento o simplemente pasar el ratón por encima
</div>
```

Este otro ejemplo incluye una de las instrucciones más utilizadas en las aplicaciones
JavaScript más antiguas:

```
<body onload="alert('La página se ha cargado completamente');">
...
</body>
```

El mensaje anterior se muestra después de que la página se haya cargado
completamente, es decir, después de que se haya descargado su código HTML, sus
imágenes y cualquier otro objeto incluido en la página.

El evento onload es uno de los más utilizados ya que, como se vio en el capítulo de DOM, las funciones que permiten acceder y manipular los nodos del árbol DOM solamente están disponibles cuando la página se ha cargado completamente.



-----

## Manejadores de eventos como funciones externas

La definición de los manejadores de eventos en los atributos XHTML es el método más sencillo pero menos aconsejable de tratar con los eventos en JavaScript. El principal inconveniente es que se complica en exceso en cuanto se añaden algunas pocas instrucciones, por lo que solamente es recomendable para los casos más sencillos.

Si se realizan aplicaciones complejas, como por ejemplo la validación de un formulario, es aconsejable agrupar todo el código JavaScript en una función externa y llamar a esta función desde el elemento XHTML.

Siguiendo con el ejemplo anterior que muestra un mensaje al pinchar sobre un botón:

```
<input type="button" value="Pinchame y verás" onclick="alert('Gracias por
pinchar');" />
```

Utilizando funciones externas se puede transformar en:

```
function muestraMensaje() {
alert('Gracias por pinchar');
}
<input type="button" value="Pinchame y verás" onclick="muestraMensaje()" />
```

Esta técnica consiste en extraer todas las instrucciones de JavaScript y agruparlas en una función externa. Una vez definida la función, en el atributo del elemento XHTML se incluye el nombre de la función, para indicar que es la función que se ejecuta cuando se produce el evento.

La llamada a la función se realiza de la forma habitual, indicando su nombre seguido de los paréntesis y de forma opcional, incluyendo todos los argumentos y parámetros que se necesiten.

El principal inconveniente de este método es que en las funciones externas no se puede seguir utilizando la variable this y por tanto, es necesario pasar esta variable como parámetro a la función:

```
function resalta(elemento) {
switch(elemento.style.borderColor) {
case 'silver':
case 'silver silver silver silver':
case '#c0c0c0':
elemento.style.borderColor = 'black';
break;
case 'black':
case 'black black black black':
case '#000000':
elemento.style.borderColor = 'silver';
break;
}
}
<div style="width:150px; height:60px; border:thin solid silver"
onmouseover="resalta(this)" onmouseout="resalta(this)">
Sección de contenidos...
</div>
```

En el ejemplo anterior, la función externa es llamada con el parámetro this, que dentro de la función se denomina elemento. La complejidad del ejemplo se produce sobre todo por la forma en la que los distintos navegadores almacenan el valor de la propiedad borderColor.

Mientras que Firefox almacena (en caso de que los cuatro bordes coincidan en color) el valor black, Internet Explorer lo almacena como black black black black y Opera
almacena su representación hexadecimal #000000.

## Manejadores de eventos semánticos

Los métodos que se han visto para añadir manejadores de eventos (como atributos
XHTML y como funciones externas) tienen un grave inconveniente: "ensucian" el código XHTML de la página.

Como es conocido, una de las buenas prácticas básicas en el diseño de páginas y
aplicaciones web es la separación de los contenidos (XHTML) y su aspecto o
presentación (CSS). Siempre que sea posible, también se recomienda separar los
contenidos (XHTML) y su comportamiento o programación (JavaScript).

Mezclar el código JavaScript con los elementos XHTML solamente contribuye a
complicar el código fuente de la página, a dificultar la modificación y mantenimiento de la página y a reducir la semántica del documento final producido.

Afortunadamente, existe un método alternativo para definir los manejadores de eventos de JavaScript. Esta técnica es una evolución del método de las funciones externas, ya que se basa en utilizar las propiedades DOM de los elementos XHTML para asignar todas las funciones externas que actúan de manejadores de eventos. Así, el siguiente ejemplo:

```
<input id="pinchable" type="button" value="Pinchame y verás"
onclick="alert('Gracias por pinchar');" />
```

Se puede transformar en:


```
// Función externa
function muestraMensaje() {
alert('Gracias por pinchar');
}
// Asignar la función externa al elemento
document.getElementById("pinchable").onclick = muestraMensaje;
// Elemento XHTML
<input id="pinchable" type="button" value="Pinchame y verás" />
```

La técnica de los manejadores semánticos consiste en:

1. Asignar un identificador único al elemento XHTML mediante el atributo id.
2. Crear una función de JavaScript encargada de manejar el evento.
3. Asignar la función externa al evento correspondiente en el elemento deseado.

El último paso es la clave de esta técnica. En primer lugar, se obtiene el elemento al que se desea asociar la función externa:

```
document.getElementById("pinchable");
```

A continuación, se utiliza una propiedad del elemento con el mismo nombre que el
evento que se quiere manejar. En este caso, la propiedad es onclick:

```
document.getElementById("pinchable").onclick = ...
```

Por último, se asigna la función externa mediante su nombre sin paréntesis. Lo más
importante (y la causa más común de errores) es indicar solamente el nombre de la
función, es decir, prescindir de los paréntesis al asignar la función:

```
document.getElementById("pinchable").onclick = muestraMensaje;

```
Si se añaden los paréntesis después del nombre de la función, en realidad se está
ejecutando la función y guardando el valor devuelto por la función en la propiedad
onclick de elemento.

```
// Asignar una función externa a un evento de un elemento
document.getElementById("pinchable").onclick = muestraMensaje;
// Ejecutar una función y guardar su resultado en una propiedad de un elemento
document.getElementById("pinchable").onclick = muestraMensaje();
```

La gran ventaja de este método es que el código XHTML resultante es muy "limpio", ya
que no se mezcla con el código JavaScript. Además, dentro de las funciones externas
asignadas sí que se puede utilizar la variable this para referirse al elemento que
provoca el evento.

El único inconveniente de este método es que la página se debe cargar completamente antes de que se puedan utilizar las funciones DOM que asignan los manejadores a los elementos XHTML. Una de las formas más sencillas de asegurar que cierto código se va a ejecutar después de que la página se cargue por completo es utilizar el evento onload:

```
window.onload = function() {
document.getElementById("pinchable").onclick = muestraMensaje;
}
```

La técnica anterior utiliza el concepto de funciones anónimas, que no se va a estudiar,
pero que permite crear un código compacto y muy sencillo. Para asegurarse que un
código JavaScript va a ejecutarse después de que la página se haya cargado
completamente, sólo es necesario incluir esas instrucciones entre los símbolos { y }:

```
window.onload = function() {
...
}
```

En el siguiente ejemplo, se añaden eventos a los elementos de tipo input=text de un
formulario complejo:

```
function resalta() {
// Código JavaScript
}
window.onload = function() {
var formulario = document.getElementById("formulario");
var camposInput = formulario.getElementsByTagName("input");
for(var i=0; i<camposInput.length; i++) {
if(camposInput[i].type == "text") {
camposInput[i].onclick = resalta;
				}
		}
}
```

## Variable THIS

JavaScript define una variable especial llamada **this** que se crea automáticamente y que se emplea en algunas técnicas avanzadas de programación. En los eventos, se puede utilizar la variable this para referirse al elemento XHTML que ha provocado el evento.

Esta variable es muy útil para ejemplos como el siguiente:

Cuando el usuario pasa el ratón por encima del **div**, el color del borde se muestra de color negro. Cuando el ratón sale del **div**, se vuelve a mostrar el borde con el color gris claro original.

Elemento **div** original:

```
<div id="contenidos" style="width:150px; height:60px; border:thin solid silver">
Sección de contenidos...
</div>
```

Si no se utiliza la variable this, el código necesario para modificar el color de los bordes, sería el siguiente:

```
<div id="contenidos" style="width:150px; height:60px; border:thin solid silver"
onmouseover="document.getElementById('contenidos').style.borderColor='black';"
onmouseout="document.getElementById('contenidos').style.borderColor='silver';">
Sección de contenidos...
</div>
```

El código anterior es demasiado largo y demasiado propenso a cometer errores. Dentro del código de un evento, JavaScript crea automáticamente la variable this, que hace referencia al elemento XHTML que ha provocado el evento. Así, el ejemplo anterior se puede reescribir de la siguiente manera:

```
<div id="contenidos" style="width:150px; height:60px; border:thin solid silver"
onmouseover="this.style.borderColor='black';"
onmouseout="this.style.borderColor='silver';">
Sección de contenidos...
</div>
```

El código anterior es mucho más compacto, más fácil de leer y de escribir y sigue
funcionando correctamente aunque se modifique el valor del atributo id del **div.**
