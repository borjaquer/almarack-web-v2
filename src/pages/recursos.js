'use strict';
const { SITE, ICON, img, rivets, pageHero, faqHtml, ctaBand, contactPlate, serviceSchema } = require('../lib');

const prose = (html) => `<section class="sec sec--tight"><div class="wrap"><div class="prose rv">${html}</div></div></section>`;
const plateRows = (h, rows) => `
<section class="sec sec--tight"><div class="wrap"><div class="plate plate--pad rv">${rivets}<div class="plate__title"><h2>${h}</h2></div>
<dl class="rows">${rows.map(([k, v]) => `<div class="row"><dt>${k}</dt><dd>${v}</dd></div>`).join('')}</dl></div></div></section>`;

/* =================================================================== GUÍA PRSES */
const prsesFaq = [
  ['¿Es obligatorio nombrar un PRSES?', 'La UNE-EN 15635 establece que el usuario de la instalación debe designar a una persona responsable de la seguridad de los equipos de almacenaje (PRSES). Aunque una norma UNE no es ley por sí misma, el RD 1215/1997 obliga a mantener los equipos en condiciones seguras y la NTP 852 del INSST señala esta norma como referencia: en la práctica, la Inspección de Trabajo pregunta quién es el PRSES.'],
  ['¿Qué formación necesita el PRSES?', 'Conocer la instalación (sistemas, cargas, placas), saber identificar daños y clasificarlos, gestionar el libro de registro y coordinar las reparaciones. Almar-Rack incluye una sesión de formación al PRSES y a los carretilleros en sus planes de mantenimiento.'],
  ['¿Qué debe contener el libro de registro?', 'Placas de características e informes de montaje; revisiones periódicas con fecha, responsable y resultado; daños comunicados por operarios; inspecciones expertas anuales; reparaciones ejecutadas con su verificación; y cualquier modificación de configuración.'],
  ['¿El PRSES puede ser sancionado personalmente?', 'La responsabilidad administrativa recae en la empresa. Sin embargo, en caso de accidente con lesiones, el art. 316 del Código Penal permite exigir responsabilidad a quienes, estando obligados, no facilitaron los medios para trabajar con seguridad, lo que puede alcanzar a directivos y responsables designados. Un libro de registro al día es la mejor defensa.'],
];
const prses = {
  slug: '/guia-prses-seguridad-almacen/',
  title: 'Guía del PRSES · Persona Responsable de la Seguridad de los Equipos de Almacenaje | Almar-Rack',
  description: 'Qué es el PRSES según la UNE-EN 15635, qué obligaciones tiene, cómo hacer las revisiones periódicas, qué debe contener el libro de registro y cómo protegerse ante la Inspección de Trabajo. Guía práctica de Almar-Rack para jefes de almacén y responsables de PRL.',
  h1: 'Guía del PRSES: el responsable de la seguridad de las estanterías',
  lead: 'La norma UNE-EN 15635 exige que cada almacén designe a una persona responsable de la seguridad de los equipos de almacenaje. Esta guía explica qué debe hacer, con qué frecuencia y qué documentación le va a pedir la Inspección de Trabajo.',
  img: 'inspeccion-tecnico-pasillo', imgAlt: 'Responsable de almacén revisando el estado de los puntales de una alineación', imgCap: 'Revisión periódica del PRSES en pasillo',
  crumbs: [['Inicio', '/'], ['Recursos', '/preguntas-frecuentes/'], ['Guía del PRSES', '/guia-prses-seguridad-almacen/']],
  faq: prsesFaq,
  schema: [{ '@type': 'Article', headline: 'Guía del PRSES: el responsable de la seguridad de las estanterías', author: { '@id': SITE.url + '/#organization' }, publisher: { '@id': SITE.url + '/#organization' }, inLanguage: 'es-ES', about: 'PRSES, UNE-EN 15635, seguridad de estanterías industriales' }],
};
prses.body = pageHero(prses) + plateRows('Ficha del PRSES', [
  ['Nombre completo', 'Persona Responsable de la Seguridad de los Equipos de Almacenaje (PRSES)'],
  ['Origen', 'UNE-EN 15635 «Almacenaje en estanterías metálicas. Uso y mantenimiento del equipo de almacenamiento»'],
  ['Quién suele serlo', 'Jefe de almacén, responsable de mantenimiento o técnico de PRL designado por escrito por la dirección'],
  ['Misión', 'Garantizar que la instalación se usa dentro de su capacidad, se revisa, se repara y queda documentada'],
  ['Herramientas', 'Placas de características, libro de registro, plantilla de revisión, inspección experta anual'],
]) + prose(`
<h2>Las cuatro obligaciones del PRSES</h2>
<h3>1. Conocer y hacer respetar la capacidad</h3>
<p>Comprobar que cada alineación tiene su placa de características, que corresponde a la configuración real y que los carretilleros la respetan. Cualquier cambio de niveles pasa por él.</p>
<h3>2. Organizar los tres niveles de inspección</h3>
<div class="tbl-wrap"><table>
<thead><tr><th>Nivel</th><th>Quién</th><th>Cuándo</th><th>Qué</th></tr></thead>
<tbody>
<tr><td>Inspección visual continua</td><td>Carretilleros y operarios</td><td>Cada turno</td><td>Comunicar de inmediato cualquier golpe, larguero levantado, pasador ausente o palé mal colocado</td></tr>
<tr><td>Revisión periódica</td><td>PRSES</td><td>Semanal a mensual según rotación</td><td>Recorrido documentado con plantilla; clasificar daños nuevos por semáforo; ordenar descarga en rojo</td></tr>
<tr><td>Inspección experta</td><td>Técnico competente independiente</td><td>Mínimo cada 12 meses</td><td>Medición completa, informe pericial, certificado, plan de reparación</td></tr>
</tbody></table></div>
<h3>3. Actuar según el semáforo</h3>
<ul>
<li><strong>Verde:</strong> anotar y vigilar.</li>
<li><strong>Ámbar:</strong> ordenar la reparación en un máximo de 4 semanas; prohibir recargar el módulo una vez vaciado.</li>
<li><strong>Rojo:</strong> descargar de inmediato los niveles afectados, balizar el pasillo y no reutilizar hasta reparar.</li>
</ul>
<h3>4. Mantener el libro de registro</h3>
<p>Es lo primero que pide un inspector. Debe recoger, con fecha y firma: la documentación de montaje y las placas; cada revisión periódica y su resultado; los partes de daño comunicados; las inspecciones anuales; las reparaciones ejecutadas y su verificación; y toda modificación de la instalación.</p>
<h2>Plantilla de revisión periódica</h2>
<p>Por cada calle y módulo: puntales (golpes, deformación con regla de 1 m), diagonales, largueros (flecha, pasadores de seguridad presentes), anclajes y placas base, protecciones, placa de características visible y correcta, palés en buen estado y bien centrados, pasillo libre. Tiene el <a href="/checklist-revision-estanterias/">checklist completo de revisión</a> en esta web; pídanos también la plantilla en PDF por WhatsApp.</p>
<h2>Lo que pide la Inspección de Trabajo</h2>
<ul>
<li>Nombramiento del PRSES por escrito</li>
<li>Placas de características en todas las alineaciones</li>
<li>Libro de registro con revisiones periódicas y reparaciones</li>
<li>Informe y certificado de la inspección experta de los últimos 12 meses</li>
<li>Evaluación de riesgos que contemple el almacenaje y la formación de los carretilleros</li>
</ul>
`) + faqHtml(prsesFaq) + ctaBand('¿Acaba de ser nombrado PRSES y hereda un almacén sin papeles?', 'Empezamos por una inspección completa y le dejamos el libro de registro montado. Desde ahí, todo es mantenimiento.') + contactPlate();

