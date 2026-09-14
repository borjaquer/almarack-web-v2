'use strict';
const fs = require('fs');
const path = require('path');

const SITE = {
  url: 'https://almarack.com',
  name: 'Almar-Rack',
  legal: 'Almar-Rack S.L.',
  tel: '+34660823482',
  telFmt: '660 82 34 82',
  tel2: '+34949007051',
  tel2Fmt: '949 00 70 51',
  email: 'info@almarack.com',
  wa: 'https://wa.me/34660823482?text=' + encodeURIComponent('Hola Almar-Rack, necesito valoración para mis estanterías. '),
  waUrgente: 'https://wa.me/34660823482?text=' + encodeURIComponent('URGENTE: tengo un puntal golpeado en mi almacén. '),
  addr: 'C/ Alvarfáñez de Minaya 1B',
  cp: '19001',
  city: 'Guadalajara',
  hours: 'Lunes a domingo, 8:00–20:00',
  contact: 'Diego Núñez Narváez',
  maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Almar-Rack, C/ Alvarfáñez de Minaya 1B, 19001 Guadalajara'),
};

const MANIFEST = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'assets', 'img', 'manifest.json'), 'utf8'));

/* ---------- helpers ---------- */
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const stripTags = (s) => String(s).replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

const ICON = {
  wa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2m0 18.15c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.69 8.24-8.23 8.24m4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28"/></svg>',
  tel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s7-7.1 7-12a7 7 0 1 0-14 0c0 4.9 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',
};

/* ---------- navigation model ---------- */
const NAV = {
  servicios: [
    ['/inspecciones-une-en-15635/', 'Inspección técnica UNE-EN 15635', 'Auditoría anual obligatoria con informe pericial'],
    ['/reparacion-estanterias-in-situ/', 'Reparación in situ', 'Puntales y largueros sin vaciar palés'],
    ['/protecciones-estanterias-industriales/', 'Protecciones MPM', 'Puntales, barreras, cabeceras y pasos peatonales'],
    ['/placas-de-caracteristicas-estanterias/', 'Placas de características', 'Cálculo de carga y legalización'],
    ['/montaje-estanterias-industriales/', 'Montaje de estanterías', 'Paletización, picking y carga ligera'],
    ['/montaje-estanterias-camaras-frio/', 'Montaje en cámaras de frío', 'Hasta −25 °C sin romper la cadena de frío'],
    ['/entreplantas-altillos-metalicos/', 'Entreplantas y altillos', 'Duplique superficie sin obra'],
    ['/traslados-desmontaje-estanterias/', 'Traslados y desmontajes', 'Mudanza de almacén y reconfiguración'],
    ['/mantenimiento-estanterias-industriales/', 'Mantenimiento preventivo', 'Planes anuales y correctivo'],
  ],
  recursos: [
    ['/guia-prses-seguridad-almacen/', 'Guía del PRSES', 'Obligaciones, revisiones y libro de registro'],
    ['/normativa-estanterias-industriales/', 'Normativa de estanterías', 'RD 1215/1997, UNE-EN 15635, NTP 852'],
    ['/checklist-revision-estanterias/', 'Checklist de revisión', 'Formato de revisión periódica del PRSES'],
    ['/preguntas-frecuentes/', 'Preguntas frecuentes', 'Plazos, precios, responsabilidades'],
    ['/proyectos/', 'Proyectos realizados', 'Fotos reales de nuestras intervenciones'],
  ],
  zonas: [
    ['/cobertura-nacional/', 'Toda España', '17 comunidades autónomas · equipos móviles'],
    ['/inspeccion-estanterias-corredor-del-henares/', 'Corredor del Henares', 'Base operativa · urgencias 24/48 h'],
    ['/inspeccion-estanterias-madrid/', 'Comunidad de Madrid', 'Sin recargo por desplazamiento'],
  ],
  regiones: ['Andalucía', 'Aragón', 'Asturias', 'Baleares', 'Canarias', 'Cantabria', 'Castilla-La Mancha', 'Castilla y León', 'Cataluña', 'Com. Valenciana', 'Extremadura', 'Galicia', 'La Rioja', 'Madrid', 'Murcia', 'Navarra', 'País Vasco'],
};

