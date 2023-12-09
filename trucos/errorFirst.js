function asincrona(callback) {
    setTimeout(function () {
        try {
            let a = 3 + z;
            callback(null, a)
        } catch(e) {
            callback(e);
        }
    }, 1000);
}

asincrona(function (error, dato) {
    if (error) {
        console.error("ERROR: " + error.message);
        return false;
        //throw error; //En funciones asincronas no va a funcionar porque lo tendrías que
                      //cachar en el hilo principal.
    }
    console.info("Todo bien, mi dato es: " + dato);
});