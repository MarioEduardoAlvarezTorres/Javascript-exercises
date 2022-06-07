/*Escribir un algoritmo que lea varios caracteres, uno a la vez, y que
se detenga cuando sea dada alguna de las vocales y la escriba. */
let c;
const detieneConVocal = (caracter) =>{
    let expReg= /[aeiou]/g.test(caracter);
    return(expReg)
    ?false //NO ES VOCAL
    :true; //SI ES VOCAL
}

do {
    c = prompt("Dame caracter","")
} while (detieneConVocal(c)); //SE DETIENE CUANDO SI ES VOCAL (TRUE)