function menu(items, wide) {
  return `<div class="menu${wide ? ' menu--wide' : ''}">${items.map(([h, t, s]) => `<a href="${h}"><span>${t}</span><small>${s}</small></a>`).join('')}</div>`;
}

function header(current) {
  const act = (h) => (current === h ? ' class="is-active"' : '');
  return `
<a class="skip" href="#contenido">Saltar al contenido</a>
<header class="nav" id="nav"><div class="wrap nav__in">
  <a class="brand" href="/" aria-label="Almar-Rack, inicio"><img src="/assets/logo-mark.png" alt="" width="34" height="34"><span class="brand__t">ALMAR<span>-RACK</span></span></a>
  <nav class="nav__links" aria-label="Principal">
    <details><summary>Servicios</summary>${menu(NAV.servicios, true)}</details>
    <details><summary>Recursos</summary>${menu(NAV.recursos)}</details>
    <details><summary>Zonas</summary><div class="menu menu--zonas">
      <a class="mz__hero" href="/cobertura-nacional/"><span class="mz__big">Toda España</span><small>Las 17 comunidades autónomas. Urgencias 24/48 h en el eje A-2 y Madrid; equipos móviles en el resto del país.</small></a>
      <div class="mz__grid">${NAV.regiones.map((r) => `<span>${r}</span>`).join('')}</div>
      <div class="mz__foot"><a href="/inspeccion-estanterias-corredor-del-henares/"><span>Corredor del Henares</span><small>Base operativa · 24/48 h</small></a><a href="/inspeccion-estanterias-madrid/"><span>Comunidad de Madrid</span><small>Sin recargo por desplazamiento</small></a></div>
    </div></details>
    <a href="/proyectos/"${act('/proyectos/')}>Proyectos</a>
    <a href="/sobre-almarack/"${act('/sobre-almarack/')}>Empresa</a>
    <a href="/contacto/"${act('/contacto/')}>Contacto</a>
  </nav>
  <div class="nav__end">
    <a class="nav__tel" href="tel:${SITE.tel}">${SITE.telFmt}</a>
    <a class="btn btn--wa btn--sm" href="${SITE.wa}" target="_blank" rel="noopener">${ICON.wa}WhatsApp</a>
    <button type="button" class="burger" id="burger" aria-label="Abrir menú" aria-expanded="false" aria-controls="drawer"><span></span></button>
  </div>
</div></header>
<div class="scrim" id="scrim" data-open="false" aria-hidden="true"></div>
<aside class="drawer" id="drawer" data-open="false" aria-hidden="true">
  <button type="button" class="drawer__close" id="drawerClose" aria-label="Cerrar menú">&times;</button>
  <nav aria-label="Menú móvil">
    <a href="/">Inicio</a>
    <span class="grp">Servicios</span>
    ${NAV.servicios.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}
    <span class="grp">Recursos</span>
    ${NAV.recursos.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}
    <span class="grp">Zonas</span>
    ${NAV.zonas.map(([h, t]) => `<a href="${h}">${t}</a>`).join('')}
    <span class="grp">Empresa</span>
    <a href="/sobre-almarack/">Sobre Almar-Rack</a>
    <a href="/contacto/">Contacto</a>
  </nav>
  <div class="drawer__foot">
    <a class="btn btn--wa" href="${SITE.wa}" target="_blank" rel="noopener">${ICON.wa}WhatsApp ${SITE.telFmt}</a>
    <a class="btn btn--orange" href="tel:${SITE.tel}">${ICON.tel}Llamar ahora</a>
  </div>
</aside>`;
}

