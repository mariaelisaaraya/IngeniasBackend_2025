# Instalación y Gestión de MySQL en Windows

Para usar MySQL correctamente en Windows, necesitas instalar dos componentes clave:  
- **MySQL Server** (motor de base de datos)  
- **MySQL Workbench** (interfaz gráfica para administrar bases de datos)

---

##  ¿Qué instalar y en qué orden?

1. **Descarga el instalador completo (aprox. 353 MB):**  
   👉 [mysql-installer-community-8.0.42.0.msi](https://dev.mysql.com/downloads/installer/)  
   Este instalador contiene todo lo necesario (Server, Workbench, Shell, etc.) y funciona offline, ideal para desarrollo local.

2. **Ejecuta el instalador** y selecciona estos componentes:  
   - ✅ MySQL Server (obligatorio)  
   - ✅ MySQL Workbench (recomendado)  
   - 🟡 Opcional: MySQL Shell (línea de comandos avanzada)

3. **Sigue el asistente de instalación:**  
   - Elige el tipo de instalación: selecciona **Full** (o Developer Default).  
   - Configura una contraseña segura para el usuario `root`.  
   - Deja sin cambios la sección de "Add User" (opcional).  
   - Seleccioná **Standard System Account** (no Custom User).  
   - No toques nada en **Server File Permissions**, simplemente haz clic en Next.  
   - En **Apply Configuration**, ejecuta todo lo que aparece en la lista.

---

## ¿Por qué son dos componentes?

- **MySQL Server:** motor que guarda y procesa los datos.  
- **MySQL Workbench:** interfaz gráfica para administrar tus bases de datos sin usar solo comandos.

---

## 🟢 Cómo levantar MySQL en Windows

### ✔️ Opción rápida: desde Servicios

1. Presioná `Win + R`, escribí `services.msc` y presioná **Enter**.
2. Buscá un servicio llamado:
   - `MySQL`
   - o `MySQL80` (según tu versión instalada).
3. Clic derecho → **Iniciar** (o **Reiniciar** si ya está corriendo).

![image](https://github.com/user-attachments/assets/a712b8aa-f3ed-4baa-aa5a-05d1b1196dcc)


👁️ **Tip:** Para que MySQL se inicie automáticamente con Windows:
- Clic derecho → **Propiedades**
- En **Tipo de inicio**, seleccioná **Automático**

  
### ✔️ Opción avanzada: desde Terminal (CMD o PowerShell)

#### Iniciar el servicio:

```bash
net start MySQL80
```

---

## 🛑 Cómo detener MySQL para que no corra en segundo plano

### ✔️ Opción 1: Visual (desde Servicios)

1. Presioná `Win + R`, escribí `services.msc` y presioná Enter.
2. Buscá el servicio llamado **MySQL80** (o el nombre que elegiste).
3. Clic derecho → **Detener**.
4. (Opcional) Clic derecho → **Propiedades** → en *Tipo de inicio* seleccioná:
   - `Manual`: solo se inicia cuando vos lo activás.
   - `Deshabilitado`: no se inicia nunca automáticamente.

![image](https://github.com/user-attachments/assets/affffa10-a3e0-4965-8d64-111871e6462f)


---

### ✔️ Opción 2: Terminal (CMD o PowerShell)

#### Detener el servicio:

```bash
net stop MySQL80
```
---

## 🔍 Cómo comprobar si MySQL sigue corriendo

### ✔️ Ver estado del servicio:

```bash
sc query MySQL80
```

- Si ves STATE: 4 RUNNING, está corriendo.

- Si ves STATE: 1 STOPPED, está detenido.

### ✔️ Ver si el proceso está activo:

```bash
tasklist | findstr mysqld
```

- Si no devuelve nada, el proceso está apagado.

- Si aparece mysqld.exe, MySQL sigue en ejecución.
