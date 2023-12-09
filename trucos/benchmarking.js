console.time("todo");
let suma = 0;
let suma2 = 0;

//Ver el tiempo real en que tarda en ejecutarse el bucle/proceso en otros casos.
console.time("bucle");
for(let i = 0; i < 1_000_000_000; i++) {
    suma += 1;
}
console.timeEnd("bucle");
console.log("suma: ", suma);


console.time("bucle2");
for(let i = 0; i < 1_000_000; i++) {
    suma2 += 1;
}
console.timeEnd("bucle2");
console.log("suma2: ", suma2);

console.time("asincrono");
asincrona()
    .then(() => {
        console.timeEnd("asincrono");
    });

console.timeEnd("todo");

function asincrona() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Termina proceso asincrono");
            resolve();
        });
    });
}