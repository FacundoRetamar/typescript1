class Televisor {
    encendido: boolean;
    volumen: number;
    canal: number;

    constructor() {
        this.encendido = false;
        this.volumen = 50;
        this.canal = 1;
    }

    encender(): void {
        this.encendido = true;
        console.log("Televisor encendido.");
    }

    apagar(): void {
        this.encendido = false;
        console.log("Televisor apagado.");
    }

    cambiarCanal(nuevoCanal: number): void {
        if (this.encendido) {
            if (nuevoCanal >= 1 && nuevoCanal <= 99) {
                this.canal = nuevoCanal;
                console.log(`Cambiando al canal ${nuevoCanal}.`);
            } else {
                console.log("Error: El canal debe estar entre 1 y 99.");
            }
        } else {
            console.log("Error: El televisor está apagado.");
        }
    }

    ajustarVolumen(nuevoVolumen: number): void {
        if (this.encendido) {
            if (nuevoVolumen >= 0 && nuevoVolumen <= 100) {
                this.volumen = nuevoVolumen;
                console.log(`Ajustando volumen a ${nuevoVolumen}.`);
            } else {
                console.log("Error: El volumen debe estar entre 0 y 100.");
            }
        } else {
            console.log("Error: El televisor está apagado.");
        }
    }

    mostrarInfo(): void {
        if (this.encendido) {
            const horaActual: string = new Date().toLocaleString();
            console.log(`Canal: ${this.canal}, Volumen: ${this.volumen}, Hora actual: ${horaActual}`);
        } else {
            console.log("El televisor está apagado.");
        }
    }
}

/*MODO DE USO*/

const miTelevisor = new Televisor();
miTelevisor.encender();
miTelevisor.cambiarCanal(8);
miTelevisor.ajustarVolumen(55);
miTelevisor.mostrarInfo();
miTelevisor.apagar();
miTelevisor.cambiarCanal(5);
miTelevisor.ajustarVolumen(55);
miTelevisor.cambiarCanal(8);