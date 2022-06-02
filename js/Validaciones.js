export function validacionNum(numero,definicion) {
    if (numero === undefined){
        console.warn(`No definiste "${definicion}"`);
        return false;
    } 
    if (typeof numero != 'number'){
        console.error(`"${definicion}" debe ser un número,ingresaste un ${typeof numero}`);
        return false;
    }
    return true; 
}
export function validacionCadena(cadena,definicion) {
    if (!cadena){
        console.warn(`No definiste "${definicion}"`);
        return false;
    } 
    if (typeof cadena != 'string'){
        console.error(`"${definicion}" debe ser una cadena,ingresaste un "${typeof cadena}"`);
        return false;
    }
    return true; 
}

export function numDiferenteDeCero(numero,definicion) {
    if(Math.sign(numero) === 0){
        console.error(`"${definicion}" no puede ser 0`);
        return false
    }
    return true;
}

export function numPositivo(numero,definicion) {
    if(Math.sign(numero) === -1){
        console.error(`"${definicion}" no puede ser negativo`);
        return false;
    } 
    return true;
}

export function numMayorYMenor(min,max,num) {
    if(num<min || num>max ){
        console.error(`Número no valido, rango(${min},${max})`);
        return false;
    } 
    return true;
}