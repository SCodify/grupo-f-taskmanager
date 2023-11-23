# Trabajo Integrador Final

### Tabla de contenido
- [Componentes funcionales](#componentes-funcionales)
- [Estado con useState](#estado-con-usestate)
- [Interacción con el usuario](#interacción-con-el-usuario)
- [Estilo y Diseño](#estilo-y-diseño)
- [Opcionales](#opcionales)
- [División de tareas](#división-de-tareas)


### Desarrollo en React JS

### Consigna  

Crear una aplicación web utilizando React que permita gestionar una lista de tareas. La aplicación deberá hacer uso de componentes funcionales, el hook `useState` para el manejo del estado, el hook `useEffect` para realizar efectos secundarios, y eventos para interactuar con el usuario.

## Requerimientos

### Componentes funcionales:

- Componente de Lista de Tareas (`TaskList`): este componente deberá mostrar la lista de tareas. Recibirá como propiedades la lista de tareas y funciones para gestionar eventos relacionados con las tareas (por ejemplo, marcar como completada, eliminar, etc.). Cada tarea debe representarse mediante un componente `TaskItem`.

- Componente de Tarea (`TaskItem`): este componente deberá representar individualmente una tarea. Mostrará el nombre de la tarea y un botón para completarla. Utilizará el estado local para gestionar la apariencia de la tarea (por ejemplo, tachado cuando esté completada).

- Componente de Formulario (`TaskForm`): este componente contendrá un formulario para agregar nuevas tareas. Utilizará el estado local para gestionar la entrada del usuario y enviará la nueva tarea a la lista principal.

![taskmanager](/public/README/TaskManager.png)

### Estado con useState:

- Estado Principal (`tasks`): utilizar el hook `useState` en el componente principal para gestionar el estado de la lista de tareas. Cada tarea debe ser un objeto con propiedades como `id`, `nombre`, y `completada`.

- Efectos con `useEffect`: efecto de Actualización (`useEffect` en el componente principal): Utilizar `useEffect` para realizar una acción (por ejemplo, **mostrar un mensaje**) cuando el estado de la lista de tareas cambie.

### Interacción con el usuario:
- Eventos en Componente de Lista (`TaskList`): implementar eventos que permitan al usuario interactuar con cada tarea (marcar como **completada**, **eliminar**, etc.). Estos eventos deberán modificar el estado principal (`tasks`).

- Eventos en Componente de Formulario (`TaskForm`): implementar eventos para gestionar la entrada del usuario y agregar nuevas tareas a la lista.

### Estilo y diseño:

Aplicar estilos CSS para mejorar la apariencia de los componentes. Puede utilizar bibliotecas como styled-components si lo desea.

### Opcionales:

Implementar la persistencia de datos utilizando `localStorage` para que las tareas persistan incluso después de recargar la página.

## División de tareas

- Juan:
    - `TaskList`.

- Gabriel:
    - `TaskItem`.

- Santiago:
    - `TaskForm`.

- Christian:
    - `localStorage`.

---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
