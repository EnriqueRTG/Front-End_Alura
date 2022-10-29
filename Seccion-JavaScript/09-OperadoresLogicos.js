//operadores de comparacion
const ciudadDestino = "Santiago";
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");

//palabra reservada IF
//evalua una condicion
console.log(`Verificando pasajes para ${ciudadDestino}`);
if (ciudadesDisponibles.indexOf(ciudadDestino) > -1){
    console.log("Pasaje disponible para venta");
} else {
    console.log("Ciudad no disponible para viajar");
}

//evaluando la condicion estricta de comparacion ===
const valorPasaje = "1000";

console.log("Comparador == :");
if (valorPasaje == 1000) {
    console.log("El pasaje vale 1000");
}

console.log("Comparador === :");
if (valorPasaje === 1000) {
    console.log("El pasaje vale 1000"); //conflicto! compara incluso el tipo de dato (alfanumerico != numerico)  
}

//operadores logicos
// y(and = && - se deben cumplir ambas condiciones) 
// o(or = || - se debe cumplir al menos una de las condiciones) 
// no(not = ! - no se cumple la condicion) 
console.log("Comparando dos condiciones:");
console.log(`Verificando pasajes para ${ciudadDestino}`);
const edadPasajero = 17;
const estaAcompaniado = true;

console.log("Comparando dos condiciones:");
if ((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && 
(edadPasajero >= 18 || estaAcompaniado)){
    console.log("Pasaje disponible para venta");
} else {
    console.log("Ciudad no disponible para viajar o pasajero no cumple con las reglas");
}

//aplicando logica negativa
const edadP = 17;
const estaA = true;
console.log("Comparando dos condiciones logica negativa:");
if (!((ciudadesDisponibles.indexOf(ciudadDestino) > -1) && 
(edadP >= 18 || estaA))){
    console.log("Ciudad no disponible para viajar o pasajero no cumple con las reglas");
} else {
    console.log("Pasaje disponible para venta");
}

//negando la primera condicion de evaluacion
console.log("Comparando dos condiciones logica negativa 2:");
if (!(ciudadesDisponibles.indexOf(ciudadDestino) > -1) && 
(edadP >= 18 || estaA)){
    console.log("Ciudad no disponible para viajar o pasajero no cumple con las reglas");
} else {
    console.log("Pasaje disponible para venta");
}