/* =================================================================== NORMATIVA */
const normFaq = [
  ['¿Qué es la UNE-EN 15635?', 'Es la norma europea (EN 15635, adoptada en España como UNE-EN 15635) que regula el uso y mantenimiento de las estanterías metálicas de almacenamiento: cómo deben usarse, quién es responsable de su seguridad (el PRSES), cómo y cada cuánto deben inspeccionarse, cómo clasificar los daños (verde, ámbar, rojo) y qué hacer en cada caso. No trata el cálculo (eso es la UNE-EN 15512) ni el montaje (UNE-EN 15620).'],
  ['¿La UNE-EN 15635 es de obligado cumplimiento?', 'Por sí misma no, pero el RD 1215/1997 obliga al empresario a mantener los equipos de trabajo seguros y a seguir las «normas técnicas» aplicables; el INSST, en la NTP 852, identifica la UNE-EN 15635 como esa referencia. En la práctica, la Inspección de Trabajo y los tribunales la usan como criterio para determinar si el mantenimiento fue adecuado.'],
  ['¿Dónde se puede descargar la UNE-EN 15635?', 'Es una norma europea (EN 15635) adoptada en España por UNE; el texto oficial se compra en la tienda de UNE (une.org) o en AENOR y no puede distribuirse gratuitamente. Lo que sí es público es la NTP 852 del INSST, que resume sus criterios y se descarga gratis en insst.es. En esta página tiene explicados los puntos que afectan al usuario de las estanterías.'],
  ['¿Qué diferencia hay entre UNE-EN 15512, 15620 y 15635?', 'La 15512 regula el cálculo y diseño estructural (cuánto aguanta); la 15620 las tolerancias de fabricación y montaje (cómo debe quedar instalada); la 15635 el uso, la inspección y el mantenimiento durante la vida de la instalación (cómo se conserva segura). Almar-Rack trabaja con las tres: monta según 15620, calcula placas según 15512 e inspecciona según 15635.'],
  ['¿Cuál es la sanción por un accidente con una estantería sin mantenimiento?', 'Multa administrativa (LISOS) de 2.451 a 49.180 € por infracción grave y hasta 983.736 € por muy grave; recargo del 30–50 % de las prestaciones de la Seguridad Social a cargo de la empresa; responsabilidad civil por daños; y posible responsabilidad penal de los responsables (arts. 316–317 del Código Penal).'],
];
const normativa = {
  slug: '/normativa-estanterias-industriales/',
  title: 'Normativa de estanterías industriales: RD 1215/1997, UNE-EN 15635, 15512, 15620 y NTP 852 | Almar-Rack',
  description: 'Guía clara de la normativa aplicable a estanterías metálicas en España: RD 1215/1997, Ley 31/1995 de PRL, UNE-EN 15635 (uso y mantenimiento), UNE-EN 15512 (cálculo), UNE-EN 15620 (tolerancias), UNE-EN 15629 (especificación) y NTP 852 del INSST. Obligaciones, plazos y sanciones.',
  h1: 'Normativa de estanterías industriales en España',
  lead: 'Qué ley obliga, qué norma técnica concreta cómo cumplirla y qué documento aplica la Inspección de Trabajo. Todo lo que un director de operaciones o responsable de PRL necesita saber, sin jerga.',
  img: 'protecciones-nave-fragadis', imgAlt: 'Nave logística con alineaciones de estantería de paletización y cabeceras protegidas', imgCap: 'Instalación conforme: placas, protecciones y pasadores',
  crumbs: [['Inicio', '/'], ['Recursos', '/preguntas-frecuentes/'], ['Normativa', '/normativa-estanterias-industriales/']],
  faq: normFaq,
  schema: [{ '@type': 'Article', headline: 'Normativa de estanterías industriales en España', author: { '@id': SITE.url + '/#organization' }, publisher: { '@id': SITE.url + '/#organization' }, inLanguage: 'es-ES' }],
};
normativa.body = pageHero(normativa) + prose(`
<h2>Marco legal: lo que obliga</h2>
<div class="tbl-wrap"><table>
<thead><tr><th>Texto</th><th>Qué es</th><th>Qué exige respecto a las estanterías</th></tr></thead>
<tbody>
<tr><td><strong>Ley 31/1995</strong> de Prevención de Riesgos Laborales</td><td>Ley marco</td><td>Deber general de protección del empresario, evaluación de riesgos, formación e información a los trabajadores.</td></tr>
<tr><td><strong>RD 1215/1997</strong> equipos de trabajo</td><td>Real Decreto</td><td>Las estanterías son equipos de trabajo: deben mantenerse en condiciones seguras durante toda su vida, con comprobaciones periódicas por personal competente y registro documental (art. 4 y Anexo II).</td></tr>
<tr><td><strong>RD 486/1997</strong> lugares de trabajo</td><td>Real Decreto</td><td>Vías de circulación, separación de peatones y vehículos, señalización: base para barreras y pasos peatonales.</td></tr>
<tr><td><strong>LISOS</strong> (RDL 5/2000)</td><td>Régimen sancionador</td><td>Tipifica como grave o muy grave no mantener los equipos de trabajo; multas de 2.451 € a 983.736 €.</td></tr>
<tr><td><strong>Código Penal</strong> arts. 316–317</td><td>Ley Orgánica</td><td>Delito contra la seguridad de los trabajadores por no facilitar los medios necesarios, con penas de prisión y multa.</td></tr>
</tbody></table></div>

<h2>Normas técnicas: cómo cumplir</h2>
<div class="tbl-wrap"><table>
<thead><tr><th>Norma</th><th>Fase</th><th>Contenido clave</th></tr></thead>
<tbody>
<tr><td><strong>UNE-EN 15629</strong></td><td>Especificación</td><td>Cómo definir la instalación: cargas, palés, carretillas, pasillos, tolerancias de solera.</td></tr>
<tr><td><strong>UNE-EN 15512</strong></td><td>Diseño y cálculo</td><td>Principios de cálculo estructural de estanterías de paletización regulables; base del cálculo de placas de carga.</td></tr>
<tr><td><strong>UNE-EN 15620</strong></td><td>Montaje</td><td>Tolerancias de fabricación, montaje y deformación admisibles; verticalidad y nivelación.</td></tr>
<tr><td><strong>UNE-EN 15635</strong></td><td>Uso y mantenimiento</td><td>PRSES, tres niveles de inspección, semáforo de daños (verde &lt;3 mm, ámbar 3–6 mm, rojo &gt;6 mm con regla de 1 m), plazos de reparación, placas de características, libro de registro.</td></tr>
<tr><td><strong>UNE-EN 15878</strong></td><td>Terminología</td><td>Vocabulario común: puntal, bastidor, larguero, diagonal, módulo, alineación.</td></tr>
<tr><td><strong>NTP 852</strong> (INSST)</td><td>Guía técnica</td><td>«Almacenamiento en estanterías metálicas»: aplica en España la UNE-EN 15635 y describe las inspecciones y responsabilidades.</td></tr>
</tbody></table></div>

<h2>Calendario mínimo de cumplimiento</h2>
<ul>
<li><strong>En el montaje:</strong> certificado de montaje según UNE-EN 15620 y placa de características por alineación.</li>
<li><strong>Cada turno:</strong> inspección visual por operarios y comunicación de golpes.</li>
<li><strong>Cada semana o mes:</strong> revisión periódica documentada del PRSES.</li>
<li><strong>Cada 12 meses:</strong> inspección experta por técnico competente con informe y certificado.</li>
<li><strong>Tras cualquier daño ámbar:</strong> reparación en 4 semanas. <strong>Tras cualquier daño rojo:</strong> descarga inmediata.</li>
<li><strong>Tras cualquier cambio de configuración o traslado:</strong> recálculo de placa y nueva inspección.</li>
</ul>
<p>Almar-Rack ejecuta cada uno de estos hitos: <a href="/montaje-estanterias-industriales/">montaje certificado</a>, <a href="/placas-de-caracteristicas-estanterias/">placas de carga</a>, <a href="/inspecciones-une-en-15635/">inspección anual</a>, <a href="/reparacion-estanterias-in-situ/">reparación in situ</a> y <a href="/guia-prses-seguridad-almacen/">apoyo al PRSES</a>.</p>
`) + faqHtml(normFaq) + ctaBand('¿No sabe en qué punto de cumplimiento está su almacén?', 'Una inspección completa lo aclara en una jornada y le deja el plan de acción por escrito.') + contactPlate();

