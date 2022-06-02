/*A un trabajador le pagan según sus horas trabajadas y una tarifa de pago
por hora. Si la cantidad de horas trabajadas es mayor a 40 horas, la
tarifa se incrementa en un 50% para las horas extras. Escribir un
algoritmo que calcule el salario del trabajador dadas las horas trabajadas
y la tarifa.*/ 

import {validacionNum,validacionCadena} from "./Validaciones.js" 

const salarioTrabajador = (nombre="",numHoras= undefined,tarifa= undefined) =>{
    let salario=0;
    if (!validacionNum(numHoras,"Numero de Horas") 
        || !validacionNum(tarifa,"Tarifa") 
        || !validacionCadena(nombre,"Nombre")) 
        return 0;
    else{
        if (numHoras>40) numHoras = numHoras+numHoras*0.5;
        salario = numHoras*tarifa;
        console.log(`El salario de ${nombre} es de $${salario}`)
    }
}

let nombre = "Mario Eduardo";
let numHoras = 40;
let tarifa = 10;
salarioTrabajador(nombre,numHoras,tarifa);