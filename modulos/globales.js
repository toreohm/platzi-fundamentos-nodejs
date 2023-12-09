let i = 0;

let idInterval = setInterval(function () {
    console.log("Hola");
    if (i === 3) {
        clearInterval(idInterval);
    }
    i++;
}, 1000);


/*When you want to execute some piece of code asynchronously, but as soon as possible, one option is 
to use the setImmediate().
Any function passed as the setImmediate() argument is a callback that's executed in the next iteration of 
the event loop.*/

setImmediate(function () {
    console.log("Ahora mismo");
});

//------------------------------

//console.log(globalThis);
//console.log(process);
console.log("__dirname: " + __dirname);
console.log("__filename: " + __filename);

//Crear variables globales (no recomendado)
globalThis.miVariable = "Valor global";
console.log(miVariable);