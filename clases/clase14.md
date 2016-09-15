# Eventos

jQuery provee métodos para asociar controladores de eventos (en inglés event handlers) a selectores. Cuando un evento ocurre, la función provista es ejecutada. Dentro de la función, la palabra clave this hace referencia al elemento en que el evento ocurre.

La función del controlador de eventos puede recibir un objeto. Este objeto puede ser utilizado para determinar la naturaleza del evento o, por ejemplo, prevenir el comportamiento predeterminado de éste.


-----


## Vincular Eventos a Elementos

jQuery ofrece métodos para la mayoría de los eventos, entre ellos: **$.fn.click**, **$.fn.focus**, **$.fn.blur**, **$.fn.change**, etc. Estos últimos son formas reducidas del método **$.fn.on** de jQuery.

 El método **$.fn.on** es útil para vincular  la misma función de controlador a múltiples eventos, para cuando se desea proveer información al controlador de evento, cuando se está trabajando con eventos personalizados o cuando se desea pasar un objeto a múltiples eventos y controladores

#### Vincular un evento utilizando un método reducido

```
$('p').click(function() {
console.log('click');
});

```
#### Vincular un evento utilizando el método $.fn.on

```
$('p').on('click', function() {
console.log('click');
});
```

#### Vincular un evento utilizando el método $.fn.on con información asociada

```
$('input').on(
'click blur', // es posible vincular múltiples eventos al elemento
{ foo : 'bar' }, // se debe pasar la información asociada como argumento
function(eventObject) {
console.log(eventObject.type, eventObject.data);
// registra el tipo de evento y la información asociada { foo : 'bar' }
}
);
```


#### Vincular Eventos para Ejecutar una vez

A veces puede necesitar que un controlador particular se ejecute solo una vez — y después de eso, necesite que ninguno más se ejecute, o que se ejecute otro diferente. Para este propósito jQuery provee el método **$.fn.one

#### Cambiar controladores utilizando el método $.fn.one

```
$('p').one('click', function() {
console.log('Se clickeó al elemento por primera vez');
$(this).click(function() { console.log('Se ha clickeado nuevamente'); });
});

```
El método **$.fn.one** es útil para situaciones en que necesita ejecutar cierto código la primera vez que ocurre un evento en un elemento, pero no en los eventos sucesivos.


-----


### Desvincular Eventos

Para desvincular  un controlador de evento, puede utilizar el método **$.fn.off** pasándole el tipo de evento a desconectar. Si se pasó como adjunto al evento una función nombrada, es posible aislar la desconexión de dicha función pasándola como segundo argumento.

#### Desvincular todos los controladores del evento click en una selección

```
$('p').off('click');

```
#### Desvincular un controlador particular del evento click

```
var foo = function() { console.log('foo'); };
var bar = function() { console.log('bar'); };
$('p').on('click', foo).on('click', bar);
$('p').off('click', bar); // foo esta atado aún al evento click
```


-----


### Espacios de Nombres para Eventos

Cuando se esta desarrollando aplicaciones complejas o extensiones de jQuery, puede ser útil utilizar espacios de nombres para los eventos, y de esta forma evitar que se desvinculen eventos cuando no lo desea.

#### Asignar espacios de nombres a eventos

```
$('p').on('click.myNamespace', function() { /* ... */ });
$('p').off('click.myNamespace');
$('p').off('.myNamespace'); // desvincula todos los eventos con
// el espacio de nombre 'myNamespace'
```


-----


### Vinculación de Múltiples Eventos

Muy a menudo, elementos en una aplicación estarán vinculados a múltiples eventos, cada uno con una función diferente. En estos casos, es posible pasar un objeto dentro de $.fn.on con uno o más pares de nombres claves/valores. Cada clave será el nombre del evento mientras que cada valor será la función a ejecutar cuando ocurra el evento.

#### Vincular múltiples eventos a un elemento

```
$('p').on({
'click': function() {
console.log('clickeado');
},
'mouseover': function() {
console.log('sobrepasado');
}
});
```

# DOM Manipulation

En la creación de páginas webs dinámicas e interactivas, generalmente necesitaremos crear nuevos objetos y agregarlos al árbol DOM de al página, mover, eliminar o editar elementos completos, entre otras más. Estas manipulaciones se hacen bastante fáciles de hacer mediante la API de jQuery.


