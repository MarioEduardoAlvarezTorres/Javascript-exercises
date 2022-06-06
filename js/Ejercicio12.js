/* Katthy organiza una fiesta en la cual una computadora controla el
ingreso mediante 5 claves. Si se ingresa al menos una clave incorrecta la
computadora imprimirá "TE EQUIVOCASTE DE FIESTA" y no permitirá el
ingreso. Si las 5 claves son correctas imprimirá "BIENVENIDO A LA FIESTA".
Escribir un algoritmo que realice lo anterior.
Las Claves son:
1: "TIENES"
2: "QUE SER"
3: "INVITADO"
4: "PARA"
5: "INGRESAR" */

const claves = ["TIENES","QUE SER","INVITADO","PARA","INGRESAR"];

Array.prototype.equals = function (inclaves) {
    if (inclaves.length === 0) return "El arreglo esta vacio";
    if (this.length != inclaves.length) return "TE EQUIVOCASTE DE FIESTA";
    for (let i = 0; i < inclaves.length; i++) {
      if (this[i] instanceof Array && inclaves[i] instanceof Array) {
        if (!this[i].equals(inclaves[i].toUpperCase())) return false;
      } else if (this[i] != inclaves[i].toUpperCase()) {
        return "TE EQUIVOCASTE DE FIESTA";
      }
    }
    return "BIENVENIDO A LA FIESTA";
  };

  let clavesIngresada1 = ["tienes","que ser","invitado","para","ingresar"];
  let clavesIngresada2 = []
  let clavesIngresada3 = ["tienez","que ser","invitado","para","ingresar"];

  console.log(claves.equals(clavesIngresada1))
  console.log(claves.equals(clavesIngresada2))
  console.log(claves.equals(clavesIngresada3))
  
