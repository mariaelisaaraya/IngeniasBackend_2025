const express = require('express');
const app = express();
const dotenv=require('dotenv');
dotenv.config();
const PORT= process.env.PORT || 3008;
const alumnas = require('./alumnas.json'); // importa el archivo JSON
const AlumnasJson = JSON.stringify(alumnas);


app.use((req,res,next)=>{
    res.header("Content-Type","application/json; charset=utf-8"); //especifico el set de caraacteres para poder ver los datos
    next();
})

app.get('/',(req,res)=>{
    res.status(200).end(`Bienvenida al servidor de Node.js`);
})

app.get('/alumnas', (req, res) => {
    res.send(AlumnasJson);
});

app.use((req, res) => {
    res.status(404).send(`Ruta no encontrada`);
});


app.listen(PORT, () => {
    console.log(`Servidor escuchandose en el puerto: ${PORT}`);
});

