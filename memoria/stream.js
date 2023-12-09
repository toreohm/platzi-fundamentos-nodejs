/*Un stream es el proceso de ir consumiendo datos al tiempo que se están recibiendo. 
En otras palabras; es el paso de datos entre un punto y otro. */

const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

let miArray;

let readableStream = fs.createReadStream(__dirname + "/input.txt");

readableStream.setEncoding("utf-8");

readableStream.on("data", (chunk) => {
    console.log(chunk);
    //console.log(chunk.toString());
    miArray = chunk.toString().split("\n");
    console.table(miArray);

    //Si es un archivo enorme entonces...
    data += chunk;
});

readableStream.on("end", () => {
    console.log(data);
});

//Escribir en el buffer de la salida del sistema

process.stdout.write("Hola ");
process.stdout.write("mundo!");

//-----------
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function (chunk, codif, cb) {
    let chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();
readableStream.pipe(mayus).pipe(process.stdout);