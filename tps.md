# Sintaxis y Variables

TP: Realizar una calculadora que realize las siguientes operaciones sumar, restar, multiplicar y dividir:
- Debera ingresar un valor mediante un prompt
- Debera ingresar otro valor mediante otro prompt
- Mostrar el resultado de cada operacion mediante distintos alert

# Operadores

TP: Crear un programa que evalue cuales son los dias de la semana y cuales son los dias de fin de semana
- Debera poder ingresar un dia de la semana
- Debera poder compararlo con todos los dias de la semana
- Debera evaluar si es un dia de semana y fin de semana mediante un mensaje similar a 'El _dia_ es habil' sino 'El _dia_ es fin de semana';
- En caso de cnontrar el dia utilizar la sentencia break y terminar el for

# Funciones

TP: Mejorar la calculadora seprando en funciones cada operacione
- Debera poder ingresar 2 valores
- Debera poder ingresar que operacion quiere realizar
- Cada operacion tendra que ser una funcion con los 2 paramentros para sumar, restar, multiplicar o dividir;
- Debera mostrar el resultado de la operacion en consola

# Objetos

Ex: Hacer un objeto que represente un Auto
- Debera tener las propiedades color, modelo, patente, marca, prendido, velocidad y velocidad maxima
- Debera tener los metodos encender, acelerar, mostrar velocidad actual, frenar y apagar
- Por lo tanto mediante el metodo acelerar tendra que ir aumentando la propiedad velocidad hasta llegar a la velocidad maxima.

TP: Crear una funcion que agregue objetos peliculas
- El objeto pelicula Debera tener ID, titulo, descripcion, año, duracion, actores, director
- Debera tener metodos para editar todas sus propiedades, menos su ID, y para los actores tendra que ir agregando uno a uno

# Metodos de Strings y Arrays

Ex: Crear una funcion para cargar un autos a un camion
- El auto tendra que tener al menos patente y peso
- El camnion tiene un peso maximo de carga
- El objeto camnion Debera validar con cada auto ingresado si esta por debajo del peso o si ya no lo puede agregar
- Ademas de almacenar los autos debe tener la posibilidad de validar que no tenga patentes repetidas y que me devuelva todas las patentes que tiene a bordo.

TP: Crear un array de peliculas
- Crear una funcion que agrege una pelicula al array de peliculas
- La pelicula debera tener un ID y un Titulo
- Crear una funcion que evalue antes de agregar que la pelicula no fue ingresada previamente
- Crear una funcion que ordene las peliculas por Titulo y por ID
- Crear una funcion que elimine una pelicula por su ID.

# Patrones

Ex: Crear el modulo Diario
- El objeto noticia debera contener un id, un titulo, una descripcion y una imagen
- El modulo Debera validar que la noticia no fue ingresada previamente
- El modulo Debera tener la posibilidad de eliminar una noticia por ID
- El modulo Debera tener la posibilidad de ordernar sus noticias
- El modulo debera persistir las noticias creadas en session o local storage, por lo tanto cuando recargue deberan volver a aparecer.

TP: Crear el modulo IMDB
- El array de peliculas tendra que ser privado del modulo
- El modulo tendra que poder agregar una pelicula (ID y titulo)
- Validar que la pelicula ingresada no se encuentre y en caso de encontrarla mostrar un mensaje advirtiendo el error
- El modulo tendra que eliminar una pelicula por ID
- El modulo tendra que ordernar su array de pelicuas en base a una propiedad enviada por paramentro y mostrarlo en consola
- El modulo tendra que persistir el array de peliculas en session o local storage para que luego se pueda recuperar y seguir agregando o eliminando

# DOM

Ex: Crear el modulo Diario
- El modulo Debera, de forma privada o publica, mostrar/renderizar las noticias en el DOM
- El titulo Debera ser un H1, la descipcion un P y la imagen un img
- A travez del modulo debera tener la posibilidad de eliminar del DOM la noticia por ID que desee

TP: Mejorar el modulo IMDB
- El modulo Debera, de forma privada o publica, mostrar/renderizar las peliculas en el DOM
- El objeto pelicula ahora Debera tener la propiedad descripcion e imagen
- El titulo Debera ser un H1, la descipcion un P y la imagen un img

# Eventos

Ex: Mejorar el modulo Diario
- Crear un formulario que tenga los campos titulo, descripcion y uno donde poder ingresar un link a la imagen.
- Este formulario tendra que tener un boton ("agregar"), el cual Debera permitir al modulo Diario agregar una pelicula
- Este formulario Debera tener tambien un boton ("mostrar todos"), el cual Debera permitir al modulo Diario mostrar todas las noticias
- Incluir otros botones para poder ordenar por AZ ZA e ID y Diario
- En caso de encontrarse noticias persistidas tendran que volver a renderizarse
- Al renderizar la noticia en el DOM se Debera poder marcar leida y no volver a mostrarse

