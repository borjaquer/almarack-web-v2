'use strict';
const { SITE, ICON, img, rivets, pageHero, faqHtml, ctaBand, contactPlate, serviceSchema, crumbsHtml } = require('../lib');

const prose = (html) => `<section class="sec sec--tight"><div class="wrap"><div class="prose rv">${html}</div></div></section>`;
const plateRows = (h, rows) => `
<section class="sec sec--tight"><div class="wrap"><div class="plate plate--pad rv">${rivets}<div class="plate__title"><h2>${h}</h2></div>
<dl class="rows">${rows.map(([k, v]) => `<div class="row"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl></div></div></section>`;

/* =================================================================== ZONAS */
const zona = (p, polys, extra) => {
  p.crumbs = [['Inicio', '/'], ['Zonas', '/cobertura-nacional/'], [p.short, p.slug]];
  p.schema = [Object.assign(serviceSchema(p), { areaServed: polys.map(([n]) => ({ '@type': 'Place', name: n })) })];
  p.body = pageHero(p) + `
<section class="sec sec--tight"><div class="wrap">
  <h2 class="h2wrap rv">Polígonos y plataformas con atención urgente</h2>
  <div class="cov rv" style="margin-top:28px">${polys.map(([n, d]) => `<div><h3>${n}</h3><p>${d}</p></div>`).join('')}</div>
