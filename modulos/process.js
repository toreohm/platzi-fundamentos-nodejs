
process.on("beforeExit", () => {
    console.log("El proceso va a terminar");
});

/*Una vez se ejecute el evento exit, a partir de ahí todo tiene que ser sincrono y ejecutarse
 en el hilo principal: En este caso se ejecuta el console porque es sincrono pero NO el
 setTimeout.*/
process.on("exit", () => {
    console.log("El proceso ha terminado");
    setTimeout(() => {
        console.log("Esto No se ejecuta porque ya se ha desconectado del event loop");
    }, 0);
});

setTimeout(() => {
    console.log("Esto SÍ se va a ver");
}, 0);

process.on("uncaughtException", (error, origen) => {
    console.info("Error no capturado");
    setImmediate(() => {
        console.log("Esto viene desde el uncaughtException");
    });
    console.error("Error.message: " +  error.message);
    console.error("Error.stack: " +  error.stack);
});

funcionQueNoExiste();
