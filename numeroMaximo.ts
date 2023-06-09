//Leer valores hasta que se introduzca un cero (0)
// • El usuario puede introducir valores positivos y negativos
// • Encontrar el máximo de los elementos que se introdujeron

import * as rls from 'readline-sync';

let num: number;
let max: number = Number.MIN_SAFE_INTEGER; 

// Pedir números hasta que se ingrese un 0
do {
    num = rls.questionInt('Por favor ingrese un número entero (0 para terminar): ');

    // Encontrar el número máximo
    if (num > max) {
        max = num;
    }

} while (num != 0); // Terminar el ciclo al ingresar un 0

console.log(`El número máximo ingresado fue: ${max}`);


// se usa el "do-while" para arrancar, el "if" para actualizar el número más grande y el "while" para seguir pidiendo números hasta que no haya más.