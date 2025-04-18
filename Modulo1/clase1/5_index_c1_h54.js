//El ejemplo de la ppt esta mal, ojoTA

/*
function obtenerMaximo(num1, num2, num3){
    return Math.max(1, 4, 10);
}

obtenerMaximo(2, 5, 10)
*/

//Dentro de Math.max() no se está usando los parámetros (num1, num2, num3) 
//En el ejemplo se escribe directamente los números 1, 4, 10, así que la función siempre comparará esos valores fijos.
//tampoco tiene console.log

//Entonces ahora te la paso con la correccion:

//la funcion tiene 3 parametros
function obtenerMaximo(num1, num2, num3) {
    return Math.max(num1, num2, num3);
  }

//a la funcion le paso 3 argumentos
console.log(obtenerMaximo(2, 5, 10));  // Ahora devuelve 10 ✅
console.log(obtenerMaximo(100, 200, 300));  // Ahora devuelve 300 ✅

//Si queres saber mas sobre funciones, parametros y argumentos https://www.aprendejavascript.dev/clase/funciones/parametros