// lo agrego solo. Anda, no lo toco
const { error } = require('console');
const fs = require('fs');


// verifico si existe el archvio --> devuelve true/false
function isExiste(filename){
    const existe = fs.existsSync(filename.trim());
    return existe ? true : false;
}


// creo el archivo si no exise
function crearArchivo(filename, contenido){
    const archivo = filename.trim();

    if(isExiste(archivo)){
        console.error('El archivo ya existe');
    }
    else {
        fs.writeFile(archivo, contenido, (error)=>
        {       
            if(error)
            {
                console.error('Algo paso: ', error);
                return 
            } 
            else {
                console.log('El archivo se creo correctamente');  
            }
        });
    }
}

//leo el archivo
function leerArchivo(filename){
    const archivo = filename.trim();
    fs.readFile(archivo,'utf-8', (error, data) =>{
        if (error) {
            console.error(error);
            return
        }
        else{
            console.log(data);
        }
    })
}

// Escribir en un archivo ya creado
function agregarContenido(filename, contenido){
    const archivo = filename.trim();
    const texto = `\n${contenido.trim()}`;
    fs.appendFile(archivo, texto, (error) =>{
        
        if(error){
            console.error(error);
            return
        }
        else{
            console.log('Se agrego contenido al archivo');
        }
    });
}
//Borrar un archivo
function eliminarArchivo(filename){
fs.unlink(filename, (error) => {
    if(error){
        console.error('Paso algo: ', error);
        return;
    }
    console.log(`El archivo ${filename} se borró con exito`);
});
}



//exporto, si no esta no funciona
module.exports = { isExiste, crearArchivo, leerArchivo, agregarContenido, eliminarArchivo };


