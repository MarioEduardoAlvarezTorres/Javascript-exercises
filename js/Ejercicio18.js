/*Dadas N notas de un estudiante, escribir un algoritmo que calcule:
a) Cuántas notas tiene desaprobadas.
b) Cuántas aprobadas.
c) El promedio de notas.
d) El promedio de notas aprobadas y el de desaprobadas. */
import {validacionIntPositivoPrompt} from "./Validaciones.js" 
let n=0;
let nota,aprobadas=0,desaprobadas=0,sumaA=0,sumaD=0;

//Validación de Entrada
n=validacionIntPositivoPrompt("Numero de Notas")
 for (let i = 0; i < n; i++) {
     nota=0;
     //Validación de Entrada
     nota=validacionIntPositivoPrompt(`Nota ${i+1}`); 
     if(nota >= 6){
         sumaA=sumaA+nota;
         aprobadas++;
     }else{
         sumaD=sumaD+nota;
         desaprobadas++;
     }
 }



console.log(`Cuántas notas tiene desaprobadas: ${desaprobadas}`);
console.log(`Cuántas aprobadas: ${aprobadas}`);
console.log(`El promedio de notas ${(sumaA+sumaD)/(aprobadas+desaprobadas)}`);
console.log(`El promedio de notas aprobadas es de ${sumaA/aprobadas}`);
(desaprobadas === 0)
?console.log("y el de desaprobadas: 0")
:console.log(`y el de desaprobadas: ${sumaD/desaprobadas}`);