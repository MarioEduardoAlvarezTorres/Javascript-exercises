/*Desarrollar un algoritmo para calcular e imprimir el factorial de un
número dado.*/

import {validacionIntPositivoPrompt} from "./Validaciones.js" 
let numero=0;

const factorial = (numero) =>{
	if (numero <= 1) return 1;
	return numero * factorial(numero - 1);
};

numero=validacionIntPositivoPrompt("Numero");
console.log(`El factorial de ${numero} es: ${factorial(numero)}`);