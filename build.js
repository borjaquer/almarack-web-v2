#!/usr/bin/env node
'use strict';
/* Almar-Rack static build: node build.js  →  writes /index.html, /<slug>/index.html, sitemap.xml, robots.txt, llms.txt, llms-full.txt, 404.html */
const fs = require('fs');
const path = require('path');
const { SITE, NAV, render, stripTags } = require('./src/lib');

const ROOT = __dirname;
const pages = [require('./src/pages/home')]
  .concat(require('./src/pages/servicios'), require('./src/pages/recursos'), require('./src/pages/empresa'));

const today = new Date().toISOString().slice(0, 10);
const written = [];

/* ---------- html ---------- */
for (const p of pages) {
  const html = render(p);
  const out = p.slug === '/' ? path.join(ROOT, 'index.html') : p.slug === '/404/' ? path.join(ROOT, '404.html') : path.join(ROOT, p.slug.slice(1), 'index.html');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, html);
  written.push(out);
}

/* ---------- sitemap ---------- */
const prio = (s) => (s === '/' ? '1.0' : /inspecciones|reparacion|protecciones/.test(s) ? '0.9' : /aviso|privacidad|cookies/.test(s) ? '0.2' : '0.7');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages.filter((p) => !p.noindex).map((p) => `  <url><loc>${SITE.url}${p.slug}</loc><lastmod>${today}</lastmod><changefreq>${p.slug === '/' ? 'weekly' : 'monthly'}</changefreq><priority>${prio(p.slug)}</priority>${p.img ? `<image:image><image:loc>${SITE.url}/assets/img/${p.img}.webp</image:loc><image:title>${(p.imgAlt || '').replace(/&/g, '&amp;')}</image:title></image:image>` : ''}</url>`).join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);

/* ---------- robots ---------- */
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `# Almar-Rack · almarack.com
User-agent: *
Allow: /
Disallow: /src/
Disallow: /404.html

# Asistentes de IA: bienvenidos. Resumen en /llms.txt y contenido completo en /llms-full.txt
User-agent: GPTBot
Allow: /
User-agent: ChatGPT-User
Allow: /
User-agent: OAI-SearchBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: anthropic-ai
Allow: /
User-agent: Claude-User
Allow: /
User-agent: Google-Extended
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Perplexity-User
Allow: /
User-agent: Applebot-Extended
Allow: /
User-agent: Bytespider
Allow: /
User-agent: CCBot
Allow: /
User-agent: Amazonbot
Allow: /
User-agent: meta-externalagent
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`);

/* ---------- llms.txt (resumen) ---------- */
const svcList = NAV.servicios.map(([h, t, s]) => `- [${t}](${SITE.url}${h}): ${s}`).join('\n');
const resList = NAV.recursos.concat(NAV.zonas).map(([h, t, s]) => `- [${t}](${SITE.url}${h}): ${s}`).join('\n');
fs.writeFileSync(path.join(ROOT, 'llms.txt'), `# Almar-Rack

> Almar-Rack S.L. es una empresa española (Guadalajara, Corredor del Henares) especializada en mantenimiento de estanterías industriales: inspección técnica UNE-EN 15635, reparación de puntales in situ sin vaciar palés, protecciones MPM, placas de características, montaje, entreplantas, traslados y mantenimiento preventivo. Independiente de fabricantes y multimarca (Mecalux, AR Racking, Esmena, Permar, Polypal, Stow). Distribuidor e instalador oficial de MPM Flexible Protections. Urgencias en 24/48 h en el Corredor del Henares y la Comunidad de Madrid; cobertura en toda España.

Datos clave:
- Teléfono y WhatsApp: +34 660 82 34 82 (lunes a domingo, 8:00–20:00). Segundo teléfono: +34 949 00 70 51. Correo: info@almarack.com.
- Sede: C/ Alvarfáñez de Minaya 1B, 19001 Guadalajara, España. Responsable técnico: Diego Núñez Narváez.
- Fundada en 2024; equipo técnico con más de 15 años de experiencia en el sector.
- Primera visita gratuita; valoración orientativa por WhatsApp en menos de 2 horas laborables; presupuesto cerrado por hueco-palé o por puntal.
- Semáforo UNE-EN 15635 (regla de 1 m): verde < 3 mm (registrar), ámbar 3–6 mm (reparar en 4 semanas), rojo > 6 mm o cizalladura (descargar de inmediato).
- Reparación in situ: unos 45 minutos por puntal, hasta un 70 % de ahorro frente a sustituir.
- Trabajo en cámaras de frío hasta −25 °C.

## Servicios
${svcList}

## Recursos y zonas
${resList}
- [Sobre Almar-Rack](${SITE.url}/sobre-almarack/): empresa, equipo, sectores
- [Contacto](${SITE.url}/contacto/): WhatsApp, teléfono, sede

## Documentación completa
- [llms-full.txt](${SITE.url}/llms-full.txt): todo el contenido del sitio en texto plano
- [sitemap.xml](${SITE.url}/sitemap.xml)
`);

