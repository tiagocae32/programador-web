# Proyecto Final

Construir una aplicacion similar a Tinder, siendo capaz de listar y mostrar elementos sobre alguna de estas tematicas:

* JSON placeholder http://jsonplaceholder.typicode.com/posts
* Musica https://api.spotify.com/v1/search?type=artist&q=roadhouse%20blues
* Peliculas http://netflixroulette.net/api/api.php?director=Quentin%20Tarantino
* Media - Imagenes https://anapioficeandfire.com/
* Juegos http://pokeapi.co/
* Recetas http://www.recipepuppy.com/api
* Github - repositorios https://api.github.com/repositories y/o usuarios https://api.github.com/users
* Mas apis en https://github.com/toddmotto/public-apis

Reproduciendo la misma dinamica de Tinder, la aplicacion tendra que listar y validar que me gusta y que no

* El usuario tiene que tener ver listadas aquellos items que selecciono.
* El usuario tiene que tener la posibilidad de borrar historial y volver a comenzar a seleccionar items.
* Aquellos elementos que no fueron escogidos no deberan volver a aparecer
* Puede incluir cualquier libreria para gestionar los estilos

Adicionalmente

* Levantar un servidor local con Node y Express
* Subirlo a Github
* Conectarlo a Heroku y deployarlo
* Dejar el CI habilitado y deployar automaticamente.

Primera Parte
- Conectarse a una API
- Listar la respuesta en el DOM

Segunda Parte
- Implementar un boton para darle "Me gusta" en cada item
- Implementar un boton para darle "No me gusta" en cada item
- Mediante una sola funcion dejar registrado en el item si me gusta o no
- En cualquiera de los dos casos el item debe desaparecer de la lista

Tercera Parte
- Implementar un boton para resetear el historial y volver a comenzar
- Implementar un boton para ver los items que selecciono y otro para ver los que selcciono

Cuarta Parte
- Persistir en LocalStorage cada modificacion y
- Reemplazar la consulta a la API con lo guardado en el LocalStorage
