const {exec, spawn} = require("child_process");
//const { stdout, stderr } = require("process");
//const exec = require("child_process").exec;

let resultado;

function ejecutarComando(comando) { 
    return new Promise((resolve, reject) => {
        exec(comando, (error, stdout, stderr) => {
            if (error) {
                reject(error);
            }   
            resolve(stdout);
        });
    });
}

ejecutarComando("cat /etc/lsb-release")
    .then(data => {
    console.log(data);
    resultado = data.split("\n");
    console.log("Distribucion Linux: " + resultado[3].slice(20));
    })
    .catch(error => console.error(error.message));

//--------------------------------- Otra forma de hacerlo

const {exec} = require("child_process");

    function ejecutarComando2(comando) { 
       return exec(comando, (error, stdout, stderr) => {
            if (error) {
                console.error(error);
            }   
        });
    }

    let info = ejecutarComando2("cat /etc/lsb-release");

    info.stdout.on("data", (data) => {
        console.log(data);
    });