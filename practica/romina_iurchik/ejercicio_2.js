/* -->
✅ Ejercicio 2 – Registro de visitas
Usando el módulo fs, escribí una función registrarVisita(nombre) que:

📌 Cree (si no existe) un archivo llamado visitas.txt.
2.Cada vez que se llame a la función, agregue una línea al archivo con este formato:
Visitó: Carla - Fecha: 2025-06-20 17:45

📎 Ejemplo de uso:
registrarVisita('Carla');

// <-- */




//importo/requiero el modulo fxEjercicio2.js
const fxArchivo = require('./fxEjercicio2.js');
// lo agrego solo. Anda, no lo toco
const { darFormatoFecha } = require('./formatoFecha.js');

//Nombre del archivo a crear o modificar según corresponda
const extension = '.txt'
const filename= `Visitas${extension}`;


function registrarVisita(nombre){
    //Le doy formato al texto que va a ser agregado al archivo
    const fecha = darFormatoFecha(new Date());
    const contenido = `Nombre: ${nombre} - Fecha: ${fecha}`;
    
    //Si existe el archivo, agrego contenido
    if(fxArchivo.isExiste(filename)){
        fxArchivo.agregarContenido(filename, contenido);
    }
    else 
    {
        //crea el archivo y agrega el contenido
        fxArchivo.crearArchivo(filename, contenido);
    }
    
    //Lo agregue para ver en consola los cambios del archivo y de paso repasar
    fxArchivo.leerArchivo(filename);
}

//--> LLAMO A LA f(x) registrarVisita <--
//Escribe lisa //registrarVisita('Mercedes');
module.exports = { registrarVisita };

//Anda pero esta comentado xq la idea es armar un menu
//fxArchivo.eliminarArchivo(filename);




