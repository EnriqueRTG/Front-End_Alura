//palabra reservada CONST
//espacio de memoria que luego de asignar su valor no cambia en el tiempo
const valorPasaje = 1650;
console.log(valorPasaje);

//const nombrePasajero = "Leonardo"; //conflicto por la naturaleza de su definicion como constante
//const apellidoPasajero = "Lacruz";

//console.log(nombrePasajero);
//console.log(apellidoPasajero);

//nombrePasajero = nombrePasajero + " " + apellidoPasajero; //conflicto por la naturaleza de su definicion como constante
//console.log(nombrePasajero);

//palabra reservada LET
//espacio de memoria que puede cambiar durante la ejecucion del programa
// alcance es local dentro del bloque en donde es utilizado
let nombrePasajero2 = "Leonardo";
const apellidoPasajero2 = "Lacruz";

console.log(nombrePasajero2);
console.log(apellidoPasajero2);

nombrePasajero2 = nombrePasajero2 + " " + apellidoPasajero2;
console.log(nombrePasajero2);

//palabra reservada VAR
//espacio de memoria que puede cambiar durante la ejecucion del programa
//el alcance es global o heredado a sub-bloques en los programas
var nombrePasajero3 = nombrePasajero2 + " " + apellidoPasajero2;
//bloque
{
    console.log("Dentro del bloque:");
    console.log("Nombre del pasajero con VAR: " + nombrePasajero3);
    let nombrePasajero4 = nombrePasajero2 + " " + apellidoPasajero2;
    console.log("Nombre del pasajero con LET: " + nombrePasajero4);
}
console.log("Fuera del bloque:");
console.log("Nombre del pasajero con VAR: " + nombrePasajero3);
console.log("Nombre del pasajero con LET: " + nombrePasajero4);// conflicto porque nombrePasajero4 tenia un alcance local dentro del bloque.