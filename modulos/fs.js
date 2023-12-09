const fs = require("fs");

function leerArchivo(ruta, callback) {
    fs.readFile(ruta, (error, data) => {
        if (error) {
            throw new Error(error);
        }
        callback(data);
        callback(data.toString());
    });
}

function escribirArchivo(ruta, contenido) {
    fs.writeFile(ruta, contenido, error => {
        if (error) {
            console.error("No se pudo escribir archivo. " + error);
        }
        console.info("Archivo escrito correctamente");
    });
}

function borrarArchivo(ruta, callback) {
    fs.unlink(ruta,callback);
}

leerArchivo(__dirname + "/file.txt", console.log);

escribirArchivo(__dirname + "/fileCreated.txt", "Hola, soy un nuevo archivo creado con el modulo fs.");

borrarArchivo(__dirname + "/deleteMe.txt", () => {
    console.info("Archivo borrado correctamente");
});
