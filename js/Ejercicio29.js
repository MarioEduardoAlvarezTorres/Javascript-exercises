/* Escribir un algoritmo que ordene una lista de números indicando al
final la cantidad de números pares y la cantidad de números impares, el
dato a ingresar es un número y se debe repetir el proceso mientras el
número ingresado sea diferente a cero. */
import {validacionIntPrompt,validacionIntPositivoSinCeroPrompt} from "./Validaciones.js"
let pares=[],impares=[],num=0,par=0,impar=0;
const determinarN = (n) => {
    for(let i=1;i<=n;i++){
        num= validacionIntPrompt("Numero");
        if(num === 0)
            return 0;
        (Math.abs(num)%2)==0 ? (par++,pares.push(num) ):(impar++,impares.push(num));
    }
    console.log(`Total de numeros: ${n}\nPares:${par} (${pares})\nImpares: ${impar} (${impares})`);  
}

let n= validacionIntPositivoSinCeroPrompt("Cantidad de Numeros")
determinarN(n);
