# 🧪 Práctica Backend – Node.js con PR

### 🧠 PROPUESTA DE APRENDIZAJE

Esta actividad tiene como objetivo seguir practicando Node.js.  
Pueden resolver cualquiera de los 3 ejercicios usando lógica, módulos del sistema y HTTP, y compartir tus soluciones a través de **Pull Requests**.

> 🚀 Esta es una excelente oportunidad para practicar cómo se trabaja con Git y GitHub.

---

## ✅ ¿Cómo participar?

1. **Hacé un fork** de este repositorio.
2. **Cloná tu fork** en tu compu.
3. Creá una carpeta con tu nombre y apellido (todo en minúsculas y sin espacios) dentro de la carpetaPractica:  
   Ejemplo: `/nombre-apellido/`
4. Resolvé alguno de los 3 ejercicios adentro de esa carpeta.  
   Se tiene que hacer 1 archivo `.js` por ejercicio si elegis hacer todos.
5. Cuando finalices **subí tus cambios** y vas a realizar el [**Pull Request**](https://youtu.be/nCKdihvneS0?si=ZmPNrtgHPBiXDCP4) al repositorio original antes del:

> 🕐 Martes 24 de junio de 2025 a las 18:00h

💡 No es necesario usar testing automatizado. En este caso voy a revisar el código, dejar comentarios y probar los módulos localmente.

---

## 📂 Estructura esperada

```
carpetaPractica
├─/nombre-apellido/
 ├─ ejercicio1.js
 ├─ ejercicio2.js
 ├─ ejercicio3.js
```

---

## 🧩 Ejercicios

### ✅ Ejercicio 1 – Suma de ganancias

Escribí una función `sumarGanancias(importes)` que reciba un array de números (importes)  
y devuelva la suma solo de los valores positivos que no superen los $1000.

📌 Usá `module.exports` para exportar la función.

📎 Ejemplo de uso:
```js
sumarGanancias([100, -20, 2000, 300]) // → 400
```

### ✅ Ejercicio 2 – Registro de visitas
Usando el módulo fs, escribí una función registrarVisita(nombre) que:

1. Cree (si no existe) un archivo llamado visitas.txt.

2.Cada vez que se llame a la función, agregue una línea al archivo con este formato:
```
Visitó: Carla - Fecha: 2025-06-20 17:45
```
📎 Ejemplo de uso:
```js
registrarVisita('Carla');
```

### ✅ Ejercicio 3 – Servidor HTTP básico
Usando el módulo http, vas a tener que crear un servidor que responda:

GET /: con el mensaje "Bienvenida al servidor de Node.js"

GET /alumnas: con un JSON de prueba que contenga 3 nombres de alumnas, alumnas reales 😊

Cualquier otra ruta: con "Ruta no encontrada"

📌 Sugerencia: usá JSON.stringify() y Content-Type en la cabecera.

```js
// GET /alumnas → ["Romi", "Maria Angeles", "Lisa"]
```

## 🧠 A recordar 
Usar ```module.exports``` para funciones si querés que se puedan importar.

No hace falta instalar nada con npm para esta práctica.

Los ejercicios deben funcionar ejecutándolos con node.

¡Lo importante es participar, practicar y aprender juntas! 🚀
