/*Escribir un algoritmo que calcule la media de 100 números dados e
imprima su resultado. */
let max=100;
let min=-20;
let numero,suma;
const media = () =>{
    numero=0,suma=0;
    for (let i = 0; i < 100; i++) {
        numero = Math.floor(Math.random() * (max - min)) + min;
        suma=suma+numero;
    }
    console.log(`La media es igual a ${suma/100}`)
}

media();