</div></section>` + extra + faqHtml(p.faq) + ctaBand(p.ctaH, p.ctaP, true) + contactPlate();
  return p;
};

const henares = zona({
  slug: '/inspeccion-estanterias-corredor-del-henares/',
  short: 'Corredor del Henares',
  serviceName: 'Inspección y mantenimiento de estanterías en el Corredor del Henares',
  title: 'Inspección y reparación de estanterías en el Corredor del Henares · Guadalajara, Cabanillas, Azuqueca, Alcalá | Almar-Rack',
  description: 'Empresa de mantenimiento de estanterías industriales con sede en Guadalajara: inspección UNE-EN 15635, reparación de puntales in situ, protecciones MPM y montaje en Marchamalo, Cabanillas del Campo, Azuqueca, Alcalá de Henares, Torrejón, Coslada y San Fernando. Urgencias 24/48 h sin recargo por desplazamiento.',
  h1: 'Estanterías industriales en el Corredor del Henares',
  lead: 'Nuestra sede está en Guadalajara, a menos de 40 minutos de cualquier plataforma del eje A-2. Eso significa inspección anual sin recargo de desplazamiento, urgencias por puntal golpeado en 24/48 h y un técnico que conoce las naves de la zona.',
  img: 'protecciones-linea-amarilla-nave', imgAlt: 'Nave logística del Corredor del Henares con barreras MPM y marcado de suelo amarillo', imgCap: 'Nave logística · Corredor del Henares',
  ctaH: '¿Su nave está en el eje A-2?', ctaP: 'Podemos estar allí mañana. Mándenos fotos y ubicación por WhatsApp.',
  faq: [
    ['¿Cobráis desplazamiento en el Corredor del Henares?', 'No. Desde Guadalajara cubrimos Marchamalo, Cabanillas, Azuqueca, Alcalá, Torrejón, San Fernando, Coslada y el resto del corredor sin recargo por desplazamiento.'],
    ['¿Cuánto tardáis en una urgencia?', 'Un puntal en rojo bloqueando un pasillo se atiende en 24/48 h, a menudo el mismo día si la llamada entra por la mañana. Valoración por foto en menos de 2 horas.'],
    ['¿Qué tipo de naves atendéis en la zona?', 'Plataformas logísticas de gran superficie, e-commerce y distribución intensiva, naves de envases y alimentación, frío y farmacia, y almacenes de pymes industriales con una o dos alineaciones.'],
  ],
}, [
  ['Guadalajara y Marchamalo', 'Ciudad del Transporte (Puerta Centro), Pol. del Henares, El Balconcillo, El Ruiseñor'],
  ['Cabanillas del Campo', 'SI-20, Cantos Blancos, La Quinta 1 y 2; naves de e-commerce y distribución'],
  ['Azuqueca de Henares', 'Miralcampo, Aida, Comendador, Sanchidrián; intermodal'],
  ['Quer, Alovera y Chiloeches', 'Plataformas de Conway y Alovera, Pol. de Chiloeches'],
  ['Alcalá de Henares', 'Camporroso, La Garena, Bañuelos, Azque; paletización convencional y frío'],
  ['Torrejón de Ardoz', 'Las Monjas, Casablanca, Ciudad Aeroportuaria; farmacia e industrial'],
  ['Coslada y San Fernando', 'Centro de Transportes de Coslada (CTC), Puerto Seco, plataformas cross-docking'],
  ['Meco y Villanueva de la Torre', 'Polígonos industriales y almacenes de distribución'],
  ['Yunquera, Fontanar y Humanes', 'Naves agroalimentarias y de fabricación'],
], prose(`
<h2>Qué hacemos en el Corredor del Henares</h2>
<ul>
<li><a href="/inspecciones-une-en-15635/">Inspección técnica anual UNE-EN 15635</a> con informe pericial en 48–72 h.</li>
<li><a href="/reparacion-estanterias-in-situ/">Reparación de puntales in situ</a> sin vaciar palés, con urgencias en 24/48 h.</li>
<li><a href="/protecciones-estanterias-industriales/">Protecciones MPM</a> en cabeceras, pasillos, muelles y pasos peatonales.</li>
<li><a href="/montaje-estanterias-industriales/">Montaje</a>, <a href="/traslados-desmontaje-estanterias/">traslados</a> y <a href="/entreplantas-altillos-metalicos/">entreplantas</a> para nuevas naves y ampliaciones.</li>
<li><a href="/mantenimiento-estanterias-industriales/">Planes de mantenimiento anual</a> con un solo interlocutor para varias naves.</li>
</ul>
<p>Proyectos recientes en la zona: protecciones de muelles y accesos en Quer, segregación de tráfico en una planta de envases y entreplanta metálica en nave industrial. Véalos en <a href="/proyectos/">proyectos realizados</a>.</p>
`));

const madrid = zona({
  slug: '/inspeccion-estanterias-madrid/',
  short: 'Comunidad de Madrid',
  serviceName: 'Inspección y mantenimiento de estanterías en la Comunidad de Madrid',
  title: 'Inspección y reparación de estanterías industriales en Madrid · Urgencias 24/48 h | Almar-Rack',
  description: 'Inspección UNE-EN 15635, reparación de puntales in situ, protecciones MPM, placas de carga y montaje de estanterías industriales en toda la Comunidad de Madrid: Getafe, Pinto, Valdemoro, Leganés, Fuenlabrada, Alcobendas, San Sebastián de los Reyes, Coslada, Torrejón y polígonos de Madrid capital. Sin recargo por desplazamiento.',
  h1: 'Estanterías industriales en la Comunidad de Madrid',
  lead: 'Desde nuestra base en Guadalajara atendemos toda la Comunidad de Madrid sin recargo por desplazamiento: polígonos de la capital, cinturón sur, corredor de la A-1 y el Henares. Inspección anual, reparación in situ, protecciones y montaje con el mismo equipo técnico.',
  img: 'protecciones-barrera-amarilla-nave', imgAlt: 'Nave industrial en Madrid con barreras de protección MPM y señalización', imgCap: 'Nave industrial · Comunidad de Madrid',
  ctaH: '¿Su nave está en Madrid?', ctaP: 'Sin recargo por desplazamiento. Mándenos fotos y le decimos cuándo entramos.',
  faq: [
    ['¿Atendéis Madrid capital y el cinturón sur?', 'Sí: Villaverde, Vallecas, Vicálvaro, Mercamadrid, Getafe, Leganés, Fuenlabrada, Pinto, Valdemoro, Ciempozuelos y el corredor de la A-4 hasta Illescas y Ontígola, además de la A-1 (Alcobendas, San Sebastián de los Reyes, Algete) y la A-2.'],
    ['¿Cuánto tardáis en llegar?', 'Entre 45 y 75 minutos a la mayoría de los polígonos de la Comunidad. Urgencias en 24/48 h y valoración por foto en menos de 2 horas.'],
    ['¿Trabajáis con grandes plataformas y con pymes?', 'Ambas. Desde plataformas de 20.000 huecos con plan anual hasta talleres con dos alineaciones que necesitan su placa de carga y la inspección anual.'],
  ],
}, [
  ['Madrid capital', 'Villaverde, Vallecas, Vicálvaro, Mercamadrid, Julián Camarillo'],
  ['Getafe y Leganés', 'Los Ángeles, Los Olivos, San Marcos, Prado Overa, Polvoranca'],
  ['Fuenlabrada y Móstoles', 'Cobo Calleja, Los Gallegos, Regordoño'],
  ['Pinto, Valdemoro y Ciempozuelos', 'Las Arenas, La Postura, Albresa, Sur; corredor A-4'],
  ['Alcobendas y San Sebastián de los Reyes', 'Corredor A-1, Sur, Norte'],
  ['Coslada, San Fernando y Torrejón', 'CTC, Puerto Seco, Las Monjas, Casablanca'],
  ['Alcalá de Henares y Meco', 'Camporroso, La Garena, Bañuelos'],
  ['Arganda y Rivas', 'Corredor A-3; naves industriales y logística'],
  ['Illescas y Ontígola (Toledo)', 'Plataformas logísticas del sur de Madrid'],
], prose(`
<h2>Qué hacemos en la Comunidad de Madrid</h2>
<ul>
<li><a href="/inspecciones-une-en-15635/">Inspección técnica anual UNE-EN 15635</a> con certificado válido ante la ITSS de Madrid.</li>
<li><a href="/reparacion-estanterias-in-situ/">Reparación de puntales in situ</a> sin parar la operativa.</li>
<li><a href="/protecciones-estanterias-industriales/">Protecciones MPM</a> para pasillos, muelles y pasos peatonales.</li>
<li><a href="/placas-de-caracteristicas-estanterias/">Placas de características</a> y legalización de estanterías sin documentación.</li>
<li><a href="/montaje-estanterias-industriales/">Montaje</a>, <a href="/montaje-estanterias-camaras-frio/">cámaras de frío</a> y <a href="/entreplantas-altillos-metalicos/">entreplantas</a>.</li>
</ul>
`));


/* =================================================================== COBERTURA NACIONAL */
const nacional = zona({
  slug: '/cobertura-nacional/',
  short: 'Toda España',
  serviceName: 'Inspección, reparación y montaje de estanterías industriales en toda España',
  title: 'Estanterías industriales en toda España · Inspección, reparación y montaje en las 17 comunidades | Almar-Rack',
  description: 'Almar-Rack trabaja en toda España: inspección UNE-EN 15635, reparación de puntales in situ, protecciones MPM, placas de carga, montaje y entreplantas en las 17 comunidades autónomas. Base en Guadalajara con urgencias 24/48 h en Madrid y el Corredor del Henares; equipos móviles para el resto del país.',
  h1: 'Trabajamos en toda España',
  lead: 'Andalucía, Aragón, Asturias, Baleares, Canarias, Cantabria, Castilla-La Mancha, Castilla y León, Cataluña, Comunidad Valenciana, Extremadura, Galicia, La Rioja, Madrid, Murcia, Navarra y País Vasco. Desde Guadalajara salimos a cualquier nave del país con equipos móviles, herramienta propia y el mismo criterio técnico.',
  img: 'protecciones-nave-fragadis', imgAlt: 'Plataforma logística en Alicante con estanterías de gran altura protegidas por Almar-Rack', imgCap: 'Plataforma logística · Alicante',
  ctaH: '¿Su nave está lejos de Madrid?', ctaP: 'Da igual. Mándenos fotos y ubicación por WhatsApp; planificamos la intervención con equipo móvil y presupuesto cerrado, sin sorpresas de desplazamiento.',
  faq: [
    ['¿Cobráis desplazamiento fuera de Madrid y Guadalajara?', 'En el Corredor del Henares y la Comunidad de Madrid no. En el resto de España el desplazamiento se incluye en el presupuesto cerrado que recibe antes de empezar, agrupando visitas por zona para que sea lo más ajustado posible.'],
    ['¿Cuánto tardáis en llegar a otra comunidad?', 'Las intervenciones fuera del eje A-2 se planifican en días, no en semanas: normalmente entre 3 y 10 días laborables según la zona y el volumen. Urgencias por puntal en rojo se priorizan.'],
    ['¿Habéis trabajado ya fuera de Madrid?', 'Sí. Por ejemplo, protecciones MPM en 28 alineaciones de una plataforma logística en Alicante, montajes en Castilla-La Mancha y Aragón, y clientes con varias naves en distintas provincias que quieren un único proveedor y un único informe.'],
    ['¿Podéis llevar un plan de mantenimiento para varias naves en distintas provincias?', 'Sí. Es uno de los casos más habituales: un calendario único, un informe consolidado por centro y un solo interlocutor para la dirección de operaciones.'],
  ],
}, [
  ['Centro', 'Madrid, Guadalajara, Toledo, Illescas, Ontígola, Cuenca, Ciudad Real, Albacete'],
  ['Levante', 'Valencia, Alicante, Castellón, Murcia, Cartagena'],
  ['Noreste', 'Zaragoza, Huesca, Barcelona, Tarragona, Lleida, Girona'],
  ['Norte', 'Bilbao, Vitoria, San Sebastián, Pamplona, Logroño, Burgos, Santander'],
  ['Noroeste', 'Valladolid, León, Palencia, Salamanca, Oviedo, Gijón, A Coruña, Vigo'],
  ['Sur', 'Sevilla, Málaga, Córdoba, Granada, Cádiz, Huelva, Jaén, Almería'],
  ['Extremadura', 'Badajoz, Mérida, Cáceres'],
  ['Baleares', 'Palma, Ibiza, Menorca'],
  ['Canarias', 'Las Palmas, Tenerife'],
], prose(`
<h2>Cómo organizamos un trabajo lejos de la base</h2>
<ol>
<li><strong>Valoración por WhatsApp</strong> con fotos, huecos-palé y ubicación: cifra orientativa en menos de 2 horas.</li>
<li><strong>Presupuesto cerrado</strong> que incluye desplazamiento, alojamiento si procede y fechas.</li>
<li><strong>Equipo móvil</strong> con herramienta, apuntalamiento, protecciones MPM y recambios habituales en el vehículo: se resuelve en una sola visita.</li>
<li><strong>Informe y certificado</strong> entregados en 48–72 h, igual que en Madrid.</li>
</ol>
<p>Si su empresa tiene varias naves, agrupamos visitas por zona y llevamos un <a href="/mantenimiento-estanterias-industriales/">plan de mantenimiento único</a> para todas.</p>
`));

/* =================================================================== SOBRE */
const sobre = {
  slug: '/sobre-almarack/',
  title: 'Sobre Almar-Rack · Empresa independiente de mantenimiento de estanterías industriales en Guadalajara',
  description: 'Almar-Rack S.L. es una empresa de Guadalajara fundada en 2024 por técnicos con más de 15 años en montaje, inspección y reparación de estanterías industriales. Independiente de fabricantes, distribuidor oficial MPM, con cobertura en toda España.',
  h1: 'Técnicos de estanterías, no vendedores de estanterías.',
  lead: 'Almar-Rack nació en 2024 con una idea sencilla: que el mismo equipo que monta una estantería sea el que la inspeccione, la repare y la proteja durante toda su vida, sin el conflicto de interés de quien vive de vender racks nuevos.',
  img: 'protecciones-instalacion-operario', imgAlt: 'Montador de Almar-Rack anclando una barandilla MPM en una nave industrial', imgCap: 'Personal propio en obra',
  crumbs: [['Inicio', '/'], ['Sobre Almar-Rack', '/sobre-almarack/']],
  faq: [
    ['¿Desde cuándo existe Almar-Rack?', 'La sociedad se constituyó en 2024 en Guadalajara. Su equipo técnico procede del sector y suma más de 15 años montando, inspeccionando y reparando estanterías para fabricantes, instaladores y operadores logísticos.'],
    ['¿Sois fabricantes o distribuidores de estanterías?', 'Ni una cosa ni otra. Somos una empresa de servicios independiente y multimarca. Sí somos distribuidor e instalador oficial de protecciones MPM Flexible Protections, porque proteger es la mejor forma de no tener que reparar.'],
    ['¿Trabajáis con subcontratas?', 'No. Montadores, inspectores y técnicos de reparación son personal propio con formación en trabajos en altura, plataformas elevadoras y prevención.'],
  ],
  schema: [{ '@type': 'AboutPage', name: 'Sobre Almar-Rack', about: { '@id': SITE.url + '/#organization' } }],
};
sobre.body = pageHero(sobre) + plateRows('Ficha de empresa', [
  ['Razón social', 'Almar-Rack S.L.'],
  ['Sede', `${SITE.addr}, ${SITE.cp} ${SITE.city} (Corredor del Henares, eje A-2)`],
  ['Fundación', '2024, por técnicos con más de 15 años de experiencia en el sector'],
  ['Responsable técnico', SITE.contact],
  ['Actividad', 'Inspección UNE-EN 15635, reparación in situ, protecciones MPM, placas de carga, montaje, entreplantas, traslados y mantenimiento de estanterías industriales'],
  ['Posición', 'Independiente y multimarca; distribuidor e instalador oficial de MPM Flexible Protections'],
  ['Cobertura', 'Toda España; urgencias 24/48 h en Corredor del Henares y Comunidad de Madrid'],
  ['Atención', SITE.hours],
]) + prose(`
<h2>Lo que nos diferencia</h2>
<h3>Independencia</h3>
<p>Cuando un fabricante revisa su instalación, su negocio es venderle bastidores nuevos. El nuestro es que la instalación cumpla y siga produciendo. Por eso medimos con instrumental, reparamos cuando la norma lo permite y solo proponemos sustituir cuando no hay alternativa segura.</p>
<h3>Oficio</h3>
<p>Nuestros técnicos han montado y desmontado miles de módulos de todas las marcas antes de inspeccionarlos. Saben dónde falla cada sistema, qué pasador se pierde y qué cabecera se lleva los golpes. Eso se nota en el informe y en el presupuesto.</p>
<h3>Continuidad operativa</h3>
<p>Ningún jefe de almacén puede parar el picking para que revisemos una estantería. Inspeccionamos en pasillos activos, reparamos sin descargar palés y trabajamos por fases, en turnos de tarde o fin de semana cuando hace falta.</p>
<h3>Documentación que sirve</h3>
<p>Un informe que no localiza el daño por calle, módulo y nivel no ayuda a nadie. Los nuestros están pensados para que el PRSES los use, la Inspección de Trabajo los acepte y la aseguradora los entienda.</p>
<h2>Sectores en los que trabajamos</h2>
<ul>
<li>Operadores logísticos y plataformas de distribución y e-commerce</li>
<li>Industria alimentaria, cárnica y hortofrutícola, incluidas cámaras de congelación</li>
<li>Envases, plástico y fabricación industrial</li>
<li>Farmacia y productos sanitarios</li>
<li>Retail, ferretería y suministros industriales</li>
<li>Pymes con una o dos alineaciones que necesitan cumplir sin complicarse</li>
</ul>
`) + faqHtml(sobre.faq) + ctaBand('Hable con quien va a ir a su nave.', 'Diego Núñez Narváez, responsable técnico, atiende el WhatsApp y el teléfono de lunes a domingo de 8:00 a 20:00.') + contactPlate();

/* =================================================================== CONTACTO */
const contacto = {
  slug: '/contacto/',
  title: 'Contacto Almar-Rack · WhatsApp 660 82 34 82 · Guadalajara y Madrid',
  description: 'Contacte con un técnico de Almar-Rack por WhatsApp o teléfono (660 82 34 82) de lunes a domingo, 8:00–20:00. Valoración orientativa en menos de 2 horas y primera visita gratuita. Sede en C/ Alvarfáñez de Minaya 1B, 19001 Guadalajara.',
  h1: 'Contacto',
  lead: 'Sin formularios: le atiende directamente un técnico. Mándenos por WhatsApp unas fotos del daño, del pasillo o del plano, y el número aproximado de huecos-palé, y le devolvemos una valoración en menos de 2 horas laborables.',
  img: 'protecciones-conwey-quer-barrera', imgAlt: 'Técnico de Almar-Rack instalando una barrera de protección en una nave', imgCap: 'Le atiende quien va a ir a su nave',
  crumbs: [['Inicio', '/'], ['Contacto', '/contacto/']],
  faq: [
    ['¿Qué datos necesitáis para un presupuesto?', 'Ubicación de la nave, número aproximado de huecos-palé o metros lineales, altura y número de niveles, tipo de carga y marca de la estantería si la conoce, y fotos de los daños o de las zonas a proteger. Con eso damos una cifra orientativa el mismo día y cerramos precio tras la visita gratuita.'],
    ['¿Atendéis fines de semana?', 'Sí. El teléfono y el WhatsApp se atienden de lunes a domingo de 8:00 a 20:00, y las intervenciones en fin de semana se planifican cuando la operativa del cliente lo requiere.'],
    ['¿Puedo ir a vuestra sede?', 'Sí, con cita previa, en C/ Alvarfáñez de Minaya 1B, 19001 Guadalajara. Lo habitual, no obstante, es que seamos nosotros quienes vayamos a su nave.'],
  ],
  schema: [{ '@type': 'ContactPage', name: 'Contacto Almar-Rack', about: { '@id': SITE.url + '/#organization' } }],
};
contacto.body = `
<section class="phero"><div class="wrap">
  ${crumbsHtml(contacto.crumbs)}
  <h1>${contacto.h1}</h1>
  <p class="lead">${contacto.lead}</p>
