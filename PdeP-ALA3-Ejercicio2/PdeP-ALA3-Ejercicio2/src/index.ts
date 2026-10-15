//Importamos la clase y las funciones que pidieron datos (recordá el .js en los import)
import { Calculadora } from './calculadora.js';
import { pedirOperador, pedirOperandos, preguntarSiContinuar } from './entrada.js';

let continuar = true;

//Se repite hasta que el usuario diga que no quiere hacer más operaciones
while (continuar) {
  const operador = pedirOperador();
  const operandos = pedirOperandos();

  //"new" crea un objeto de la clase Calculadora, igual que en Java
  const calculadora = new Calculadora(operador, operandos);

  //Llamamos al método del objeto con el punto
  console.log('Resultado:', calculadora.calcular());

  continuar = preguntarSiContinuar();
}

console.log('FIN!');