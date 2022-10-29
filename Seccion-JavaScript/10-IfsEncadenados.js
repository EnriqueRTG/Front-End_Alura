const ciudadDestino = "Lima";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

let edadPasajero = 17;
let estaAcompaniado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);
//verificamos que el pasajero cumple las reglas
if (edadPasajero >= 18 || estaAcompaniado) {
    if (ciudadesDisponibles.indexOf(ciudadDestino) > -1) {
        console.log("Pasaje disponible para venta");
    } else {
        console.log("Ciudad no disponible para viajar");
    }
} else {
    if (edadPasajero >= 16 && ciudadDestino == "Lima") {
        console.log("Pasaje disponible para venta");
    } else {
        console.log("Pasajero no cumple con las reglas");
    }
}