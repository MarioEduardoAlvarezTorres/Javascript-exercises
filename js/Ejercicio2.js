/*un trabajador le descuentan de su sueldo el 10% si su sueldo es menor o
igual a 1000, por encima de 1000 y hasta 2000 el 5% del adicional, y por
encima de 2000 el 3% del adicional. Escribir un algoritmo que calcule el
descuento y sueldo neto que recibe el trabajador dado su sueldo.*/ 
import {validacionNum,validacionCadena,numDiferenteDeCero,numPositivo} from "./Validaciones.js" 

const descuentoYSueldoNeto = (nombre="",sueldo= undefined) =>{
    let descuento=0;
    let sueldoNeto=0;
    if (!validacionNum(sueldo,"Sueldo") || !validacionCadena(nombre,"Nombre")
      ||!numDiferenteDeCero(sueldo,"Sueldo") || !numPositivo(sueldo,"Sueldo")) 
        return 0;
    else{
        if (sueldo <= 1000){
            descuento= sueldo*0.1;
            sueldoNeto= sueldo-descuento;
        }else if(sueldo <= 2000){
            descuento= sueldo*0.05;
            sueldoNeto= sueldo-descuento;
        }else{
            descuento= sueldo*0.03;
            sueldoNeto= sueldo-descuento;
        }
        console.log(`El descuento de ${nombre} es de $${descuento} y el sueldo neto es de $${sueldoNeto}`);
    }
}


let nombre = "Mario Eduardo"
let sueldo = 1001;
descuentoYSueldoNeto(nombre,sueldo);