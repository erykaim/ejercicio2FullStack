//Tipos de Datos
//Declaren variables utilizando diferentes tipos de datos: número, cadena, booleano,arreglo, objeto, etc.

let numeros: number = 288
let cadena: string= "mucho gusto"
const booleano:boolean = true //(false)
let Listadonotas: number[] = [6,9,4,2]
//objeto con propiedades 
let personaObjeto: {nombre: string,edad: number} = {nombre: "erika", edad:22}
console.log("variabels",numeros,cadena,booleano,Listadonotas,personaObjeto)

///////////////////////////////////////////////////////////////////////////////////
/*Uso de Tipos de Literales:
Utilicen tipos de literales para limitar los valores de una variable//

* el uso de tipos literales
permiten limitar los valores que una variable puede contener a un conjunto específico de valores literales.*/

// Definir un tipo de literal para las acciones de un servicio
type acciones= "cancelado"| "devuelto "| " entregado"| " en proceso"| "finalizado";

//declaramos una variable de tipo literal
let accionServicio:acciones;
// Ahora, solo se puede  asignar valores literales específicos a la variable
accionServicio = "cancelado"; // válido
accionServicio= "finalizado"; // válido
// accionServicio = "listo"; // error:'listo' no es un valor permitido

////////////////////////////////////////////////////////////////////////////////////
/*Parte 2: Condicionales
Resuelvan un problema utilizando estructuras condicionales (if, else if, else).*/

let notaFinal: number = 70    
if (notaFinal >= 90 ){ 
    console.log("Excelente trabajo")

} else if (notaFinal >= 80 && notaFinal <= 89) { // nota final mayor igual y nota final menor = a 89
    console.log("Bien hecho, vamos por buen camino");

} else if (notaFinal >= 70 && notaFinal <= 79) {
    console.log("Aprobado, vamos bien");

} else if (notaFinal >= 60 && notaFinal <= 69) {
    console.log("Aprobado, tienes que mejorar");
} else {
    console.log("Lo siento, tienes que estudiar mucho");
}
/////////////////////////////////////////////////////////////////////////////////////
/*Parte 3: Funciones
Creen funciones básicas con diferentes tipos de parámetros y tipos de retorno.*/

function operaciones(numero1: number, numero2: number, operacion: string): number {
    let resultado: number;
    
    if (operacion === 'suma') {
        resultado = numero1 + numero2;
    } else if (operacion === 'resta') {
        resultado = numero1 - numero2;
    } else if (operacion === 'multiplicacion') {
        resultado = numero1 * numero2;
    } else if (operacion === 'division') {
        if (numero2 !== 0) {
            resultado = numero1 / numero2;
        } else {
            console.log("No se puede dividir entre cero.");
            resultado = NaN; // Retornamos NaN (Not a Number) en caso de división por cero
        }
    } else {
        console.log("Operación no válida.");
        resultado = NaN; // Retornamos NaN si la operación no es válida
    }
    
    return resultado;
}

console.log(operaciones(10, 5, 'suma')); 
console.log(operaciones(10, 5, 'resta')); 
console.log(operaciones(10, 5, 'multiplicacion')); 
console.log(operaciones(10, 5, 'division')); 
console.log(operaciones(10, 0, 'division')); // Salida: NaN, ya que no se puede dividir entre cero
//console.log(operaciones(10, 5, 'potencia')); // Salida: NaN, ya que 'potencia' no es una operación válida

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Funciones con Parámetros Opcionales y Predeterminados:
Creen funciones que utilicen parámetros opcionales y con valores
predeterminados.*/

// Función con parámetro opcional
function saludar(nombre?: string): void { // nombre es opcional
    if (nombre) {
        console.log(`¡Hola, ${nombre}!`); //aca impprimimos hola y llamamos nuestro parametro nombre 
    } else {
        console.log("¡Hola!");
    }
}

// Función con parámetro con valor predeterminado
function sumar(a: number, b: number = 0): number {
    return a + b;
}

// Ejemplos de uso de las funciones
saludar(); // Salida: ¡Hola!
saludar("erika"); // Salida: ¡Hola, erika!

console.log(sumar(5)); // Salida: 5
console.log(sumar(5, 3)); // Salida: 8