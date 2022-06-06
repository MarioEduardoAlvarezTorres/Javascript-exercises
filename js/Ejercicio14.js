/*"TIENDAS PATITO" se encuentra de aniversario y ha programado una
serie de ofertas con la finalidad de brindar facilidades a sus clientes y
al a vez de incrementar sus ventas. Estas ofertas se basan específicamente
en un porcentaje de descuento sobre el total de compra el cual varia de
acuerdo al monto. Por un monto mayor o igual a $500 se hará un descuento
del 30%. Por un monto menor de $500 pero mayor o igual a 200 se hará un
descuento del 20%.Por un monto menor de $200 pero mayor o igual a 100 se
hará un descuento del 10%. Escribir un algoritmo que calcule la cantidad
total a pagar de una compra.*/

import {validacionNum,numDiferenteDeCero,numPositivo} from "./Validaciones.js" 

const cantidadTotalAPagar = (monto= undefined) =>{
    let descuento=0;
    let montoConDescuento=0;
    if (!validacionNum(monto,"monto")
      ||!numDiferenteDeCero(monto,"monto") || !numPositivo(monto,"monto")) 
        return 0;
    else{
        if (monto >= 500){
            descuento= monto*0.3;
            montoConDescuento= monto-descuento;
        }else if(monto >= 200){
            descuento= monto*0.2;
            montoConDescuento= monto-descuento;
        }else if(monto>=100){
            descuento= monto*0.1;
            montoConDescuento= monto-descuento;
        }else{
            montoConDescuento = monto;
        }
        console.log(`La cantidad total a pagar de una compra es de ${montoConDescuento} (con un descuento aplicado de $${descuento})`);
    }
}


let monto = 100;
cantidadTotalAPagar(monto);