function footer() {
  return `
<footer class="foot"><div class="wrap">
  <div class="foot__big" aria-hidden="true">Almar-Rack</div>
  <div class="foot__grid">
    <div>
      <div class="foot__brand"><img src="/assets/logo-mark.png" alt="" width="32" height="32"><span>ALMAR-RACK</span></div>
      <p>Montaje, inspección UNE-EN 15635, reparación in situ, protecciones MPM y mantenimiento de estanterías industriales. Empresa independiente y multimarca con base en Guadalajara y servicio en las 17 comunidades autónomas.</p>
    </div>
    <div><p class="foot__h">Servicios</p><ul>${NAV.servicios.map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}</ul></div>
    <div><p class="foot__h">Recursos</p><ul>${NAV.recursos.concat(NAV.zonas).map(([h, t]) => `<li><a href="${h}">${t}</a></li>`).join('')}<li><a href="/sobre-almarack/">Sobre Almar-Rack</a></li></ul></div>
    <div><p class="foot__h">Contacto</p><ul>
      <li><a href="tel:${SITE.tel}">${SITE.telFmt}</a> · <a href="tel:${SITE.tel2}">${SITE.tel2Fmt}</a></li>
      <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
      <li>${SITE.addr}<br>${SITE.cp} ${SITE.city} (Corredor del Henares)</li>
      <li>${SITE.hours}</li>
      <li><a href="${SITE.maps}" target="_blank" rel="noopener">Ver en Google Maps</a></li>
    </ul></div>
  </div>
  <div class="foot__legal">
    <span>&copy; <span id="year">2026</span> ${SITE.legal} · Registro Mercantil de Guadalajara</span>
    <ul><li><a href="/aviso-legal/">Aviso legal</a></li><li><a href="/politica-de-privacidad/">Privacidad</a></li><li><a href="/politica-de-cookies/">Cookies</a></li><li><a href="/sitemap.xml">Mapa del sitio</a></li></ul>
  </div>
</div></footer>
<a class="wa-float" href="${SITE.waUrgente}" target="_blank" rel="noopener" aria-label="WhatsApp urgente">${ICON.wa}<span>Urgencia · WhatsApp</span></a>
<script src="/assets/site.js" defer></script>`;
}

/* ---------- JSON-LD ---------- */
const ORG = {
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': SITE.url + '/#organization',
  name: 'Almar-Rack',
  legalName: 'Almar-Rack S.L.',
  alternateName: ['Almarack', 'ALMAR-RACK'],
  url: SITE.url + '/',
  logo: SITE.url + '/assets/logo-mark.png',
  image: SITE.url + '/assets/img/protecciones-cabecera-pasillo.webp',
  description: 'Empresa independiente y multimarca de mantenimiento de estanterías industriales: inspección técnica UNE-EN 15635, reparación in situ sin vaciar palés, protecciones MPM, placas de características, montaje, entreplantas y traslados. Base en Guadalajara, cobertura en toda España.',
  telephone: SITE.tel,
  email: SITE.email,
  foundingDate: '2024',
  address: { '@type': 'PostalAddress', streetAddress: SITE.addr, addressLocality: SITE.city, addressRegion: 'Castilla-La Mancha', postalCode: SITE.cp, addressCountry: 'ES' },
  geo: { '@type': 'GeoCoordinates', latitude: 40.6329, longitude: -3.1666 },
  areaServed: [
    { '@type': 'Country', name: 'España' },
    { '@type': 'AdministrativeArea', name: 'Comunidad de Madrid' },
    { '@type': 'AdministrativeArea', name: 'Guadalajara' },
    { '@type': 'Place', name: 'Corredor del Henares' },
  ],
  openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '08:00', closes: '20:00' }],
  priceRange: '€€',
  knowsAbout: ['UNE-EN 15635', 'UNE-EN 15512', 'RD 1215/1997', 'NTP 852', 'estanterías de paletización', 'protecciones MPM', 'PRSES', 'inspección de estanterías', 'reparación de puntales'],
  brand: [{ '@type': 'Brand', name: 'MPM Flexible Protections' }],
  contactPoint: [{ '@type': 'ContactPoint', telephone: SITE.tel, contactType: 'customer service', availableLanguage: ['es'], areaServed: 'ES', hoursAvailable: 'Mo-Su 08:00-20:00' }],
  sameAs: ['https://www.google.com/maps/search/?api=1&query=Almar-Rack+Guadalajara'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog', name: 'Servicios de estanterías industriales',
    itemListElement: NAV.servicios.map(([h, t]) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: t, url: SITE.url + h } })),
  },
};