TP: Mejorar el modulo IMDB
- Crear un formulario que tenga los campos titulo, descripcion y uno donde poder ingresar un link a la imagen.
- Este formulario tendra que tener un boton ("agregar"), el cual Debera permitir al modulo IMDB agregar una pelicula
- Este formulario Debera tener tambien un boton ("mostrar todos"), el cual Debera permitir al modulo IMDB mostrar todas las peliculas
- Incluir otros botones para poder ordenar por AZ ZA e ID y mostrarlos
- En caso de encontrarse peliculas persistidas tendran que volver a renderizarse

# Workshop*2

Realizar un ToDo List, debera tener las siguientes funcionalidades:

- Crear el modulo ToDoList
- El modulo debera tener los metodos necesarios para Agregar, Editar, Mostrar Todos, Buscar y Eliminar.
- Una tarea contiene las siguientes propiedades: id, titulo, descripcion y completado
- Se tiene que poder editar titulo y descripcion de una tarea
- Cambiar a estado completado y descompletado(?) una tarea
- Eliminar una tarea o todas las tareas
- Ordernar por A-Z y Z-A las tareas ya sea por titulo como por ID
- Las tareas Deberan quedar persistidas mediante localstorage y poder mostrarse en caso de recargar el browser

# jQuery

TP: Lista de articulos
- Crearse varias clases con background-color, fuentes, tamaños y colores
- Crear una noticia / articulo
- Incluir un boton que agregue articulos y con distintas clases, para hacer de estos distintos uno del otro.

# jQuery Selectores

TP: Mediante selectores aplicarle los estilos a una lista de articulos
- Debera tener los registros pares de un color y los registros impares de otro
- La primer y ultima articulo deberan tener fuente en bold

# jQuery Eventos

Ex: Telefono
- Maquetar el teclado del Telefono y un display
- Los botones deberan ser clickeables y mostrar lo clickeable en el display
- Adicionalmente capturar el teclado para marcar y mostrar en el display

TP: Blog
- El blog debera tener la posibilidad de generar articulos
- Titulo, descripcion, imagen
- Una vez completado agregarlo al principio del listado

# jQuery Efectos

Ex: Pelota
- Tener una lista de acciones en la que deberan estar distintas animaciones, mostrar y ocultar
- Maquetar una Pelota
- Cada accion debera interactuar con ella, desde animarse en las cuatro coordenas, hasta aparecer y desaparecer en fade

TP: Blog
- Al agregar un articulo se debera animarse
- Al hacer hover sobre un articulo el resto debera ponerse en opacity 0.5

# jQuery Funciones

- Utilities y Programacion funcional
- extend, inArray, isArray, each, data, contains, isNumeric, trim, etc
- DOM methods, each, get, index, size, toArray, data, removeData, etc
- NO TIENE CONTENIDO

TP: Blog
- Refactorizar el codigo generado para que sea 100% Programacion funcional, desde las iteraciones hasta la forma en la que se interactura con el DOM
- Aplicar un menu con filtros
- Extender el objeto articulo para que cada uno tenga una categoria distintas

# jQuery AJAX

- API
- AJAX
- $.ajax (XMLHttpRequest) NO TIENE CONTENIDO
- JSON
- GET/POST
- Trabajo Práctico

Ex: Leer JSONs locales, HTMLs (vistas) locales y mostrarlos

TP: Blog secciones

- Hacer un menu que contenga otras secciones en otros HTMLs
- Al hacer click en cada sesccion debera cargar cada una de las secciones ejecutando su propio script
- Sacar todos los articlos del DOM, pasarlos a objetos y tenerlo en un json

# Clase 17 Proyecto Final

Construir una aplicacion similar a Tinder, siendo capaz de listar y mostrar elementos sobre alguna de estas tematicas:

- Musica <https://api.spotify.com/v1/search?type=artist&q=roadhouse%20blues>
- Peliculas <http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino>
- Media - Imagenes <https://anapioficeandfire.com/>
- Juegos <http://pokeapi.co/>
- Recetas <http://www.recipepuppy.com/api>
- Github - repositorios <https://api.github.com/repositories> y/o usuarios <https://api.github.com/users>
- Mas apis en <https://github.com/toddmotto/public-apis>
- JSON placeholder http://jsonplaceholder.typicode.com/posts

- Reproduciendo la misma dinamica de Tinder, la aplicacion tendra que listar y validar que me gusta y que no
- Aquellos elementos que no fueron escogidos no deberan volver a aparecer
- El usuario tiene que tener la posibilidad de borrar historial y volver a comenzar a seleccionar items.
- Levantar un servidor local con Node y Express
- Subirlo a Github
- Conectarlo a Heroku y deployarlo
- Dejar el CI habilitado y deployar automaticamente.

## Para el Nivel 3 (en comun)

Es requisito:

- Entender como funciona AJAX y una API
- Objetos y Patrones (Singleton y Module)
- Programacion funcional
- Saber para que sirve y como levantar un servidor local con Node
- Tener nociones sobre Grunt y Gulp para Automatizar tareas
- Perder el miedo al CLI o linea de comandos

## Para el Nivel 3 Experto Full Stack

- Tener nociones de Base de datos

## Para el Nivel 3 Experto Frontend

- Tener nociones de Base de datos
- HTML y CSS

## Para el Nivel 3 Experto Móvil

- HTML y CSS
