// Tipos de datos
//Alfanumerico

//let nombrePasajero = "Pedro Silva"; //si se ubiera utilizado const no permite la reasignacion de dato valor en la variable
//console.log(nombrePasajero);

//nombrePasajero = "Ramon Silva";
//console.log(nombrePasajero);

//numerico
let valorBoleto = 1650;
console.log(valorBoleto);
const impuestoAeropuerto = 100;
const porcentajeTasaEmbarque = 60/100;
var gestionAgencia = 120.55;

//logicos (true, false)
let boletoActivo = true;
console.log(boletoActivo);

//operaciones aritmeticas
//suma
let totalBoletos = valorBoleto + porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletos);

//orden de presedencia de las operaciones matematicas
// ()
// * y /
// + y -
let totalBoletosForma2 = valorBoleto + impuestoAeropuerto * porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletosForma2);

let totalBoletosForma3 = (valorBoleto + impuestoAeropuerto) * porcentajeTasaEmbarque + gestionAgencia;
console.log(totalBoletosForma3);

//concatenacion de texto
let nombrePasajero = "Leonardo";
let apellidoPasajero = "Lacruz";

let nombreCompleto = nombrePasajero + apellidoPasajero;
let pasaporte = parseInt('1000') + parseFloat('12');
let multiplicacion = parseInt('1000') / parseFloat('10');

console.log(nombreCompleto);
console.log(pasaporte);
console.log(multiplicacion);

let noEsUnNumero = parseInt('AASASA');
console.log(noEsUnNumero);