function breadcrumbs(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map(([name, url], i) => ({ '@type': 'ListItem', position: i + 1, name, item: SITE.url + url })),
  };
}
function faqSchema(faq) {
  return { '@type': 'FAQPage', mainEntity: faq.map(([q, a]) => ({ '@type': 'Question', name: stripTags(q), acceptedAnswer: { '@type': 'Answer', text: stripTags(a) } })) };
}
function serviceSchema(p) {
  return {
    '@type': 'Service', '@id': SITE.url + p.slug + '#service', name: p.serviceName || p.h1, serviceType: p.serviceType || p.serviceName || p.h1,
    description: p.description, url: SITE.url + p.slug, provider: { '@id': SITE.url + '/#organization' },
    areaServed: [{ '@type': 'Country', name: 'España' }, { '@type': 'Place', name: 'Corredor del Henares' }, { '@type': 'AdministrativeArea', name: 'Comunidad de Madrid' }],
    availableChannel: { '@type': 'ServiceChannel', servicePhone: { '@type': 'ContactPoint', telephone: SITE.tel }, serviceUrl: SITE.url + '/contacto/' },
  };
}

/* ---------- components ---------- */
function img(slug, alt, opts = {}) {
  const m = MANIFEST[slug]; if (!m) throw new Error('img not in manifest: ' + slug);
  const lazy = opts.eager ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"';
  const sizes = opts.sizes || '(max-width: 900px) 100vw, 50vw';
  return `<img src="/assets/img/${slug}.webp" srcset="/assets/img/${slug}-800.webp 800w, /assets/img/${slug}.webp ${m.w}w" sizes="${sizes}" width="${m.w}" height="${m.h}" alt="${esc(alt)}" ${lazy}>`;
}
const rivets = '<span class="rv2" aria-hidden="true"></span>';

function crumbsHtml(items) {
  return `<ol class="crumbs">${items.map(([n, u], i) => i === items.length - 1 ? `<li><span aria-current="page">${n}</span></li>` : `<li><a href="${u}">${n}</a></li>`).join('')}</ol>`;
}

function pageHero(p) {
  return `
<section class="phero">
  <div class="phero__bg">${img(p.img, p.imgAlt, { eager: true, sizes: '100vw' })}</div>
  <div class="wrap phero__in">
    ${crumbsHtml(p.crumbs)}
    <h1>${p.h1}</h1>
    <p class="lead">${p.lead}</p>
    <div class="hero__cta">
      <a class="btn btn--wa btn--lg" href="${SITE.wa}" target="_blank" rel="noopener">${ICON.wa}Pedir valoración por WhatsApp</a>
      <a class="btn btn--ghost btn--lg" href="tel:${SITE.tel}">${ICON.tel}${SITE.telFmt}</a>
    </div>
  </div>
</section>`;
}

function faqHtml(faq, title = 'Preguntas frecuentes') {
  return `
<section class="sec sec--tight" id="preguntas"><div class="wrap">
  <h2 class="h2wrap rv">${title}</h2>
  <div class="faq rv" style="margin-top:32px">
    ${faq.map(([q, a]) => `<details><summary>${q}<span class="ic" aria-hidden="true"></span></summary><div class="a">${a.startsWith('<p') ? a : `<p>${a}</p>`}</div></details>`).join('')}
  </div>
</div></section>`;
}

function ctaBand(h, p, urgent) {
  return `
<section class="sec sec--tight"><div class="wrap">
  <div class="band rv">
    <div><h2>${h}</h2><p>${p}</p></div>
    <div class="band__cta">
      <a class="btn btn--dark btn--lg" href="${urgent ? SITE.waUrgente : SITE.wa}" target="_blank" rel="noopener">${ICON.wa}WhatsApp</a>
      <a class="btn btn--ghost btn--lg" href="tel:${SITE.tel}">${ICON.tel}${SITE.telFmt}</a>
    </div>
  </div>
</div></section>`;
}

