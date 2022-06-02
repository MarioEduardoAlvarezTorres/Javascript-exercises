/*Escribir un algoritmo que lea un tiempo en segundos y que calcule los
segundos restantes que le correspondan para convertirse exactamente en
minutos. */

import {validacionNum,numDiferenteDeCero,numPositivo} from "./Validaciones.js" 

const deltaMinuto = (tiempoEnSegundos= undefined) =>{
    let delta=0;
    if (!validacionNum(tiempoEnSegundos,"Tiempo en Segundos") || !numDiferenteDeCero(tiempoEnSegundos,"Tiempo en Segundos") 
     || !numPositivo(tiempoEnSegundos,"Tiempo en Segundos")) 
        return 0;
    else{
        delta = 60-tiempoEnSegundos%60
        tiempoEnSegundos%60 === 0? console.log("Ya es exactamente el minuto")
        :console.log(`Los segundos restantes son ${delta}`)
    }
}
let tiempo = 181;
deltaMinuto(tiempo);