/* =================================================================== FAQ GLOBAL */
const allFaq = [
  ['¿Qué es Almar-Rack?', 'Almar-Rack S.L. es una empresa de Guadalajara especializada en mantenimiento de estanterías industriales: inspección técnica UNE-EN 15635, reparación de puntales in situ, protecciones MPM, placas de características, montaje, entreplantas y traslados. Es independiente de los fabricantes y trabaja con todas las marcas. Su equipo técnico acumula más de 15 años de experiencia en el sector y atiende de lunes a domingo de 8:00 a 20:00 en el 660 82 34 82.'],
  ['¿En qué zona trabaja Almar-Rack?', 'Base operativa en Guadalajara, con intervención urgente en 24/48 h y sin recargo por desplazamiento en el Corredor del Henares (Marchamalo, Cabanillas, Azuqueca, Alcalá, Torrejón, Coslada, San Fernando) y la Comunidad de Madrid. Proyectos planificados en toda España (por ejemplo, protecciones en Alicante).'],
  ['¿Cuánto tarda en responder Almar-Rack a una urgencia?', 'Valoración orientativa por WhatsApp en menos de 2 horas laborables e intervención en 24/48 h en el eje A-2 y Madrid para puntales en nivel rojo.'],
  ['¿Cuánto cuesta una inspección de estanterías?', 'Se presupuesta por huecos-palé, bastidores y niveles, con precio cerrado antes de empezar. La primera visita es gratuita. Con fotos y el número aproximado de huecos damos una cifra orientativa el mismo día.'],
  ['¿Cuánto cuesta reparar un puntal?', 'Se presupuesta por puntal según el tipo de daño y la altura. La reparación in situ cuesta hasta un 70 % menos que sustituir el bastidor porque evita recambio, transporte, grúa y vaciado de huecos.'],
  ['¿Hay que vaciar la estantería para inspeccionar o reparar?', 'No. La inspección se hace en pasillos activos y la reparación in situ apuntala la carga sin descargar palés. Solo en daños de nivel rojo la norma obliga a descargar los niveles afectados hasta reparar, y esa reparación se hace el mismo día o en 24/48 h.'],
  ['¿Qué marcas de estanterías repara y monta Almar-Rack?', 'Todas: Mecalux, AR Racking, Esmena, Permar, Polypal, Stow, Jungheinrich, SSI Schäfer y marcas descatalogadas. Cuando hace falta recambio, se localiza compatible o se certifica una solución equivalente.'],
  ['¿Qué es el semáforo de daños UNE-EN 15635?', 'Un sistema de clasificación de la deformación de puntales medida con regla de 1 m: verde (menos de 3 mm, registrar), ámbar (3 a 6 mm, reparar en 4 semanas) y rojo (más de 6 mm, cizalladura o soldadura rota: descargar de inmediato). En el plano transversal los límites son 5 y 10 mm.'],
  ['¿Qué es el PRSES?', 'La Persona Responsable de la Seguridad de los Equipos de Almacenaje que la UNE-EN 15635 exige designar en cada almacén. Organiza las revisiones periódicas, mantiene el libro de registro y ordena las reparaciones.'],
  ['¿Es obligatoria la placa de características?', 'Sí. Cada alineación debe llevar una placa visible con la carga por nivel y por módulo y las distancias entre largueros. Si no existe o no coincide con la configuración real, es una no conformidad y una fuente de responsabilidad.'],
  ['¿Qué son las protecciones MPM?', 'Protecciones de polímero de memoria elástica (protectores de puntal, barreras, cabeceras, bolardos, defensas de muelle, pasos peatonales) que absorben los impactos de carretilla y recuperan su forma sin dañar la solera. Almar-Rack es distribuidor e instalador oficial de MPM Flexible Protections.'],
  ['¿Trabaja Almar-Rack en cámaras de frío?', 'Sí. Monta, inspecciona y repara estanterías dentro de cámaras de refrigeración y congelación hasta −25 °C, por fases y sin romper la cadena de frío.'],
  ['¿Hace Almar-Rack entreplantas?', 'Sí. Diseña, suministra y monta entreplantas y altillos metálicos desmontables con forjado, barandillas, escaleras y puertas de carga, con memoria de cálculo y placa de carga.'],
  ['¿Qué documentación entrega Almar-Rack?', 'Informe pericial de inspección con plano georreferenciado y fotos, certificado de inspección, certificados de reparación por elemento, memoria de cálculo y placas de características, certificado de montaje y plano as-built, y libro de registro del PRSES actualizado.'],
  ['¿Cómo contacto con Almar-Rack?', 'Por WhatsApp o teléfono al +34 660 82 34 82 (de lunes a domingo, 8:00–20:00), en el 949 00 70 51, por correo en info@almarack.com o en su sede de C/ Alvarfáñez de Minaya 1B, 19001 Guadalajara. Responsable técnico: Diego Núñez Narváez.'],
];
const faqPage = {
  slug: '/preguntas-frecuentes/',
  title: 'Preguntas frecuentes sobre inspección, reparación y mantenimiento de estanterías | Almar-Rack',
  description: 'Respuestas claras sobre inspección UNE-EN 15635, reparación de puntales, protecciones MPM, placas de carga, PRSES, plazos, precios, marcas y zona de trabajo de Almar-Rack, empresa de mantenimiento de estanterías industriales en Guadalajara y Madrid.',
  h1: 'Preguntas frecuentes',
  lead: 'Lo que directores de operaciones, jefes de almacén y responsables de PRL nos preguntan antes de contratar. Si su duda no está aquí, un técnico se la responde por WhatsApp.',
  img: 'inspeccion-tecnico-pasillo', imgAlt: 'Técnicos de Almar-Rack resolviendo dudas junto a una estantería', imgCap: 'Dudas resueltas a pie de estantería',
  crumbs: [['Inicio', '/'], ['Recursos', '/preguntas-frecuentes/'], ['Preguntas frecuentes', '/preguntas-frecuentes/']],
  faq: allFaq,
};
faqPage.body = pageHero(faqPage) + faqHtml(allFaq, 'Todas las respuestas, en un solo sitio.') + ctaBand('¿Su pregunta es sobre su almacén en concreto?', 'Mándenos fotos y datos por WhatsApp; se la responde un técnico, no un formulario.') + contactPlate();


