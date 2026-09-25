# Tristan Lenzberg — Full-Stack Developer

Portfolio personal en React y TypeScript, publicado en https://react-cards-one-nu.vercel.app/.

## Contenido

- Presentación profesional, stack y acceso al CV.
- Siete proyectos con filtros por Full stack, Frontend y Data.
- Caso técnico de La Nación Cards: experiencia, arquitectura, decisiones y límites del prototipo.
- Biografía, formación y contacto.

## Desarrollo

```sh
npm ci
npm run dev
npm run build
npm run lint
npm run preview
```

## Estructura y edición

- `src/components/Home.tsx`: presentación y esquema de arquitectura.
- `src/components/Projects.tsx`: catálogo, filtros y caso destacado. Mantener descripciones basadas en funcionalidades verificables.
- `src/components/About.tsx`: perfil y tecnologías.
- `src/components/Contact.tsx` y `Navbar.tsx`: contacto y CV existente en Google Drive.
- `src/index.css`: estilos propios y breakpoints responsive; no depende de Bootstrap.
- `index.html`: metadatos, idioma y canonical de producción.
- `PORTFOLIO_REVIEW.md`: diagnóstico y recomendaciones de contenido.

## Verificación manual

- All muestra 7 proyectos; Full stack 2; Frontend 4; Data 1.
- Abrir el caso técnico y comprobar los enlaces de demo y código.
- Abrir el menú en pantallas estrechas, navegar por secciones y cerrar con Escape.
- Recorrer enlaces y filtros con teclado; comprobar foco visible y enlace de salto al contenido.
- Revisar escritorio y móvil, incluyendo anclas bajo el encabezado fijo.

## Publicación

Vercel debe compilar con `npm run build` y servir `dist`. Los cambios de una rama pueden revisarse mediante un Preview Deployment si la integración de GitHub está habilitada. La fusión de la propuesta a la rama de producción es un paso separado.
