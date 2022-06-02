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
        let minutos_temp = minutos;
        do {
            if (minutos_temp>=1440){
                minutos_temp= minutos_temp-1440;
                dias++;
            }
            if (minutos_temp>=60) {
                minutos_temp= minutos_temp-60;
                horas++;
                if (horas===24) {
                    dias++;
                    horas=horas-24;
                }
            }
        }while((minutos_temp > 60))
        console.log(`${minutos} minutos es igual a\n${dias} Dias\n${horas} Horas\n${minutos_temp} Minutos`)
    }
}
let tiempo = 123;
tiempoDHM(tiempo);