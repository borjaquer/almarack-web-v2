'use strict';
const { SITE, ICON, img, faqHtml, contactPlate } = require('../lib');

const faq = [
  ['¿Trabajáis en toda España o solo en Madrid y Guadalajara?', 'En toda España. La base operativa está en Guadalajara (eje A-2), lo que permite urgencias en 24/48 h en el Corredor del Henares y la Comunidad de Madrid, pero los equipos se desplazan a cualquier comunidad autónoma: hemos instalado protecciones en Alicante, montado en Castilla-La Mancha y Aragón y trabajamos con operadores logísticos con naves en varias provincias.'],
  ['¿Es obligatoria la inspección anual de estanterías industriales?', 'Sí. El RD 1215/1997 obliga a mantener los equipos de trabajo en condiciones seguras y la NTP 852 del INSST remite a la norma UNE-EN 15635: inspección por técnico competente al menos cada 12 meses, más revisiones internas del PRSES.'],
  ['¿Trabajáis con estanterías de cualquier fabricante?', 'Sí. Somos independientes y multimarca: Mecalux, AR Racking, Esmena, Permar, Polypal, Stow, Jungheinrich, SSI Schäfer y marcas descatalogadas. No vendemos racks nuevos, así que no tenemos incentivo para dictaminar sustituciones innecesarias.'],
  ['¿Qué ocurre si un puntal está en nivel rojo?', 'La UNE-EN 15635 exige descargar de inmediato los niveles afectados, balizar el pasillo y reparar antes de volver a cargar. Con reparación in situ apuntalamos la carga y sustituimos el tramo dañado en unos 45 minutos, sin vaciar la estantería.'],
  ['¿Podéis trabajar dentro de cámaras de congelación?', 'Sí. Montamos, reparamos e inspeccionamos estanterías dentro de cámaras a −25 °C con EPI térmico y por fases, sin romper la cadena de frío.'],
  ['¿Quién puede inspeccionar las estanterías y cada cuánto?', 'Una persona técnicamente competente e independiente, al menos cada 12 meses (UNE-EN 15635, NTP 852). Entre inspecciones, el PRSES hace revisiones periódicas con un checklist; le dejamos el nuestro gratis en la web.'],
  ['¿Cuánto cuesta una inspección técnica UNE-EN 15635?', 'Se presupuesta por huecos-palé, bastidores y niveles, con precio cerrado antes de empezar y primera visita gratuita. Con unas fotos por WhatsApp damos una valoración orientativa en menos de 2 horas.'],
];

const cities = ['Madrid', 'Guadalajara', 'Barcelona', 'Valencia', 'Sevilla', 'Zaragoza', 'Málaga', 'Alicante', 'Murcia', 'Bilbao', 'Valladolid', 'Toledo', 'Burgos', 'Vitoria', 'Pamplona', 'Logroño', 'Santander', 'Oviedo', 'A Coruña', 'Vigo', 'Badajoz', 'Córdoba', 'Granada', 'Palma', 'Las Palmas', 'Tenerife', 'Tarragona', 'Castellón', 'Albacete', 'Ciudad Real', 'León', 'Salamanca', 'Huesca', 'Lleida', 'Girona'];
const marq = `<div class="marq" aria-label="Ciudades con servicio"><div class="marq__t">${cities.concat(cities).map((c) => `<span>${c}</span>`).join('')}</div></div>`;

