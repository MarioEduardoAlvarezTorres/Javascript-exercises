/* Escribir un algoritmo que calcule las raíces de una ecuación
cuadrática cuya forma canónica es:
Ax**2 + By + C = 0
Solo se calcularán raíces reales. si el discriminante en menor de 0,
imprimir un mensaje que indique que existen dos raíces imaginarias. Los
coeficientes A,B,C serán ingresados. */

import {validacionNum}  from "./Validaciones.js" 

const ecuacionGeneral = (A=undefined,B=undefined,C=undefined) =>{
    let discriminante = 0;
    let x1=0,x2=0;
    if (!validacionNum(A,"A") ||!validacionNum(B,"B")
      ||!validacionNum(C,"C"))
        return 0;
    else{
        discriminante = B**2-4*A*C;
        (Math.sign(discriminante) === -1)
        ? console.log("Raices Imaginarias")
        :console.log(`x1 = ${(-B+Math.sqrt(discriminante))/(2*A)} y x2 = ${(-B-Math.sqrt(discriminante))/(2*A)}`);
    }
}

ecuacionGeneral(1,10,10);