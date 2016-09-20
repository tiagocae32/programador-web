# Objetos

Un objeto es entidad existente en la memoria del ordenador que tiene unas propiedades (atributos o datos sobre sí mismo almacenados por el objeto) y unas operaciones disponibles específicas (métodos).

En el mundo de la programación orientada a objetos (POO), un objeto es el resultado de la instanciación de una clase . Una clase es el anteproyecto que ofrece la funcionalidad en ella definida, pero ésta queda implementada sólo al crear una instancia de la clase, en la forma de un objeto


1. Usando una
```
function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = getAppleInfo;
}

var apple = new Apple('macintosh');
apple.color = "reddish";
alert(apple.getInfo());

```

1.1. Mediante una funcion interna
```
function Apple (type) {
    this.type = type;
    this.color = "red";
    this.getInfo = function() {
        return this.color + ' ' + this.type + ' apple';
    };
}
```

1.2. Mediante prototype
```
function Apple (type) {
    this.type = type;
    this.color = "red";
}
 
Apple.prototype.getInfo = function() {
    return this.color + ' ' + this.type + ' apple';
};
```

2. Usando objetos literales
```
var apple = {
    type: "macintosh",
    color: "red",
    getInfo: function () {
        return this.color + ' ' + this.type + ' apple';
    }
}
apple.color = "reddish";
alert(apple.getInfo());
```

3. Usando un singleton mediante una funcion
```
var apple = new function() {
    this.type = "macintosh";
    this.color = "red";
    this.getInfo = function () {
        return this.color + ' ' + this.type + ' apple';
    };
}

apple.color = "reddish";
alert(apple.getInfo());
```


# Propiedades

Las propiedadesson las características intrínsecas del objeto. Éstas, se representan a modo de variables, solo que técnicamente, pasan a denominarse propiedades:

Las propiedades se definen de la misma forma que las variables (aplican las mismas reglas de estilo).

# Herencia

Algunos objetos comparten las mismas propiedades y métodos que otro objeto, y además agregan nuevas propiedades y métodos. A esto se lo denomina herencia: una clase que hereda de otra. Vale aclarar, que en Python, cuando una clase no hereda de ninguna otra, debe hacerse heredar de object, que es la clase principal de Python, que define un objeto.

```
function Felino () {}
 
Felino.prototype = new Animal();
Felino.prototype.constructor = Felino;
 
Felino.prototype.maullar = function () {
  console.log('meowwwww');
};
 
var iris = new Felino();
iris.crecer();
iris.maullar();
```

--------------------------------------------------------------------------------

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

## Tipos de Herencia:

Existen dos tipos de herencia

- **Herencia Simple:** En esta jerarquía cada clase tiene como máximo una sola superclase. La herencia simple permite que una clase herede las propiedades y métodos de su superclase en una cadena jerárquica.

- **Herencia múltiple:** Una malla o retícula consta de clases, cada una de las cuales pueden tener dos o más superclases inmediatas. Una herencia múltiple es aquella en la que cada clase puede heredar las propiedades y métodos de cualquier número de clases.

# Polimorfismo

La palabra polimorfismo significa que un objeto posee varias formas diferentes. Este es uno de los conceptos esenciales de una programación orientada a objetos. Así como la herencia está relacionada con las clases y su jerarquía, el polimorfismo se relaciona con los métodos.

En general, hay tres tipos de polimorfismo:

- Polimorfismo de sobrecarga
- Polimorfismo paramétrico (también llamado polimorfismo de plantillas)
- Polimorfismo de inclusión (también llamado redefinición o subtipado)

--------------------------------------------------------------------------------

## Polimorfismo de sobrecarga

El polimorfismo de sobrecarga ocurre cuando las funciones del mismo nombre existen, con funcionalidad similar, en clases que son completamente independientes una de otra (éstas no tienen que ser clases secundarias de la clase objeto). Por ejemplo, la clase complex, la clase image y la clase link pueden todas tener la función "display". Esto significa que no necesitamos preocuparnos sobre el tipo de objeto con el que estamos trabajando si todo lo que deseamos es verlo en la pantalla.

Por lo tanto, el polimorfismo de sobrecarga nos permite definir operadores cuyos comportamientos varían de acuerdo a los parámetros que se les aplican. Así es posible, por ejemplo, agregar el operador + y hacer que se comporte de manera distinta cuando está haciendo referencia a una operación entre dos números enteros (suma) o bien cuando se encuentra entre dos cadenas de caracteres (concatenación).

--------------------------------------------------------------------------------

## Polimorfismo paramétrico

El polimorfismo paramétrico es la capacidad para definir varias funciones utilizando el mismo nombre, pero usando parámetros diferentes (nombre y/o tipo). El polimorfismo paramétrico selecciona automáticamente el método correcto a aplicar en función del tipo de datos pasados en el parámetro.

Por lo tanto, podemos por ejemplo, definir varios métodos homónimos de addition() efectuando una suma de valores.

- El método int addition(int,int) devolvería la suma de dos números enteros.
- float addition(float, float) devolvería la suma de dos flotantes.
- char addition(char, char) daría por resultado la suma de dos caracteres definidos por el autor.

Una signature es el nombre y tipo (estático) que se da a los argumentos de una función. Por esto, una firma de método determina qué elemento se va a llamar.

--------------------------------------------------------------------------------

## Polimorfismo de inclusión

La habilidad para redefinir un método en clases que se hereda de una clase base se llama especialización. Por lo tanto, se puede llamar un método de objeto sin tener que conocer su tipo intrínseco: esto es polimorfismo de subtipado. Permite no tomar en cuenta detalles de las clases especializadas de una familia de objetos, enmascarándolos con una interfaz común (siendo esta la clase básica).

Imagine un juego de ajedrez con los objetos rey, reina, alfil, caballo, torre y peón, cada uno heredando el objeto pieza.

El método movimiento podría, usando polimorfismo de subtipado, hacer el movimiento correspondiente de acuerdo a la clase objeto que se llama. Esto permite al programa realizar el movimiento.de_pieza sin tener que verse conectado con cada tipo de pieza en particular.

# Prototyping

El patrón de diseño Prototype (Prototipo), tiene como finalidad crear nuevos objetos duplicándolos, clonando una instancia creada previamente.

Este patrón especifica la clase de objetos a crear mediante la clonación de un prototipo que es una instancia ya creada. La clase de los objetos que servirán de prototipo deberá incluir en su interfaz la manera de solicitar una copia, que será desarrollada luego por las clases concretas de prototipos.

La programación basada en prototipos es un estilo de programación orientada a objetos en la que las clases no están presentes y la reutilización de comportamiento (conocido como herencia en lenguajes basados en clases) se lleva a cabo a través de un proceso de decoración de objetos existentes que sirven de prototipos. Este modelo también se conoce como programación sin clases, orientada a prototipos o basada en ejemplos.

El ejemplo original (y más canónico) de un lenguaje basado en prototipos es el lenguaje de programación autodesarrollado por David Ungar y Randall Smith. Sin embargo, el estilo de programación sin clases se ha hecho cada vez más popular y ha sido adoptado para lenguajes de programación como JavaScript, Cecil, NewtonScript, Io, MOO, REBOL, Kevo, Squeak (cuando se utiliza el Viewer framework para manipular los componentes Morphic) y varios otros