const panel = (n, h2, lead, facts, list, imgSlug, alt, href, cap, rev) => `
<article class="feat${rev ? ' feat--rev' : ''} rv">
  <figure class="feat__media">${img(imgSlug, alt, { sizes: '(max-width: 900px) 100vw, 50vw' })}<figcaption>${cap}</figcaption></figure>
  <div>
    <div class="feat__n" aria-hidden="true">${n}</div>
    <h2>${h2}</h2>
    <p class="lead">${lead}</p>
    <div class="feat__facts">${facts.map(([b, s]) => `<div><b>${b}</b>${s}</div>`).join('')}</div>
    <nav class="feat__list" aria-label="Detalles">${list.map(([k, t, s, hh]) => `<a href="${hh}"><span class="k">${k}</span><span>${t}<small>${s}</small></span>${ICON.arrow}</a>`).join('')}</nav>
    <div class="feat__cta"><a class="btn btn--orange" href="${href}">Ver el servicio ${ICON.arrow}</a><a class="btn btn--ghost" href="${SITE.wa}" target="_blank" rel="noopener">${ICON.wa}WhatsApp</a></div>
  </div>
</article>`;

const body = `
<section class="hero">
  <div class="hero__bg"><div class="hero__glow" aria-hidden="true"></div>
    <video id="heroVid" poster="/assets/hero-poster-1920.webp" autoplay loop muted playsinline preload="none" aria-hidden="true"><source data-src="/assets/hero-1080.webm" type="video/webm"><source data-src="/assets/hero-1080.mp4" type="video/mp4"></video>
  </div>
  <div class="wrap hero__in">
    <p class="tag h-rv">Inspección · Reparación · Protecciones · Montaje</p>
    <h1 class="rv-l in"><span class="w"><span>Estanterías</span></span> <span class="w"><span>seguras.</span></span><br><span class="w"><span class="o">Sin parar</span></span> <span class="w"><span>su almacén.</span></span><br><span class="w"><span class="thin">En toda España.</span></span></h1>
    <div class="hero__row">
      <div>
        <p class="lead">Inspección técnica UNE-EN 15635, reparación de puntales in situ sin vaciar palés, protecciones MPM, placas de carga y montaje. Independientes, multimarca, con base en Guadalajara y equipos que se desplazan a cualquier punto del país.</p>
        <div class="hero__cta">
          <a class="btn btn--wa btn--lg" href="${SITE.wa}" target="_blank" rel="noopener">${ICON.wa}Valoración por WhatsApp</a>
          <a class="btn btn--ghost btn--lg" href="tel:${SITE.tel}">${ICON.tel}${SITE.telFmt}</a>
        </div>
      </div>
      <div class="hero__meta">
        <div><b>24/48 h</b><span>Urgencias</span></div>
        <div><b>45 min</b><span>Por puntal</span></div>
        <div><b>−25 °C</b><span>Frío</span></div>
      </div>
    </div>
  </div>
  <div class="hero__scroll" aria-hidden="true">Scroll</div>
</section>
${marq}

<section class="sec" id="servicios"><div class="wrap">
<p class="tag rv">Servicios</p>
<h2 class="h2wrap rv" style="margin:16px 0 8px">Todo lo que una estantería necesita en su vida útil.</h2>
${panel('01', 'Inspección técnica UNE-EN 15635', 'La auditoría anual que exige la ley, hecha por técnicos independientes. Medimos cada puntal, clasificamos cada daño por semáforo y entregamos el informe pericial que pide la Inspección de Trabajo. Sin vaciar huecos ni parar carretillas.', [['48–72 h', 'Informe pericial'], ['0', 'Palés descargados'], ['12 m', 'Periodicidad legal']], [
  ['V', 'Nivel verde', '< 3 mm · registrar y vigilar', '/inspecciones-une-en-15635/'],
  ['A', 'Nivel ámbar', '3–6 mm · reparar en 4 semanas', '/inspecciones-une-en-15635/'],
  ['R', 'Nivel rojo', '> 6 mm · descarga inmediata', '/inspecciones-une-en-15635/'],
  ['PR', 'Checklist de revisión', 'El formato del PRSES, gratis', '/checklist-revision-estanterias/'],
], 'inspeccion-tecnica-estanterias', 'Técnico realizando la inspección técnica de una estantería de paletización', '/inspecciones-une-en-15635/', 'Inspección técnica UNE-EN 15635', false)}
${panel('02', 'Reparación de puntales in situ', 'Un puntal golpeado obliga a descargar el módulo. Apuntalamos la carga de los niveles superiores, desanclamos el puntal afectado, cortamos la parte dañada y empalmamos un tramo nuevo homologado conforme a la normativa, sin vaciar la estantería ni desmontar el bastidor. El pasillo vuelve a producir el mismo día.', [['45 min', 'Por puntal'], ['0', 'Palés descargados'], ['24/48 h', 'Urgencias']], [
  ['01', 'Diagnóstico por foto', 'Le decimos qué tramo hay que cambiar en 2 h', '/reparacion-estanterias-in-situ/'],
  ['02', 'Apuntalado y desanclaje', 'La mercancía se queda donde está', '/reparacion-estanterias-in-situ/'],
  ['03', 'Corte y empalme del tramo', 'Tramo nuevo homologado, según normativa', '/reparacion-estanterias-in-situ/'],
  ['04', 'Verificación y certificado', 'Regla de 1 m, galga y foto antes/después', '/reparacion-estanterias-in-situ/'],
], 'dano-puntal-base-golpe-2', 'Base de puntal deformada por impacto de carretilla, pendiente de sustitución', '/reparacion-estanterias-in-situ/', 'Puntal golpeado · Madrid', true)}
${panel('03', 'Protecciones MPM para pasillos y muelles', 'Nueve de cada diez daños empiezan con una carretilla en una cabecera. Como distribuidor e instalador oficial de MPM Flexible Protections montamos protecciones de polímero que absorben el golpe, recuperan su forma y no rompen la solera.', [['MPM', 'Distribuidor oficial'], ['−80 %', 'Daños por impacto'], ['0', 'Anclajes arrancados']], [
  ['PP', 'Protector de puntal', 'Primera línea en cada bastidor', '/protecciones-estanterias-industriales/'],
  ['BA', 'Barreras y cabeceras', 'Frenan la horquilla antes del puntal', '/protecciones-estanterias-industriales/'],
  ['BO', 'Bolardos y muelles', 'Puertas, columnas y maquinaria', '/protecciones-estanterias-industriales/'],
  ['PE', 'Pasos peatonales', 'Separar personas de carretillas', '/protecciones-estanterias-industriales/'],
], 'protecciones-cabecera-pasillo', 'Cabecera de pasillo con protección MPM en plataforma logística', '/protecciones-estanterias-industriales/', 'Protecciones MPM · Alicante', false)}
${panel('04', 'Montaje, frío, entreplantas y traslados', 'Montamos estanterías nuevas o de segunda mano de cualquier fabricante con el mismo criterio con el que luego las inspeccionamos. Dentro de cámaras a −25 °C, en altura con entreplantas, o en una mudanza completa de almacén.', [['−25 °C', 'Cámaras de frío'], ['+100 %', 'Superficie con entreplanta'], ['Multimarca', 'Sin ataduras']], [
  ['MO', 'Montaje de estanterías', 'Paletización, picking, cantilever', '/montaje-estanterias-industriales/'],
  ['FR', 'Cámaras de frío', 'Sin romper la cadena de frío', '/montaje-estanterias-camaras-frio/'],
  ['EN', 'Entreplantas y altillos', 'Duplique superficie sin obra', '/entreplantas-altillos-metalicos/'],
  ['TR', 'Traslados y desmontajes', 'Por fases, sin parar', '/traslados-desmontaje-estanterias/'],
  ['PL', 'Placas de características', 'Cálculo de carga y legalización', '/placas-de-caracteristicas-estanterias/'],
  ['MA', 'Mantenimiento anual', 'Un solo interlocutor', '/mantenimiento-estanterias-industriales/'],
], 'entreplanta-vista-general', 'Entreplanta metálica montada por Almar-Rack en nave industrial', '/montaje-estanterias-industriales/', 'Entreplanta · Guadalajara', true)}
</div></section>

<section class="sec" id="espana"><div class="wrap">
  <div class="spain">
    <div class="rv">
      <p class="tag">Cobertura</p>
      <p class="spain__big" style="margin-top:18px">Toda<br><em>España.</em></p>
      <p class="lead" style="margin-top:22px">Base en Guadalajara, en el eje A-2: urgencias en 24/48 h y sin recargo de desplazamiento en el Corredor del Henares y la Comunidad de Madrid. Para el resto del país, equipos móviles con intervención planificada en cualquiera de las 17 comunidades.</p>
      <p style="margin-top:18px"><a class="btn btn--orange" href="/cobertura-nacional/">Ver cobertura nacional ${ICON.arrow}</a></p>
      <div class="hubs">
        <div><b>Centro</b><span>Madrid, Guadalajara, Toledo, Illescas, Ontígola</span></div>
        <div><b>Levante</b><span>Valencia, Alicante, Murcia, Castellón</span></div>
        <div><b>Noreste</b><span>Zaragoza, Barcelona, Tarragona, Lleida</span></div>
        <div><b>Norte</b><span>Bilbao, Vitoria, Pamplona, Burgos, Santander</span></div>
        <div><b>Sur</b><span>Sevilla, Málaga, Córdoba, Granada</span></div>
        <div><b>Noroeste e islas</b><span>Valladolid, León, A Coruña, Vigo, Palma, Canarias</span></div>
      </div>
    </div>
    <ul class="regions rv">
      <li><b>Comunidad de Madrid</b><small>Urgente 24/48 h</small></li>
      <li><b>Castilla-La Mancha</b><small>Urgente 24/48 h</small></li>
      <li><b>Castilla y León</b><small>Planificado</small></li>
      <li><b>Aragón</b><small>Planificado</small></li>
      <li><b>Cataluña</b><small>Planificado</small></li>
      <li><b>Comunidad Valenciana</b><small>Planificado</small></li>
      <li><b>Región de Murcia</b><small>Planificado</small></li>
      <li><b>Andalucía</b><small>Planificado</small></li>
      <li><b>Extremadura</b><small>Planificado</small></li>
      <li><b>País Vasco</b><small>Planificado</small></li>
      <li><b>Navarra</b><small>Planificado</small></li>
      <li><b>La Rioja</b><small>Planificado</small></li>
      <li><b>Cantabria</b><small>Planificado</small></li>
      <li><b>Asturias</b><small>Planificado</small></li>
      <li><b>Galicia</b><small>Planificado</small></li>
      <li><b>Islas Baleares</b><small>Planificado</small></li>
      <li><b>Canarias</b><small>Planificado</small></li>
    </ul>
  </div>
</div></section>

<section class="sec sec--tight" id="semaforo"><div class="wrap">
  <div class="meter rv" id="meter">
    <div>
      <p class="tag">Semáforo UNE-EN 15635</p>
      <h2 style="margin-top:18px">¿Cuánto está doblado su puntal?</h2>
      <p class="lead" style="margin-top:16px">Apoye una regla de 1 metro sobre el puntal y mida la separación máxima en el punto más deformado. Mueva la aguja y vea qué exige la norma.</p>
      <div class="ruler">
        <div class="ruler__zones" aria-hidden="true"><i class="z-v"></i><i class="z-a"></i><i class="z-r"></i></div>
        <div class="ruler__scale" aria-hidden="true"></div>
        <div class="ruler__needle" data-v="2,0 mm" aria-hidden="true"></div>
        <label class="visually-hidden" for="mm">Deformación medida en milímetros</label>
        <input class="ruler__input" id="mm" type="range" min="0" max="8" step="0.1" value="2" aria-valuemin="0" aria-valuemax="8">
        <div class="ruler__labels" aria-hidden="true"><span>0 mm</span><span>2</span><span>4</span><span>6</span><span>8 mm</span></div>
      </div>
      <div class="meter__pick" aria-label="Ejemplos"><button type="button" data-mm="1.5">1,5 mm</button><button type="button" data-mm="4">4 mm</button><button type="button" data-mm="7">7 mm</button></div>
      <p style="margin-top:16px;font-size:13.5px;color:var(--ink-3)">Límites en el plano del bastidor: 3 mm (verde) y 6 mm (rojo); en el transversal, 5 y 10 mm. Diagonales dobladas, cizalladuras o soldaduras rotas son rojo con independencia de la medida. La clasificación definitiva la establece un técnico competente.</p>
    </div>
    <div>
      <div class="meter__card" data-s="verde">
        <h3>Nivel verde · Daño leve <span class="state state--verde">Verde</span></h3>
        <p class="m-desc"></p>
        <span class="field">Qué exige la norma</span>
        <p class="m-accion" style="margin-top:6px"></p>
        <dl><dt>Plazo</dt><dd class="m-plazo"></dd><dt>Carga</dt><dd class="m-carga"></dd></dl>
      </div>
      <p style="margin-top:14px"><a class="btn btn--ghost" href="/inspecciones-une-en-15635/">Protocolo completo de inspección ${ICON.arrow}</a></p>
    </div>
  </div>
</div></section>

<section class="sec" id="obras">
  <div class="wrap" style="display:flex;justify-content:space-between;align-items:end;gap:20px;flex-wrap:wrap;margin-bottom:28px">
    <div class="rv"><p class="tag">Proyectos</p><h2 class="h2wrap" style="margin-top:18px">Obra real. Fotos nuestras.</h2></div>
    <div class="reel__nav rv"><button type="button" data-reel="-1" aria-label="Anterior"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 18l-6-6 6-6"/></svg></button><button type="button" data-reel="1" aria-label="Siguiente">${ICON.arrow}</button></div>
  </div>
  <div class="reel rv" id="reel">
    <figure class="wide">${img('protecciones-cabecera-pasillo', 'Cabecera de pasillo con protección MPM en plataforma logística', { sizes: '90vw' })}<figcaption>Protecciones de cabecera MPM<span>Plataforma logística · Alicante</span></figcaption></figure>
    <figure>${img('inspeccion-camara-frio-epi', 'Técnico con EPI térmico en cámara de congelación', { sizes: '80vw' })}<figcaption>Inspección a −25 °C<span>Cámara de congelados</span></figcaption></figure>
    <figure class="wide">${img('protecciones-paso-peatonal', 'Barandillas de paso peatonal MPM en planta de envases', { sizes: '90vw' })}<figcaption>Paso peatonal protegido<span>Planta de envases · Corredor del Henares</span></figcaption></figure>
    <figure>${img('protecciones-nave-pasillo-largo', 'Pasillo de estanterías de gran altura con protectores en todos los puntales', { sizes: '80vw' })}<figcaption>Protectores en 28 alineaciones<span>Alicante</span></figcaption></figure>
    <figure class="wide">${img('entreplanta-vista-general', 'Entreplanta metálica con barandilla amarilla', { sizes: '90vw' })}<figcaption>Entreplanta metálica<span>Nave industrial · Guadalajara</span></figcaption></figure>
    <figure>${img('protecciones-bolardo-mpm-detalle', 'Bolardo MPM anclado junto a puerta de muelle', { sizes: '80vw' })}<figcaption>Bolardo MPM en muelle<span>Quer (Guadalajara)</span></figcaption></figure>
    <figure class="wide">${img('protecciones-nave-fragadis', 'Estanterías de gran altura con cabeceras protegidas', { sizes: '90vw' })}<figcaption>28 alineaciones protegidas<span>Alicante</span></figcaption></figure>
  </div>
  <div class="wrap" style="margin-top:22px"><a class="btn btn--ghost rv" href="/proyectos/">Todos los proyectos ${ICON.arrow}</a></div>
</section>

<section class="sec sec--tight"><div class="wrap">
  <div class="nums rv">
    <div><b>24<i>/</i>48 h</b><span>Urgencias en el eje A-2 y Madrid</span></div>
    <div><b>45<i> min</i></b><span>Por puntal sustituido in situ, sin vaciar</span></div>
    <div><b>−25 <i>°C</i></b><span>Montaje e inspección en cámaras de congelación</span></div>
    <div><b>17</b><span>Comunidades autónomas con servicio</span></div>
  </div>
</div></section>

<section class="sec" id="empresa"><div class="wrap">
  <div class="why">
    <figure class="why__img rv">${img('diego-retrato', 'Diego Núñez Narváez, responsable técnico de Almar-Rack')}<figcaption><b>Diego Núñez Narváez</b>Responsable técnico · atiende el WhatsApp de lunes a domingo, 8:00–20:00</figcaption></figure>
    <div class="rv">
      <p class="tag">Por qué Almar-Rack</p>
      <h2 style="margin-top:18px">Técnicos de estanterías, no vendedores de estanterías.</h2>
      <div class="why__list">
        <div><b>01</b><div><h3>Independientes de fabricante</h3><p>No vendemos racks nuevos. Cuando basta con sustituir un tramo, sustituimos el tramo; cuando hay que cambiar el bastidor, buscamos el recambio compatible, sea de la marca que sea.</p></div></div>
        <div><b>02</b><div><h3>Cero paradas injustificadas</h3><p>Inspección en pasillos activos, reparación sin descargar palés y turnos de tarde o fin de semana cuando el picking no puede esperar.</p></div></div>
        <div><b>03</b><div><h3>Documentación que protege al PRSES</h3><p>Informe pericial con semáforo, placas de carga y libro de registro: lo que piden la ITSS, las mutuas y las aseguradoras.</p></div></div>
        <div><b>04</b><div><h3>Más de 15 años de oficio</h3><p>Empresa fundada en 2024 por técnicos que llevan más de quince años montando, inspeccionando y reparando estanterías de todas las marcas.</p></div></div>
      </div>
      <p style="margin-top:24px"><a class="btn btn--ghost" href="/sobre-almarack/">Conocer la empresa ${ICON.arrow}</a></p>
    </div>
  </div>
</div></section>

<section class="sec sec--tight" id="proceso"><div class="wrap">
  <p class="tag rv">Cómo trabajamos</p>
  <h2 class="h2wrap rv" style="margin:18px 0 32px">De la foto por WhatsApp al informe firmado.</h2>
  <div class="steps rv">
    <div class="step"><b>1</b><h3>Fotos y datos</h3><p>Nos envía fotos del daño o el plano con huecos-palé, alturas y marca. Valoración orientativa en menos de 2 horas.</p></div>
    <div class="step"><b>2</b><h3>Visita gratuita</h3><p>Medimos deformaciones, anclajes, pasadores y placas, y confirmamos la solución sin parar la operativa.</p></div>
    <div class="step"><b>3</b><h3>Presupuesto cerrado</h3><p>Por puntal, hueco-palé o metro lineal, con fecha y turno acordados con su jefe de almacén.</p></div>
    <div class="step"><b>4</b><h3>Ejecución y certificado</h3><p>Intervenimos línea a línea y entregamos el informe firmado para su archivo de PRL y la Inspección de Trabajo.</p></div>
  </div>
</div></section>

${faqHtml(faq, 'Lo que nos preguntan antes de contratar.')}
${contactPlate()}
`;

module.exports = {
  slug: '/',
  title: 'Almar-Rack · Inspección, reparación y protecciones de estanterías industriales en toda España',
  description: 'Inspección técnica UNE-EN 15635, reparación de puntales in situ sin vaciar palés, protecciones MPM, placas de carga y montaje de estanterías industriales. Independientes y multimarca. Base en Guadalajara, urgencias 24/48 h en Madrid y Corredor del Henares, servicio en las 17 comunidades autónomas.',
  img: 'protecciones-cabecera-pasillo',
  imgAlt: 'Técnico de Almar-Rack inspeccionando estanterías industriales',
  faq,
  body,
};
