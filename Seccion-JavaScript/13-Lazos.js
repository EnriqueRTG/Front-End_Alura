const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");
const precioCiudad = new Array(500,400,380,200);
const presupuestoDisponible = 150;

let i = 0;

//do while 1 p mas veces
/* do {
    i++
} while (precioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length);*/

//while... 0 o mas veces
while (precioCiudad[i] > presupuestoDisponible && i < ciudadesDisponibles.length ) {
    i++;
}
if (i == ciudadesDisponibles.length) {
    console.log("No tenemos pasajes disponibles");
} else {
    console.log("Puedes comprar pasaje para: " + ciudadesDisponibles[i]);
}