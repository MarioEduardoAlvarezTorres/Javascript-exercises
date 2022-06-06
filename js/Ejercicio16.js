/* Calcular mediante un algoritmo repetitivo la suma de los N primeros
números naturales.*/

import {validacionNum,numPositivo}  from "./Validaciones.js" 

let x=1;
let s=0;
let n;
do {
    n=0;
    n=prompt('Ingrese numero natural:','');  
} while (validacionNum(Number(n),"Numero")=== false || numPositivo(Number(n),"Numero")=== false);

while (x<=n) {
    s=s+x;
    x=x+1;
}

console.log(`La sumatoria es de ${s}`)
