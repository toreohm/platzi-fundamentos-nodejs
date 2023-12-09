const miObj = {message: "Proceso activo - cada 2 segundos", i: 0};

console.info("Hola mundo!");

let id = setInterval(function () {
  console.table(miObj);
  if(miObj.i === 5) {
    throw new Error("Final del setInterval");
  }
  miObj.i++;
}, 2000);

console.log("Segunda instrucción");
console.log("Tercera instrucción");