</div></section>
${contactPlate()}
<section class="sec sec--tight"><div class="wrap"><div class="split rv">
  <figure><div class="plate">${rivets}${img('protecciones-conwey-quer-barrera', contacto.imgAlt)}<figcaption>${contacto.imgCap}</figcaption></div></figure>
  <div>
    <h2>Qué pasa después de escribirnos</h2>
    <ul class="checklist">
      <li><strong>En menos de 2 horas laborables</strong> un técnico le responde con una valoración orientativa y, si hace falta, le pide un par de datos más.</li>
      <li><strong>Visita gratuita</strong> en su nave para medir, comprobar anclajes y placas y confirmar la solución.</li>
      <li><strong>Presupuesto cerrado</strong> por puntal, hueco-palé o metro lineal, con fecha y turno.</li>
      <li><strong>Ejecución e informe</strong> firmado para su archivo de PRL.</li>
    </ul>
    <p style="margin-top:22px;font-size:14.5px;color:var(--engrave)">Para urgencias con un puntal en nivel rojo, escriba «URGENTE» en el WhatsApp o llame directamente al ${SITE.telFmt}.</p>
  </div>
</div></div></section>
` + faqHtml(contacto.faq) + `
<section class="sec sec--tight"><div class="wrap"><div class="plate plate--pad rv">${rivets}<div class="plate__title"><h2>Sede operativa</h2></div>
<dl class="rows">
<div class="row"><dt>Dirección</dt><dd>${SITE.addr}, ${SITE.cp} ${SITE.city}, España</dd></div>
<div class="row"><dt>Cómo llegar</dt><dd><a href="${SITE.maps}" target="_blank" rel="noopener" style="text-decoration:underline">Abrir en Google Maps</a> · salida 55 de la A-2 (Guadalajara)</dd></div>
<div class="row"><dt>Teléfonos</dt><dd><a href="tel:${SITE.tel}">${SITE.telFmt}</a> (móvil y WhatsApp) · <a href="tel:${SITE.tel2}">${SITE.tel2Fmt}</a></dd></div>
<div class="row"><dt>Correo</dt><dd><a href="mailto:${SITE.email}">${SITE.email}</a></dd></div>
<div class="row"><dt>Horario de atención</dt><dd>${SITE.hours}</dd></div>
</dl></div></div></section>`;

/* =================================================================== LEGAL */
const legalPage = (slug, title, h1, html) => ({
  slug, title: `${title} | Almar-Rack`, description: `${title} del sitio web de Almar-Rack S.L., empresa de mantenimiento de estanterías industriales en Guadalajara.`, h1,
  crumbs: [['Inicio', '/'], [title, slug]], noindex: false, faq: [],
  body: `<section class="phero"><div class="wrap">${crumbsHtml([['Inicio', '/'], [title, slug]])}<h1>${h1}</h1></div></section>` + prose(html),
});
const legal = [
  legalPage('/aviso-legal/', 'Aviso legal', 'Aviso legal', `
