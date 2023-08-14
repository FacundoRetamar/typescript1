var Televisor = /** @class */ (function () {
    function Televisor() {
        this.encendido = false;
        this.volumen = 50;
        this.canal = 1;
    }
    Televisor.prototype.encender = function () {
        this.encendido = true;
        console.log("Televisor encendido.");
    };
    Televisor.prototype.apagar = function () {
        this.encendido = false;
        console.log("Televisor apagado.");
    };
    Televisor.prototype.cambiarCanal = function (nuevoCanal) {
        if (this.encendido) {
            if (nuevoCanal >= 1 && nuevoCanal <= 99) {
                this.canal = nuevoCanal;
                console.log("Cambiando al canal ".concat(nuevoCanal, "."));
            }
            else {
                console.log("Error: El canal debe estar entre 1 y 99.");
            }
        }
        else {
            console.log("Error: El televisor está apagado.");
        }
    };
    Televisor.prototype.ajustarVolumen = function (nuevoVolumen) {
        if (this.encendido) {
            if (nuevoVolumen >= 0 && nuevoVolumen <= 100) {
                this.volumen = nuevoVolumen;
                console.log("Ajustando volumen a ".concat(nuevoVolumen, "."));
            }
            else {
                console.log("Error: El volumen debe estar entre 0 y 100.");
            }
        }
        else {
            console.log("Error: El televisor está apagado.");
        }
    };
    Televisor.prototype.mostrarInfo = function () {
        if (this.encendido) {
            var horaActual = new Date().toLocaleString();
            console.log("Canal: ".concat(this.canal, ", Volumen: ").concat(this.volumen, ", Hora actual: ").concat(horaActual));
        }
        else {
            console.log("El televisor está apagado.");
        }
    };
    return Televisor;
}());
/* Modo de uso*/

const miTelevisor = new Televisor();
miTelevisor.encender();
miTelevisor.cambiarCanal(8);
miTelevisor.ajustarVolumen(55);
miTelevisor.mostrarInfo();
miTelevisor.apagar();
miTelevisor.cambiarCanal(5);
miTelevisor.ajustarVolumen(23);
miTelevisor.cambiarCanal(14);