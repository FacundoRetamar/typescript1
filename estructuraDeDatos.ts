import * as rls from "readline-sync";

let dimension: number = rls.questionInt("ingrese la dimension:");
let numeros: number[] = new Array(dimension);
let positivos: number = 0;
let negativos: number = 0;
let ceros: number = 0;

for(let i: number = 0;i<=numeros.length - 1;i++){
    numeros[i] = rls.questionInt("ingrese un numero:")
    if(numeros[i]>0){
        positivos++;
    } if(numeros[i]<0){
        negativos++
    } if(numeros[i]===0){
        ceros++
    }

}
console.log("Los numeros positivos son: ", positivos , "Los negativos son: ", negativos , "La cantidad de ceros son:" , ceros)