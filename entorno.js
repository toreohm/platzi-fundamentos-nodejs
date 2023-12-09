//VARIABLES DE ENTORNO

let nombre = process.env.NOMBRE || "Anhele";
let web = process.env.MI_WEB ?? "No tengo Web";

//NOMBRE=Hector node entorno.js
console.log("Hola " + nombre);

//NOMBRE=Hector MI_WEB=hectormaluy.w3spaces.com node entorno.js
console.log("Mi sitio web es " + web);