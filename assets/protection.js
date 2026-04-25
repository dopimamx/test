/* Dopima — protección client-side
   Bloquea: click derecho, selección de texto, drag, shortcuts de dev tools,
   copia de imágenes, impresión no autorizada. No es seguridad real (todo
   cliente es visible si alguien quiere), pero desincentiva el 99% de intentos. */
(function(){
  'use strict';

  // Permitir selección/copia solo en ciertos elementos (artículos del blog)
  const allowSelect = document.body.dataset.allowSelect === 'true';

  // 1. Click derecho
  document.addEventListener('contextmenu', function(e){
    e.preventDefault();
    return false;
  }, false);

  // 2. Arrastrar imágenes
  document.addEventListener('dragstart', function(e){
    if(e.target.tagName === 'IMG') e.preventDefault();
  }, false);

  // 3. Selección de texto (opcional)
  if(!allowSelect){
    document.addEventListener('selectstart', function(e){
      // dejar pasar en inputs/textarea
      const t = e.target;
      if(t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
      e.preventDefault();
      return false;
    }, false);
  }

  // 4. Shortcuts de DevTools y "Ver código fuente"
  document.addEventListener('keydown', function(e){
    const k = (e.key || '').toLowerCase();
    // F12
    if(e.key === 'F12'){ e.preventDefault(); return false; }
    // Ctrl+U (ver código fuente)
    if(e.ctrlKey && k === 'u'){ e.preventDefault(); return false; }
    // Ctrl+S (guardar)
    if(e.ctrlKey && k === 's'){ e.preventDefault(); return false; }
    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (DevTools)
    if((e.ctrlKey && e.shiftKey) && (k === 'i' || k === 'j' || k === 'c')){
      e.preventDefault(); return false;
    }
    // Cmd+Opt+I / Cmd+Opt+J (Mac DevTools)
    if(e.metaKey && e.altKey && (k === 'i' || k === 'j' || k === 'c')){
      e.preventDefault(); return false;
    }
  }, false);

  // 5. CSS: bloquear selección y copia visual
  if(!allowSelect){
    const s = document.createElement('style');
    s.textContent = `
      body { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }
      input, textarea, [contenteditable="true"] { -webkit-user-select: text; user-select: text; }
      img { -webkit-user-drag: none; user-drag: none; pointer-events: auto; }
    `;
    document.head.appendChild(s);
  }

  // 6. Limpiar console (disuade curiosos)
  if(window.console && typeof console.clear === 'function'){
    setTimeout(function(){
      try{
        console.clear();
        console.log('%cDopima', 'color:#F54E7A;font-size:32px;font-weight:700;font-family:sans-serif');
        console.log('%cSi eres desarrollador y quieres trabajar con nosotros, escríbenos: https://wa.link/sw90lb', 'color:#3E2A33;font-size:13px');
      }catch(_){}
    }, 500);
  }
})();