function contactPlate() {
  return `
<section class="sec" id="contacto"><div class="wrap">
  <div class="contact rv">
      <div>
        <p class="tag">Contacto</p>
        <h2 style="margin-top:18px">Hable con un técnico, no con un comercial.</h2>
        <p class="lead" style="margin-top:16px">Mándenos por WhatsApp unas fotos del puntal, del pasillo o del plano de la nave y le devolvemos una valoración orientativa en menos de 2 horas laborables. Primera visita gratuita y sin compromiso.</p>
        <div class="contact__cta">
          <a class="btn btn--wa" href="${SITE.wa}" target="_blank" rel="noopener">${ICON.wa}WhatsApp ${SITE.telFmt}<small>respuesta &lt; 2 h</small></a>
          <a class="btn btn--orange" href="tel:${SITE.tel}">${ICON.tel}Llamar al ${SITE.telFmt}<small>${SITE.hours}</small></a>
          <a class="btn btn--ghost" href="mailto:${SITE.email}">${ICON.mail}${SITE.email}</a>
        </div>
      </div>
      <dl class="rows">
        <div class="row"><dt>Responsable técnico</dt><dd>${SITE.contact}</dd></div>
        <div class="row"><dt>Teléfonos</dt><dd><a href="tel:${SITE.tel}">${SITE.telFmt}</a> · <a href="tel:${SITE.tel2}">${SITE.tel2Fmt}</a></dd></div>
        <div class="row"><dt>Horario</dt><dd>${SITE.hours}</dd></div>
        <div class="row"><dt>Sede</dt><dd>${SITE.addr}, ${SITE.cp} ${SITE.city} · <a href="${SITE.maps}" target="_blank" rel="noopener">Cómo llegar</a></dd></div>
        <div class="row"><dt>Urgencias</dt><dd>Intervención en 24/48 h en el Corredor del Henares y Madrid</dd></div>
        <div class="row"><dt>Cobertura</dt><dd>Las 17 comunidades autónomas, con base operativa en Guadalajara (eje A-2)</dd></div>
        <div class="row"><dt>Datos útiles</dt><dd>Huecos-palé o metros lineales, altura, tipo de carga, marca de estantería, fotos de daños</dd></div>
      </dl>
  </div>
</div></section>`;
}

/* ---------- document ---------- */
function render(p) {
  const canonical = SITE.url + p.slug;
  const ogImg = SITE.url + '/assets/img/' + (p.img || 'protecciones-cabecera-pasillo') + '.webp';
  const graph = [ORG].concat(p.schema || []);
  if (p.crumbs) graph.push(breadcrumbs(p.crumbs));
  if (p.faq && p.faq.length) graph.push(faqSchema(p.faq));
  graph.push({ '@type': 'WebPage', '@id': canonical + '#webpage', url: canonical, name: p.title, description: p.description, inLanguage: 'es-ES', isPartOf: { '@id': SITE.url + '/#website' }, about: { '@id': SITE.url + '/#organization' }, dateModified: new Date().toISOString().slice(0, 10) });
  graph.push({ '@type': 'WebSite', '@id': SITE.url + '/#website', url: SITE.url + '/', name: 'Almar-Rack', inLanguage: 'es-ES', publisher: { '@id': SITE.url + '/#organization' } });
  return `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="${p.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1'}">
<meta name="author" content="Almar-Rack S.L.">
<meta name="geo.region" content="ES-GU"><meta name="geo.placename" content="Guadalajara"><meta name="geo.position" content="40.6329;-3.1666"><meta name="ICBM" content="40.6329, -3.1666">
<meta property="og:locale" content="es_ES"><meta property="og:type" content="${p.slug === '/' ? 'website' : 'article'}"><meta property="og:site_name" content="Almar-Rack">
<meta property="og:title" content="${esc(p.title)}"><meta property="og:description" content="${esc(p.description)}"><meta property="og:url" content="${canonical}"><meta property="og:image" content="${ogImg}"><meta property="og:image:width" content="1600"><meta property="og:image:alt" content="${esc(p.imgAlt || 'Almar-Rack')}">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${esc(p.title)}"><meta name="twitter:description" content="${esc(p.description)}"><meta name="twitter:image" content="${ogImg}">
<link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" type="image/png" href="/assets/logo-mark.png"><link rel="apple-touch-icon" href="/assets/logo-mark.png">
<meta name="theme-color" content="#FFFFFF">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&display=swap">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,300..900&display=swap">
<link rel="stylesheet" href="/assets/site.css">
${p.img ? `<link rel="preload" as="image" href="/assets/img/${p.img}.webp" imagesrcset="/assets/img/${p.img}-800.webp 800w, /assets/img/${p.img}.webp ${MANIFEST[p.img].w}w" imagesizes="100vw">` : ''}
<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })}</script>
</head>
<body>
${header(p.slug)}
<main id="contenido">
${p.body}
</main>
${footer()}
</body>
</html>`;
}

module.exports = { SITE, NAV, ICON, MANIFEST, esc, stripTags, img, rivets, pageHero, faqHtml, ctaBand, contactPlate, render, serviceSchema, breadcrumbs, crumbsHtml };
