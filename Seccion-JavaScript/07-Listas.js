const ciudad1 = "Bogota";
const ciudad2 = "Lima";
const ciudad3 = "Santiago";

//definicon de una lista con tipo de dato alfanumerico
const ciudadesDisponibles = new Array("Bogota","Lima","Santiago");
console.log(ciudadesDisponibles);

//definicion de una lista de forma abreviada
const paisesDisponibles = ["Colombia","Peru","Chile","Brasil","Argentina"];
console.log(paisesDisponibles);

//adicion de un nuevo elemento al arreglo
{
    paisesDisponibles.push("Uruguay");
    ciudadesDisponibles.push("Montevideo");
    console.log(paisesDisponibles);
    console.log(ciudadesDisponibles);
    paisesDisponibles.unshift("Ecuador");
    ciudadesDisponibles.unshift("Quito");
    console.log(paisesDisponibles);
    console.log(ciudadesDisponibles);
}

//acceder a elementos especificos de la lista
console.log(paisesDisponibles[0]);
console.log(ciudadesDisponibles[0]);

console.log(paisesDisponibles[1]);
console.log(ciudadesDisponibles[1]);

//cuando se quiere acceder a un elemento inexistente en la lista
console.log(paisesDisponibles[100]);

//reemplazar elemento de la lista
paisesDisponibles.splice(1,2,"Venezuela","Paraguay");
console.log(paisesDisponibles);
//quitando 2 elementos pero solo incoorporando 1
paisesDisponibles.splice(1,2,"Venezuela");
console.log(paisesDisponibles);