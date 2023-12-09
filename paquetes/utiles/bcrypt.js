const bcrypt = require("bcrypt");

const password = "1234Segura!";

let hashPassword = "";

bcrypt.hash(password, 5, function (error, hash) {
    if (error) {
        console.error(error.message);
    }
    console.log(hash);
    bcrypt.compare(password, hash, function (error, resultado) {
        if (error) {
            console.error(error.message);
        }
        console.log(resultado);
    });
});

//bcrypt tambien funciona con promesas
// hash the password with the salt
function genHash(salt, password) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, salt, function(err, hash) {
        if (err) {
          reject(err);
        } else {
          resolve({
            salt: salt,
            password: password,
            hash: hash
          });
        }
      });
    });
  }

  genHash(5, password)
    .then(resultado => {
        hashPassword = resultado.hash;
        console.log("adentro: ", hashPassword);
    });

    console.log("afuera", hashPassword);