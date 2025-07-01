✅PS C:\Users\Eli\Documents\Jump\jump2025\practica> npx jest tests/fxEjercicio1.romina.test.js

PASS  tests/fxEjercicio1.romina.test.js

  Romina - sumarGanancias()
  
    √ devuelve 400 con [100, -20, 2000, 300] (3 ms)
    
    √ devuelve 0 si no hay números positivos
    
    √ suma correctamente con varios valores válidos (1 ms)

Test Suites: 1 passed, 1 total

Tests:       3 passed, 3 total

Snapshots:   0 total

Time:        0.439 s, estimated 1 s

Ran all test suites matching tests/fxEjercicio1.romina.test.js.

✅PS C:\Users\Eli\Documents\Jump\jump2025\practica> npx jest tests/fxEjercicio2.romina.test.js
  console.log
    El archivo se creo correctamente

      at log (romina_iurchik/fxEjercicio2.js:29:25)

  console.log
    Se agrego contenido al archivo

      at log (romina_iurchik/fxEjercicio2.js:60:21)

 PASS  tests/fxEjercicio2.romina.test.js
 
  Romina - registrarVisita()
  
    √ crea el archivo si no existe (29 ms)
    
    √ agrega contenido si el archivo ya existe (4 ms)

Test Suites: 1 passed, 1 total

Tests:       2 passed, 2 total

Snapshots:   0 total

Time:        0.508 s, estimated 1 s

Ran all test suites matching tests/fxEjercicio2.romina.test.js.

✅PS C:\Users\Eli\Documents\Jump\jump2025\practica> npx jest tests/fxEjercicio3.romina.test.js

PASS  tests/fxEjercicio3.romina.test.js

  Romina - Servidor HTTP básico
  
    √ GET / devuelve mensaje de bienvenida (28 ms)
    
    √ GET /alumnas devuelve lista de alumnas (4 ms)
    
    √ GET /otra-ruta devuelve 404 (2 ms)

Test Suites: 1 passed, 1 total

Tests:       3 passed, 3 total

Snapshots:   0 total

Time:        0.601 s, estimated 3 s

Ran all test suites matching tests/fxEjercicio3.romina.test.js.
