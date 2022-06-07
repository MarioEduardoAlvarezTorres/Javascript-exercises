/*A un trabajador le pagan según sus horas trabajadas y una tarifa de pago
por hora. Si la cantidad de horas trabajadas es mayor a 40 horas, la
tarifa se incrementa en un 50% para las horas extras. Escribir un
algoritmo que calcule el salario del trabajador dadas las horas trabajadas
y la tarifa.*/ 
/* Modificar el ejercicio 1 para obtener la suma de los salarios de 200
trabajadores.*/
import {validacionNum,numDiferenteDeCero} from "./Validaciones.js" 
let todosLosSalarios = 0;
const salarioTrabajador = (numHoras= undefined,tarifa= undefined) =>{
    let salario=0;
    if (!validacionNum(numHoras,"Numero de Horas") || ! numDiferenteDeCero(numHoras,"Numero de Horas")
        || !validacionNum(tarifa,"Tarifa") || !numDiferenteDeCero(tarifa,"Tarifa")) 
        return 0;
    else{
        if (numHoras>40) 
            numHoras = numHoras+numHoras*0.5;
        salario = numHoras*tarifa;
        todosLosSalarios = todosLosSalarios +salario
    }
}

for (let i = 0; i < 200; i++) {
    let numHoras = Math.random() * (80 - 40) + 40;
    let tarifa = Math.random() * (10000 - 2000) + 2000;
    salarioTrabajador(numHoras,tarifa);
}

console.log(`El salario de 200 trabajadores es de es de $${todosLosSalarios}`)