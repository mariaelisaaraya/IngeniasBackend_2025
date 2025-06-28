/* -->
✅ Ejercicio 1 – Suma de ganancias
Escribí una función sumarGanancias(importes) que reciba un array de números (importes)
y devuelva la suma solo de los valores positivos que no superen los $1000.

📌 Usá module.exports para exportar la función.

📎 Ejemplo de uso:
sumarGanancias([100, -20, 2000, 300]) // → 400 
// <-- */



// 🤓 DATO DE COLOR: yo le digo fx o f(x) a la/s funcion/es, terminologia que me quedo de las matemáticas. 

//importo/requiero el modulo fxEjercicioUno.js
const sumarGanancias = require('./fxEjercicio1');

// array para enviar por parámetro en sumarGanancias
const importes = [1000, 0, 20.10, 300];

//Informo en cosnola
console.log('\nSuma de ganancias\n');

//aca agrego el salto de linea xq me imprimia dos veces esl titulo del array:
/*--> Suma de ganancias
┌─────────┬────────┐
│ (index) │ Values │
│ (index) │ Values │
├─────────┼────────┤
│ 0       │ 100    │
│ 1       │ -20    │
│ 2       │ 2000   │
│ 3       │ 300    │
└─────────┴────────┘
<--*/
console.table(importes);
console.log('Total: ', sumarGanancias(importes));