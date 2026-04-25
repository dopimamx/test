# Dopima v2.0 — Sitio web completo con SEO Premium + GEO

Paquete completo actualizado: 24 de abril de 2026.

## Qué incluye este paquete

- **16 páginas HTML**: landing + blog (index + 10 posts) + 4 legales
- **11 imágenes Open Graph** únicas (1200×630 PNG + SVG fuente): 1 landing + 10 posts
- **36 bloques Schema.org JSON-LD** (Article, FAQ, Organization, Service, BreadcrumbList, ItemList, Blog, WebSite con SearchAction)
- **Archivos de descubrimiento**: sitemap.xml, robots.txt (con 20+ AI bots permitidos), llms.txt, llms-full.txt
- **Guía GEO**: `GEO-GUIA.md` con checklist y estrategia para que te citen ChatGPT, Claude, Perplexity
- **.htaccess optimizado**: HTTPS forzado, security headers, caching, redirects 301 desde nombres antiguos

---

## 🚨 IMPORTANTE antes de subir a producción

### 1. Renombrar en tu servidor
El landing original se llamaba `Landing Page.html` (con espacio) o `Landing_Page.html`. **Ahora se llama `index.html` en raíz**. Al subir:

```
BORRAR del servidor:
  Landing Page.html
  Landing_Page.html

SUBIR:
  index.html  (el nuevo, en la raíz)
```

Los redirects 301 del `.htaccess` manejan los enlaces antiguos que puedan existir en Google o redes sociales.

### 2. Verificar paths de assets
Los HTML referencian assets así:
- Landing: `assets/dopima-icon.png`, `assets/protection.js`
- Blog posts: `../blog.css`, `../shared.js`, `../../assets/dopima-icon.png`
- Legal: `legal.css`, `shared.js`, `../assets/protection.js`

Asegúrate que la estructura del servidor sea **exactamente** como este zip.

### 3. Google Search Console
Después de subir:
1. Ve a Search Console → propiedad dopima.com
2. Envía el nuevo sitemap: `https://dopima.com/sitemap.xml`
3. Solicita re-indexación de `https://dopima.com/` (el landing)
4. En "URL Inspection", revisa 2-3 posts del blog — verifica que los Schemas sean detectados

### 4. Validar Schemas
Pega estas URLs en el validador de Google:
- https://search.google.com/test/rich-results
- https://validator.schema.org/

URLs a validar (mínimo):
- `https://dopima.com/` (FAQPage + Organization + Service)
- `https://dopima.com/blog/posts/03-crm-roi-real.html` (Article + Breadcrumb)
- `https://dopima.com/blog/` (Blog + ItemList)

---

## Estructura de archivos

```
dopima/
├── .htaccess                   # Apache config (HTTPS, cache, redirects, security)
├── GEO-GUIA.md                 # Guía interna para GEO (no subir, o dejar bloqueada)
├── index.html                  # Landing principal
├── llms.txt                    # Índice corto para crawlers IA
├── llms-full.txt               # Índice expandido con datos citables
├── robots.txt                  # Permisos crawlers (incluye 20+ AI bots)
├── sitemap.xml                 # 16 URLs con lastmod + og:image por post
│
├── assets/
│   ├── deck-stage.js           # (existente)
│   ├── dopima-icon.png
│   ├── dopima-logo-pink.png
│   ├── dopima-logo.png
│   ├── dopima-logo-white.png
│   ├── dopima-og.png           # OG landing 1200×630
│   ├── dopima-og.svg           # Fuente editable
│   ├── protection.js
│   └── og/                     # 10 imágenes OG por post
│       ├── 01-por-que-sistema-comercial.png
│       ├── 01-por-que-sistema-comercial.svg
│       └── ... (10 posts × 2 formatos)
│
├── blog/
│   ├── blog.css                # Estilos del blog (incluye mobile menu, breadcrumbs, related)
│   ├── index.html              # Index del blog (Blog + ItemList schema)
│   ├── shared.js               # Header + footer + mobile menu para el blog
│   └── posts/
│       ├── 01-por-que-sistema-comercial.html
│       ├── 02-cuanto-te-cuesta-no-dar-seguimiento.html
│       ├── 03-crm-roi-real.html
│       ├── 04-velocidad-respuesta-leads.html
│       ├── 05-whatsapp-canal-ventas.html
│       ├── 06-automatizacion-no-reemplaza.html
│       ├── 07-cinco-senales-necesitas-crm.html
│       ├── 08-excel-a-crm-transicion.html
│       ├── 09-kpis-comerciales.html
│       └── 10-vendedor-silencioso.html
│
└── legal/
    ├── cookies.html
    ├── datos-personales.html
    ├── legal.css
    ├── privacidad.html
    ├── shared.js
    └── terminos.html
```

