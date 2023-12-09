function soyAsincrono(miCallback) {
    setTimeout(function () {
        console.log("Estoy siendo asincrono!!");
        miCallback();
    }, 1000);
}

console.log("Iniciando proceso...");
soyAsincrono(function () {
    console.log("Finalizando proceso...");
});


//SEGUNDO EJEMPLO

function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log("Hola " + nombre);
        miCallback("Hector");
    }, 1000);
}

function adios(nombre, otroCallback) {
    setTimeout(function () {
        console.log("Adios " + nombre);
        otroCallback();
    }, 1000);
}

console.log("Iniciando proceso...");
hola("Hector", function (nombre) {
    adios(nombre, function () {
        console.log("Finalizando proceso...");
    });
});

