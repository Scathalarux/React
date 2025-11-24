# Ecommerce con React - Midudev

Proyecto de React realizado para la creación de un ecommerce, desarollado en el canal de Midudev ([vídeo](https://www.youtube.com/watch?v=B9tDYAZZxcE&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=6)).

## Pasos a realizar para la configuración base

1. Creación del proyecto e instalación de dependencias

- `npm create vite@latest (Framework: React, Variant: JS)`
- `npm install`
- `npm run dev`


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