<p>En cumplimiento de la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de que el titular de este sitio web es:</p>
<ul><li><strong>Titular:</strong> Almar-Rack S.L.</li><li><strong>Domicilio:</strong> ${SITE.addr}, ${SITE.cp} ${SITE.city}, España</li><li><strong>Correo electrónico:</strong> ${SITE.email}</li><li><strong>Teléfono:</strong> +34 ${SITE.telFmt}</li><li><strong>Inscripción:</strong> Registro Mercantil de Guadalajara</li></ul>
<h2>Objeto</h2><p>Este sitio web tiene por finalidad informar de los servicios de montaje, inspección, reparación, protección y mantenimiento de estanterías industriales que presta Almar-Rack S.L. y facilitar el contacto con la empresa.</p>
<h2>Propiedad intelectual</h2><p>Los textos, fotografías, marcas y demás contenidos de este sitio son propiedad de Almar-Rack S.L. o se usan con autorización de sus titulares (por ejemplo, la marca MPM Flexible Protections). Queda prohibida su reproducción sin autorización expresa.</p>
<h2>Responsabilidad</h2><p>La información técnica y normativa publicada tiene carácter divulgativo. La aplicación a una instalación concreta requiere la evaluación de un técnico competente. Almar-Rack S.L. no se hace responsable del uso que terceros hagan de esta información sin dicha evaluación.</p>
<h2>Legislación aplicable</h2><p>La relación entre el usuario y Almar-Rack S.L. se rige por la legislación española. Para cualquier controversia serán competentes los juzgados y tribunales de Guadalajara, salvo que la normativa de consumidores establezca otro fuero.</p>`),
  legalPage('/politica-de-privacidad/', 'Política de privacidad', 'Política de privacidad', `