/* =================================================================== CHECKLIST */
const chkFaq = [
  ['¿Con qué frecuencia debo pasar este checklist?', 'La UNE-EN 15635 habla de revisiones periódicas «a intervalos regulares» definidos por el PRSES según el riesgo. En almacenes con tráfico intenso de carretillas lo habitual es semanal; en almacenes de baja rotación, mensual. Además, cualquier golpe debe comunicarse y registrarse el mismo día.'],
  ['¿Sustituye este checklist a la inspección anual?', 'No. Es la revisión interna del PRSES. La inspección experta anual la debe hacer una persona técnicamente competente e independiente, con medición instrumental e informe pericial. Este checklist sirve para detectar daños entre inspecciones y para tener el libro de registro al día.'],
  ['¿Qué hago si encuentro un daño?', 'Mida la deformación con una regla de 1 m: menos de 3 mm, anotar y vigilar; 3–6 mm, reparar en 4 semanas; más de 6 mm, cizalladura o soldadura rota, descargar el módulo de inmediato y balizar. En los dos últimos casos, mándenos una foto por WhatsApp y le decimos qué hay que sustituir.'],
  ['¿Me podéis enviar el checklist en PDF?', 'Sí. Escríbanos por WhatsApp al 660 82 34 82 y se lo enviamos en PDF para imprimir, junto con la plantilla del libro de registro del PRSES, sin compromiso.'],
];
const checklistPage = {
  slug: '/checklist-revision-estanterias/',
  title: 'Checklist de revisión de estanterías metálicas (PRSES) · Formato de inspección periódica | Almar-Rack',
  description: 'Checklist gratuito para la revisión periódica de estanterías industriales según UNE-EN 15635: puntales, largueros, pasadores, anclajes, placas de carga, protecciones y pasillos. Qué mirar, cómo medir y qué hacer con cada daño. Para el PRSES y el jefe de almacén.',
  h1: 'Checklist de revisión de estanterías metálicas (formato de inspección de racks)',
  lead: 'El formato de revisión periódica que la UNE-EN 15635 pide al PRSES, punto por punto, válido para estanterías de Mecalux, AR Racking, Esmena o cualquier otra marca. Imprímalo, recorra las calles y anote el resultado en el libro de registro. Si algo sale en ámbar o rojo, ya sabe a quién llamar.',
  img: 'inspeccion-tecnico-pasillo', imgAlt: 'Responsable de almacén revisando puntales durante la revisión periódica', imgCap: 'Revisión periódica del PRSES',
  crumbs: [['Inicio', '/'], ['Recursos', '/preguntas-frecuentes/'], ['Checklist de revisión', '/checklist-revision-estanterias/']],
  faq: chkFaq,
  schema: [{ '@type': 'HowTo', name: 'Cómo hacer la revisión periódica de estanterías metálicas según UNE-EN 15635', totalTime: 'PT1H', tool: [{ '@type': 'HowToTool', name: 'Regla de 1 metro' }, { '@type': 'HowToTool', name: 'Galga o calibre' }, { '@type': 'HowToTool', name: 'Libro de registro del PRSES' }], step: [
    { '@type': 'HowToStep', name: 'Preparar', text: 'Imprima el checklist, identifique cada calle y módulo según el plano y lleve regla de 1 m y galga.' },
    { '@type': 'HowToStep', name: 'Puntales', text: 'En cada puntal expuesto, apoye la regla de 1 m y mida la deformación máxima: <3 mm verde, 3–6 mm ámbar, >6 mm rojo. Revise bases, placas base y anclajes.' },
    { '@type': 'HowToStep', name: 'Largueros y pasadores', text: 'Compruebe flecha permanente, golpes en el enganche y que todos los pasadores de seguridad están colocados.' },
    { '@type': 'HowToStep', name: 'Diagonales y arriostrados', text: 'Busque diagonales dobladas, sueltas o con soldadura rota.' },
    { '@type': 'HowToStep', name: 'Placas, protecciones y pasillos', text: 'Placa de características visible y correcta, protecciones íntegras, pasillos libres y palés bien colocados.' },
    { '@type': 'HowToStep', name: 'Registrar y actuar', text: 'Anote el resultado con fecha y firma en el libro de registro. Ámbar: reparar en 4 semanas. Rojo: descargar y balizar de inmediato.' },
  ] }],
};
const chk = (h, items) => `<h3>${h}</h3><ul class="checklist">${items.map((i) => `<li>${i}</li>`).join('')}</ul>`;
checklistPage.body = pageHero(checklistPage) + `
<section class="sec sec--tight"><div class="wrap"><div class="plate plate--pad rv"><div class="plate__title"><h2>Checklist de revisión periódica</h2><span class="field">UNE-EN 15635 · revisión del PRSES</span></div>
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:28px 40px">
<div>${chk('Puntales y bastidores', ['Sin deformación >3 mm con regla de 1 m en el plano del bastidor (>5 mm en el transversal)', 'Sin cortes, cizalladuras, pandeo ni soldaduras rotas', 'Placa base recta y apoyada; anclajes presentes y apretados', 'Calzos de nivelación en su sitio; verticalidad correcta a simple vista'])}</div>
<div>${chk('Largueros', ['Sin flecha permanente visible una vez descargado', 'Enganches sin deformación; sin golpes de horquilla', 'Pasadores o clips de seguridad colocados en ambos extremos', 'Sin niveles movidos respecto a la placa de características'])}</div>
<div>${chk('Diagonales y arriostrados', ['Diagonales rectas, sin abolladuras ni desmontadas', 'Tornillería completa y apretada', 'Arriostrados verticales y horizontales íntegros'])}</div>
<div>${chk('Placas de características', ['Una placa visible por alineación', 'Carga por nivel y por módulo coherente con la configuración real', 'Distancias entre niveles iguales a las de la placa'])}</div>
<div>${chk('Protecciones y pasillos', ['Protectores de puntal y cabeceras íntegros y anclados', 'Barreras, bolardos y pasos peatonales sin daños', 'Pasillos libres; ancho suficiente para la carretilla', 'Señalización y marcado de suelo visibles'])}</div>
<div>${chk('Carga y uso', ['Palés en buen estado, centrados y sin sobresalir', 'Sin sobrecarga respecto a la placa', 'Sin mercancía apoyada en diagonales ni sobre largueros sueltos', 'Golpes de la semana comunicados por los carretilleros'])}</div>
</div>
<div class="hero__cta" style="margin-top:28px"><a class="btn btn--orange" href="${SITE.wa}" target="_blank" rel="noopener">${ICON.wa}Pedir el checklist en PDF</a><a class="btn btn--ghost" href="/guia-prses-seguridad-almacen/">Guía del PRSES ${ICON.arrow}</a></div>
</div></div></section>` + prose(`
<h2>Qué hacer con cada resultado</h2>
<div class="tbl-wrap"><table>
<thead><tr><th>Resultado</th><th>Qué significa</th><th>Qué hacer</th></tr></thead>
<tbody>
<tr><td><span class="state state--verde">Verde</span></td><td>Sin daño o deformación &lt; 3 mm</td><td>Anotar en el libro de registro y revisar en la siguiente ronda.</td></tr>
<tr><td><span class="state state--ambar">Ámbar</span></td><td>Deformación 3–6 mm o elemento dañado sin riesgo inmediato</td><td>Programar la reparación antes de 4 semanas. No volver a cargar el módulo una vez vaciado. <a href="/reparacion-estanterias-in-situ/">Pedir sustitución del tramo</a>.</td></tr>
<tr><td><span class="state state--rojo">Rojo</span></td><td>Deformación &gt; 6 mm, corte, cizalladura, soldadura rota o diagonal doblada</td><td>Descargar los niveles afectados de inmediato, balizar el pasillo y llamar. Urgencias en 24/48 h.</td></tr>
</tbody></table></div>
<h2>Revisión interna e inspección experta no son lo mismo</h2>
<p>Este checklist es la <strong>revisión periódica</strong> que hace el PRSES con medios propios. La <strong>inspección experta anual</strong> la realiza un técnico competente e independiente con instrumental, y termina en un informe pericial y un certificado. Las dos son obligatorias y se complementan: la revisión detecta el daño entre inspecciones; la inspección certifica el estado de la instalación ante la Inspección de Trabajo. <a href="/inspecciones-une-en-15635/">Cómo es nuestra inspección técnica</a>.</p>
`) + faqHtml(chkFaq) + ctaBand('¿Ha salido algo en ámbar o rojo?', 'Mándenos la foto por WhatsApp. Le decimos qué tramo hay que sustituir, cuánto cuesta y cuándo podemos ir.', true) + contactPlate();

