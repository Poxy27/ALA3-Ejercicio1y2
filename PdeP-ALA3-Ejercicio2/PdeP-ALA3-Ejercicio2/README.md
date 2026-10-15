# ALA 3 - Ejercicio 2: Calculadora con POO

## Qué es esto

La calculadora del ALA 1, pero reescrita con Programación Orientada a Objetos
basada en clases, usando TypeScript. Resuelve suma, resta, multiplicación y
división con la cantidad de operandos que elija el usuario, y se puede repetir
cuantas veces quiera.

## Cómo correrlo

1. `npm install`
2. `npm run build`
3. `npm run start`

Si en Windows ves los acentos mal en la consola, corré `chcp.com 65001` antes de ejecutar.

## Cómo está organizado

```
src/
├── calculadora.ts   la clase Calculadora (guarda el operador y los operandos, y hace las cuentas)
├── entrada.ts       funciones que le piden los datos al usuario
└── index.ts         programa principal, crea el objeto y muestra el resultado
```

## Cómo funciona

1. Se pide el operador (+, -, *, /).
2. Se pide cuántos operandos se quieren usar y después cada número.
3. Se crea un objeto `Calculadora` con esos datos y se llama a su método `calcular()`.
4. Se muestra el resultado y se pregunta si se quiere hacer otra operación.

## Qué se aplicó de POO

- Una clase `Calculadora` con atributos privados (`operador` y `operandos`).
- Un constructor para crear el objeto con esos datos.
- Métodos privados para cada operación y un método público `calcular()` que decide cuál usar.