/* ---------- llms-full.txt (markdown limpio de cada página) ---------- */
function htmlToMd(html) {
  let s = html;
  s = s.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<svg[\s\S]*?<\/svg>/gi, '');
  s = s.replace(/<(?:nav|header|footer|aside)[^>]*class="(?:nav|topbar|drawer|foot)[\s\S]*?<\/(?:nav|header|footer|aside)>/gi, '');
  s = s.replace(/<figure[\s\S]*?<\/figure>/gi, '');
  s = s.replace(/<img[^>]*>/gi, '');
  s = s.replace(/<br\s*\/?>/gi, ' ').replace(/<\/span>/gi, '</span> ').replace(/<\/b>/gi, '</b> ');
  s = s.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, '\n# $1\n');
  s = s.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, '\n## $1\n');
  s = s.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n');
  s = s.replace(/<summary[^>]*>([\s\S]*?)<\/summary>/gi, '\n**$1**\n');
  s = s.replace(/<dt[^>]*>([\s\S]*?)<\/dt>\s*<dd[^>]*>([\s\S]*?)<\/dd>/gi, '- $1: $2\n');
  s = s.replace(/<th[^>]*>([\s\S]*?)<\/th>/gi, '| $1 ').replace(/<td[^>]*>([\s\S]*?)<\/td>/gi, '| $1 ').replace(/<\/tr>/gi, '|\n');
  s = s.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, '- $1\n');
  s = s.replace(/<(?:p|div|section|details|dl|table|thead|tbody|ol|ul)[^>]*>/gi, '\n').replace(/<\/(?:p|div|section|details|dl|table|thead|tbody|ol|ul)>/gi, '\n');
  s = s.replace(/<a [^>]*href="(\/[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (m, h, t) => `[${stripTags(t)}](${SITE.url}${h})`);
  s = s.replace(/<a [^>]*>([\s\S]*?)<\/a>/gi, '$1');
  s = s.replace(/<[^>]+>/g, '');
  s = s.replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&times;/g, '×');
  s = s.replace(/[ \t]+/g, ' ').replace(/ *\n */g, '\n').replace(/\n{3,}/g, '\n\n').trim();
  return s;
}
const full = pages.filter((p) => !p.noindex && !/aviso|privacidad|cookies/.test(p.slug)).map((p) => `\n\n---\n\n<!-- ${SITE.url}${p.slug} -->\n${htmlToMd(p.body)}`).join('');
fs.writeFileSync(path.join(ROOT, 'llms-full.txt'), fs.readFileSync(path.join(ROOT, 'llms.txt'), 'utf8') + full + '\n');

/* ---------- mirrors for public/ ---------- */
fs.mkdirSync(path.join(ROOT, 'public'), { recursive: true });
for (const f of ['llms.txt', 'llms-full.txt', 'robots.txt', 'sitemap.xml']) fs.copyFileSync(path.join(ROOT, f), path.join(ROOT, 'public', f));

console.log(`built ${written.length} pages + sitemap, robots, llms.txt, llms-full.txt`);
