//Podes reforzar este contenido con https://www.aprendejavascript.dev/clase/funciones/tu-primera-funcion de MiduDev
/*
Una función es un bloque de código que realiza una tarea específica cuando se llama. 
Puedes pensar en una función como en un microondas: le das algo para cocinar, 
le pasas algunos parámetros (como el tiempo y la potencia) y luego hace su trabajo y te devuelve el resultado.
 */

//🧠 Paso 1: Se declara una variable

let nombreCompleto = 'Maria Elisa Araya';

// Guardás tu nombre en una variable. Hasta acá todo bien, esperemos > P

//🧠 Paso 2: Declarás una función

function mostrarMiNombre(nombre){
    console.log('Me llamo', nombre);
}

//Creás una función llamada mostrarMiNombre, que espera recibir un dato llamado nombre. Este es un parámetro, una especie de "huequito" donde le vas a pasar un valor cuando la llames.

//🧠 Paso 3: Llamás a la función
mostrarMiNombre(nombreCompleto);

//Acá ejecutás la función y le pasás como argumento el contenido de nombreCompleto, o sea 'Maria Elisa Araya' o tu nombrecito.

//🎁 Bonus: Qué pasa si llamás sin pasar parámetro?

mostrarMiNombre();