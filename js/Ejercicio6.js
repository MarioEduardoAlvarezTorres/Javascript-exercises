/*Escribir un algoritmo que lea las horas trabajadas de una persona y la
tarifa de pago para calcular su salario e imprimirlo.*/

import {validacionNum,validacionCadena,numDiferenteDeCero,numPositivo} from "./Validaciones.js" 

const salario = (nombre="",tarifa= undefined,horas= undefined) =>{
    if (!validacionNum(tarifa,"tarifa") || !validacionCadena(nombre,"Nombre")
      ||!numDiferenteDeCero(tarifa,"tarifa") || !numPositivo(tarifa,"tarifa")
      ||!numPositivo(horas,"Horas trabajadas") || !validacionNum(horas,"Horas trabajadas")) 
        return 0;
    else{
        console.log(`El salario de ${nombre} es de $${tarifa*horas}`);
    }
}


let nombre = "Eduardo"
let tarifa = 100;
let horas = 8;
salario(nombre,tarifa,horas);