import readlineSync from 'readline-sync';

//Pide el operador y repite la pregunta hasta que sea uno de los 4 válidos
export function pedirOperador(): string {
  //Array con los operadores permitidos
  const validos: string[] = ['+', '-', '*', '/'];
  let operador: string;

  do {
    operador = readlineSync.question('Ingrese el operador (+, -, *, /): ');
    //.includes() en un array chequea si el valor está en la lista
  } while (!validos.includes(operador));

  return operador;
}

//Pide la cantidad de operandos y después cada número. Devuelve un array de números
export function pedirOperandos(): number[] {
  //Number() convierte el texto ingresado a número
  const cantidad = Number(readlineSync.question('¿Cuántos operandos desea ingresar?: '));
  const operandos: number[] = [];

  for (let i = 0; i < cantidad; i++) {
    const numero = Number(readlineSync.question(`Ingrese el operando ${i + 1}: `));
    operandos.push(numero); // agrega el número al final del array
  }

  return operandos;
}

//Pregunta si quiere hacer otra operación. Devuelve true si responde "S"
export function preguntarSiContinuar(): boolean {
  const respuesta = readlineSync.question('¿Desea hacer otra operación? (S/N): ');
  //toUpperCase() hace que "s" y "S" valgan lo mismo
  return respuesta.toUpperCase() === 'S';
}