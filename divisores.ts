import * as rls from "readline-sync";

//crear un metodo que reciba un numero entero y devuelva la cantidad de divisores
function esMultiplo(dividendo:number, divisor:number) : boolean {
    return ((dividendo % divisor) == 0);
}

function cantidadDeDivisores(n: number) : number {
    let i: number;
    let cantidad: number = 0;

    for (i = 1; i <= n; i++) {
        if (esMultiplo(n,i)) {
            cantidad = cantidad + 1;
        }
    }
return cantidad;
}

let numero : number = rls.questionInt("Ingrese un numero ENTERO: ");
console.log("La cantidad de divisores del numero ENTERO ",numero, "es",cantidadDeDivisores(numero));