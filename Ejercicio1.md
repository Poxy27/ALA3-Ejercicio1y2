# ALA 3 - Ejercicio 1: JavaScript con prototipos según Kuhn

Kuhn dice que un paradigma tiene cuatro componentes. Acá se analiza JavaScript
usando solo programación orientada a objetos basada en prototipos (sin `class`).

## 1. Generalizaciones simbólicas (las reglas escritas)

- Un objeto es un conjunto de propiedades, y los métodos son propiedades que
  guardan una función.
- Todo objeto tiene un prototipo, que es otro objeto del que puede heredar cosas.
- Si un objeto no tiene una propiedad, JS la busca en su prototipo.
- Los objetos se crean con funciones constructoras usando `new`.
- Los métodos compartidos se agregan a `Funcion.prototype`.

## 2. Creencias de la comunidad

- Se cree que es mejor crear objetos directamente, sin definir antes una clase.
- Se cree que es una ventaja poder agregar o cambiar métodos mientras el programa corre.
- Se cree que guardar los métodos una sola vez en el prototipo ahorra memoria.

## 3. Valores

- La flexibilidad: se pueden resolver los problemas de varias formas.
- La simplicidad: hay pocos conceptos, todo son objetos.
- La rapidez: se puede escribir y probar código enseguida, sin compilar.

## 4. Ejemplares

Un ejemplo típico es una función constructora con un método en el prototipo:

```js
function Perro(nombre) {
  this.nombre = nombre;
}

Perro.prototype.ladrar = function () {
  console.log(`${this.nombre} dice guau`);
};
```

En nuestra ToDo List pasó lo mismo: `Tarea` es una función constructora y el
método `editar` está en `Tarea.prototype`, así que todas las tareas lo comparten.