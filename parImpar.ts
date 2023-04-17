/*estructura de control - seleccion
ejercicio: par-impar
*/
import * as rls from "readline-sync";
let nro: number = rls.questionInt("Ingrese numero:");
if (nro == 0){
    console.log("El numero es 0");    
    } else if (nro % 2 == 0){
    console.log("El numero", nro ,"es par");
    } else {
        console.log("El numero es impar");
    }