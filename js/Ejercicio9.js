/*Escribir el algoritmo que lea una hora y que muestre la programación de
acuerdo al horario en que se transmite “dibujos animados ” : Si es de 10 a
12 horas, “ tele serie ” : si es de 13 a 16 horas, “ novelas repetidas ” :
si es de 16 a 18 horas, “dibujos animados ” : si es de 18 a 22 horas,
“noticiero” : si es de 22 a 23 horas.*/

import {validacionNum,numPositivo,numDiferenteDeCero,numMayorYMenor}  from "./Validaciones.js" 

const mensajeEdad = (hora=undefined) =>{
    if(!validacionNum(hora,"Hora")||!numDiferenteDeCero(hora,"Hora")
     ||!numPositivo(hora,"Hora") || !numMayorYMenor(10,23,hora))
        return 0;
    else{
        (hora >= 10 && hora<=12)
        ?console.log("Dibujos Animados")
        :(hora >= 13 && hora<16)
        ?console.log("Tele Serie")
        :(hora >= 16 && hora<18)
        ?console.log("Adolescente")
        :(hora >= 18 && hora<=22)
        ?console.log("Novelas repetidas")
        :console.log("Noticiero");
    }
}

let hora = 15;
mensajeEdad(hora);