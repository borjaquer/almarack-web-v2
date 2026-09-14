'use strict';
const { SITE, ICON, img, rivets, pageHero, faqHtml, ctaBand, contactPlate, serviceSchema } = require('../lib');

const crumb = (name, slug) => [['Inicio', '/'], ['Servicios', '/#servicios'], [name, slug]];

/* shared building blocks */
const splitSec = (slug, alt, cap, h2, lead, items, rev) => `
<section class="sec sec--tight"><div class="wrap"><div class="split${rev ? ' split--rev' : ''} rv">
  <figure><div class="plate">${rivets}${img(slug, alt)}<figcaption>${cap}</figcaption></div></figure>
  <div><h2>${h2}</h2><p class="lead" style="margin-top:14px">${lead}</p><ul class="checklist">${items.map((i) => `<li>${i}</li>`).join('')}</ul></div>
</div></div></section>`;

const prose = (html) => `<section class="sec sec--tight"><div class="wrap"><div class="prose rv">${html}</div></div></section>`;

const plateRows = (h, rows) => `
<section class="sec sec--tight"><div class="wrap"><div class="plate plate--pad rv">${rivets}<div class="plate__title"><h2>${h}</h2></div>
<dl class="rows">${rows.map(([k, v]) => `<div class="row"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl></div></div></section>`;

const steps4 = (h, arr) => `
<section class="sec sec--tight"><div class="wrap"><h2 class="h2wrap rv">${h}</h2><div class="steps rv" style="margin-top:28px">${arr.map(([t, d], i) => `<div class="step"><b>${i + 1}</b><h3>${t}</h3><p>${d}</p></div>`).join('')}</div></div></section>`;

const gallery = (items) => `
<section class="sec sec--tight"><div class="wrap"><div class="gal rv">${items.map(([s, alt, cap, sub]) => `<figure>${img(s, alt)}<figcaption>${cap}<span>${sub}</span></figcaption></figure>`).join('')}</div></div></section>`;

const compose = (p, sections) => {
  p.crumbs = crumb(p.short, p.slug);
  p.schema = [serviceSchema(p)];
  p.body = pageHero(p) + sections.join('') + faqHtml(p.faq) + ctaBand(p.ctaH, p.ctaP, p.urgent) + contactPlate();
  return p;
};

/* =================================================================== 1. INSPECCIÓN */
const inspeccion = compose({
  slug: '/inspecciones-une-en-15635/',
  short: 'Inspección UNE-EN 15635',
  serviceName: 'Inspección técnica de estanterías industriales UNE-EN 15635',
  title: 'Inspección técnica de estanterías metálicas (ITE) UNE-EN 15635 · Informe pericial | Almar-Rack',
  description: 'Inspección anual obligatoria de estanterías metálicas (inspección de racks) según UNE-EN 15635 y RD 1215/1997. Medición milimétrica, semáforo de daños verde/ámbar/rojo, informe pericial en 48–72 h y certificado válido ante la Inspección de Trabajo. Sin parar el almacén. Guadalajara, Madrid y toda España.',
  h1: 'Inspección técnica de estanterías metálicas (ITE) UNE-EN 15635',
  lead: 'La auditoría anual que exige el RD 1215/1997, hecha por técnicos independientes: medimos cada puntal, clasificamos cada daño por semáforo y entregamos el informe pericial que la Inspección de Trabajo, su mutua y su aseguradora van a pedir. Sin vaciar huecos ni parar carretillas.',
  img: 'inspeccion-tecnico-revision', imgAlt: 'Técnico de Almar-Rack revisando una alineación de estanterías de paletización', imgCap: 'Inspección anual en plataforma logística',
  ctaH: '¿Tiene la inspección anual pendiente o una auditoría PRL a la vista?', ctaP: 'Reserve fecha con unas fotos y el número aproximado de huecos-palé. Presupuesto cerrado en menos de 2 horas.',
  faq: [
    ['¿Cada cuánto hay que inspeccionar las estanterías?', 'La UNE-EN 15635 establece tres niveles: inspección visual continua por los operarios (comunicando cualquier golpe), revisión periódica documentada por el PRSES (normalmente semanal o mensual según la rotación) y una inspección experta por técnico competente e independiente al menos cada 12 meses. Tras un accidente grave o una reconfiguración también debe inspeccionarse.'],
    ['¿Quién puede firmar la inspección?', 'Una persona técnicamente competente, con formación específica en estanterías metálicas y conocimiento de la norma, independiente de la operativa diaria. Los técnicos de Almar-Rack tienen más de 15 años de experiencia en montaje, cálculo y patología de estanterías y firman con seguro de responsabilidad civil profesional.'],
    ['¿Hay que vaciar la estantería o parar el almacén?', 'No. La inspección se hace en pasillos activos, coordinada con el jefe de turno. Medimos con regla de 1 m, galgas y distanciómetro láser sin manipular la carga. Una nave de 3.000 a 10.000 huecos se audita en 1 o 2 jornadas.'],
    ['¿Qué incluye el informe?', 'Plano de la nave con cada daño georreferenciado por calle, módulo y nivel; fotografía de cada daño con escala; clasificación verde/ámbar/rojo con su plazo de actuación; estado de anclajes, pasadores de seguridad, placas de características y protecciones; medidas correctoras priorizadas y certificado de inspección firmado.'],
    ['¿Qué sanciones hay por no inspeccionar?', 'La Ley de Infracciones y Sanciones en el Orden Social (LISOS) tipifica como grave no garantizar el mantenimiento de los equipos de trabajo, con multas de 2.451 a 49.180 €, y como muy grave hasta 983.736 € cuando hay riesgo grave e inminente. A ello se suman el recargo de prestaciones (30–50 %) en caso de accidente y la posible responsabilidad penal de la dirección (art. 316 CP).'],
    ['¿Quién puede inspeccionar las estanterías?', 'La UNE-EN 15635 exige una persona técnicamente competente e independiente de la operativa diaria, con formación en estanterías metálicas. Puede ser el fabricante, un instalador o una empresa especializada como Almar-Rack. La ventaja de una empresa independiente es que no tiene interés en venderle bastidores nuevos.'],
    ['¿Cada cuánto hay que inspeccionar las estanterías?', 'Como mínimo una inspección experta cada 12 meses, además de las revisiones periódicas del PRSES (semanales o mensuales según la rotación) y la vigilancia diaria de los carretilleros. También tras un golpe fuerte, un accidente o un cambio de configuración.'],
    ['¿Cuánto cuesta la inspección de estanterías?', 'Depende del número de huecos-palé, bastidores y niveles, y de si hay cámaras de frío o alturas especiales. Se presupuesta con precio cerrado por hueco-palé antes de empezar, sin recargo de desplazamiento en Madrid y Guadalajara; con unas fotos y el número de huecos le damos una cifra orientativa en menos de 2 horas.'],
    ['¿Qué certificado entregamos?', 'Un certificado de inspección firmado por técnico competente, con fecha, alcance, norma aplicada (UNE-EN 15635) y resultado, más el informe pericial completo. Es el documento que solicitan la Inspección de Trabajo, las mutuas, las aseguradoras y las auditorías de PRL, y el que acredita al PRSES que la instalación se ha inspeccionado.'],
    ['¿Qué pasa con los daños que encontráis?', 'Los verdes se registran para seguimiento; los ámbar deben repararse en 4 semanas; los rojos exigen descargar el módulo de inmediato. Nuestro equipo de reparación in situ puede resolver la mayoría de daños en la misma visita o en las 48 h siguientes, y actualizamos el informe con el elemento reparado.'],
  ],
}, [
  plateRows('Ficha de la inspección', [
    ['Norma de referencia', 'UNE-EN 15635 (uso y mantenimiento), UNE-EN 15620 (tolerancias), UNE-EN 15512 (diseño estructural), RD 1215/1997, NTP 852 del INSST'],
    ['Periodicidad', 'Mínimo 12 meses · tras accidente grave · tras reconfiguración o traslado'],
    ['Alcance', 'Puntales, largueros, diagonales, pasadores de seguridad, anclajes, placas base, placas de características, protecciones, verticalidad y flechas'],
    ['Método de medida', 'Regla de 1 m sobre el punto de máxima deformación; galga milimétrica; distanciómetro láser para desplomes y luces libres'],
    ['Clasificación', '<span class="state state--verde">Verde</span> &nbsp;<span class="state state--ambar">Ámbar</span> &nbsp;<span class="state state--rojo">Rojo</span>'],
    ['Entregable', 'Informe pericial PDF con plano georreferenciado, fotos, listado de no conformidades, medidas correctoras y certificado firmado'],
    ['Plazo de entrega', '48–72 h desde la visita'],
    ['Interrupción', 'Ninguna: pasillos activos, sin descargar palés'],
    ['Certificado', 'Certificado de inspección firmado por técnico competente + informe pericial: válido ante ITSS, mutuas, aseguradoras y auditorías PRL'],
    ['Formato', 'Informe de inspección con plano, listado por calle/módulo/nivel y etiquetas de inspección en cada daño; también le facilitamos el formato de revisión periódica (checklist) del PRSES'],
    ['Marcas', 'Mecalux, AR Racking, Esmena, Permar, Polypal, Stow, Jungheinrich, SSI Schäfer y descatalogadas'],
  ]),
  prose(`
