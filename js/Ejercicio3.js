/*Escribir un algoritmo que lea una cantidad y calcule el descuento
considerando que si la cantidad dada está por encima de 100 el descuento
es el 10% y si está por debajo de 100 el descuento es el 2%. */

import {validacionNum,numDiferenteDeCero,numPositivo} from "./Validaciones.js" 

const descuento = (cantidad= undefined) =>{
    let descuento=0;
    if (!validacionNum(cantidad,"cantidad") || !numDiferenteDeCero(cantidad,"cantidad") 
     || !numPositivo(cantidad,"cantidad")) 
        return 0;
    else{
        descuento = (cantidad > 100)? cantidad*0.1:cantidad*0.02;
        console.log(`El descuento es de $${descuento}`);
    }
}
let cantidad = 1;
descuento(cantidad);