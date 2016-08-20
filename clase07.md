# Patrón Módulo en JavaScript (Module Pattern)

Los módulos son muy importantes ya que nos permiten mantener nuestro código encapsulado, sin contaminar el scope global y evitar colisión de nombres. Además nos ayudan a mantener en el proyecto unidades de código separadas y organizadas.

El Module Pattern es considerado un Patrón de Diseño y en JavaScript nos ofrece la posibilidad de simular propiedades y métodos privados. Las variables y funciones en JavaScript no tienen modificadores de acceso, pero a través de los closures podemos simular este comportamiento.

El Module Pattern se implementa creando una función anónima que se auto-invoca y regresa un objeto literal.

```
var myModule = (function () {
  var counter = 0;

  return {
    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log('Valor de counter antes de reset: ' + counter);
      counter = 0;
    }
  }
})();

// Uso:
myModule.incrementCounter();
myModule.incrementCounter();
myModule.resetCounter(); // Imprime 2
```

De esta forma al tener una función anónima creamos un scope dentro de la función, evitando así contaminar el ámbito global. Regresamos un objeto literal que contiene dos métodos, ambos métodos pueden acceder a la variable counter ya que se ha creado un closure. Así podemos simular propiedades privadas.

Entonces básicamente el Module Pattern se define de la siguiente forma.

```
var myModule = (function () {
  var privateProperty = 10;

  var privateMethodOne = function () {
    // Algo
  };

  var privateMethodTwo = function () {
    // Algo
  };

  return {
    publicProperty: "foo",
    publicMethodOne: function () {
      //...
    },
    publicMethodTwo: function () {
      // Invocar método privado
      privateMethodOne();
    },
    publicMethodThree: privateMethodTwo //Alias de privateMethodTwo
  }
})();
```
