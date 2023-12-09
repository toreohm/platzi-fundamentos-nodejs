function otraFuncion() {
    generaError();
}

function generaError() {
    return 3 + z;
}

try {
    otraFuncion();
} catch(error) {
    console.group("ERROR");
    console.error("Hay un error, pero el programa no se detiene: " + error.message);
    console.log("Hemos capturado el error");
    console.groupEnd();
    
    console.group("TRACE ERROR");
    console.log(error);
    console.groupEnd();
}

console.log("Esto está al final");


/*Pero si se trata de una funcion asincrona el try catch tiene que ser ahi mismo porque el proceso se
ejecuta en un hilo independiente, por lo que si pusieramos el try catch sobre el hilo principal no 
lo detectaría y la aplicación "se crashea" (colapsa).*/

function seRompeAscincrona() {
    setTimeout(() => {
        try {
            return 3 + z;

        } catch(error) {
            console.error(error);
        }
    }, 1000);
}

seRompeAscincrona();