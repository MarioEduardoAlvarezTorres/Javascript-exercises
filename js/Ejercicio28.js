/*Escribir un algoritmo que clasifique a 50 personas según su edad y
sexo, al final deberá escribir la cantidad de personas masculinas mayores
de edad, la cantidad de personas femeninas menores de edad, cantidad de
personas mayores y menores, además deberá indicar el porcentaje que
representan las personas mayores y las menores, de edad*/
import {numDiferenteDeCero,numPositivo,validacionNum,validacionCadena} from "./Validaciones.js"
let generos = ["masculino","femenino"];
let mayores=0,menores=0,femMenores=0,femMayores=0,mascMayores=0,mascMenores=0;
const clasificacion = (edad = undefined,sexo = "") =>{
    if(!numDiferenteDeCero(edad,"Edad") || !numPositivo(edad,"Edad") || !validacionNum(edad,"Edad") 
    || !validacionCadena(sexo,"Sexo"))
        return 0;
    mayorOMenor(edad,sexo);
}

const mayorOMenor = (edad,sexo) =>{
    if(edad>=18)
        (sexo==="femenino")? femMayores= femMayores+1:mascMayores=mascMayores+1; 
    else
        (sexo==="femenino")? femMenores=femMenores+1:mascMenores=mascMenores+1; 
}
for (let i = 0; i < 50; i++) 
    clasificacion(Math.floor(Math.random() * (100 - 1)) + 1,generos[Math.floor(Math.random() * generos.length)])

console.log(`cantidad de personas masculinas mayores de edad ${mascMayores}`);
console.log(`cantidad de personas masculinas menores de edad ${mascMenores}`);
console.log(`cantidad de personas femeninas mayores de edad ${femMayores}`);
console.log(`cantidad de personas femeninas menores de edad ${femMenores}`);
console.log(`cantidad de personas mayores ${mascMayores+femMayores} y menores ${mascMenores+femMenores}`);
console.log(`porcentaje que representan las personas mayores ${(mascMayores+femMayores)*2}% y las menores ${(mascMenores+femMenores)*2}%`);