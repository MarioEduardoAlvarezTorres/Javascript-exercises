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

export function validacionIntPositivoConCeroPrompt(valorAPedir){
    let valorLeido;
    do {
        valorLeido=0;
        valorLeido=Number(prompt(`Dame ${valorAPedir}`,''));
        //VA A FORZAR A INGRESAR EL DATO DE FORMA CORRECTA
        if (!validacionNum(valorLeido,valorAPedir) || (!numDiferenteDeCero(valorLeido,valorAPedir))|| !Number.isInteger(valorLeido,valorAPedir)||!numPositivo(valorLeido,valorAPedir))
            alert(`INGRESE ${valorAPedir.toUpperCase()} DE FORMA CORRECTA`);
    } while (!validacionNum(valorLeido) || (!numDiferenteDeCero(valorLeido))|| !Number.isInteger(valorLeido)||!numPositivo(valorLeido));
    return valorLeido;
}

export function validacionIntPositivoSinCeroPrompt(valorAPedir){
    let valorLeido;
    do {
        valorLeido=0;
        valorLeido=Number(prompt(`Dame ${valorAPedir}`,''));
        //VA A FORZAR A INGRESAR EL DATO DE FORMA CORRECTA
        if (!validacionNum(valorLeido,valorAPedir) || !Number.isInteger(valorLeido,valorAPedir)||!numPositivo(valorLeido,valorAPedir))
            alert(`INGRESE ${valorAPedir.toUpperCase()} DE FORMA CORRECTA`);
    } while (!validacionNum(valorLeido) || !Number.isInteger(valorLeido)||!numPositivo(valorLeido));
    return valorLeido;
}

export function validacionIntSinCeroPrompt(valorAPedir){
    let valorLeido;
    do {
        valorLeido=0;
        valorLeido=Number(prompt(`Dame ${valorAPedir}`,''));
        //VA A FORZAR A INGRESAR EL DATO DE FORMA CORRECTA
        if (!validacionNum(valorLeido,valorAPedir) || (!numDiferenteDeCero(valorLeido,valorAPedir))|| !Number.isInteger(valorLeido))
            alert(`INGRESE ${valorAPedir.toUpperCase()} DE FORMA CORRECTA`);
    } while (!validacionNum(valorLeido) || (!numDiferenteDeCero(valorLeido))|| !Number.isInteger(valorLeido));
    return valorLeido;
}

export function validacionIntPrompt(valorAPedir){
    let valorLeido;
    do {
        valorLeido=0;
        valorLeido=Number(prompt(`Dame ${valorAPedir}`,''));
        //VA A FORZAR A INGRESAR EL DATO DE FORMA CORRECTA
        if (!validacionNum(valorLeido,valorAPedir) || !Number.isInteger(valorLeido))
            alert(`INGRESE ${valorAPedir.toUpperCase()} DE FORMA CORRECTA`);
    } while (!validacionNum(valorLeido) || !Number.isInteger(valorLeido));
    return valorLeido;
}

export function validacionStrPrompt(valorAPedir){
    let valorLeido;
    do {
        valorLeido="";
        valorLeido=prompt(`Dame ${valorAPedir}`,'');
        //VA A FORZAR A INGRESAR EL DATO DE FORMA CORRECTA
        if (!validacionCadena(valorLeido,valorAPedir))
            alert(`INGRESE ${valorAPedir.toUpperCase()} DE FORMA CORRECTA`);
    } while (!validacionCadena(valorLeido,valorAPedir));
    return valorLeido;
}