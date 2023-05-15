import * as rls from"readline-sync";

const butacas = [true, false, true, false];

function contarButacasDesocupadas(butacas: boolean[]): number {
    let contador = 0;
    for (let i = 0; i < butacas.length; i++) {
      if (!butacas[i]) {
        contador++;
      }
    }
    return contador;
  }
  const cantidadDeButacasDesocupadas= contarButacasDesocupadas(butacas);
  console.log(`Hay ${cantidadDeButacasDesocupadas} butacas desocupadas en la sala de cine.`);