<h2>El semáforo de daños: qué mide y qué obliga</h2>
<div class="tbl-wrap"><table>
<thead><tr><th>Nivel</th><th>Deformación en puntal (regla de 1 m)</th><th>Diagonales / transversal</th><th>Qué exige la norma</th></tr></thead>
<tbody>
<tr><td><span class="state state--verde">Verde</span></td><td>&lt; 3 mm en el plano del bastidor</td><td>&lt; 5 mm en el plano transversal / diagonal</td><td>Registrar y vigilar. La estantería puede seguir en uso con su carga nominal.</td></tr>
<tr><td><span class="state state--ambar">Ámbar</span></td><td>3 – 6 mm</td><td>5 – 10 mm</td><td>Reparar o sustituir en un máximo de 4 semanas. Una vez descargado el módulo no se vuelve a cargar hasta reparar.</td></tr>
<tr><td><span class="state state--rojo">Rojo</span></td><td>&gt; 6 mm, cizalladura, soldadura rota, pandeo</td><td>&gt; 10 mm o diagonal doblada</td><td>Descarga inmediata de los niveles afectados, balizar el pasillo y reparar antes de reutilizar.</td></tr>
</tbody></table></div>
<p>Si su empresa usa la terminología de «racks», es lo mismo: inspección de racks de almacenamiento, inspección de estanterías de paletización o ITE de estanterías metálicas son el mismo servicio bajo la UNE-EN 15635.</p>
<p>Además de la deformación, la inspección revisa los elementos que suelen fallar antes que el acero: pasadores de seguridad ausentes, anclajes flojos o arrancados, placas base dobladas, largueros sobrecargados con flecha permanente y placas de características que ya no corresponden a la configuración real.</p>
`),
  steps4('Cómo se hace una inspección Almar-Rack', [
    ['Recorrido y medición', 'Calle por calle, con regla de 1 m y galga en cada puntal, distanciómetro para desplomes y comprobación de pasadores y anclajes.'],
    ['Clasificación in situ', 'Cada daño se marca con una etiqueta de inspección de color sobre el puntal y se fotografía con escala para que el jefe de almacén lo localice sin buscar.'],
    ['Informe pericial', 'Plano con georreferencia calle-módulo-nivel, listado de no conformidades, plazos y presupuesto de reparación por elemento.'],
    ['Certificado y seguimiento', 'Certificado firmado para su archivo de PRL, actualización de placas si procede y recordatorio de la próxima inspección.'],
  ]),
  splitSec('inspeccion-medicion-base', 'Técnico midiendo la base de un puntal durante una inspección', 'Medición con regla y galga en la base del puntal', 'Inspección pericial frente a revisión de fabricante', 'La revisión que ofrece un fabricante busca vender bastidores nuevos. La nuestra busca que su instalación cumpla y siga produciendo.', [
    'Medición instrumental, no solo visual: cada daño con su cifra en milímetros',
    'Sin interés en la sustitución: priorizamos la reparación in situ cuando la norma lo permite',
    'Multimarca: Mecalux, AR Racking, Esmena, Permar, Polypal, Stow y descatalogadas',
    'Informe con validez documental ante ITSS, mutuas y aseguradoras',
    'Presupuesto de reparación por elemento en el mismo informe, sin sorpresas',
  ], true),
  prose(`
