function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log("Hola " + nombre);
        miCallback(nombre);
    }, 1000);
}

function hablar(callbackHablar) {
    setTimeout(function () {
        console.log("hablando...");
        callbackHablar();
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
    hablar(function () {
        hablar(function () {
            hablar(function () {    //CALLBACK HELL, SE VUELVE COMPLICADO....
                adios(nombre, function () {
                    console.log("Finalizando proceso...");
                });
            });
        });
    });
});

