import * as rls from "readline-sync";

let num1: number = rls.questionInt("Ingrese el numero que quiere multiplicar:");
let num2: number = rls.questionInt("Ingrese hasta que numero quiere multiplicar:");

for(let i: number = 1; i <= num2; i++){
    let result: number = num1 * i;
    console.log(`${num1} x ${i} = ${result}`);
}