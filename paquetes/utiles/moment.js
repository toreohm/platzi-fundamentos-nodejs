const moment = require("moment");

//moment nos ayuda a trabajar con fechas, tiene mucha funcionalidad.
let ahora = moment(); //Objeto fecha de tipo moment. Tenemos ahora acceso a muchas funciones.
console.log(ahora.toString());
console.log(ahora);
console.log(ahora.format("YYYY/MM/DD - HH:mm"));