<h2 lang="en">Pallet rack inspection services in Spain</h2>
<p lang="en">Almar-Rack provides independent, multi-brand warehouse rack safety inspections across Spain in accordance with EN 15635, with a full inspection report (damage map, photos, green/amber/red classification), an inspection certificate accepted by the Spanish Labour Inspectorate and insurers, and on-site repair without unloading pallets. English-speaking coordination available for international operators. Contact us on WhatsApp at +34 660 82 34 82.</p>
`),
]);

/* =================================================================== 2. REPARACIÓN */
const reparacion = compose({
  slug: '/reparacion-estanterias-in-situ/',
  short: 'Reparación in situ',
  serviceName: 'Reparación de puntales de estanterías in situ',
  title: 'Reparación de estanterías metálicas y puntales in situ, sin vaciar palés | Almar-Rack',
  description: 'Reparación de estanterías industriales in situ: apuntalamiento hidráulico de la carga y sustitución del tramo de puntal, larguero o diagonal dañado sin descargar la mercancía ni desmontar el bastidor. Unos 45 minutos por puntal, recambio homologado multimarca y certificado UNE-EN 15635. Urgencias 24/48 h en toda España.',
  h1: 'Reparación de estanterías metálicas y puntales in situ, sin vaciar palés',
  lead: 'Un puntal golpeado en nivel rojo obliga a descargar el módulo. Con nuestro sistema de reparación in situ apuntalamos hidráulicamente la carga de los niveles superiores y sustituimos el tramo dañado por uno nuevo homologado, sin vaciar la estantería. El pasillo vuelve a producir el mismo día y el elemento sale certificado.',
  img: 'dano-puntal-base-golpe-2', imgAlt: 'Base de puntal de estantería deformada por impacto de carretilla antes de la reparación', imgCap: 'Puntal golpeado en la base: se sustituye el tramo in situ',
  ctaH: '¿Un puntal bloqueando posiciones de palé?', ctaP: 'Envíe una foto del daño por WhatsApp. Le decimos si es reparable, cuánto cuesta y cuándo podemos entrar.', urgent: true,
  faq: [
    ['¿En qué consiste exactamente la reparación in situ?', 'Apuntalamos la carga de los niveles superiores, desanclamos el puntal afectado, cortamos la parte dañada y empalmamos un tramo nuevo homologado respetando la normativa del fabricante y la UNE-EN 15635 (o sustituimos el puntal completo si el daño es extenso), sin descargar los niveles. Largueros y diagonales dañados se sustituyen directamente.'],
    ['¿Hay que descargar la estantería?', 'No. El apuntalamiento hidráulico soporta la carga de los niveles superiores mientras se sustituye el tramo dañado. Solo en daños de nivel rojo la norma obliga a descargar el módulo hasta que esté reparado, y esa sustitución la hacemos el mismo día o en 24/48 h.'],
    ['¿Cuánto cuesta frente a cambiar el bastidor completo?', 'Sustituir solo el tramo dañado evita comprar el bastidor entero, el transporte, la grúa, el vaciado de huecos y las horas para desmontar niveles. En instalaciones habituales el ahorro respecto a cambiar el bastidor completo está entre el 50 y el 70 %.'],
    ['¿La reparación tiene validez normativa?', 'Sí. El tramo y el empalme son piezas homologadas compatibles con el sistema; tras el montaje se verifica la verticalidad con regla y galga y se documenta con foto antes/después. Se certifica y se refleja en el informe de inspección y en el libro del PRSES.'],
    ['¿Cuánto cuesta reparar un puntal?', 'Se presupuesta por puntal según la altura del tramo a sustituir, el sistema (Mecalux, AR Racking, Esmena…) y si hay que cambiar también placa base, diagonales o pasadores. El precio es cerrado antes de empezar. Con una foto del daño por WhatsApp le decimos en menos de 2 horas qué hay que sustituir y cuánto cuesta.'],
    ['¿Reparáis estanterías de cualquier marca?', 'Sí: perfiles de Mecalux, AR Racking, Esmena, Permar, Polypal, Stow, Jungheinrich y marcas descatalogadas. Cuando hace falta sustituir, localizamos el recambio compatible o certificamos una solución equivalente.'],
  ],
}, [
  plateRows('Ficha de la reparación', [
    ['Método', 'Apuntalamiento hidráulico de la carga y sustitución del tramo dañado (empalme homologado) o del puntal completo, sin desmontar largueros ni vaciar niveles'],
    ['Tiempo por puntal', 'Unos 45 minutos (media en paletización convencional)'],
    ['Ahorro frente al bastidor completo', 'Hasta un 70 % (recambio, transporte, grúa, descarga y horas de operario)'],
    ['Elementos', 'Tramos de puntal, puntales completos, placas base, largueros, diagonales, pasadores de seguridad y anclajes'],
    ['Verificación', 'Medición posterior con regla de 1 m y galga; foto antes/después; certificado por elemento'],
    ['Marcas', 'Multimarca, incluidas descatalogadas'],
    ['Urgencias', '24/48 h en Corredor del Henares y Comunidad de Madrid; planificado en el resto de España'],
  ]),
  steps4('Así sustituimos un puntal sin parar el pasillo', [
    ['Diagnóstico', 'Foto por WhatsApp y, si procede, visita. Definimos qué tramo hay que sustituir y qué recambio compatible corresponde a su sistema.'],
    ['Apuntalado', 'Transferimos la carga de los niveles superiores a un apoyo auxiliar. La mercancía se queda donde está.'],
    ['Sustitución', 'Cortamos el tramo dañado y montamos el tramo nuevo con empalme homologado, o el puntal completo si el daño es extenso.'],
    ['Verificación', 'Comprobamos verticalidad con regla y galga, anclaje y pasadores, fotografiamos y certificamos el elemento.'],
  ]),
  splitSec('dano-puntal-corte', 'Puntal de estantería cortado por impacto de carretilla', 'Puntal con corte: se sustituye el tramo completo', 'Recambio homologado, sea cual sea la marca', 'Localizamos el tramo, el larguero o la diagonal compatible con su sistema y lo dejamos certificado.', [
    'Sustitución de tramos de puntal con empalme homologado, sin cambiar el bastidor completo',
    'Recambio de largueros, diagonales, pasadores de seguridad y placas base',
    'Reanclaje con taco químico o mecánico según solera',
    'Actualización de la placa de características si cambia la configuración',
    'Instalación de <a href="/protecciones-estanterias-industriales/" style="text-decoration:underline">protectores de puntales MPM</a> tras la reparación para que el golpe no se repita',
  ]),
  gallery([
    ['dano-puntal-base-golpe', 'Puntal con base deformada por impacto de carretilla', 'Base de puntal golpeada', 'Antes de la sustitución'],
    ['inspeccion-medicion-base', 'Técnico verificando la base y el anclaje de un puntal', 'Verificación', 'Regla, galga y anclaje'],
    ['protecciones-protector-puntal-mpm', 'Protector de puntal MPM instalado tras la reparación', 'Después', 'Protección para que no se repita'],
  ]),
]);

/* =================================================================== 3. PROTECCIONES */
const protecciones = compose({
  slug: '/protecciones-estanterias-industriales/',
  short: 'Protecciones MPM',
  serviceName: 'Protecciones para estanterías industriales y naves (MPM)',
  title: 'Protecciones para estanterías industriales MPM · Puntales, barreras y pasos peatonales | Almar-Rack',
  description: 'Distribuidor e instalador oficial de protecciones MPM Flexible Protections: protectores de puntal, barreras de pasillo, cabeceras, bolardos, defensas de muelle, barandillas y pasos peatonales de polímero que absorbe el impacto. Instalación sin parar la operativa en Guadalajara, Madrid y toda España.',
  h1: 'Protecciones MPM para estanterías, pasillos y muelles',
  lead: 'Nueve de cada diez daños en una estantería empiezan con una carretilla en una cabecera. Como distribuidor e instalador oficial de MPM Protecciones Flexibles (MPM Flexible Protections), suministramos y montamos protecciones de polímero que absorben el golpe, recuperan su forma y no transmiten el impacto a la solera.',
  img: 'protecciones-pasillo-puntales', imgAlt: 'Pasillo de estanterías con protectores de puntal MPM amarillos instalados', imgCap: 'Protectores de puntal MPM en pasillo de paletización',
  ctaH: '¿Quiere dejar de reparar los mismos puntales cada mes?', ctaP: 'Mándenos fotos de las cabeceras y pasillos más castigados. Le proponemos un plan de protecciones con presupuesto cerrado.',
  faq: [
    ['¿Por qué polímero y no acero?', 'Una protección de acero transmite el impacto al anclaje y a la solera: se arranca, fisura el hormigón y se deforma tras el primer golpe. El polímero MPM absorbe la energía deformándose y recupera su forma, protege también a la carretilla y no requiere sustitución tras cada impacto.'],
    ['¿Las protecciones son obligatorias?', 'La UNE-EN 15635 exige proteger los puntales expuestos en cabeceras de pasillo y zonas de tráfico, y el RD 1215/1997 obliga a reducir el riesgo de colisión. Además, una instalación protegida reduce drásticamente los daños que aparecen en la inspección anual.'],
    ['¿Qué productos MPM instaláis?', 'Protectores de puntal, barreras de pasillo simples y dobles, protectores de cabecera de alineación, bolardos, defensas de muelle, barandillas y pasos peatonales, protección de columnas y de maquinaria, y topes de suelo. Todo en polímero amarillo de alta visibilidad.'],
    ['¿Cómo se anclan y cuánto tardáis?', 'Con anclaje químico o mecánico según el estado de la solera, con el pasillo en uso. Una cabecera se protege en menos de una hora; una nave de tamaño medio, en una o dos jornadas.'],
    ['¿Son compatibles con estanterías Mecalux, AR Racking o Esmena?', 'Sí. Los protectores de puntal MPM se fabrican para las secciones habituales de puntal de Mecalux, AR Racking, Esmena, Permar, Polypal, Stow y otros; medimos el perfil en la visita y elegimos la referencia adecuada. Barreras, cabeceras y bolardos son independientes del fabricante de la estantería.'],
    ['¿Podéis proteger una nave que no tiene estanterías?', 'Sí. Instalamos barreras de segregación de tráfico, protección de columnas, muelles, puertas rápidas, puestos de trabajo y pasos peatonales en cualquier planta industrial.'],
  ],
}, [
  plateRows('Catálogo MPM que suministramos e instalamos', [
    ['Protector de puntal', 'Envolvente de polímero para la base del puntal; primera línea de defensa en cada bastidor expuesto'],
    ['Barrera de pasillo', 'Barrera baja simple o doble a lo largo de la alineación; frena la horquilla antes de tocar el puntal'],
    ['Cabecera de alineación', 'Protector en U o L para el extremo de cada estantería, donde gira la carretilla'],
    ['Bolardo', 'Poste independiente para esquinas, puertas de muelle, cuadros eléctricos y maquinaria'],
    ['Defensa de muelle', 'Protección de puertas seccionales y muelles de carga frente a camiones y carretillas'],
    ['Barandilla y paso peatonal', 'Separación física entre tráfico de carretillas y personas, con puertas y topes'],
    ['Protección de columna y máquina', 'Envolventes para pilares de nave y jaulas para maquinaria de proceso'],
    ['Anclaje', 'Químico o mecánico según solera; sin fisurar el hormigón'],
  ]),
  splitSec('protecciones-barrera-mpm-detalle', 'Barrera de protección MPM amarilla recién instalada con anclajes', 'Barrera MPM anclada en cabecera de pasillo', 'Absorbe el golpe. Recupera la forma. No rompe la solera.', 'El polímero de memoria elástica MPM está diseñado para recibir impactos repetidos de carretillas retráctiles y contrapesadas sin perder prestaciones.', [
    'Menos daños en la inspección anual: cabeceras y puntales protegidos salen en verde',
    'La carretilla también sale indemne: menos partes de taller',
    'Alta visibilidad amarilla; señaliza la zona de riesgo sin pintura',
    'Sin mantenimiento: no se oxida, no se dobla, no hay que repintar',
  ]),
  gallery([
    ['protecciones-cabecera-pasillo', 'Cabecera de pasillo con protección MPM en nave logística', 'Cabecera protegida', 'Plataforma logística · Alicante'],
    ['protecciones-paso-peatonal', 'Barandillas de paso peatonal MPM en planta industrial', 'Paso peatonal', 'Planta de envases'],
    ['protecciones-protector-columna', 'Protector de columna de polímero amarillo instalado en nave', 'Protección de columna', 'Planta de envases'],
    ['protecciones-bolardo-mpm', 'Bolardo MPM anclado junto a puerta de nave', 'Bolardo en muelle', 'Conway · Quer'],
    ['protecciones-barrera-jaula', 'Barrera MPM protegiendo jaula de máquina en nave industrial', 'Protección de maquinaria', 'Planta de envases'],
    ['protecciones-material-mpm-pale', 'Material MPM paletizado listo para instalar', 'Suministro oficial MPM', 'Material en obra'],
  ]),
]);

/* =================================================================== 4. PLACAS */
const placas = compose({
  slug: '/placas-de-caracteristicas-estanterias/',
  short: 'Placas de características',
  serviceName: 'Placas de características y cálculo de carga de estanterías',
  title: 'Placas de características de estanterías · Cálculo de carga y legalización | Almar-Rack',
  description: 'Cálculo de la carga admisible por nivel y módulo y emisión de placas de características para estanterías de paletización según UNE-EN 15635 y RD 1215/1997. Legalizamos estanterías modificadas, descatalogadas o sin documentación. Guadalajara, Madrid y toda España.',
  h1: 'Placas de características y cálculo de carga',
  lead: 'Toda estantería debe llevar, visible, una placa con la carga máxima por nivel y por módulo, la separación entre largueros y el fabricante. Si su instalación no la tiene, se ha modificado o el fabricante desapareció, calculamos la capacidad real y emitimos la placa que le pide la Inspección de Trabajo.',
  img: 'protecciones-alineaciones-fragadis', imgAlt: 'Alineaciones de estantería de paletización nuevas, pendientes de placas de características', imgCap: 'Instalación nueva: placa por alineación antes de cargar',
  ctaH: '¿Estanterías sin placa, modificadas o de fabricante desaparecido?', ctaP: 'Con unas fotos del perfil, la altura entre niveles y el tipo de carga le decimos qué necesita para legalizarlas.',
  faq: [
    ['¿Qué debe indicar una placa de características?', 'Según la UNE-EN 15635: nombre del instalador o fabricante, fecha de instalación, carga máxima por nivel (por par de largueros), carga máxima por módulo o bastidor, distancia entre el suelo y el primer nivel y entre niveles, y la advertencia de no modificar la configuración sin recalcular.'],
    ['¿Qué pasa si cambio la altura de los largueros?', 'La capacidad de un puntal depende de la distancia entre niveles: subir un larguero reduce la carga admisible. Cualquier cambio de configuración exige recalcular y sustituir la placa. Es una de las no conformidades más frecuentes en inspección.'],
    ['¿Podéis calcular una estantería sin documentación del fabricante?', 'Sí. Medimos el perfil del puntal (sección, espesor, perforación), largueros y diagonales, identificamos el sistema y calculamos la capacidad conforme a la UNE-EN 15512 con los coeficientes de seguridad correspondientes. Emitimos memoria de cálculo y placa.'],
    ['¿La placa es obligatoria?', 'Sí. El RD 1215/1997 exige que los equipos de trabajo lleven las advertencias y señalizaciones necesarias para su uso seguro, y la UNE-EN 15635 concreta la placa de carga como requisito. Su ausencia se refleja como no conformidad en la inspección.'],
  ],
}, [
  plateRows('Ficha del servicio', [
    ['Cálculo', 'Capacidad por nivel y por módulo conforme a UNE-EN 15512, a partir del perfil real medido en obra o de la documentación del fabricante'],
    ['Placa', 'Aluminio o vinilo de alta resistencia, formato normalizado, una por alineación, fijada a altura visible'],
    ['Contenido', 'Instalador, fecha, carga por nivel, carga por módulo, altura del primer nivel y entre niveles, advertencia de modificación'],
    ['Casos habituales', 'Instalación sin placa · fabricante descatalogado · niveles reconfigurados · cambio de tipo de palé · tras traslado'],
    ['Entregable', 'Memoria de cálculo firmada + placas instaladas + registro en el informe de inspección'],
  ]),
  prose(`
