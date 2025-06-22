/* -->
✅ Ejercicio 3 – Servidor HTTP básico

Usando el módulo http, vas a tener que crear un servidor que responda:

GET /: con el mensaje "Bienvenida al servidor de Node.js"

GET /alumnas: con un JSON de prueba que contenga 3 nombres de alumnas, alumnas reales 😊

Cualquier otra ruta: con "Ruta no encontrada"

📌 Sugerencia: usá JSON.stringify() y Content-Type en la cabecera.

// GET /alumnas → ["Romi", "Maria Angeles", "Lisa"]

// <-- */
//json a utilizar, se entiende que solo se usa modulo http y nada mas.
const alumnas = [
    { "nombre": "Maria Angeles" },
    { "nombre": "Lisa" },
    { "nombre": "Romi" },
    { "nombre": "Valentina" },
    { "nombre": "Antonia" }
]

//requiero mudulo http
const http = require('http');
const PORT = 3000;
//creo el servidor
const server = http.createServer(
    (req, res) =>{
        //ruta ppal
        if (req.url === '/')
        {
            res.setHeader('Content-Type','text/html');
            res.end('<h1>Bienvenida al servidor de Node.js</h1>');
        }
        //ruta alumnas trae el json y lo convierte a string y muestra en pantalla
        else if (req.url === '/alumnas')
        {
            
            res.setHeader('Content-Type','application/json');
            res.end(JSON.stringify(alumnas));
        }
        //cualquier otra ruta muestra error
        else{
            res.statusCode = 404;
            res.setHeader('Content-Type','text/plain');
            res.end('404 - recurso no encontrado');
        }
    }

);
//escuchando ando...
server.listen(PORT, () =>{
    console.log(`Servidor funcionando en http://localhost:${PORT}`);
});