<p>Almar-Rack S.L. trata los datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD).</p>
<h2>Responsable</h2><p>Almar-Rack S.L., ${SITE.addr}, ${SITE.cp} ${SITE.city}. Correo: ${SITE.email}.</p>
<h2>Qué datos tratamos y con qué finalidad</h2><p>Este sitio web no tiene formularios ni cuentas de usuario. Los datos que nos facilite por WhatsApp, teléfono o correo electrónico (nombre, empresa, teléfono, correo, ubicación de la nave, fotografías de la instalación) se usan exclusivamente para atender su consulta, elaborar presupuestos y prestar el servicio contratado.</p>
<h2>Base jurídica</h2><p>La ejecución de medidas precontractuales y del contrato (art. 6.1.b RGPD) y, en su caso, el interés legítimo en mantener la relación comercial (art. 6.1.f RGPD).</p>
<h2>Conservación</h2><p>Durante la relación comercial y, después, los plazos exigidos por la legislación fiscal y de prevención de riesgos laborales para la documentación técnica (informes, certificados y libros de registro).</p>
<h2>Destinatarios</h2><p>No cedemos datos a terceros salvo obligación legal. Las fotografías de instalaciones se tratan de forma confidencial y no se publican sin autorización expresa del cliente. Las comunicaciones por WhatsApp están sujetas a la política de privacidad de WhatsApp LLC.</p>
<h2>Derechos</h2><p>Puede ejercer los derechos de acceso, rectificación, supresión, limitación, oposición y portabilidad escribiendo a ${SITE.email}. También puede reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).</p>`),
  legalPage('/politica-de-cookies/', 'Política de cookies', 'Política de cookies', `
