/*Escribir un algoritmo que lea un tiempo en minutos y que calcule los días,
horas y minutos que le corresponden.*/

import {validacionNum,numDiferenteDeCero,numPositivo} from "./Validaciones.js" 

const tiempoDHM = (minutos= undefined) =>{
    let dias=0;
    let horas=0;
    let min=0;

    if (!validacionNum(minutos,"Minutos") || !numDiferenteDeCero(minutos,"Minutos") 
     || !numPositivo(minutos,"Minutos")) 
        return 0;
    else{
    }
}
let tiempo = 181;
tiempoDHM(tiempo);