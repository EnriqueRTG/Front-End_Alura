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

let presupuestoDisponible = 1000;
//for ... valor inicial para un valor final
let ciudadSeleccionada = "";
for (let i = 0; i < datos.length; i++) {
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
       i = datos.length;
    }
}

if (ciudadSeleccionada == "") {
    console.log("No tenemos pasajes disponibles");
} else {
    console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);
}

for (let i = 0; i < datos.length && ciudadSeleccionada == ""; i++) {
    if (datos[i].precio <= presupuestoDisponible) {
        ciudadSeleccionada = datos[i].ciudad;
    }
}

if (ciudadSeleccionada == "") {
    console.log("No tenemos pasajes disponibles");
} else {
    console.log("Puedes comprar pasaje para: " + ciudadSeleccionada);
}