var tabla = [{a: 1, b: "casa"}, {a: 100, b: true, c: {algo: "algo"}}];
var objeto = {a: 1, b: 2, c: 3, d: 4};

console.log("Guardame en log");
console.info("Informame");
console.error("Esto es un error y se guarda en otra parte");
console.warn("Potencial posible error");
console.table(tabla);
console.table(objeto);

console.group("conversación");
console.log("Hola");
console.log("Hablando...");
console.log("Adios");
console.groupEnd();

console.log("Otra cosa de otra función");

console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");