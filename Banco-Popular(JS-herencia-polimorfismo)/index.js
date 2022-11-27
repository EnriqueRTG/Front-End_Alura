/*Importación de clases*/
import { Cliente } from './Cliente.js'
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';


//const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez','37698363',10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado,'12345'))

const gerente = new Gerente('Pedro Rivas','14874229',12000);
gerente.asignarClave('6555');
console.log(SistemaAutenticacion.login(gerente,'6555'));

//const director = new Director('Maria Alcaraz','36543121',15000);
//director.asignarClave('999999');
//console.log(SistemaAutenticacion.login(director,'999998'));

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('1111');
console.log(SistemaAutenticacion.login(cliente,'1111'));
