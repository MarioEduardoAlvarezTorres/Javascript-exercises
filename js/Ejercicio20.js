/*Realizar un algoritmo que permita pedir 50 números enteros y
determine e imprima cuántos son pares, impares, positivos y negativos. */

let pares=0,impares=0,positivos=0,negativos=0,neutro=0,numero;
let max = 100,min=-100;
 const  tipoDeNumero = () =>{
    for (let i = 0; i < 50; i++) {
        numero = Math.floor(Math.random() * (max - min)) + min;
        console.log(numero);
        (numero%2 === 0)? pares++ : impares++;
        (Math.sign(numero) === -1)? negativos++ 
        :(Math.sign(numero) === 1)? positivos++
        :neutro++;
    }
    console.log(`Pares:${pares}\nImpares:${impares}\nPositivos:${positivos}\nNegativos:${negativos}\nNeutros:${neutro}`);
 }

 tipoDeNumero();