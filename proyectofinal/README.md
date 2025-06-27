
# 🎓 Plataforma de Cursos – Proyecto Angular

Este proyecto es una aplicación web construida con **Angular 19** y **Bootstrap**, desarrollada como parte de una actividad práctica. Su objetivo es demostrar la estructura básica de una plataforma educativa con diferentes secciones, incluyendo visualización y administración de cursos.

---

## 🧩 Estructura del Proyecto

El proyecto está dividido en **tres rutas principales**:

---

### 1. `/` – Página de Inicio (Home)

Contiene la vista principal del sitio con los siguientes elementos:

- ✅ **Slider** principal para destacar contenido.
- ✅ **Cards de categorías** de cursos para navegar por temas.
- ✅ **Sección de llamada a la acción** que redirige a la vista de cursos.


![Vista Home](images/Capturas%20de%20pantalla/Captura_Home.jpeg)


---

### 2. `/course` – Vista de Cursos

Contiene:

- ✅ Un **banner superior** con diseño destacado.
- ✅ Un **listado de cursos** representado con cards que muestran:
  - Nombre
  - Descripción
  - Duración
  - Nivel
  - Precio



![Vista Cursos](/images/Capturas%20de%20pantalla/Captura_Curso.jpeg)


---

### 3. `/admin` – Panel de Administración

Esta sección permite gestionar los cursos y contiene:

- ✅ **Banner informativo**
- ✅ **Formulario de creación de curso**, con campos para:
  - Nombre
  - Descripción
  - Duración
  - Nivel
  - Precio
- ✅ **Tabla dinámica de cursos activos**:
  - Visualiza todos los cursos
  - Permite **eliminar cursos**
  - Permite **editar cursos** (abre un modal Bootstrap con el formulario cargado)

- ✅ **Formulario**:
![Vista Admin](images/Capturas%20de%20pantalla/Captura_Admin_Formulario.jpeg)

- ✅ **Tabla**:
![Vista Tabla](images/Capturas%20de%20pantalla/Captura_Admin_Tabla.jpeg)

- 📝 **Modal**:
![Modal Editar Curso](images/Capturas%20de%20pantalla/Captura_Admin_Tabla_Editar.jpeg)


---

## ⚙️ Tecnologías utilizadas

- **Angular 19**
- **Bootstrap 5 (via CDN)**
- **RxJS + Signals**
- **HTTPClient para conexión con backend**
- **HTML + CSS**

---

## 🚀 Funcionalidades implementadas

- Navegación entre vistas con routing (`RouterModule`)
- Carga de cursos desde backend con servicio HTTP
- Agregado dinámico de cursos con formulario reactivo
- Edición de cursos mediante modal (formulario prellenado)
- Eliminación inmediata de cursos y actualización visual de tabla
- Uso de `signal<Course[]>` para mantener sincronización reactiva

---

## 📁 Estructura del código

```bash
src/
├── app/
│   ├── services/
│   ├── components/
│   │   ├── home/
│   │   ├── course/
│   │   └── admin/
│   └── app-routing.module.ts

```

---