/*Escribir un algoritmo que permita calcular y mostrar el jornal
mensual de una empresa de acuerdo con las siguientes especificaciones:
· los trabajadores tienen dos turnos (nocturno y diurno)
· la tarifa de las horas diurnas es de 10 pesos.
· La tarifa de las nocturnas es de 20 pesos.
· Ningún trabajador recibe nada por sábados o domingos.
· El trabajador será despedido si sus horas trabajadas son menores que
15.
El algoritmo termina cuando sea dado cero como horas trabajadas.*/

import {validacionStrPrompt,validacionCadena,validacionNum,validacionIntPositivoSinCeroPrompt } from "./Validaciones.js"

let turno,horasTrabajadas;

const jornal = (turno=undefined,horasTrabajadas=0) =>{
    if(!validacionCadena(turno,"Turno"),!validacionNum(horasTrabajadas,"Horas Trabajadas"))
        return 0;
    //El trabajador será despedido si sus horas trabajadas son menores que 15. 
    (horasTrabajadas < 15)
        ?alert("Estas despedido","")
        //La tarifa de las nocturnas es de 20 pesos.
        :(turno === "nocturno")
            ? alert(`El jornal es de ${horasTrabajadas*20}`)
            : alert(`El jornal es de ${horasTrabajadas*10}`)
  
}

do {
    turno="";
    horasTrabajadas=undefined;
    turno=validacionStrPrompt("Turno");
    console.log(turno,turno!=="nocturno")
    if (turno === "nocturno" || turno === "diurno"){
        horasTrabajadas=validacionIntPositivoSinCeroPrompt("Horas Trabajadas");
        jornal(turno,horasTrabajadas)
    }
    else
        alert("DATO NO VALIDO","")
} while (horasTrabajadas !== 0);
