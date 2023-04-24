import * as rls from "readline-sync";

//Realizar un metodo que devuelva como valor verdadero o falso si el primer numero ingresado es multiplo del segundo:

function Multiplo(dividendo:number, divisor:number): boolean {
    return ((dividendo % divisor) == 0);
}

let numero1 : number = rls.questionInt("Ingrese un Numero: ");
let numero2 : number = rls.questionInt("Ingrese otro Numero: ");

if (Multiplo(numero1, numero2)) {
    console.log("El Numero",numero1, "es multiplo de",numero2);
} else {
    console.log("El Numero",numero1, "no es multiplo de",numero2);
}