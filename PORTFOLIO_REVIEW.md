# Revisión del portfolio

## Diagnóstico

- La portada priorizaba una propuesta genérica; el rol full stack y las tecnologías eran secundarios.
- La biografía aparecía antes de la evidencia técnica. La biblioteca no incluía La Nación Cards.
- Las fichas enumeraban funciones, pero no decisiones de arquitectura, límites o verificación.
- Bootstrap se importaba después del CSS propio: en el sitio publicado se veían enlaces azules y subrayados ajenos al diseño.
- Una foto genérica de código ocupaba espacio sin aportar evidencia del trabajo.
- Faltaban metadatos sociales, destinos de enlace accesibles específicos y compensación del encabezado fijo al navegar por anclas.

## Cambios

- Rol técnico explícito, stack y CV visibles en la portada.
- Diagrama HTML accesible de la arquitectura de La Nación Cards.
- Proyectos antes de la biografía; siete proyectos y filtros por especialidad.
- Caso destacado con demo y repositorio, integración de proveedores, caché, manejo de fallos y límites del prototipo.
- Contacto orientado a contratación, conservando email, LinkedIn y CV existentes.
- Eliminación de las importaciones y dependencia Bootstrap; estilos propios, foco visible, Escape en menú móvil y reducción de movimiento.
- Título, descripción, canonical y Open Graph; año del footer dinámico.

## Recomendaciones siguientes

1. Incorporar experiencia laboral verificable, contribución personal y resultados medidos cuando estén disponibles. No se inventaron clientes, métricas ni años de experiencia.
2. Agregar capturas reales y casos técnicos de Commerce y TaskFlow, incluyendo cómo ejecutar sus pruebas y sus límites operativos.
3. Confirmar que el CV público esté actualizado, sea accesible sin login y coincida con el perfil de LinkedIn.
4. Si buscás mercado local e internacional, preparar una versión español/inglés completa.

## Fuentes

- Portfolio existente: https://react-cards-one-nu.vercel.app/
- Código: https://github.com/tristanlgb/react-cards
- Caso técnico: README, api/news.ts, server/newsHandler.ts y server/newsProvider.ts de https://github.com/tristanlgb/lanacioncards
- Demo verificada: https://lanacioncards.vercel.app/

## Validación de esta propuesta

- Build de producción y ESLint completados correctamente.
- Navegador: filtros (7 / 2 / 4 / 1), apertura de detalles y cierre de menú con Escape comprobados; sin errores de consola observados.
- Inspección visual en el panel disponible (662 px de viewport). El navegador integrado no aplicó los tamaños solicitados; queda pendiente verificar 390 px y escritorio amplio en un navegador externo.
- `npm audit --omit=dev`: 0 vulnerabilidades. La auditoría completa detecta 5 avisos preexistentes en dependencias de desarrollo (1 moderado y 4 altos); su actualización queda fuera de este cambio de presentación.
- Se retiran del índice Git los archivos generados de `dist`, que ya estaban en `.gitignore`. Vercel debe generar el build desde el código fuente.
