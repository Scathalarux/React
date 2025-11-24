# Prueba técnica React 2 - Midudev

Proyecto de React realizado para la consecución de pasos indicada en una prueba técnica aportada en el canal de Midudev ([vídeo](https://www.youtube.com/watch?v=GOEiMwDJ3lc&list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29&index=5)).

## Pasos a realizar para la configuración base

1. Creación del proyecto e instalación de dependencias

- `npm create vite@latest (Framework: React, Variant: JS + SWC)`
- `npm install`
- `npm run dev`

---

⚠️ **_No olvidar_** 👀

- Mucha atención a la ubicación en la que estamos
- Recomendable hacer uso de ESLint

---

## Datos de la prueba técnica

#### Prueba técnica para Juniors y Trainees de React en Live Coding

1. APIs:

- https://www.omdbapi.com/
- API_KEY: 4287ad07

2. Enunciado

   > Creación de una aplicación para buscar películas

3. Requerimientos

- Mostrar un input para buscar la película y un botón para buscar
- Listar las películas encontradas y mostrar el título, año y póster
- Las películas deben mostrarse en un grid responsive

4. Primera iteración

- Evitar que se haga la misma búsqueda 2 veces seguidas
- Hacer que la búsqueda sea automática al escribir
- Evitar que se haga la búsqueda continuamente al escribir (debounce)
