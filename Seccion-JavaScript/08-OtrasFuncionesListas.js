//definicion de una lista con tipo de dato alfanumerico
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago","Montevideo");
//consolo.log(ciudadesDisponibles);

//definicion de una lista de forma abreviada
const paisesDisponibles = ["Colombia","Peru","Chile","Brasil","Argentina","Uruguay","Venezuela"];

const cantidadCiudades = ciudadesDisponibles.length;

console.log(`En la lista de ciudades tenemos ${cantidadCiudades} elementos`);
console.log(`En la lista de paises tenemos ${paisesDisponibles.length} elementos`);

//para quitar elementos al inicio
ciudadesDisponibles.shift();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${cantidadCiudades.length} elementos`);
//para remover el ultimo elemento
ciudadesDisponibles.pop();
console.log(ciudadesDisponibles);
console.log(`En la lista de ciudades tenemos ${cantidadCiudades.length} elementos`);

//filtrar elementos de la lista
//lista de elementos que coinciden con el elemento especificado
const paisesFiltrados = paisesDisponibles.filter((e) => e == "Brasil");
console.log(paisesFiltrados);
//lista de elementos en donde su longitud cumpla con lo especificado
const paisesFiltrados2 = paisesDisponibles.filter((e) => e.length > 6);
console.log(paisesFiltrados2);

//unificar los elementos de una lista en una cadena de caracteres
console.log(paisesDisponibles.join("-"));

//ordenar la lista en orden alfabetico (realiza modificacion en el arreglo)
console.log(paisesDisponibles.sort());

//conociendo la posicion
console.log(`Peru esta en la posicion: ${paisesDisponibles.indexOf("Peru")}`);

//unificar dos listas
const listaPaisesYCiudades = paisesDisponibles.concat(ciudadesDisponibles);
console.log(listaPaisesYCiudades);
//concat debe almacenar en una variable porque no modifica el array en uso.

console.log("Lista de Paises y Ciudades: ");
console.log(listaPaisesYCiudades);
console.log("Lista de Paises: ");
console.log(paisesDisponibles);