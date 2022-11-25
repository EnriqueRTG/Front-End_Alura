//imporatando clase Cliente
import { Cliente } from "./Cliente.js";

//definicion de Clases (moldes)
export class CuentaCorriente 
{
    #cliente;
    numero;
    agencia;
    #saldo;
    static cantidadCuentas = 0;

    set cliente(valor) {
        if (valor instanceof Cliente) {
            this.#cliente = valor;
        }   
    }

    get cliente() {
        return this.#cliente;
    }

    constructor(cliente,numero,agencia) {
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.#saldo = 0;
        CuentaCorriente.cantidadCuentas++;
    }

    depositoEnCuenta(valor) {
        if (valor > 0) {
            this.#saldo += valor;
        } 
        else {
            console.log('Valor invalido para ingresar!');
        }
        return this.#saldo;
    }

    extraccionEnCuenta(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
        } 
        else {
            console.log('Saldo insuficiente para realizar la extraccion!')
        }
        return this.#saldo;
    }

    mostrarSaldo() {
        return this.#saldo;
    }

    transferirParaCuenta(saldo, cuentaDestino) {
        this.extraccionEnCuenta(saldo);
        cuentaDestino.depositoEnCuenta(saldo);
    }
}