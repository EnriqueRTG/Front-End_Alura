const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");
const precioCiudad = new Array(500,400,380,200);
const datos = [
    {
        'ciudad' : 'Bogota',
        'precio' : 500
    },
    {
        'ciudad' : 'Lima',
        'precio' : 400
    },
    {
        'ciudad' : 'Santiago',
        'precio' : 380
    },
    {
        'ciudad' : 'Montevideo',
        'precio' : 200
    }
];

let presupuestoDisponible = 190;
let i = 0;

//while... 0 o mas veces
while (i < datos.length && datos[i].precio > presupuestoDisponible) {
    i++;
}
if (i == datos.length) {
    console.log("No tenemos pasajes disponibles");
} else {
    console.log("Puedes comprar pasaje para: " + datos[i].ciudad);
}

i = 0;
presupuestoDisponible = 500;
let ciudadSeleccionada = "";
//do while 1 p mas veces
do {
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
    }
    i++;
} while (ciudadSeleccionada == "" && i < datos.length);

if (ciudadSeleccionada == "") {
    console.log("No tenemos pasajes disponibles");
} else {
    console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);
}