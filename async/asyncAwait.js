function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("hablando...");
            resolve();
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("Adios " + nombre);
            resolve();
        }, 1000);
    }); 
}

async function main() {
    try { 
        let nombre = await hola("Hector");
        console.log("Nombre es: " + nombre);
        await hablar();
        await hablar();
        await hablar();
        await hablar();
        await adios(nombre);

    } catch(error) {
        console.error(error);
    }   
}

/*await hace que el proceso asincrono se comporte "sincrono" dentro de la función asincrona, pero...
No interrumpe el hilo/proceso principal. Esto lo demostramos con los console.log de abajo. */

console.log("Se inicia el proceso");
main();
console.log("Se termina el proceso");