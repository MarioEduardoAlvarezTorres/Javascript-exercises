/*Escribir el algoritmo que muestre el mensaje de acuerdo a la edad
ingresada: Si la edad es de 0 a 10 años “niño”, si la edad es de 11 a 14
años “púber” , si la edad es de 15 a 18 años “ adolescente” , si la edad
es de 19 a 25 años “joven” , si la edad es de 26 a 65 años “ adulto” , si
la edad es mayor de 65 “anciano”.*/
import {validacionNum,numPositivo}  from "./Validaciones.js" 

const mensajeEdad = (edad=undefined) =>{
    if(!validacionNum(edad,"Edad")||!numPositivo(edad,"Edad"))
        return 0;
    else{
        (edad >= 0 && edad<=10)
        ?console.log("Niño")
        :(edad >= 11 && edad<=14)
        ?console.log("Púber")
        :(edad >= 15 && edad<=18)
        ?console.log("Adolescente")
        :(edad >= 19 && edad<=25)
        ?console.log("Joven")
        :(edad >= 26 && edad<=65)
        ?console.log("Adulto")
        :console.log("Anciano");
    }
}

let edad = 10;
mensajeEdad(edad);