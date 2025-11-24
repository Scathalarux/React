# Ecommerce con React - Midudev

Proyecto de React realizado para la creación de un ecommerce, desarollado en el canal de Midudev ([vídeo](https://www.youtube.com/watch?v=B9tDYAZZxcE&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=6)).

## Pasos a realizar para la configuración base

1. Creación del proyecto e instalación de dependencias

- `npm create vite@latest (Framework: Vanilla, Variant: JS)`
- `npm install @vitejs/plugin-react -E`
- `npm install react react-dom -E`

2. Configuración de _vite.config.js_

```
    import {defineConfig} from 'vite';
    import react from '@vitejs/plugin-react';;

    export default defineConfig({
        plugins: [react()]
    });
```

3. Configuración de _main.js_

```
    import {createRoot} from 'react-dom/client'

    const root = createRoot(document.getElementById('app'));

    root.render(<h1>Hola mundo</h1>);
```

4. Activación de _JSX_

- Cambio en el nombre de _main.js_ por _main.jsx_
- Cambio en el punto de entrada de _index.html_
  > <script type="module" src="/src/main.jsx"></script>

5. Asegurarnos de que tenemos los datos mínimos en _package.json_

```
    {
      "name": "prueba-tecnica",
      "private": true,
      "version": "0.0.0",
      "type": "module",
      "scripts": {
        "dev": "vite",
        "build": "vite build",
        "lint": "eslint .",
        "preview": "vite preview"
      },
      "dependencies": {
        "@vitejs/plugin-react": "5.1.1",
        "react": "19.2.0",
        "react-dom": "19.2.0"
      }
    }
```

---

⚠️ **_No olvidar_** 👀

- Mucha atención a la ubicación en la que estamos
- Recomendable hacer uso de ESLint

---

## Datos de la prueba técnica

#### Prueba técnica para Juniors y Trainees de React en Live Coding

1. Ecommerce:

- Muestra una lista de productos que vienen de un JSON
- Añade un filtro por categoría
- Añade un filtro por precio

Haz uso de useContext para evitar pasar props innecesarias.

2. Shopping Cart

- Haz que se puedan añadir los productos a un carrito
- Haz que se puedan eliminar los productos de un carrito
- Haz que se puedan modificar la cantidad de productos del carrito
- Sincroniza los cambios del carrito con la lista de productos
- Guarda en un localStorage el carrito para que se recupere al recargar la página
