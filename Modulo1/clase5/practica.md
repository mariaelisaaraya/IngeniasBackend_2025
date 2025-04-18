Prácticas

Deﬁniremos una constante PORT, con el valor 3050. En el servidor web, deben seguir  las siguientes rutas deﬁnidas:

“/”

“/cursos”

“/contacto”

El formato de respuesta para cada ruta, queda exactamente igual a cómo lo deﬁnimos en  el proyecto que utiliza el módulo HTTP.

En el control de rutas inexistentes, crearemos una estructura JSON, la cual debe  enviarse como respuesta a las rutas inexistentes que sean peticionadas. 

Ejemplo:

{“error”: “404”, “description”: “No se encuentra la ruta o recurso solicitado.”}

Modiﬁcaremos también package.json, agregando el script correspondiente para  inicializar el proyecto con Nodemon.