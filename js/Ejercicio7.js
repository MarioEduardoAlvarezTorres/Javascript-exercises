/*Escribir el algoritmo que permita emitir la factura correspondiente a una
compra de un articulo determinado, del que se adquieren una o varias
unidades. El IVA es del 15% y si el precio neto ( precio venta mas IVA) es
mayor de 50.00 pesos se debe realizar un descuento del 5%.*/

import {validacionNum,validacionCadena,numDiferenteDeCero,numPositivo}  from "./Validaciones.js" 
const factura = (articulo="",unidades=undefined,precioVenta=undefined)=>{
    let total =0;
    let precioNeto=0;
    let iva = 0;
    let descuento = 0;
    if(!validacionCadena(articulo) 
    || !validacionNum(unidades) 
    || !numDiferenteDeCero(unidades)
    || !numDiferenteDeCero(unidades) 
    || !validacionNum(precioVenta) 
    || !numDiferenteDeCero(precioVenta)
    || !numDiferenteDeCero(precioVenta))
    return 0
    else{
        total = unidades*precioVenta;
        iva = total*0.15;
        precioNeto=total+iva;
        if(precioNeto> 50){
            descuento = precioNeto*0.05;
            console.log(`El total de ${unidades} ${articulo} es ${precioNeto-descuento} (Descuento:${descuento})`);
        }else
            console.log(`El total de ${unidades} ${articulo} es ${precioNeto}`);            
    }
}

let articulo = "Juguetes";
let unidades = 3;
let precio = 100;
factura(articulo,unidades,precio);