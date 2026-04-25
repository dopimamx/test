# Dopima v3.0 — Sitio completo + 3 posts BOFU + logo limpio

Versión 3.0 · 25 abril 2026

## Qué cambia vs v2.0

### Logos transparentes (resuelve el "rectángulo negro")
- `assets/dopima-logo.png` — versión rosa con fondo transparente (701×190)
- `assets/dopima-logo-pink.png` — versión rosa de alta resolución (3001×795)
- `assets/dopima-logo-white.png` — versión blanca para fondos oscuros (3000×792)
- `assets/dopima-icon.png` — icono navy 256×256

### 3 posts BOFU integrados
- `blog/posts/11-cuanto-cuesta-crm-mexico.html` (3,627 palabras · pricing)
- `blog/posts/12-comparativa-crm-mid-market-mexico.html` (3,208 palabras · Monday vs Pipedrive vs Zoho)
- `blog/posts/13-whatsapp-business-api-crm-mexico.html` (3,143 palabras · WhatsApp guía decisión)
- 3 OG images únicas en `assets/og/`
- Cards añadidas a `blog/index.html` con cross-linking
- Sitemap, schemas y `llms.txt` actualizados

### Mejoras al landing
- **Dashboard del hero animado:** KPIs cuentan desde 0 (142, 38, 9), barras de progreso crecen con bounce, notificación "Cita agendada" pulsa
- **Sección de logos de clientes** entre Sectores y Testimonios (8 placeholders elegantes, listos para reemplazar con logos reales)
- **FAQ expandido a 15 preguntas** (cubriendo precio, tiempo, garantía, integraciones, primer contacto, ROI, etc.)
- FAQPage Schema actualizado con 15 Q&As → más probabilidad de aparecer en "People Also Ask" de Google

## Stats finales

- **19 archivos HTML** (landing + 13 posts + blog index + 4 legales)
- **45 bloques Schema.org JSON-LD** (todos válidos)
- **13 OG images** (1200×630 PNG + SVG fuente)
- **19 URLs en sitemap.xml** con prioridades 0.9 para BOFU
- **15 FAQ items** en landing con FAQPage schema
- **0 referencias rotas** validado automáticamente

## Deploy a GitHub Pages

### Si usas GitHub Desktop (recomendado)

1. Descomprime este zip en tu compu
2. Abre la carpeta local de tu repo `dopimamx/pruebas` con GitHub Desktop
3. **Borra todo el contenido** del repo local (con el explorador)
4. Copia el contenido de `dopima-final/` (los archivos sueltos, NO la carpeta) al repo local
5. GitHub Desktop detecta los cambios → escribe mensaje de commit → "Commit to main" → "Push origin"

La estructura debe quedar así en tu repo:
```
pruebas/
├── index.html          ← landing
├── README.md
├── robots.txt
├── sitemap.xml
├── llms.txt, llms-full.txt
├── .htaccess           (Apache, no aplica en GitHub Pages pero no estorba)
├── assets/
├── blog/
└── legal/
```

### Validación post-deploy

1. Abre `https://dopimamx.github.io/pruebas/` en ventana de incógnito
2. Verifica: logo rosa limpio en el header (sin parche oscuro), dashboard animado en el hero
3. Hacer scroll: ver sección "Clientes" con placeholders, FAQ con 15 preguntas
4. Abrir blog: ver 3 cards nuevas (post 11, 12, 13)
5. Abrir un post BOFU: tabla comparativa, schema visible

## Próximos pasos sugeridos

1. **Esta semana**: Cambiar dominio del repo a dopima.com (settings → custom domain)
2. **Esta semana**: Reclamar Google Business Profile (30 min, alto ROI)
3. **2-3 semanas**: Conseguir 6-8 logos reales de clientes para reemplazar los placeholders
4. **Próximo mes**: Crear 1 caso de éxito con datos reales (BOFU más alto)
5. **Quincenalmente**: Probar queries en ChatGPT/Claude/Perplexity y trackear si aparece Dopima

