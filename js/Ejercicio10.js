/*Dadas 3 longitudes, escribir un algoritmo que determine mediante un
mensaje si tales longitudes forman un triangulo: equilátero (cuando sus
tres lados son iguales), isósceles (cuando dos de sus lados son iguales) o
escaleno (cuando sus tres lados son diferentes), o no forman triangulo
(cada lado tiene que ser menor que la suma de los otros dos).*/

import {validacionNum,numPositivo}  from "./Validaciones.js"

const tipoTriangulo = (long1=undefined,long2=undefined,long3=undefined) =>{
    if (!validacionNum(long1,"Longitud") || !numPositivo(long1,"Longitud")
      ||!validacionNum(long2,"Longitud") || !numPositivo(long2,"Longitud"
      ||!validacionNum(long3,"Longitud") || !numPositivo(long3,"Longitud")))
      return 0;    
     else {
        (!(long1< long2+long3)||!(long2< long1+long3)||!(long3< long1+long2))
        ?console.log("No es un triangulo")
        :(long1===long2 && long2===long3)
        ?console.log("Trianglo Isóceles")
        :(long1===long2 || long2===long3 || long1===long3)
        ?console.log("Triangulo Escaleno")
        :console.log("Escaleno");   
    } 
}

let lado1 = 8;
let lado2 = 1;
let lado3 = 9;
tipoTriangulo(lado1,lado2,lado3);
console.log("hola")