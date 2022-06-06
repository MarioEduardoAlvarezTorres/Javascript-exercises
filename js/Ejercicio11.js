/* Una tienda se dedica a la venta de computadoras, cada vendedor
tiene un sueldo mensual pero además de su sueldo gana una comisión por
venta: Si el monto de venta es mayor de 10,000 la comisión será del 15%.
Si el monto de venta es mayor o igual a 5,000 y menor de 10,000 la
comisión es del 5%. Si el monto de la venta es menor que 5,000 no tiene
comisión. Escribir un algoritmo que calcule el sueldo total de cada
vendedor.*/
import {validacionNum,validacionCadena,numDiferenteDeCero,numPositivo}  from "./Validaciones.js" 
const sueldoTotal = (nombre = "", sueldo = undefined, monto = undefined) =>{
    let sueldoYComision = 0;
    if (!validacionNum(sueldo,"Sueldo") || !validacionCadena(nombre,"Nombre")
      ||!numDiferenteDeCero(sueldo,"Sueldo") || !numPositivo(sueldo,"Suledo")
      ||!numPositivo(monto,"Monto") || !validacionNum(monto,"Monto")
      ||!numDiferenteDeCero(sueldo,"Sueldo")) 
        return 0;
    else{
        sueldoYComision = (monto>10000)? sueldo+monto*0.15
        :(monto>= 5000)
            ? sueldo+monto*0.05
            : sueldo+monto*0
    console.log(`El sueldo total de ${nombre} es de ${sueldoYComision})`)
    }
}


sueldoTotal("Joaquin",1000,10000)