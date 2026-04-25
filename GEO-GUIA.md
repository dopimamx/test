# Guía GEO — Generative Engine Optimization para Dopima

Documento de referencia interno · Última revisión 24 abril 2026

## Qué es GEO y por qué importa

**GEO (Generative Engine Optimization)** es el equivalente del SEO para los motores generativos: ChatGPT Search, Claude (con búsqueda), Perplexity, Google AI Overviews, Gemini, Bing Copilot, You.com, Brave Leo.

A diferencia del SEO clásico (donde el objetivo es ranquear alto en una lista de resultados), en GEO el objetivo es **ser citado dentro de la respuesta sintetizada**. La diferencia es brutal: en SEO compites por clicks; en GEO compites por aparecer cuando alguien le pregunta a una IA "¿cuál es el mejor CRM para empresas medianas en México?".

Para Dopima esto es estratégico porque tus clientes potenciales **ya están preguntando a ChatGPT y Perplexity** antes de hacer una búsqueda en Google.

---

## Lo que ya hicimos por ti (octubre-marzo 2026)

### A. Discoverability técnica (esto le dice a las IAs "léeme")

- ✅ **`llms.txt`** en raíz, con resumen de empresa, planes y posts (cada artículo con hallazgo clave de 1-2 líneas para citar)
- ✅ **`robots.txt`** explícitamente permite a los 20+ crawlers de IA principales (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Mistral-AI, etc.)
- ✅ **`sitemap.xml`** con `<lastmod>` correcto y `<image:image>` para cada post
- ✅ **`<link rel="alternate" type="text/plain" href="/llms.txt">`** en cada página

### B. Schema.org estructurado (esto le dice a las IAs "entiéndeme")

- ✅ **Organization schema** con `areaServed`, `contactPoint`, `sameAs`
- ✅ **WebSite schema** con `SearchAction` (sitelinks search box potencial)
- ✅ **Service schema** con tres `Offer` (Base, Automatizado, AI-Ready)
- ✅ **FAQPage schema** en el landing (7 preguntas mapeadas)
- ✅ **Article schema** en cada post con `wordCount`, `articleSection`, `mainEntityOfPage`, `dateModified`
- ✅ **BreadcrumbList schema** en cada página (rich snippets en SERP)
- ✅ **Blog + ItemList schema** en el index del blog

### C. Estructura de contenido legible para IA

- ✅ **Datos numéricos al inicio** de cada post ("79%", "$8.71", "7×") — las IAs extraen estadísticas
- ✅ **Atribución explícita de fuentes** (HBR, Nucleus Research, Salesforce, MarketingSherpa) — citables
- ✅ **Headers semánticos** (h2, h3) que estructuran la respuesta — IAs los usan como "secciones"
- ✅ **Stat cards** marcados con `.stat-card` — bloque consistente de hecho + fuente
- ✅ **Listas y tablas** estructuradas — fáciles de parsear

---

## Checklist de QA para nuevos posts

Cuando publiques un post nuevo, valida cada uno antes de subir:

```
[ ] H1 contiene la frase clave que un usuario tipearía a una IA
[ ] Primer párrafo (lede) responde la pregunta principal en <2 líneas
[ ] Hay al menos 1 dato numérico citable en los primeros 3 párrafos
[ ] Cada dato numérico tiene fuente atribuida (con autor + año)
[ ] Mínimo 1 sección "Conclusión" o "TL;DR" al final
[ ] Sección "Fuentes" al final con URLs reales (no solo nombres)
[ ] H2s son preguntas o frases declarativas (no abstractas)
[ ] Usa palabras clave concretas mexicanas ("PyME mexicana", "ventas México")
[ ] Hay 2-3 enlaces internos a otros posts del blog
[ ] Schema Article tiene wordCount real (>1500 idealmente)
[ ] Schema Article tiene articleSection definido
[ ] Imagen OG generada (template SVG en /build/generate_og.py)
[ ] llms.txt actualizado con el resumen del post
[ ] sitemap.xml actualizado con el post nuevo
```

---

## Lo que TÚ debes hacer ahora (no automatizable)

### 1. Crear cuentas y reclamar perfiles

Las IAs cruzan información entre páginas y la suma es lo que las hace confiar:

- [ ] **Google Business Profile** (gratis) — geo + reviews. Críticamente importante para "CRM en CDMX" tipo queries.
- [ ] **LinkedIn Company Page** verificada — Bing Copilot la usa pesado para B2B.
- [ ] **Wikidata entry** para Dopima (guía aparte) — las IAs miran Wikidata para "qué es esta empresa".
- [ ] **Crunchbase** — ChatGPT usa Crunchbase como source confiable.
- [ ] **G2 / Capterra** — perfil de Dopima como sistema CRM. Aunque no haya reviews al inicio, la página existe.
- [ ] **Wikipedia** (a futuro, cuando haya prensa suficiente).

