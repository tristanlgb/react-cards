# Portfolio en React

Sitio personal de presentación profesional construido con React y TypeScript. Reúne información personal, habilidades, proyectos, testimonios y datos de contacto en una landing page responsiva.

## Secciones

- Inicio con presentación principal.
- Sobre mí.
- Habilidades técnicas.
- Proyectos destacados mediante tarjetas.
- Testimonios.
- Contacto.
- Navegación y pie de página reutilizables.

## Stack

- React 19
- TypeScript
- Vite
- Bootstrap
- CSS
- ESLint

## Organización

La aplicación utiliza una estructura basada en componentes dentro de `src/components/`. Cada sección de la landing es independiente y `src/App.tsx` las compone en una única experiencia de navegación.

## Ejecución local

```bash
npm install
npm run dev
```

Abrir la URL indicada por Vite, normalmente `http://localhost:5173`.

## Comandos

```bash
npm run build    # compila TypeScript y genera producción
npm run lint     # ejecuta el análisis estático
npm run preview  # previsualiza el build
```

## Personalización

Los textos y proyectos pueden modificarse directamente en los componentes correspondientes. Los estilos globales y por sección se encuentran en los archivos CSS del proyecto.

> Proyecto de portfolio personal y práctica de composición de interfaces con React.