/*Escribir un algoritmo que determine cuántos trabajadores recibirán
un salario mayor o igual a 500, dadas la tarifa y las horas trabajadas.*/
import {validacionNum,numDiferenteDeCero,numPositivo} from "./Validaciones.js"
let mayoroigualacifra=0;
let salario;
const trabajadoresConSalarioMayor = (tarifa = undefined,horas=undefined) =>{
    salario=0;
    if(!validacionNum(tarifa,"Tarifa") || !validacionNum(horas,"Horas")
     ||!numDiferenteDeCero(tarifa,"Tarifa") || !numDiferenteDeCero(horas,"Horas")
     ||!numPositivo(tarifa,"Tarifa") || !numPositivo(horas,"Horas"))
        return 0;
    salario = tarifa*horas;
    if(salario>=500) mayoroigualacifra++;
}

for (let i = 0; i < 500; i++) {
    trabajadoresConSalarioMayor(Math.floor(Math.random() * (400 - 160)) + 160,Math.floor(Math.random() * (10 - 1)) + 1);
}
console.log(`${mayoroigualacifra} trabajadores`)