/*Escribir un algoritmo que permita escoger en un conjunto de números
naturales:
Cuáles son menores que 15.
Cuáles son mayores de 50.
Cuáles están comprendidos entre 25 y 50.
El algoritmo termina con el ingreso de un número negativo.*/

import {validacionNum,numPositivo}  from "./Validaciones.js" 
let a=0,b=0,c=0;
let numero=0;
while (numero>=0) {
    numero=prompt('Ingrese numero natural:','');  
    if(validacionNum(Number(numero),"numero natural")==false){
        break;
    }else if(numPositivo(Number(numero)===true)){
        (Number(numero)<15)
        ? a++
        : (Number(numero)>25 && Number(numero)<50)
        ? b++
        : c++
    }     
}

console.log(`Numeros menores que 15 ${a-1}\nEntre 25 y 50 ${b}\nMayores de 50 ${c}`)