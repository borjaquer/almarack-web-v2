/* ALMAR-RACK · comportamiento común (sin dependencias) */
(function () {
  'use strict';

  /* ---------- nav sticky + drawer ---------- */
  var nav = document.getElementById('nav');
  function onScroll() { if (nav) nav.classList.toggle('is-stuck', window.scrollY > 6); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  var burger = document.getElementById('burger'),
      drawer = document.getElementById('drawer'),
      scrim = document.getElementById('scrim'),
      closeBtn = document.getElementById('drawerClose');
  function setDrawer(open) {
    if (!drawer) return;
    drawer.setAttribute('data-open', String(open));
    scrim.setAttribute('data-open', String(open));
    drawer.setAttribute('aria-hidden', String(!open));
    burger.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
    if (open) { var first = drawer.querySelector('a,button'); if (first) first.focus(); }
    else if (burger) burger.focus();
  }
  if (burger) burger.addEventListener('click', function () { setDrawer(true); });
  if (closeBtn) closeBtn.addEventListener('click', function () { setDrawer(false); });
  if (scrim) scrim.addEventListener('click', function () { setDrawer(false); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      setDrawer(false);
      document.querySelectorAll('.nav__links details[open]').forEach(function (d) { d.removeAttribute('open'); });
    }
  });

  /* desktop dropdowns: only one open, close on outside click */
  var dds = Array.prototype.slice.call(document.querySelectorAll('.nav__links details'));
  dds.forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) dds.forEach(function (o) { if (o !== d) o.removeAttribute('open'); });
    });
  });
  document.addEventListener('click', function (e) {
    dds.forEach(function (d) { if (d.open && !d.contains(e.target)) d.removeAttribute('open'); });
  });

  /* ---------- scroll reveal (one grammar, once) ---------- */
  var rv = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window && rv.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });
    rv.forEach(function (el) { io.observe(el); });
  } else {
    rv.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- hero video: lazy, pause offscreen, never on mobile/save-data ---------- */
  var vid = document.getElementById('heroVid');
  if (vid) {
    var isMobile = window.innerWidth < 768,
        saveData = !!(navigator.connection && navigator.connection.saveData),
        reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!(isMobile || saveData || reduced)) {
      var sources = vid.querySelectorAll('source[data-src]'), loaded = false;
      var play = function () {
        if (!loaded && sources.length) { sources.forEach(function (s) { s.src = s.getAttribute('data-src'); }); vid.load(); loaded = true; }
        var p = vid.play(); if (p && p.catch) p.catch(function () {});
      };
      if ('IntersectionObserver' in window) {
        new IntersectionObserver(function (entries) {
          entries.forEach(function (en) { if (en.isIntersecting) play(); else if (loaded) vid.pause(); });
        }, { rootMargin: '120px' }).observe(vid);
      } else play();
    }
  }

  /* ---------- semáforo UNE-EN 15635: medidor interactivo ---------- */
  var meter = document.getElementById('meter');
  if (meter) {
    var input = meter.querySelector('.ruler__input'),
        needle = meter.querySelector('.ruler__needle'),
        card = meter.querySelector('.meter__card'),
        picks = meter.querySelectorAll('.meter__pick button');
    var LEVELS = {
      verde: {
        name: 'Nivel verde · Daño leve',
        desc: 'Deformación por debajo del límite de la norma (3 mm en el plano del bastidor o 5 mm en el plano transversal, medido con regla de 1 m). El puntal conserva su capacidad portante nominal.',
        accion: 'Registrar en el libro del PRSES y revisar en la próxima inspección periódica.',
        plazo: 'Seguimiento a 12 meses',
        carga: 'Se mantiene la carga nominal'
      },
      ambar: {
        name: 'Nivel ámbar · Riesgo peligroso',
        desc: 'La deformación supera el límite verde pero no llega al doble. El acero ha salido de su rango elástico y el coeficiente de seguridad está comprometido.',
        accion: 'Reparar o sustituir el elemento. Una vez descargado el módulo, queda prohibido volver a cargarlo hasta la reparación.',
        plazo: 'Máximo 4 semanas (UNE-EN 15635)',
        carga: 'No añadir carga; señalizar'
      },
      rojo: {
        name: 'Nivel rojo · Daño crítico',
        desc: 'La deformación duplica el límite verde, o hay cizalladura, rotura de soldadura o diagonales dobladas. Riesgo real de colapso en cadena.',
        accion: 'Descargar de inmediato los niveles afectados, balizar el pasillo y reparar antes de volver a usar el módulo.',
        plazo: 'Inmediato',
        carga: 'Descarga obligatoria'
      }
    };
    function level(mm) { return mm < 3 ? 'verde' : mm < 6 ? 'ambar' : 'rojo'; }
    function render() {
      var mm = parseFloat(input.value), s = level(mm), L = LEVELS[s];
      var pct = (mm / parseFloat(input.max)) * 100;
      needle.style.left = pct + '%';
      needle.setAttribute('data-v', mm.toFixed(1).replace('.', ',') + ' mm');
      card.setAttribute('data-s', s);
      card.querySelector('.state').className = 'state state--' + s;
      card.querySelector('.state').textContent = s === 'verde' ? 'Verde' : s === 'ambar' ? 'Ámbar' : 'Rojo';
      card.querySelector('h3').firstChild.textContent = L.name + ' ';
      card.querySelector('.m-desc').textContent = L.desc;
      card.querySelector('.m-accion').textContent = L.accion;
      card.querySelector('.m-plazo').textContent = L.plazo;
      card.querySelector('.m-carga').textContent = L.carga;
      input.setAttribute('aria-valuetext', mm.toFixed(1) + ' milímetros, ' + L.name);
    }
    input.addEventListener('input', render);
    picks.forEach(function (b) {
      b.addEventListener('click', function () { input.value = b.getAttribute('data-mm'); render(); });
    });
    render();
  }

  var reel = document.getElementById('reel');
  if (reel) { document.querySelectorAll('[data-reel]').forEach(function (b) { b.addEventListener('click', function () { var w = reel.querySelector('figure').getBoundingClientRect().width + 16; reel.scrollBy({ left: w * parseInt(b.getAttribute('data-reel'), 10), behavior: 'smooth' }); }); }); }
  document.querySelectorAll('.rv-l').forEach(function (el) { requestAnimationFrame(function () { el.classList.add('in'); }); });

  /* ---------- current year ---------- */
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
})();
