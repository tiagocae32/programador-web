# Efectos

 Es muy sencillo hacer cosas sorprendentes que con código nativo Javascript resultaría demasiado complicado. Por lo tanto,  veremos en seguida los efectos más utilizados en jQuery y cómo aplicarlos.

Antes de mencionar los diferentes efectos que podemos encontrar en jQuery hay que recalcar que existen plugins que podemos utilizar con efectos ya creados e implementarlos, sin embargo ahora mencionaremos solamente el código nativo y su implementación para que puedas agregarlo a tus páginas a tu conveniencia.

Para agregar efecto jQuery a nuestros proyectos primeramente debemos agregar o hacer referencia al archivo jQuery en el cual se encuentran todas las funcionalidades que vamos a emplear.

Veremos en seguida los efectos más sobresalientes, cabe mencionar que el formato que emplearemos para poner en marcha las animaciones deberá ser la siguiente:

```
$("button").click(function(){
  $("p").Funcion();
});

```

* **"button"**: elemento que responde al dar clic, en este caso un botón.
* **"p"**: elemento en el cual se consuma el efecto producido por Funcion(), siempre y cuando el botón sea presionado.

Entonces, algunos de los efectos mas utilizados son:

### Anímate

Animación personalizada utilizando propiedades de CSS. Ejemplo:

```
$("#box").animate({height:"300px"});

```
### Delay

Crea un temporizador para retrasar la ejecución de una orden. Ejemplo:

```
$("#div1").delay("slow").fadeIn();
$("#div2").delay("fast").fadeIn();

```
### Fadein y fadeout 

Cambian gradualmente la opacidad para mostrar u ocultar el elemento:

```
$("p").fadeIn();
$("p").fadeOut()
```

### Show

Muestra un elemento:

```
$("p").show();

```
### Hide

Oculta los elementos seleccionados:

```
$("p").hide();

```
### Toggle

Alterna entre los métodos hide () y show () mostrando y ocultando los elementos:

```
$("p").toggle();

```
### Stop

Detiene la animación en ejecución del elemento seleccionado:

```
$("div").stop();

```
### SlideUp

Desliza hacia arriba (oculta) el elemento:

```
$("p").slideUp();#

```
### SlideDown 

Desliza hacia abajo (muestra) el elementos seleccionado:

```
$("p").slideDown();

```
### SlideToggle 

Alterna entre slideUp () y slideDown ():

```
$("p").slideToggle();
```

Estos son algunos de los efectos que por defecto ya se encuentran disponibles en jQuery, ahora para poder emplearlos solamente hace falta la imaginación, las herramientas están dadas.
