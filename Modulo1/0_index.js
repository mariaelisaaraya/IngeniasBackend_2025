//Esto es info basica que se puede ver en https://www.aprendejavascript.dev/ de MiduDev
//Como muchas me comentaron que necesitaban un refuerzo de JavaScript siento que Midu es una persona muy amigable para explicar.

// Esto es un comentario
/*Esto tambien es un comentario */

//Tipos de Datos

// En JavaScript tenemos 9 tipos de datos que se dividen en dos grandes grupos: primitivos o no primitivos.
// Primitivos tenemos 7 tipos de datos:

//number
//string
//boolean
//null
//undefined
//symbol
//bigint

//Number son los números (tipo number)

console.log("1 ", 7);
console.log("2 ", 3.14);
console.log("3 ", 19.95);
console.log("4 ", 2.998e8);

/* Operadores aritméticos Con los números, puedes usar los operadores aritméticos para realizar operaciones matemáticas. 
En JavaScript tenemos los siguientes operadores aritméticos:
+: suma
-: resta
*: multiplicación
/: división
%: módulo (resto de la división)
**: exponente
*/

console.log("5 ", 2 + 2 * 3);
console.log("6 ", (2 + 2) * 3);

//String son las cadenas de texto (tipo string)

console.log("7 ", `Esto es una cadena de texto`);
console.log("8 ", "Esto es una cadena de texto con doble comilla");

console.log(
  "9 ",
  `Esto es una cadena de texto
que ocupa varias líneas. Puedes escribir
tantas líneas como quieras`
);

//Concatenación es para unir dos cadenas de texto, podemos usar el operador +:

console.log("10 ", "Estás aprendiendo " + "JavaScript");

//Booleanos: Los booleanos representa sólo dos valores: true (verdadero) o false (falso)

console.log("11 ", "¿Está lloviendo (true) o no está lloviendo (false)?");
console.log(
  "12 ",
  "¿Está el usuario logueado (true) o no está logueado (false)?"
);

//Los operadores de comparación en JavaScript nos permiten comparar dos valores. Siempre devuelven un valor booleano (true o false).
//>
//<
//>=
//<=

console.log("13 ", 5 > 3);
console.log("14 ", 5 < 3);

//Para saber si dos valores son iguales podemos usar el operador === o, para saber si son diferentes, el operador !==
//===
//!==

console.log("15 ", 5 === 5);
console.log("16 ", 5 !== 5);

//No sólo podemos usar los comparadores para comparar números, también podemos usarlos para comparar cadenas de texto y otros tipos de datos.

console.log("17 ", "JavaScript" === "JavaScript");
console.log("18 ", "JavaScript" === "Java");

//Los operadores lógicos en JavaScript (y en muchos otros lenguajes de programación) se utilizan para evaluar expresiones lógicas.
//En JavaScript, hay tres operadores lógicos: AND (&&), OR (||) y NOT (!).

console.log("19 ", 2 < 3 && 3 < 4);

//Combinando operadores lógicos, aritméticos y de comparación (abrir bien los ojos)

console.log("20 ", ((2 + 2) < 3 && (10 < (8 * 2))));

// Tip de Visual Studio Code para que no distorsione el codigo: https://es.stackoverflow.com/questions/350219/por-qu%C3%A9-al-guardar-archivo-en-vscode-me-distorsiona-el-c%C3%B3digo

//Variables A la hora de crear programas, es vital poder almacenar la información para poder utilizarla en un futuro. En JavaScript, usamos variables para conseguirlo.
// Para asignarle un valor, usamos el operador de asignación =

//let
//const

//let numero 
let numero = 1

console.log("21 ",numero)

//null y undefined: Mientras que null es un valor que significa que algo no tiene valor, undefined significa que algo no ha sido definido

//Operador typeof devuelve una cadena de texto que indica el tipo de un operando
