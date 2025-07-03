# 🎬 TP3 Final Backend – Desafío de Base de Datos: Trailerflix

## 🧑‍🤝‍🧑 Trabajo en equipo – Presentación obligatoria en la clase 32

🔹 **Equipos de 2 a 3 integrantes**  
    - Por favor colocar los equipos en el siguiente excel antes del martes 08/07/2025
🔹 **Presentación en vivo y obligatoria** 
🔹 Si un/a integrante **falta**, debe avisar con anticipación para **reagendar la presentación en la clase 31**  
🔹 **Feedback en vivo durante la clase**

---

## 📁 Parte 1: Modelo Relacional

Utilizando el archivo JSON disponible en `Trailerflix - JSON/trailerflix.json`:

```json
{
  "id": 3,
  "poster": "./posters/3.jpg",
  "titulo": "The Mandalorian",
  "categoria": "Serie",
  "tags": "Sci-Fi, Fantasía, Acción",
  "genero": "Ciencia Ficción",
  "resumen": "Ambientada tras la caída del Imperio y antes de la aparición de la Primera Orden, la Serie sigue los pasos de un pistolero solitario en las aventuras que protagoniza en los confines de la galaxia, donde no alcanza la autoridad de la Nueva República.",
  "temporadas": 2,
  "reparto": "Pedro Pascal, Carl Weathers, Misty Rosas, Chris Bartlett, Rio Hackford, Giancarlo Esposito",
  "trailer": "https://www.youtube.com/embed/aOC8E8z_ifw"
}
```
## 🎯 Objetivo

Diseñar un modelo relacional de base de datos que cumpla con los siguientes criterios:

- La base de datos debe tener **al menos 4 tablas relacionales**.
- Se deben migrar los datos del archivo JSON a la base de datos, considerando las entidades:  
  **Cartelera/Catálogo**, **Actores**, **Categorías**, **Géneros**, **Tags** y **Reparto**.
- El modelo debe cumplir con la **Tercera Forma Normal (3FN)**.

---

## 🧮 Parte 2: Consultas SQL

Deberán desarrollar y ejecutar las siguientes consultas SQL:

1. Obtener una lista de películas por género (por ejemplo: **"Acción"**, **"Terror"**, **"Suspenso"**).
2. Obtener películas con los tags **"Aventura" y "Ciencia Ficción"**, o **"Aventura" y "Fantasía"**.
3. Visualizar títulos y categorías cuyo resumen contenga la palabra **"misión"**.
4. Listar las series con **al menos 3 temporadas**.
5. Contar cuántas películas/series trabajó el actor **Chris Pratt**.
6. Mostrar nombre completo de actrices/actores junto a:  
   título de los trabajos, categoría y género.
7. Ver solo la categoría **"Películas"**:  
   mostrar título en mayúsculas, género en mayúsculas, tags separados por coma, duración y enlace al tráiler.
8. Ver solo la categoría **"Series"**:  
   mostrar título en mayúsculas, género en mayúsculas, tags separados por coma, cantidad de temporadas, tráiler y resumen.
9. Identificar la película/serie con **más actores** y la que tiene **menos actores**, indicando la cantidad en cada caso.
10. Contar la cantidad total de **películas** registradas.
11. Contar la cantidad total de **series** registradas.
12. Listar las series en orden **descendente por cantidad de temporadas**.
13. Agregar el campo `fecha_lanzamiento` (tipo `DATE`) a la tabla de trabajos fílmicos y actualizar las fechas de los títulos del género **"Aventura"**.
14. Buscar películas por **palabra clave** en título o descripción (por ejemplo: **"Aventura"**, **"madre"**, **"Ambientada"**).
15. Agregar una tabla **"Ranking"** con:  
    ID de película/serie, calificación y comentarios.  
    Realizar consultas utilizando **JOINS**, **UNION**, **CONCAT**, **COUNT**, **GROUP BY**, entre otras operaciones SQL.

---

⚠️ **Importante:** Las consultas deben adaptarse a la estructura y nombres reales de las tablas que hayan definido en su modelo.

---

🎓 **¡Este trabajo es integrador y representa la aplicación práctica de los temas vistos en el módulo!**  
Se evaluará el modelo relacional, la normalización, la correcta escritura de las consultas y la presentación en clase.

