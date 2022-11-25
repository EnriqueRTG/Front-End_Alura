//importacion de Clases
import { Cliente } from './Cliente.js';
import {CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente('Leonardo','123123123','212121');
const cliente2 = new Cliente('Maria','14874229','151413');

const cuentaDeLeonardo = new CuentaCorriente(cliente,'1','101');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','098');

let saldo = cuentaDeLeonardo.mostrarSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(150);

console.log('El Saldo actual (CuentaLeonardo) ' + saldo);

console.log(CuentaCorriente.cantidadCuentas);
