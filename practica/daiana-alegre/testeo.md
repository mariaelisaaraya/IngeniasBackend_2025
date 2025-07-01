¡Buen trabajo Daiana! Lograste resolver correctamente el ejercicio aplicando filter() y reduce(), 

- Puntos positivos:
  - Usaste correctamente métodos de array (filter, reduce) para procesar los datos.
  - Tu función está bien estructurada y devuelve un resultado coherente.
  - Usaste module.exports, lo cual permite testear tu código: ¡gran punto!

- Recomendaciones de mejora:
  - Mejorar formato del mensaje de salida:
  - Actualmente devuelve "La suma de las ganancias es400" (todo pegado).
  - Recomendación: agregá un espacio o usá template strings.
  -Devolver un string como "La suma de las ganancias es 400" está bien si lo vas a mostrar al usuario, pero para reutilizar la función en otros contextos, sería mejor que devuelva solo el número.


✅ S C:\Users\Eli\Documents\Jump\jump2025\practica> npx jest tests/fxEjercicio1.daiana.test.js
>>
  console.log
    La suma de las ganancias es400

      at Object.log (daiana-alegre/ejercicio1.js:10:9)

 PASS  tests/fxEjercicio1.daiana.test.js
  Daiana - sumarGanancias()
   
    √ devuelve "La suma de las ganancias es400" con [100, -20, 2000, 300] (4 ms)
   
    √ devuelve "La suma de las ganancias es0" si no hay valores positivos (2 ms)
   
    √ suma correctamente con varios valores válidos (1 ms)
   
    √ ignora valores mayores a 1000

Test Suites: 1 passed, 1 total

Tests:       4 passed, 4 total

Snapshots:   0 total

Time:        0.572 s

Ran all test suites matching tests/fxEjercicio1.daiana.test.js.
