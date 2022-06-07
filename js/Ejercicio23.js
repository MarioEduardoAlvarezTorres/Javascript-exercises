/*Escribir un algoritmo que calcule la suma y el producto de los
números pares comprendidos entre 20 y 400 incluyendo ambos. */
let suma=0,producto=1;
for (let i = 20; i <=400; i++) {
    if (i%2===0){
        suma = suma +i;
        producto = producto*i;
    }
}

console.log(`Suma:${suma}\nProducto:${producto}`)