¿Cómo creo un nuevo objeto? Bueno, con jQuery es sencillo. Podemos utilizar la función jQuery, sí, la misma con la que seleccionamos objetos del árbol DOM, y enviarle, en vez de un selector o un objeto como referencia, un string simulando ser código HTML. O también, podemos hacer esto mismo y enviar un segundo parámetro, con un objeto literal en donde sus propiedades serán los atributos del nuevo objeto y los métodos serán sus manejadores de eventos.

```
// Crear un nuevo objeto y guardarlo en una variable
var $nuevoBoton1 = $('<button id="miBoton1" class="boton">Soy Boton 1</button>');
// Asignarle un evento al evento recien creado
$nuevoBoton1.on('click', function (e) {
    console.log('Me han cliqueado!');
});
```

```
// Crear un nuevo objeto con características por separado
var $nuevoBoton2 = $('<button>Soy Boton 2</boton>', {
    id: 'miBoton2',
    'class': 'boton',
    click: function (e) {
        console.log('Me han cliqueado!');
    }
});

```
Notar que en el primer caso, el string está con las comillas simples, y los valores de los atributos en comillas dobles, las que están adentro del string. Pueden invertirse, las dobles para el string y las simples para los atributos, pero no pueden ser iguales obviamente. En el segundo caso, podemos enviarle atributos HTML para ser aplicados al objeto creado. O también, mismos métodos de jQuery, como el shortcut del manejador de eventos .on('click', fn) el cual es .click(fn).

Estos objetos NO son insertados en la página. Es decir, son creados pero no han sido colocados en ninguna parte. Si hicieramos:

```
// Buscar los botones en la página
var $botones = $('.boton');

```
No encontraríamos nada. El objeto jQuery $botones estaría como array vacio []. Los objetos son sólo guardados en las variables. Obviamente vamos a querer insertarlos en una ubicación específica en la página. Pero, ¿Cómo insertamos objetos? Bueno, podemos utilizar varios métodos para ello.


### .html([content])

El método .html() nos permite editar completamente el contenido del objeto jQuery en cuestión si le enviamos el parámetro content. Este parámetro puede ser un selector (por string o referencia) o un string simulando código HTML como lo que acabamos de ver. Sino le enviamos ningún parámetro, nos devuelve el contenido HTML del primer elemento del objeto jQuery.

Utilizando los botones que acabamos de crear recientemente, podemos agregarlos a la página de la siguiente manera:

```
// Reemplazar el contenido de una página por los dos botones
$('body').html($nuevoBoton1);
$('body').html($nuevoBoton2);
```

Sin embargo, esto reescribiría el contenido del objeto jQuery en cuestión. ¿Y si queremos es agregarlos?


### .append(content) y .appendTo(objeto)

El método .append() nos permite insertar elementos enviados como parámetro al objeto jQuery en cuestión al final de éste. Es decir, colocamos lo que le enviamos como parámetro como último elemento hijo.

```
// Insertar los dos botones al final del body
$('body').append($nuevoBoton1);
$('body').append($nuevoBoton2);
```

Aunque, podemos hacerlo de otra manera con .appendTo() también:


```
// Insertar los dos botones al final del body
$nuevoBoton1.appendTo('body');
$nuevoBoton2.appendTo('body');
```

De acuerdo a cómo queramos nuestro algoritmo lo hacemos. ¿Y si quiero colocarlo al inicio?


### .prepend(content) y .prependTo(objeto)

De la misma manera que los anteriores utilizando los métodos .prepend() y .prependTo():

```
// Insertar el boton1 al inicio del body
$('body').prepend($nuevoBoton1);

// Insertar el boton2 al inicio del body
$nuevoBoton2.prependTo('body');
```

Con estos métodos podemos hacer varias manipulaciones en una página. Ahora bien ¿Y si lo que quiero es remover un objeto?


### .detach()

El método .detach() nos sirve para quitar los elementos del objeto jQuery en cuestión del árbol DOM. El método retorna el mismo objeto jQuery. No los elimina. Es decir, después de ello, si los guardamos en una variable, es como si los hubiésemos creado y los tuviéramos guardados.

```
// Despegar los botones de la página y guardarlos
var $botones = $('.boton').detach();

```
Los objetos guardados los podemos volver a insertar en la misma página un tiempo después. Sino los guardamos, simplemente los habremos eliminado. Si sólo queremos quitarlos del todo, podemos usar mejor .remove() el cual funciona de la misma manera. La diferencia es que .detach() los despega de la página integramente, lo suficiente para volver a manipularlo.

##### Existen más métodos que podemos utilizar con jQuery para manipular objetos del árbol DOM de una página y otras consideraciones a tener en cuenta, sin embargo, estos son buenas bases para iniciar.
