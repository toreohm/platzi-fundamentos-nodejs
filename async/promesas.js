function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hola " + nombre);
            resolve(nombre);
        }, 1500);
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log("hablando...");
            resolve(nombre);
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

/*La principal diferencia entre promesas y callbacks es que a las promesas las podemos ir anidando de una manera legible */

console.log("Iniciando el proceso...");
hola("Hector")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => {
       console.log("Terminado el proceso"); 
    })
    .catch(error => {
        console.error(error);
    });