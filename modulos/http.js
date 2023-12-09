const http = require("http");

const servidor = http.createServer(function (req, res) {
    console.log(req.method);
    console.log(req.url);

    switch (req.url) {
        case "/": 
            res.writeHead(201, {"Content-Type": "text/html; charset=utf-8"});
            res.write("<p style='font-size:40px;color:purple;text-align:center;font-weight:bold'>Mi primer servidor con Nodejs</p>");
            res.end("<p style='font-size:40px;color:dodgerblue;text-align:center;font-weight:bold'>Peticion terminada</p>");
            break;
        case "/datos": 
            res.writeHead(201, {"Content-Type": "application/json"});
            res.end(JSON.stringify({a: 100, b: 200, c: 300, d: 400, e: 500}));
            break;

        default: 
            res.writeHead(201, {"Content-Type": "text/plain"});
            res.end("boring...");
    }
});

servidor.listen(3000, () => {
    console.log("Puerto: " + 3000);
});

//ejecutar node con un debugger
//node --inspect modulos/http.js