<h2>Por qué la placa protege al PRSES y a la dirección</h2>
<p>La placa es el único documento que un carretillero ve antes de subir un palé. Si no existe, o dice 1.000 kg por nivel cuando la configuración real solo admite 700, la responsabilidad de una sobrecarga recae en la empresa. Con la placa correcta, la instrucción de seguridad está donde debe estar y la inspección anual puede verificar que se cumple.</p>
<h3>Qué comprobamos antes de emitirla</h3>
<ul>
<li>Sección, espesor y perforación del puntal; sistema de enganche del larguero</li>
<li>Distancia real entre niveles y desde el suelo al primer larguero</li>
<li>Tipo de carga (europalé, palé americano, jaula, bobina) y forma de apoyo</li>
<li>Estado de anclajes, placas base y nivelación</li>
<li>Coherencia con la placa anterior, si existe, y con la documentación del fabricante</li>
</ul>
`),
]);

/* =================================================================== 5. MONTAJE */
const montaje = compose({
  slug: '/montaje-estanterias-industriales/',
  short: 'Montaje de estanterías',
  serviceName: 'Montaje de estanterías industriales',
  title: 'Empresa de montaje de estanterías industriales y metálicas · Paletización, picking, cantilever | Almar-Rack',
  description: 'Empresa de montaje de estanterías industriales y metálicas: paletización convencional, compacta y selectiva, picking, carga ligera y cantilever; sistemas con tornillos y de enganche sin tornillos; Mecalux, AR Racking, Esmena y cualquier marca. Replanteo, nivelado láser, anclaje químico, placas de carga y certificado de montaje. Multimarca. Guadalajara, Madrid y toda España.',
  h1: 'Empresa de montaje de estanterías industriales',
  lead: 'Montamos estanterías nuevas o de segunda mano de cualquier fabricante con el mismo criterio con el que luego las inspeccionamos: replanteo sobre plano, nivelado láser, anclaje según solera y entrega con placas de carga y certificado de montaje conforme a la UNE-EN 15635.',
  img: 'protecciones-nave-altura', imgAlt: 'Montadores de Almar-Rack en plataforma elevadora instalando largueros en estantería de gran altura', imgCap: 'Montaje en altura con plataforma elevadora',
  ctaH: '¿Nave nueva, ampliación o estantería de segunda mano por montar?', ctaP: 'Envíenos el plano o las medidas de la nave y el tipo de carga. Le proponemos layout, plazo y presupuesto cerrado.',
  faq: [
    ['¿Qué sistemas montáis?', 'Paletización convencional, compacta drive-in, dinámica, push-back, picking manual, estantería de carga ligera y media, cantilever para cargas largas, y entreplantas. De cualquier marca: Mecalux, AR Racking, Esmena, Permar, Polypal, Stow y sistemas descatalogados.'],
    ['¿Montáis estantería de segunda mano?', 'Sí, previa revisión del material: descartamos puntales y largueros fuera de tolerancia, completamos pasadores y anclajes y calculamos la placa de carga real de la configuración montada.'],
    ['¿Qué incluye el certificado de montaje?', 'Plano as-built, verificación de verticalidad y nivelación según UNE-EN 15620, comprobación de anclajes y pasadores, placas de características instaladas y firma del responsable de montaje. Es el punto de partida del libro de registro del PRSES.'],
    ['¿Cuánto cuesta montar estanterías industriales?', 'El montaje se presupuesta por módulo o por hueco-palé según altura, número de niveles, tipo de sistema y estado de la solera; el material, si lo suministramos nosotros, va aparte. Precio cerrado antes de empezar con plano o medidas de la nave. Montamos estantería nueva y de segunda mano de cualquier marca.'],
    ['¿Entregáis certificado de montaje?', 'Sí. Al terminar entregamos el certificado de montaje firmado con plano as-built, verificación de verticalidad y nivelación según UNE-EN 15620, comprobación de anclajes y pasadores, y las placas de características instaladas. Es el documento de partida del libro de registro del PRSES.'],
    ['¿Cuánto tarda un montaje?', 'Depende de huecos y altura: una alineación de 30 módulos a 3 niveles se monta en una jornada; una nave de 5.000 huecos, en una o dos semanas con equipos de 4 a 6 montadores.'],
  ],
}, [
  plateRows('Qué incluye un montaje Almar-Rack', [
    ['Replanteo', 'Marcado sobre solera según plano, comprobación de pasillos, columnas, salidas y luces libres'],
    ['Nivelación', 'Nivel láser y calzos de nivelación; tolerancias de verticalidad según UNE-EN 15620'],
    ['Anclaje', 'Taco químico o mecánico según resistencia de la solera; par de apriete verificado'],
    ['Seguridad', 'Pasadores de seguridad en todos los largueros, protecciones en cabeceras y puntales expuestos'],
    ['Entrega', 'Placas de características por alineación, plano as-built y certificado de montaje'],
    ['Equipo', 'Montadores propios con formación en trabajos en altura y plataformas elevadoras'],
  ]),
  splitSec('entreplanta-forjado-montaje', 'Bastidores y largueros de estantería acopiados en nave antes del montaje', 'Material acopiado antes del montaje', 'Sistemas que montamos', 'Elegimos el sistema por la rotación, el tipo de palé y las carretillas que usa, no por catálogo.', [
    'Estanterías de paletización convencional (selectiva): acceso directo a cada palé, la más versátil',
    'Compacta drive-in y push-back: máxima densidad para pocas referencias',
    'Dinámica por gravedad: FIFO para alimentación y frío',
    'Picking y carga ligera: preparación de pedidos y almacén de recambios',
    'Cantilever: perfiles, tubos y cargas largas',
    'Sistemas atornillados y de enganche sin tornillos (Mecalux, AR Racking, Esmena, Permar, Polypal, Stow, Jungheinrich, SSI Schäfer)',
  ], true),
  gallery([
    ['protecciones-nave-fragadis', 'Nave logística con alineaciones de estantería de paletización y protecciones amarillas', 'Paletización convencional', 'Nave logística'],
    ['protecciones-alineaciones-fragadis', 'Pasillo de estanterías nuevas de paletización', 'Alineación nueva', 'Entrega con placas de carga'],
    ['entreplanta-forjado-montaje', 'Montaje de forjado de entreplanta metálica en nave industrial', 'Entreplanta', 'Forjado en montaje'],
  ]),
]);

/* =================================================================== 6. FRÍO */
const frio = compose({
  slug: '/montaje-estanterias-camaras-frio/',
  short: 'Cámaras de frío',
  serviceName: 'Montaje y mantenimiento de estanterías en cámaras de frío',
  title: 'Estanterías para cámara frigorífica: montaje, inspección y mantenimiento hasta −25 °C | Almar-Rack',
  description: 'Montaje, inspección y reparación de estanterías industriales dentro de cámaras de refrigeración y congelación hasta −25 °C. Equipos con EPI térmico, intervención por fases sin romper la cadena de frío. Industria alimentaria y farmacéutica en Guadalajara, Madrid y toda España.',
  h1: 'Estanterías en cámaras de frío, hasta −25 °C',
  lead: 'La industria alimentaria no puede vaciar una cámara de congelados para revisar una estantería. Nuestros equipos entran con EPI térmico, herramienta adaptada y turnos cortos, y montan, inspeccionan o reparan por fases sin que la temperatura ni la expedición se resientan.',
  img: 'inspeccion-camara-frio-epi', imgAlt: 'Técnico de Almar-Rack con equipo térmico completo dentro de una cámara de congelación', imgCap: 'Inspección dentro de cámara de congelación',
  ctaH: '¿Estanterías dentro de una cámara que nadie quiere revisar?', ctaP: 'Cuéntenos la temperatura, los huecos y el horario de expedición. Planificamos la intervención por fases.',
  faq: [
    ['¿Podéis trabajar con la cámara en funcionamiento?', 'Sí. Planificamos por fases y calles, coordinados con expedición, para que la cámara siga operativa. Solo en montajes completos de cámara nueva trabajamos antes de la puesta en frío.'],
    ['¿El frío afecta a la estantería?', 'El acero galvanizado se comporta bien a −25 °C, pero la condensación en ciclos de apertura, el hielo en las bases y los golpes con carretillas en pasillos estrechos son más frecuentes. Por eso las cámaras necesitan protecciones en cabeceras y una inspección anual rigurosa.'],
    ['¿Qué sectores atendéis?', 'Logística de congelados, cárnicas, lácteos, hortofrutícola, panadería industrial, platos preparados, farmacia y distribución alimentaria con cámaras de refrigeración y congelación.'],
  ],
}, [
  plateRows('Ficha de intervención en frío', [
    ['Temperatura', 'Refrigeración (0 a 8 °C) y congelación (hasta −25 °C)'],
    ['Equipo', 'EPI térmico homologado, herramienta y baterías adaptadas al frío, turnos cortos con rotación'],
    ['Servicios', 'Montaje, inspección UNE-EN 15635, reparación in situ, protecciones y placas de carga'],
    ['Cadena de frío', 'Intervención por fases con la cámara operativa; sin romper la cadena ni parar la expedición'],
    ['Materiales', 'Estantería galvanizada, protecciones MPM aptas para baja temperatura, anclajes adecuados a soleras aisladas'],
  ]),
  splitSec('inspeccion-camara-frio-epi', 'Estantería de paletización azul y naranja dentro de cámara de congelados con puerta de lamas', 'Paletización en cámara de congelados', 'Lo que solo se ve dentro de una cámara', 'Las cámaras concentran los tres factores que dañan una estantería: pasillos estrechos, ritmo alto y visibilidad reducida.', [
    'Protección de cabeceras y puntales en las entradas de cámara',
    'Revisión de anclajes en soleras aisladas y de bases con hielo',
    'Inspección anual con medición completa, no visual',
    'Sustitución de pasadores y largueros sin descargar el congelado',
  ]),
]);

/* =================================================================== 7. ENTREPLANTAS */
const entreplantas = compose({
  slug: '/entreplantas-altillos-metalicos/',
  short: 'Entreplantas y altillos',
  serviceName: 'Entreplantas y altillos metálicos industriales',
  title: 'Entreplantas y altillos metálicos desmontables para naves industriales · Precio y montaje llave en mano | Almar-Rack',
  description: 'Diseño, suministro y montaje de entreplantas y altillos metálicos desmontables para naves industriales: estructura, forjado, barandillas, escaleras y puertas de carga. Duplique su superficie útil sin obra. Guadalajara, Madrid y toda España.',
  h1: 'Entreplantas y altillos metálicos desmontables',
  lead: 'Cuando la nave se queda pequeña, la solución más rápida no es mudarse: es aprovechar la altura. Montamos entreplantas metálicas desmontables con forjado, barandillas, escaleras y puertas de carga, dimensionadas para la carga real que va a soportar.',
  img: 'entreplanta-vista-general', imgAlt: 'Entreplanta metálica con barandilla amarilla y pilares azules en nave industrial', imgCap: 'Entreplanta metálica sobre zona de palés',
  ctaH: '¿Necesita más superficie sin ampliar la nave?', ctaP: 'Con las medidas de la nave, la altura libre y el uso previsto le proponemos una entreplanta con presupuesto cerrado.',
  faq: [
    ['¿Qué carga soporta una entreplanta?', 'Se calcula para el uso previsto: de 350 kg/m² para oficinas o almacén ligero a 1.000 kg/m² o más para palés con transpaleta. El cálculo determina pilares, vigas y forjado y se refleja en su placa de características.'],
    ['¿Necesito licencia de obra?', 'Una entreplanta metálica desmontable es un equipo de trabajo, no una obra civil, pero puede requerir comunicación al ayuntamiento y adaptación de la protección contra incendios según superficie. Le orientamos y preparamos la documentación técnica.'],
    ['¿Cuánto tarda el montaje?', 'Una entreplanta de 200 a 400 m² se monta en una o dos semanas, incluyendo forjado, barandillas y escalera, sin parar la actividad de la planta baja más allá de la zona de trabajo.'],
    ['¿Cuánto cuesta una entreplanta metálica?', 'El precio por m² depende de la carga de uso (no es lo mismo archivo que palés con transpaleta), la luz entre pilares, la altura libre, el tipo de forjado y los accesorios (escaleras, barandillas, puertas de carga). Con las medidas de la nave y el uso previsto le damos un presupuesto cerrado llave en mano, incluido cálculo y certificado.'],
    ['¿Se puede desmontar y trasladar?', 'Sí. Al ser atornillada, se desmonta, se traslada y se vuelve a montar en otra nave, recalculando la placa si cambia la configuración.'],
  ],
}, [
  plateRows('Ficha de la entreplanta', [
    ['Estructura', 'Estructura de entreplanta metálica con pilares y vigas de acero atornillados (desmontable y reubicable), dimensionada por cálculo para la carga de uso'],
    ['Forjado', 'Tablero aglomerado hidrófugo de 38 mm, chapa colaborante, rejilla tramex o panel según uso'],
    ['Seguridad', 'Barandillas, rodapiés, puertas basculantes o pallet-gate de carga, escaleras con contrahuella'],
    ['Usos', 'Almacén sobre zona de picking, oficinas técnicas, vestuarios, taller, archivo, mezzanine sobre estanterías'],
    ['Entrega', 'Memoria de cálculo, placa de carga por m², certificado de montaje'],
  ]),
  gallery([
    ['entreplanta-estructura', 'Estructura de pilares y vigas de una entreplanta metálica en montaje', 'Estructura', 'Pilares y vigas atornilladas'],
    ['entreplanta-forjado-montaje', 'Forjado de entreplanta metálica en fase de montaje', 'Forjado', 'Tablero sobre correas'],
    ['entreplanta-barandilla', 'Entreplanta terminada con barandilla amarilla y puerta de carga', 'Terminada', 'Barandilla y puerta de carga'],
  ]),
]);

/* =================================================================== 8. TRASLADOS */
const traslados = compose({
  slug: '/traslados-desmontaje-estanterias/',
  short: 'Traslados y desmontajes',
  serviceName: 'Traslado y desmontaje de estanterías industriales',
  title: 'Traslado y desmontaje de estanterías industriales · Mudanza de almacén | Almar-Rack',
  description: 'Desmontaje, clasificación, transporte y montaje de estanterías industriales en la nueva nave, con revisión del material y re-certificación de la instalación. Reconfiguración de layout y cambio de niveles. Guadalajara, Madrid y toda España.',
  h1: 'Traslados y desmontajes de estanterías',
  lead: 'Mudar un almacén es el momento en que más estanterías se dañan y más documentación se pierde. Desmontamos con criterio, clasificamos lo que sirve, transportamos y montamos en la nueva nave con placas y certificado nuevos, coordinando las fases con su operativa para no parar más de lo imprescindible.',
  img: 'entreplanta-forjado-montaje', imgAlt: 'Bastidores y largueros desmontados y clasificados en nave, listos para traslado', imgCap: 'Material clasificado tras desmontaje',
  ctaH: '¿Cambia de nave o reorganiza el almacén?', ctaP: 'Cuéntenos huecos, altura y fechas. Planificamos el traslado por fases con presupuesto cerrado.',
  faq: [
    ['¿Se puede reutilizar toda la estantería?', 'Casi siempre la mayor parte. Revisamos puntal por puntal y descartamos los que estén fuera de tolerancia o con corrosión. Le entregamos un inventario del material apto y del que conviene sustituir.'],
    ['¿Podéis hacerlo sin parar el almacén?', 'Sí, por fases: desmontamos y montamos por calles mientras el resto sigue operativo, coordinando con el traslado de la mercancía.'],
    ['¿La instalación trasladada necesita nueva placa?', 'Sí. Al cambiar de solera, configuración o niveles, se recalcula la carga admisible y se emite una placa nueva junto con el certificado de montaje.'],
  ],
}, [
  steps4('Cómo hacemos un traslado', [
    ['Inventario y plan', 'Medimos la instalación actual, definimos el layout de destino y el orden de fases según su expedición.'],
    ['Desmontaje', 'Desmontamos por calles, clasificamos puntales, largueros, diagonales y tornillería, y descartamos lo dañado.'],
    ['Transporte y montaje', 'Transporte en camión propio o de su transportista y montaje en destino con nivelado y anclaje nuevos.'],
    ['Certificación', 'Placas de carga recalculadas, plano as-built y certificado de montaje para el libro del PRSES.'],
  ]),
  plateRows('También hacemos', [
    ['Reconfiguración de niveles', 'Cambio de altura de largueros o número de niveles con recálculo de placa'],
    ['Ampliaciones', 'Añadir módulos o alineaciones compatibles a una instalación existente'],
    ['Desmontaje para retirada', 'Desmontaje, clasificación y gestión del material cuando se cierra una nave'],
    ['Compra-venta de material usado', 'Valoración de estantería de segunda mano apta para reutilizar'],
  ]),
]);

/* =================================================================== 9. MANTENIMIENTO */
const mantenimiento = compose({
  slug: '/mantenimiento-estanterias-industriales/',
  short: 'Mantenimiento',
  serviceName: 'Mantenimiento preventivo y correctivo de estanterías industriales',
  title: 'Mantenimiento de estanterías industriales y metálicas · Preventivo y correctivo | Almar-Rack',
  description: 'Planes de mantenimiento anual de estanterías industriales: inspección UNE-EN 15635, revisiones periódicas, reposición de pasadores, anclajes y protecciones, reparación in situ y atención de urgencias 24/48 h. Un solo proveedor para el ciclo completo. Guadalajara, Madrid y toda España.',
  h1: 'Mantenimiento preventivo y correctivo de estanterías',
  lead: 'Una estantería que se mantiene no colapsa. Nuestro plan anual combina la inspección obligatoria, las revisiones intermedias, la reposición de los elementos que se pierden con el uso y la reparación de los golpes antes de que pasen a rojo. Un solo interlocutor, un solo libro de registro.',
  img: 'inspeccion-medicion-base', imgAlt: 'Técnico midiendo la base de un puntal de estantería en una revisión de mantenimiento', imgCap: 'Revisión de bases y anclajes en mantenimiento',
  ctaH: '¿Quiere olvidarse de las estanterías hasta la próxima visita?', ctaP: 'Dígannos huecos, marcas y turnos. Le proponemos un plan anual con precio cerrado y calendario.',
  faq: [
    ['¿Qué incluye un plan de mantenimiento anual?', 'La inspección experta anual, una o dos revisiones intermedias, reposición de pasadores de seguridad, anclajes y protecciones dañadas, reparación in situ de puntales en ámbar, actualización de placas y libro de registro, y prioridad en urgencias.'],
    ['¿Cómo se factura?', 'Cuota anual cerrada según huecos-palé y número de visitas, con las reparaciones presupuestadas por elemento antes de ejecutar. Sin sorpresas ni mínimos de facturación.'],
    ['¿Y si tenemos varias naves?', 'Coordinamos un calendario único y un informe consolidado por centro, útil para direcciones de operaciones con varias plataformas.'],
  ],
}, [
  plateRows('Plan de mantenimiento Almar-Rack', [
    ['Inspección anual', 'Auditoría UNE-EN 15635 completa con informe pericial y certificado'],
    ['Revisiones intermedias', 'Semestral o trimestral según rotación: pasadores, anclajes, protecciones, daños nuevos'],
    ['Correctivo programado', 'Reparación in situ de puntales en ámbar y sustitución de elementos antes de que pasen a rojo'],
    ['Urgencias', 'Puntal en rojo: intervención en 24/48 h en el eje A-2 y Madrid'],
    ['Documentación', 'Libro de registro del PRSES actualizado, placas de carga vigentes, histórico por calle y módulo'],
    ['Formación', 'Sesión anual para carretilleros y PRSES: qué mirar, qué comunicar, qué no hacer'],
  ]),
  splitSec('inspeccion-tecnico-pasillo', 'Dos técnicos con casco señalando un nivel de estantería durante una revisión', 'Revisión conjunta con el responsable del almacén', 'Lo que se pierde con el uso y nadie repone', 'La mayoría de las no conformidades no son golpes: son elementos pequeños que desaparecen.', [
    'Pasadores de seguridad de larguero: sin ellos, una horquilla levanta el nivel',
    'Anclajes flojos o arrancados tras un impacto',
    'Protecciones deformadas que ya no protegen',
    'Placas de carga desactualizadas tras mover un larguero',
  ], true),
]);

module.exports = [inspeccion, reparacion, protecciones, placas, montaje, frio, entreplantas, traslados, mantenimiento];
