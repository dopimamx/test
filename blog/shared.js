// Dopima — shared header/footer for blog pages (v2.0)
// Cambios: menú hamburguesa mobile, index.html en lugar de "Landing Page.html",
// dominios .com, accesibilidad ARIA, prefers-reduced-motion.
(function(){
  const WA = 'https://wa.link/sw90lb';
  const isArticle = document.body.dataset.type === 'article';
  const base = isArticle ? '../' : '';

  const waIcon = `<svg class="wa-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.42 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/></svg>`;
  const fabIcon = `<svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.42 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/></svg>`;
  const burgerIcon = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>`;

  const homeHref = base + '../index.html'; // Landing principal
  const blogHref = base + 'index.html';

  const header = `
  <nav class="nav" aria-label="Principal">
    <div class="container nav-inner">
      <a href="${homeHref}" aria-label="Dopima — inicio"><img src="${base}../assets/dopima-logo-pink.png" alt="Dopima" class="logo" width="120" height="32" /></a>
      <div class="nav-links" id="navLinks">
        <a href="${homeHref}#como-funciona">Cómo funciona</a>
        <a href="${homeHref}#planes">Planes</a>
        <a href="${blogHref}" style="color:var(--pink);font-weight:600" aria-current="page">Blog</a>
        <a href="${homeHref}#faq">FAQ</a>
      </div>
      <a href="${WA}" target="_blank" rel="noopener" class="btn btn-wa nav-cta" aria-label="Hablar con Dopima por WhatsApp">
        ${waIcon}
        <span class="nav-cta-text">Hablar con Dopima</span>
      </a>
      <button class="nav-burger" id="navBurger" aria-label="Abrir menú" aria-expanded="false" aria-controls="navMobile" type="button">
        ${burgerIcon}
      </button>
    </div>
    <div class="nav-mobile" id="navMobile" role="menu" aria-hidden="true">
      <a href="${homeHref}#como-funciona" role="menuitem">Cómo funciona</a>
      <a href="${homeHref}#planes" role="menuitem">Planes</a>
      <a href="${blogHref}" role="menuitem">Blog</a>
      <a href="${homeHref}#faq" role="menuitem">FAQ</a>
    </div>
  </nav>`;

  const miniCta = `
  <section class="mini-cta" aria-labelledby="mini-cta-title">
    <div class="container-narrow">
      <h2 id="mini-cta-title">¿Listo para dejar de vender a pulso?</h2>
      <p>Hablemos de cómo se vería tu sistema comercial. Sin compromiso, respuesta en minutos.</p>
      <a href="${WA}" target="_blank" rel="noopener" class="btn btn-wa btn-lg">
        ${waIcon}
        Hablar por WhatsApp
      </a>
    </div>
  </section>`;

  const footer = `
  <footer role="contentinfo">
    <div class="container">
      <div class="foot-grid">
        <div>
          <a href="${homeHref}" aria-label="Dopima — inicio"><img src="${base}../assets/dopima-logo-white.png" alt="Dopima" class="foot-logo" width="120" height="32" /></a>
          <p class="foot-tagline">Tu sistema comercial llave en mano. Software, implementación y operación — en un solo paquete. México.</p>
        </div>
        <div>
          <h4>Navegación</h4>
          <ul>
            <li><a href="${homeHref}#como-funciona">Cómo funciona</a></li>
            <li><a href="${homeHref}#planes">Planes</a></li>
            <li><a href="${blogHref}">Blog</a></li>
            <li><a href="${homeHref}#faq">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li><a href="${base}../legal/terminos.html">Términos</a></li>
            <li><a href="${base}../legal/privacidad.html">Privacidad</a></li>
            <li><a href="${base}../legal/cookies.html">Cookies</a></li>
            <li><a href="${base}../legal/datos-personales.html">Datos personales</a></li>
          </ul>
        </div>
      </div>
      <div class="foot-bottom">
        <span>© 2026 DOPIMA · MÉXICO</span>
        <span>DOPIMA.COM · CIUDAD DE MÉXICO</span>
      </div>
    </div>
  </footer>`;

  const fab = `<a href="${WA}" target="_blank" rel="noopener" class="fab-wa" aria-label="Hablar por WhatsApp">${fabIcon}</a>`;

  // Inject
  const headerEl = document.getElementById('dopima-header');
  if (headerEl) headerEl.outerHTML = header;
  const cta = document.getElementById('dopima-mini-cta');
  if(cta) cta.outerHTML = miniCta;
  const footerEl = document.getElementById('dopima-footer');
  if (footerEl) footerEl.outerHTML = footer;
  document.body.insertAdjacentHTML('beforeend', fab);

  // Mobile menu toggle
  const navBurger = document.getElementById('navBurger');
  const navMobile = document.getElementById('navMobile');
  if (navBurger && navMobile) {
    const closeMenu = () => {
      navMobile.classList.remove('open');
      navBurger.setAttribute('aria-expanded','false');
      navMobile.setAttribute('aria-hidden','true');
      document.body.style.overflow = '';
    };
    navBurger.addEventListener('click', () => {
      const isOpen = navMobile.classList.toggle('open');
      navBurger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      navMobile.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    navMobile.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
    window.addEventListener('resize', () => { if (window.innerWidth > 820) closeMenu(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  }

  // Lazy-load images by default (perf + Web Vitals)
  document.querySelectorAll('img:not([loading])').forEach(img => {
    img.setAttribute('loading', 'lazy');
    img.setAttribute('decoding', 'async');
  });
})();
