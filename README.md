# Task API - Frontend

Frontend de una aplicación fullstack para gestionar tareas. Este repositorio contiene la interfaz de usuario construida con React y Vite.

## 📋 Descripción

Task API es una aplicación web que permite crear, leer, actualizar y eliminar tareas (CRUD). Este repositorio contiene únicamente el **frontend** de la aplicación.

El **backend** se encuentra en un repositorio separado y proporciona los endpoints necesarios para gestionar las tareas.

## 🚀 Tecnologías

- **React** - Librería para construir interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **JavaScript** - Lenguaje de programación
- **CSS** - Estilos de la aplicación

## 📦 Instalación

### Requisitos previos
- Node.js (versión 14 o superior)
- npm o yarn

### Pasos

1. Clonar el repositorio
```bash
git clone <url-frontend>
cd task-api-frontend
```

2. Instalar dependencias
```bash
npm install
```

3. Configurar variables de entorno (si es necesario)
```bash
cp .env.example .env
```

## ▶️ Uso

### Desarrollo
```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:5173`

### Construcción para producción
```bash
npm run build
```

### Vista previa de la construcción
```bash
npm run preview
```

## 🔗 Integración con Backend

Este frontend se conecta a una API backend. Asegúrate de que:

1. El servidor backend esté ejecutándose
2. La URL del API backend esté configurada correctamente en las variables de entorno o constantes de la aplicación

Para más información sobre el backend, consulta su repositorio correspondiente.

## 📁 Estructura del Proyecto

```
src/
├── App.jsx           # Componente principal
├── App.css           # Estilos globales
├── main.jsx          # Punto de entrada
├── index.css         # Estilos base
├── assets/           # Recursos estáticos
└── utils/            # Utilidades y constantes
```

## 📝 Funcionalidades

- Ver todas las tareas
- Crear nuevas tareas
- Actualizar tareas existentes
- Eliminar tareas
- Filtrar y buscar tareas

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes, abre un issue primero para discutir los cambios propuestos.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.