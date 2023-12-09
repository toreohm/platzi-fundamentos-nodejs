//---------------------------Solución al callback hell
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

function conversacion(nombre, cont, callback) {   //Función intermedia recursiva
    if (cont > 0) {
        hablar(function () {
            conversacion(nombre, --cont, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

console.log("Iniciando proceso...");
hola("Mario", function (nombre) {
    conversacion(nombre, 5, function () {
        console.log("Proceso terminado");
    });
});
