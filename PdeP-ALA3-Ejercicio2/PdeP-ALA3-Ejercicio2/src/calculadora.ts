//"export" permite importar la clase desde otros archivos (igual que con las funciones)
export class Calculadora {
  //Atributos privados: solo se pueden usar dentro de la clase (igual que en Java).
  //A diferencia de Java, en TS el tipo va DESPUÉS del nombre: nombre: tipo
  private operador: string;
  private operandos: number[]; // number[] = array de números

  //El constructor se llama "constructor" (en Java lleva el nombre de la clase)
  constructor(operador: string, operandos: number[]) {
    //"this" se usa igual que en Java para referirse a los atributos del objeto
    this.operador = operador;
    this.operandos = operandos;
  }

  //Método público (por defecto, si no se pone nada, es public)
  //Decide qué operación hacer según el operador
  calcular(): number {
    switch (this.operador) {
      case '+':
        return this.sumar();
      case '-':
        return this.restar();
      case '*':
        return this.multiplicar();
      case '/':
        return this.dividir();
      default:
        //"throw new Error" corta el programa con un mensaje (como las excepciones de Java)
        throw new Error('Operador no válido');
    }
  }

  //Métodos privados: son ayudantes internos, solo los usa "calcular()"
  private sumar(): number {
    let resultado = 0;
    //"for...of" recorre cada elemento del array, sin necesidad de usar índices
    for (const numero of this.operandos) {
      resultado += numero; // equivale a: resultado = resultado + numero
    }
    return resultado;
  }

  private restar(): number {
    //El "!" confirma a TS que el primer elemento existe (ya lo vimos antes)
    let resultado = this.operandos[0]!;
    // Arranca en 1 porque el elemento 0 ya es el valor inicial
    for (let i = 1; i < this.operandos.length; i++) {
      resultado -= this.operandos[i]!;
    }
    return resultado;
  }

  private multiplicar(): number {
    let resultado = 1; // arranca en 1, no en 0 (si no, todo daría 0)
    for (const numero of this.operandos) {
      resultado *= numero;
    }
    return resultado;
  }

  private dividir(): number {
    let resultado = this.operandos[0]!;
    for (let i = 1; i < this.operandos.length; i++) {
      resultado /= this.operandos[i]!;
    }
    return resultado;
  }
}