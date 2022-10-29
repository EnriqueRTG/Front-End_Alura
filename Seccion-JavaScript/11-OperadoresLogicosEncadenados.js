const ciudadDestino = "Santiago";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

let edadPasajero = 18;
let estaAcompaniado = true;
let tienePasaporte = true;
let estaCasado = false;

console.log(`Verificando pasajes para ${ciudadDestino}`);

if (ciudadesDisponibles.indexOf(ciudadDestino) > -1 && 
edadPasajero >= 18 && 
tienePasaporte &&
!estaCasado) {
    console.log("Paquete para solteros disponible para la venta");
} else {
    console.log("Ciudad no disponible para viajar o pasajero no cumple con las condiciones");
}