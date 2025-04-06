# Apuntes por 3lisa Araya para Ingenias ✨

---

## 📌 ¿Cuál es la diferencia entre arrays, elementos y objetos?

Un **array** es una lista ordenada de elementos, mientras que un **objeto** es una colección de pares clave-valor.

- **Array**: Se usa para almacenar múltiples valores en una sola variable. Los elementos tienen un índice numérico.
- **Objeto**: Se usa para representar cosas con propiedades. Cada propiedad tiene un nombre (clave) y un valor.

```js
// Array (lista de elementos)
let frutas = ["manzana", "banana", "uva"];

// Objeto (propiedades con claves y valores)
let persona = { nombre: "María", edad: 30, ciudad: "Buenos Aires" };
```

🔹 Usar un array si solo necesitas una lista ordenada de datos.
🔹 Usar un objeto si necesitas describir algo con propiedades y valores.

---

## 📌 ¿Qué tipos de valores se pueden usar en JavaScript?

En JavaScript tanto arrays como objetos pueden contener valores de cualquier **tipo de dato**:

✅ Tipos de valores:

- String → "Hola"
- Number → 42, 3.14
- Boolean → true, false
- Null → null
- Undefined → undefined
- Objeto → { clave: "valor" }
- Array → [1, 2, 3]
- Función → function() {}
- Symbol y BigInt → (menos comunes)

```js
// Array con distintos tipos de valores
let datos = ["Texto", 25, true, null, { nombre: "Ana" }, [1, 2, 3]];

// Objeto con distintos tipos de valores
let persona = {
  nombre: "Juan",
  edad: 30,
  activo: true,
  direccion: { ciudad: "Madrid", pais: "España" },
  hobbies: ["leer", "correr"],
  saludar: function () {
    return "Hola!";
  },
};
```

💡 Conclusión: Tanto en arrays como en objetos, los valores pueden ser de cualquier tipo, incluso otros arrays u objetos. 🚀
