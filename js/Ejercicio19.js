/*Dado un número n, escribir un algoritmo que determine la suma de sus
dígitos.*/
import {validacionIntPositivoPrompt} from "./Validaciones.js" 
let n=0;
//Validación de Entrada

const sumaDeSusDigitos = (numero = undefined) =>{
    let suma=0;
    if(numero === undefined) 
        console.error("No ingreso ningún número");
    else{
        for (let i = 0; i < numero.toString().length; i++) {
           suma = suma + Number(numero.toString()[i]) 
        }
    }
    console.log(`La suma de los digitos es ${suma}`);
}
n=validacionIntPositivoPrompt("Numero");
sumaDeSusDigitos(n);
