/*Traer nuestro modulo
Y ejecutar una función del modulo */

const saludar = require("./modulo").saludar;
const {propiedad2} = require("./modulo");

saludar();
console.log(propiedad2);