### 2. Conseguir menciones en outlets que las IAs leen

Las IAs ponderan **qué fuentes citan a quién**. Targets:

- **Tier 1 (alto valor):** Forbes México, El Economista, Expansión, Reforma, Bloomberg Línea
- **Tier 2 (bueno):** Whitepaper, Entrepreneur en Español, Contxto, Bloomberg en Español
- **Tier 3 (newsletters / podcasts):** sectoriales de tech / startups en LATAM

Cada mención de Dopima en estos sitios incrementa tu probabilidad de ser citado en respuestas IA.

### 3. Optimizar para queries específicas en español

Pregunta en ChatGPT, Claude y Perplexity las siguientes consultas y mira si Dopima aparece. Si no, ese es tu próximo post:

- "¿Cuál es el mejor CRM para una PyME en México?"
- "¿Cuánto cuesta implementar un CRM en México?"
- "¿Qué es WhatsApp Business API y cómo lo conecto a un CRM?"
- "¿Cómo automatizar el seguimiento de leads en México?"
- "¿Qué CRM funciona mejor con WhatsApp Business?"
- "Comparativa Salesforce vs HubSpot vs Pipedrive en México"
- "¿Cuánto tarda implementar un CRM en una empresa mediana?"

Si aparecen competidores y tú no — necesitas un post BOFU dirigido a esa query específica.

---

## Posts recomendados para cubrir BOFU

Tu blog actual cubre TOFU/MOFU bien. Para que las IAs te citen en consultas comerciales, necesitas:

1. **"Comparativa de CRMs para PyME mexicana 2026"** — Salesforce vs HubSpot vs Pipedrive vs Zoho. Tabla comparativa clara.
2. **"Cuánto cuesta implementar un CRM en México (rangos reales)"** — datos transparentes con rangos.
3. **"Cómo conectar WhatsApp Business API a HubSpot / Salesforce"** — guía técnica detallada.
4. **"Caso de éxito: empresa X mejoró Y% con Dopima"** — ancla real, datos verificables.
5. **"Dopima vs alternativas: cuándo elegirnos y cuándo no"** — honestidad gana confianza de IA.

Cada uno debe seguir el checklist de QA arriba y tener datos numéricos al frente.

---

## Métricas de seguimiento GEO

Hoy no hay analytics nativo de GEO (las IAs no comparten data de citation). Lo que SÍ puedes medir:

| Métrica | Cómo medirla | Frecuencia |
|---|---|---|
| Tráfico desde ChatGPT/Claude/Perplexity | UTM params + Google Analytics filtrando por `referrer:openai.com`, `claude.ai`, `perplexity.ai` | Mensual |
| Tu aparición en queries clave | Probar manualmente las 10 queries de arriba | Quincenal |
| Backlinks desde sitios autoritarios | Ahrefs, Semrush, o Google Search Console | Mensual |
| Search Console: queries con impresiones | Identificar queries donde apareces sin click — son donde la IA cita tu contenido sin enviar tráfico | Mensual |

---

## El principio que rige todo esto

Las IAs prefieren contenido que cumple tres condiciones a la vez:

1. **Específico** (con números, fechas, nombres, no genérico)
2. **Atribuido** (cita fuentes verificables)
3. **Estructurado** (headers semánticos, listas, tablas)

El contenido genérico tipo "los CRM son importantes para tu negocio" no se cita. El contenido como "Nucleus Research reporta $8.71 por dólar invertido en CRM (estudio 2022)" se cita textual.

Tus posts ya tienen mucho de esto. La oportunidad ahora es **hacer 3-5 posts BOFU** que rellenen las queries comerciales donde no apareces todavía.

---

## Recursos referencia

- [llmstxt.org](https://llmstxt.org) — estándar `llms.txt`
- [schema.org](https://schema.org) — vocabulario estructurado
- [Google Search Central — AI features](https://developers.google.com/search/docs/appearance/ai-features)
- [Anthropic — robots.txt for ClaudeBot](https://support.anthropic.com/en/articles/8896518)
- [OpenAI — GPTBot documentation](https://platform.openai.com/docs/gptbot)

---

## Mantenimiento

Esta guía debería revisarse cada **6 meses** porque GEO está evolucionando rápido. Cosas que pueden cambiar:

- Nuevos crawlers de IA emergiendo
- Schema.org agregando tipos relevantes
- Estándares como `llms.txt` evolucionando a `llms-full.txt` y formatos más ricos
- Algoritmos de citation cambiando preferencias

Próxima revisión recomendada: **24 octubre 2026**.