---

## Cambios principales vs versión anterior

### SEO
- **+36 bloques Schema.org** (antes ~16): Article con wordCount, Breadcrumb en cada post, FAQPage, Service con 3 Offers, Organization con SearchAction, Blog + ItemList, WebPage en legales.
- **Imágenes OG únicas** por post (antes todos usaban el OG genérico).
- **Metadata completa**: `article:published_time`, `article:modified_time`, `article:section`, keywords, geo.region.
- **dateModified separado de datePublished** (señal de frescura para Google).

### Mobile
- **Menú hamburguesa funcional** en TODAS las páginas (blog, posts, legales) — antes solo en landing.
- **H1 responsive** sin desbordes (`clamp` + overrides a 480px y 380px + `min-width:0` en grids).
- **`prefers-reduced-motion`** respetado en todo el sitio.
- **Focus visible** para navegación por teclado.

### GEO (Generative Engine Optimization)
- `llms.txt` con resumen breve por post para citation.
- `llms-full.txt` con datos sustantivos de cada post (números, fuentes, métodos).
- `robots.txt` explícitamente permite GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Mistral-AI, y 14 más.
- Meta `ai-content-declaration: human-authored`.

### UX blog
- **Breadcrumbs visuales** en cada post (Inicio › Blog › Categoría › Título).
- **TOC plegable** automático en posts ≥9 min.
- **CTA contextual** por post (ej. en post de WhatsApp → "Quiero WhatsApp integrado a mi CRM").
- **Related posts** al final de cada artículo (3 sugerencias inteligentes por tema).

### Consistencia
- **Todo `.com`** — se removieron las referencias residuales a `.co` en páginas legales.
- **Solo México** — páginas legales ya no mencionan Colombia, Chile ni Santiago/Bogotá.
- **Correos corregidos**: `privacidad@dopima.com`, `datos@dopima.com`, `legal@dopima.com`, `hola@dopima.com`.

---

## Próximas recomendaciones

Según la guía GEO (ver `GEO-GUIA.md`), los próximos pasos de mayor impacto:

1. **Crear 3-5 posts BOFU** para aparecer en queries comerciales:
   - Comparativa CRMs PyME México 2026
   - Cuánto cuesta implementar un CRM en México
   - Cómo conectar WhatsApp Business API al CRM
   - Caso de éxito con datos reales
   - Dopima vs alternativas (honestidad + positioning)

2. **Reclamar perfiles** en G2, Crunchbase, LinkedIn Company, Google Business Profile.

3. **Conseguir menciones** en Forbes México, El Economista, Expansión, Bloomberg Línea — estos son los outlets que las IAs ponderan para respuestas comerciales en LATAM.

4. **Medir quincenalmente** si apareces al hacer estas queries en ChatGPT/Claude/Perplexity:
   - "¿Cuál es el mejor CRM para una PyME en México?"
   - "¿Cuánto cuesta implementar un CRM en México?"
   - "¿Qué CRM funciona mejor con WhatsApp Business?"

Si no apareces, ese es el próximo post.

---

## Contacto técnico

Si algo en el código no se comporta como esperabas, los errores más probables:
- **Fuentes de Google no cargan**: verificar que el servidor permita conexiones a `fonts.googleapis.com`.
- **OG images no se ven en redes sociales**: Facebook/LinkedIn cachean. Usa el Facebook Debugger para forzar refresh.
- **Hamburguesa no aparece**: verificar que `shared.js` cargue (ver consola del navegador).

Versión 2.0 · 24 abril 2026
