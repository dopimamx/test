# Dopima — Sitio web

Sitio público de Dopima, Partner Oficial Clientify para México y LATAM.

🌐 **Producción:** https://dopima.com

---

## Stack

Sitio 100% estático. Sin build, sin dependencias, sin frameworks.

- **HTML5** + **CSS3** vanilla (sin Tailwind, sin SASS)
- **JavaScript** mínimo (nav móvil + FAQ accordion)
- **SVG** inline para mockups y avatares (todos originales)
- **Tipografías:** Bricolage Grotesque + DM Sans + JetBrains Mono (Google Fonts)

## Estructura

```
.
├── index.html              # Página principal
├── llms.txt                # Índice para LLMs (GEO)
├── sitemap.xml             # Sitemap para Google
├── robots.txt              # Robots
├── assets/
│   ├── dopima-logo.png     # Logos
│   ├── dopima-icon.png
│   └── avatars/            # 12 avatares SVG por industria
├── industrias/             # 12 páginas de industria
│   ├── pymes.html
│   ├── inmobiliarias.html
│   ├── salud-belleza.html
│   ├── educacion.html
│   ├── solar-energia.html
│   ├── automotriz.html
│   ├── servicios-profesionales.html
│   ├── industria-manufactura.html
│   ├── it-saas.html
│   ├── agencias-marketing.html
│   ├── agencias-viajes.html
│   └── opticas.html
├── blog/                   # 13 posts + índice
│   ├── index.html
│   └── posts/
└── legal/                  # Documentos legales
    ├── terminos.html
    ├── privacidad.html
    ├── cookies.html
    └── datos-personales.html
```

## Deploy

Cualquier hosting estático. Recomendado: **Cloudflare Pages** (gratis, CDN global, deploy desde Git).

### Cloudflare Pages

1. Push este repo a GitHub.
2. Cloudflare Dashboard → Pages → Create a project → Connect to Git.
3. Selecciona el repo. Build settings:
   - **Build command:** *(dejar vacío)*
   - **Build output directory:** `/`
4. Deploy. En 1–2 minutos está en línea.
5. Settings → Custom domains → Add `dopima.com` (configura el DNS según las instrucciones).

### Alternativas equivalentes

- **Netlify:** drag-and-drop o conectar Git. Output: raíz.
- **Vercel:** importar repo de GitHub. Framework preset: "Other".
- **GitHub Pages:** Settings → Pages → Branch: `main` → Save.

## Desarrollo local

```bash
# Servidor estático local con Python
python3 -m http.server 8080
# → http://localhost:8080
```

O cualquier server estático: `npx serve`, `live-server`, etc.

## Edición

Es HTML/CSS puro. Edita los archivos directamente:

- **Cambiar copy del hero** → `index.html` línea ~790
- **Modificar planes** → `index.html` línea ~1040 (busca `<!-- PLANES -->`)
- **Editar página de industria** → `industrias/[slug].html`
- **Cambiar logos** → reemplaza archivos en `assets/`
- **Color principal** → variable `--pink: #F54E7A` en cada `<style>`

## SEO / GEO

- ✅ Open Graph + Twitter Cards
- ✅ JSON-LD (Organization, WebSite, Service, FAQPage, BreadcrumbList)
- ✅ `llms.txt` para descubrimiento por LLMs
- ✅ Sitemap.xml con las 30+ páginas
- ✅ Canonical URLs
- ✅ Mobile responsive

## Licencia

© Dopima · Todos los derechos reservados.
