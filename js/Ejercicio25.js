/*El ing. De sistemas de un banco de crédito necesita conocer de una
lista de 2500 cuentas cuál es la que posee mayor cantidad y cuál es la que
posee menor cantidad, de dinero. Escriba un algoritmo que realice lo
anterior, sin ordenar las cuentas. */
let max=15000,min=1500;
const crearLista = () =>{
    let lista=[];
    for (let i = 0; i < 2500; i++) {
        lista[i] = Math.floor(Math.random() * (max - min)) + min;
    }
    return lista
}
const masAltoMasBajo= (inarray=[]) =>{
    if(inarray.length === 0) return console.warn("Tu arreglo esta vacio");
    if(typeof inarray!= 'object') return console.warn("No ingresaste un arreglo");
    let array = []
    let mayor,menor;
    mayor = inarray[0];
    menor = inarray[0];
    for (let i = 0; i < inarray.length; i++) {
        if(inarray[i]>mayor) mayor = inarray[i];
        if(inarray[i]<menor) menor = inarray[i];
    }
    console.info(`Mayor ${mayor}\nMenor ${menor}`)
}

masAltoMasBajo(crearLista())
