const {exec, spawn} = require("child_process");
//const { stdout, stderr } = require("process");
//const exec = require("child_process").exec;

exec("ls -lah", (error, stdout, stderr) => {
    if (error) {
        console.error(error);
        return false;
    }
    console.log(stdout);
});

let proceso = spawn("node", ["modulos/consola.js"]);

//console.log(proceso);
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function (dato) {
    console.log("Proceso muerto? ", process.killed);
    console.log(dato.toString());
});

proceso.on("exit", function() {
    console.log("El proceso terminó");
    console.log("Proceso muerto? ", process.killed);
});