/* =================================================================== PROYECTOS */
const proyectos = {
  slug: '/proyectos/',
  title: 'Proyectos realizados · Fotos reales de montajes, protecciones e inspecciones | Almar-Rack',
  description: 'Intervenciones reales de Almar-Rack fotografiadas por su propio equipo: protecciones MPM en plataforma logística de Alicante, muelles en Quer, pasos peatonales en planta de envases, entreplantas, inspecciones en cámaras de frío y reparación de puntales.',
  h1: 'Proyectos realizados',
  lead: 'Ninguna foto de catálogo. Todo lo que ve aquí lo ha montado, protegido, inspeccionado o reparado nuestro equipo. Por confidencialidad no publicamos el nombre de los clientes salvo autorización.',
  img: 'protecciones-nave-fragadis', imgAlt: 'Estanterías de gran altura con cabeceras protegidas en plataforma logística', imgCap: 'Plataforma logística · Alicante',
  crumbs: [['Inicio', '/'], ['Proyectos', '/proyectos/']],
  faq: [],
};
const proj = (title, place, work, photos) => `
<section class="sec sec--tight"><div class="wrap">
  <div class="plate plate--pad rv" style="margin-bottom:14px">${rivets}<div class="rows" style="grid-template-columns:repeat(3,1fr);gap:0 24px">
    <div class="row" style="grid-template-columns:1fr;gap:2px;border:0"><dt>Proyecto</dt><dd style="font:700 1.25rem/1.15 var(--disp);color:var(--ink)">${title}</dd></div>
    <div class="row" style="grid-template-columns:1fr;gap:2px;border:0"><dt>Ubicación</dt><dd>${place}</dd></div>
    <div class="row" style="grid-template-columns:1fr;gap:2px;border:0"><dt>Trabajo</dt><dd>${work}</dd></div>
  </div></div>
  <div class="gal rv">${photos.map(([s, alt, cap]) => `<figure>${img(s, alt)}<figcaption>${cap}</figcaption></figure>`).join('')}</div>
</div></section>`;
proyectos.body = pageHero(proyectos)
  + proj('Protecciones MPM en plataforma logística', 'Alicante', 'Cabeceras, protectores de puntal y barreras en 28 alineaciones nuevas', [
    ['protecciones-cabecera-pasillo', 'Cabecera de pasillo con protección MPM', 'Cabecera protegida'],
    ['protecciones-pasillo-puntales-2', 'Pasillo con protectores de puntal MPM en todos los bastidores', 'Protectores de puntal'],
    ['protecciones-protector-puntal-mpm', 'Detalle de protector de puntal MPM amarillo', 'Detalle de protector'],
    ['protecciones-nave-altura', 'Alineaciones de gran altura con bases protegidas', 'Gran altura'],
    ['protecciones-poster-seguridad', 'Cartel de seguridad industrial certificada de Almar-Rack en obra', 'Seguridad certificada'],
  ])
  + proj('Segregación de tráfico en planta de envases', 'Corredor del Henares', 'Barreras de pasillo, pasos peatonales, protección de columnas y de maquinaria', [
    ['protecciones-paso-peatonal', 'Paso peatonal con barandillas MPM', 'Paso peatonal'],
    ['protecciones-barrera-nave-envases', 'Barrera MPM a lo largo de vía de carretillas', 'Barrera de pasillo'],
    ['protecciones-instalacion-operario', 'Operario de Almar-Rack anclando barandilla MPM', 'Instalación'],
    ['protecciones-protector-columna', 'Protección de columna en polímero amarillo', 'Columna protegida'],
    ['protecciones-jaula-maquina', 'Barrera protegiendo jaula de máquina', 'Maquinaria protegida'],
    ['protecciones-nave-envases-pasillo', 'Vía de carretillas delimitada con barreras MPM', 'Vía delimitada'],
  ])
  + proj('Muelles y accesos protegidos', 'Conway · Quer (Guadalajara)', 'Bolardos MPM, barreras en puertas de muelle y protección de puesto de trabajo', [
    ['protecciones-bolardo-mpm', 'Bolardo MPM junto a puerta de nave', 'Bolardo en acceso'],
    ['protecciones-bolardo-mpm-detalle', 'Detalle de bolardo MPM anclado', 'Anclaje'],
    ['protecciones-muelle-carga', 'Barrera baja MPM protegiendo puerta seccional de muelle', 'Puerta de muelle'],
    ['protecciones-conwey-quer-barrera', 'Montador instalando barrera MPM junto a puerta', 'Instalación'],
    ['protecciones-puesto-trabajo', 'Bolardo protegiendo puesto de trabajo junto a vía de carretillas', 'Puesto de trabajo'],
  ])
  + proj('Entreplanta metálica sobre zona de palés', 'Corredor del Henares', 'Estructura, forjado, barandillas y puerta de carga', [
    ['entreplanta-estructura', 'Estructura de entreplanta metálica', 'Estructura'],
    ['entreplanta-forjado-montaje', 'Forjado de entreplanta en montaje', 'Forjado'],
    ['entreplanta-vista-general', 'Entreplanta terminada con barandilla', 'Terminada'],
    ['entreplanta-barandilla', 'Barandilla y puerta de carga de entreplanta', 'Barandilla'],
  ])
  + proj('Inspección y diagnóstico de daños', 'Madrid y Guadalajara', 'Inspección UNE-EN 15635, clasificación de daños y reparación in situ', [
    ['inspeccion-camara-frio-epi', 'Técnico con EPI térmico en cámara de congelación', 'Cámara a −25 °C'],
    ['inspeccion-medicion-base', 'Medición de puntal con regla y galga', 'Medición'],
    ['dano-puntal-base-golpe', 'Base de puntal deformada por impacto', 'Nivel rojo'],
    ['dano-puntal-corte', 'Puntal cortado por impacto de carretilla', 'Sustitución de tramo'],
    ['inspeccion-medicion-base', 'Revisión de base y anclaje de puntal', 'Anclajes'],
  ])
  + ctaBand('¿Quiere ver cómo quedaría en su nave?', 'Envíenos fotos de sus pasillos y cabeceras. Le proponemos protecciones, reparaciones o montaje con presupuesto cerrado.') + contactPlate();

module.exports = [prses, normativa, faqPage, proyectos, checklistPage];
