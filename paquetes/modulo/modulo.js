function saludar() {
    console.log("Hola mundo");
}


//module.exports.saludar = saludar;
//module.exports = saludar; //Exportas la funcion directamente en lugar de un objeto
module.exports = {
    saludar,
    propiedad1: 1000,
    propiedad2: "ajedrez"
};