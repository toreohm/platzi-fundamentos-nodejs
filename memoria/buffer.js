/*Un buffer es un espacio de memoria (en la memoria ram), en el que se almacenan datos de manera 
temporal. Es la forma mas cruda en la que se pueden almacenar los datos. 
(Se guardan en bytes y no se especifica el tipo de dato)
En la consola, los datos se muestran en formato hexadecimal. */

//Ejemplo básico
let buffer = Buffer.alloc(4); // 4 bytes 

console.log(buffer);

//Otro ejemplo
let buffer2 = Buffer.from([1, 2, 3, "a"]);
let buffer3 = Buffer.from("Hola");

console.log(buffer2);
console.log(buffer2.toJSON());
console.log(buffer3);
console.log(buffer3.toString());

//-- Trabajar con buffers posición por posición

let abecedario = Buffer.alloc(26); //bytes
console.log(abecedario);

for (let i = 0; i < 26; i++) {
    abecedario[i] = i + 97;
}

console.log(abecedario);
console.log(abecedario.toString());