<p>Este sitio web <strong>no utiliza cookies propias ni de terceros con fines analíticos, publicitarios o de seguimiento</strong>, y por ello no muestra banner de consentimiento.</p>
<h2>Recursos de terceros</h2><p>Las tipografías se cargan desde Google Fonts, que puede registrar la dirección IP del navegador para servir los archivos; no instala cookies. Los enlaces a WhatsApp y Google Maps abren servicios externos con sus propias políticas.</p>
<h2>Almacenamiento local</h2><p>No se utiliza almacenamiento local del navegador para identificar al usuario.</p>
<p>Si en el futuro se incorporasen herramientas de analítica, esta política se actualizará y se solicitará el consentimiento previo conforme a la LSSI-CE y las directrices de la AEPD.</p>`),
];

/* =================================================================== 404 */
const notFound = {
  slug: '/404/', title: 'Página no encontrada | Almar-Rack', description: 'La página que busca no existe en almarack.com.', h1: 'Esta página no está en el plano.', noindex: true, faq: [],
  body: `<section class="phero"><div class="wrap"><h1>Esta página no está en el plano.</h1><p class="lead">La dirección no existe o ha cambiado. Estas son las rutas que sí llevan a algún sitio:</p>
  <div class="hero__cta"><a class="btn btn--ink" href="/">Inicio</a><a class="btn btn--line" href="/#servicios">Servicios</a><a class="btn btn--line" href="/proyectos/">Proyectos</a><a class="btn btn--wa" href="${SITE.wa}" target="_blank" rel="noopener">${ICON.wa}WhatsApp</a></div></div></section>` + contactPlate(),
};

module.exports = [nacional, henares, madrid, sobre, contacto].concat(legal, [notFound]);
