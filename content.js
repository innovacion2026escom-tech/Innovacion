// ============================================
// CONTENIDO DEL CURSO - INNOVACIÓN Y EMPRENDIMIENTO TECNOLÓGICO
// Licenciatura en Ciencia de Datos - IPN
// Contenido enriquecido con fuentes académicas (RAE, OCDE, Manual de Oslo, etc.)
// ============================================

const courseContent = {

    // =============================================
    // UNIDAD 1: INNOVACIÓN
    // =============================================

    'tema1-1': {
        title: '1.1 La Empresa Innovadora',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-building"></i> ¿Qué es una Empresa Innovadora?</h3>
                <p>Una <strong>empresa innovadora</strong> es aquella que incorpora de manera sistemática la innovación como parte central de su estrategia, cultura y operaciones. No se trata únicamente de crear productos nuevos, sino de transformar continuamente sus procesos, modelos de negocio y formas de relacionarse con el mercado para generar valor sostenido.</p>
                <div class="highlight-box">
                    <h4><i class="fas fa-book"></i> Definición de Innovación — Manual de Oslo (OCDE, 2018)</h4>
                    <p>El <em>Manual de Oslo</em> de la OCDE (2018, 4.ª ed.) define innovación como un <em>"producto o proceso nuevo o mejorado —o una combinación de ambos— que se diferencia significativamente de los productos o procesos previos de la unidad y que ha sido puesto a disposición de los usuarios potenciales o puesto en uso por la unidad"</em>. Esta definición subraya que la innovación debe materializarse y generar valor real, no quedarse como idea.</p>
                    <p class="source"><i class="fas fa-link"></i> OCDE/Eurostat. (2018). <em>Manual de Oslo</em> (4.ª ed.). OECD Publishing. <a href="https://doi.org/10.1787/9789264304604-es" target="_blank">https://doi.org/10.1787/9789264304604-es</a></p>
                </div>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/1-1.jpg" alt="La Empresa Innovadora — Estrategia, cultura e innovación" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> La Empresa Innovadora — Estrategia, cultura e innovación</p>
                </div>
                </div>
            <div class="content-section">
                <h3><i class="fas fa-bullseye"></i> 1.1.1 Objetivo de la Innovación</h3>
                <p>El objetivo fundamental de la innovación es <strong>generar valor</strong>: para los clientes, para los accionistas y para la sociedad. Peter Drucker señala que la innovación y el marketing son las dos únicas funciones básicas de cualquier empresa; todo lo demás es costo.</p>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-chart-line"></i><h4>Valor Económico</h4></div><p>Aumentar ingresos, reducir costos y mejorar márgenes a través de procesos más eficientes o productos de mayor valor percibido.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-users"></i><h4>Valor para el Cliente</h4></div><p>Resolver necesidades no satisfechas, mejorar la experiencia de usuario y superar las expectativas del mercado.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-leaf"></i><h4>Valor Social</h4></div><p>Contribuir al bienestar colectivo, la sustentabilidad y la resolución de problemas de gran escala.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-shield-alt"></i><h4>Ventaja Competitiva</h4></div><p>Diferenciarse de la competencia de forma sostenible, construyendo capacidades difíciles de imitar.</p></div>
                </div>
                <p class="source"><i class="fas fa-link"></i> Drucker, P. F. (1985). <em>Innovation and Entrepreneurship</em>. Harper &amp; Row.</p>
                <p class="source"><i class="fas fa-book"></i> <strong>Bibliografía oficial del curso (ESCOM-IPN):</strong> Collins, J. (2014). <em>Empresas que perduran</em>. NORMA Ediciones (ISBN: 9799660494645). — Kelley, J. &amp; Littman, T. (2009). <em>Las diez caras de la innovación</em>. Paidós Ibérica (ISBN: 9788449323263).</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/1-1-1.jpg" alt="Objetivo de la Innovación — Valor económico, social y competitivo" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Objetivo de la Innovación — Valor económico, social y competitivo</p>
                </div>
                </div>
        `
    },

    'tema1-2': {
        title: '1.2 Clasificación de la Innovación',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-th-large"></i> 1.2.1 Tipos de Innovación (Manual de Oslo, OCDE 2018)</h3>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-box"></i><h4>De Producto</h4></div><p>Bien o servicio nuevo o significativamente mejorado en sus características o usos.</p><p class="example"><strong>Ej.:</strong> Modelo predictivo para recomendaciones en e-commerce.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-cogs"></i><h4>De Proceso</h4></div><p>Proceso de negocio nuevo o mejorado que reduce costos o mejora la calidad y velocidad.</p><p class="example"><strong>Ej.:</strong> Automatización de la cadena de suministro con datos en tiempo real.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-store"></i><h4>De Mercadotecnia</h4></div><p>Nuevo método de comercialización con cambios en diseño, posicionamiento, promoción o precio.</p><p class="example"><strong>Ej.:</strong> Modelo freemium para escalar usuarios digitales.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-sitemap"></i><h4>Organizacional</h4></div><p>Nuevo método en las prácticas empresariales, organización del trabajo o relaciones externas.</p><p class="example"><strong>Ej.:</strong> Squads multidisciplinarios con metodologías ágiles.</p></div>
                </div>
                <p class="source"><i class="fas fa-link"></i> OCDE/Eurostat. (2018). <em>Manual de Oslo</em> (4.ª ed., §§ 3.2–3.5). OECD Publishing.</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/1-2-1.jpg" alt="Tipos de Innovación según el Manual de Oslo (OCDE 2018)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Tipos de Innovación según el Manual de Oslo (OCDE 2018)</p>
                </div>
                </div>
            <div class="content-section">
                <h3><i class="fas fa-layer-group"></i> 1.2.2 Estadios: Incremental, Radical y Disruptiva</h3>
                <p>Christensen (1997) distingue entre innovaciones <strong>sostenidas</strong> (incrementales o radicales, que mejoran lo existente) y <strong>disruptivas</strong> (que crean nuevos mercados o reconfiguran los existentes desplazando actores establecidos).</p>
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-angle-up"></i> Estadios de intensidad</h4>
                        <ul>
                            <li><strong>Incremental:</strong> Mejoras continuas sobre lo existente. Bajo riesgo, resultados predecibles.</li>
                            <li><strong>Radical:</strong> Cambios sustanciales que transforman un producto o mercado. Mayor riesgo e inversión.</li>
                            <li><strong>Disruptiva:</strong> Crea nuevos mercados o desplaza actores usando tecnología de menor costo inicial.</li>
                        </ul>
                    </div>
                    <div class="column-box">
                        <h4><i class="fas fa-shapes"></i> Según apertura al entorno</h4>
                        <ul>
                            <li><strong>Cerrada:</strong> Generada íntegramente dentro de la organización (I+D interno tradicional).</li>
                            <li><strong>Abierta (Open Innovation):</strong> Integra conocimiento externo —universidades, startups, clientes— para acelerar el proceso (Chesbrough, 2003).</li>
                            <li><strong>Frugal:</strong> Alto impacto con mínimos recursos, orientada a mercados con restricciones de capital.</li>
                        </ul>
                    </div>
                </div>
                <p class="source"><i class="fas fa-link"></i> Christensen, C. M. (1997). <em>The Innovator's Dilemma</em>. Harvard Business School Press. — Chesbrough, H. (2003). <em>Open Innovation</em>. Harvard University Press.</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/1-2-2.jpg" alt="Estadios de Innovación: Incremental, Radical y Disruptiva" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Estadios de Innovación: Incremental, Radical y Disruptiva</p>
                </div>
                </div>
        `
    },

    'tema1-3': {
        title: '1.3 Reglas de la Innovación',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-ruler-combined"></i> Principios que Rigen la Innovación Exitosa</h3>
                <p>Drucker (1985) identificó siete fuentes de oportunidad innovadora: lo inesperado, la incongruencia, las necesidades del proceso, los cambios en la industria, los cambios demográficos, los cambios en la percepción y el nuevo conocimiento. Comprender estas fuentes permite innovar de forma sistemática, no accidental.</p>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-eye"></i><h4>Orientación al Mercado</h4></div><p>Toda innovación debe partir de una necesidad real del cliente. Innovar sin conexión con el usuario raramente genera valor sostenible.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-sync-alt"></i><h4>Iteración Continua</h4></div><p>La innovación es un proceso cíclico de prueba y aprendizaje. Los errores tempranos y baratos son preferibles a los tardíos y costosos.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-users-cog"></i><h4>Equipos Multidisciplinarios</h4></div><p>Las mejores innovaciones surgen de la intersección de tecnología, diseño, negocios y ciencias sociales colaborando de forma sistemática.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-dollar-sign"></i><h4>Viabilidad Económica</h4></div><p>Una innovación debe ser técnicamente posible, deseable para el usuario y económicamente viable. Este triángulo es el corazón del Design Thinking (Brown, 2008).</p></div>
                </div>
                <div class="highlight-box">
                    <h4><i class="fas fa-quote-left"></i> Peter F. Drucker</h4>
                    <p><em>"La innovación es la herramienta específica de los emprendedores; el medio con el que explotan el cambio como una oportunidad para un negocio o servicio diferente."</em></p>
                    <p class="source">Drucker, P. F. (1985). <em>Innovation and Entrepreneurship</em> (p. 17). Harper &amp; Row.</p>
                </div>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/1-3.jpg" alt="Principios que Rigen la Innovación — Peter Drucker" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Principios que Rigen la Innovación — Peter Drucker</p>
                </div>
                </div>
        `
    },

    'actividades1': {
        title: 'Actividades - Unidad I: Innovación',
        content: `
            <div class="activities-content">
                <div class="activities-header"><h3><i class="fas fa-tasks"></i> Actividades de Aprendizaje</h3><p>Unidad I: Innovación — Prácticas 1 y 2</p></div>
                <div class="activity-card">
                    <span class="activity-number">Práctica 1</span>
                    <h4><i class="fas fa-search"></i> Desarrollo de Competencias Básicas de Innovación Tecnológica</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>Selecciona una empresa mexicana o latinoamericana innovadora.</li><li>Elabora un mapa conceptual identificando tipo(s) de innovación según el Manual de Oslo (OCDE, 2018), objetivos y resultados.</li><li>Presenta tus conclusiones al grupo en no más de 5 minutos.</li></ol></div>
                        <div class="activity-group-work"><p><i class="fas fa-users"></i> <strong>Trabajo en equipo:</strong> 3–4 personas.</p></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable</h5><p>Mapa conceptual digital + presentación de 5 diapositivas con referencias en APA 7.</p></div>
                    </div>
                </div>
                <div class="activity-card">
                    <span class="activity-number">Práctica 2</span>
                    <h4><i class="fas fa-tools"></i> Herramientas de Innovación — SCAMPER y 5 ¿Por qué?</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>Identifica un problema de tu comunidad resoluble con tecnología.</li><li>Aplica la técnica de los <strong>5 ¿Por qué?</strong> para llegar a la causa raíz.</li><li>Propón al menos 3 posibles innovaciones con la técnica <strong>SCAMPER</strong> (Eberle, 1996).</li><li>Elabora un reporte con referencias en APA 7.</li></ol></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable</h5><p>Reporte de práctica (mínimo 3 cuartillas) con análisis SCAMPER documentado.</p></div>
                    </div>
                </div>
            </div>
        `
    },

    'quiz1': {
        title: 'Cuestionario - Unidad I: Innovación',
        content: `<div class="quiz-intro"><h3><i class="fas fa-question-circle"></i> Cuestionario de Autoevaluación</h3><p>Este cuestionario evalúa tu comprensión de los conceptos clave de la Unidad I.</p><div class="quiz-info"><div class="quiz-info-item"><i class="fas fa-clock"></i><span>15 minutos</span></div><div class="quiz-info-item"><i class="fas fa-list"></i><span>10 preguntas</span></div><div class="quiz-info-item"><i class="fas fa-redo"></i><span>2 intentos</span></div><div class="quiz-info-item"><i class="fas fa-star"></i><span>Mínimo 60%</span></div></div><button id="startQuiz1" class="btn-primary" onclick="startQuiz(1)"><i class="fas fa-play"></i> Iniciar Cuestionario</button></div>`
    },

    // =============================================
    // UNIDAD 2: INNOVACIÓN TECNOLÓGICA
    // =============================================

    'tema2-1': {
        title: '2.1 Investigación + Desarrollo + Innovación (I+D+I)',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-flask"></i> El Triángulo I+D+I</h3>
                <p>El <em>Manual de Frascati</em> (OCDE, 2015) es el estándar internacional para medir y clasificar las actividades de I+D+I, desde la generación de nuevo conocimiento científico hasta su conversión en valor económico.</p>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-microscope"></i><h4>Investigación (I)</h4></div><p>Trabajo creativo y sistemático para aumentar el volumen de conocimientos. Puede ser <strong>básica</strong> (sin aplicación inmediata) o <strong>aplicada</strong> (orientada a problemas concretos).</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-code"></i><h4>Desarrollo (D)</h4></div><p>Aplicación sistemática del conocimiento para producir nuevos materiales, dispositivos, sistemas o métodos, o para mejorar los existentes.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-rocket"></i><h4>Innovación (I)</h4></div><p>Conversión del conocimiento en valor de mercado. Paso final que transforma los resultados de la I+D en soluciones que el mercado adopta y por las que paga.</p></div>
                </div>
                <p class="source"><i class="fas fa-link"></i> OCDE. (2015). <em>Manual de Frascati</em> (7.ª ed.). OECD Publishing. <a href="https://doi.org/10.1787/9789264239012-es" target="_blank">https://doi.org/10.1787/9789264239012-es</a></p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/2-1.jpg" alt="El Triángulo I+D+I — Investigación, Desarrollo e Innovación" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> El Triángulo I+D+I — Investigación, Desarrollo e Innovación</p>
                </div>
                </div>
            <div class="content-section">
                <h3><i class="fas fa-globe"></i> 2.1.1 I+D+I en el Contexto Internacional</h3>
                <p>Los países con mayor inversión en I+D como porcentaje del PIB lideran la competitividad tecnológica: Israel (~5.6%), Corea del Sur (~4.9%), Suecia (~3.4%). México invierte menos del 0.5%, representando un desafío estructural para el desarrollo tecnológico nacional.</p>
                <div class="highlight-box">
                    <h4><i class="fas fa-chart-bar"></i> Dato relevante — OCDE (2023)</h4>
                    <p>El gasto mundial en I+D superó los 2.4 billones de dólares en 2021. Por cada dólar invertido en I+D, las economías avanzadas generan entre 2 y 5 dólares en retorno económico a largo plazo.</p>
                    <p class="source"><i class="fas fa-link"></i> OCDE. (2023). <em>Main Science and Technology Indicators</em>. <a href="https://www.oecd.org/sti/msti.htm" target="_blank">https://www.oecd.org/sti/msti.htm</a></p>
                </div>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/2-1-1.jpg" alt="Inversión Mundial en I+D+I por país (OCDE 2023)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Inversión Mundial en I+D+I por país (OCDE 2023)</p>
                </div>
                </div>
            <div class="content-section">
                <h3><i class="fas fa-industry"></i> 2.1.2 Destrucción Creativa y Desarrollo Económico</h3>
                <p>Joseph Schumpeter (1942) acuñó <strong>destrucción creativa</strong> para describir cómo la innovación tecnológica desestructura continuamente el orden económico, desplazando industrias obsoletas y creando nuevas oportunidades. Es el hecho fundamental del capitalismo moderno.</p>
                <div class="two-column-grid">
                    <div class="column-box"><h4><i class="fas fa-plus-circle"></i> Impactos positivos</h4><ul><li>Aumento de la productividad laboral</li><li>Creación de nuevos mercados y empleos</li><li>Reducción de costos de producción</li><li>Mejora en la calidad de vida</li></ul></div>
                    <div class="column-box"><h4><i class="fas fa-exclamation-triangle"></i> Desafíos</h4><ul><li>Desplazamiento de empleos tradicionales</li><li>Brecha digital entre regiones y países</li><li>Concentración de beneficios en pocas empresas</li><li>Necesidad de actualización constante de habilidades</li></ul></div>
                </div>
                <p class="source"><i class="fas fa-link"></i> Schumpeter, J. A. (1942). <em>Capitalism, Socialism and Democracy</em>. Harper &amp; Brothers.</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/2-1-2.jpg" alt="Destrucción Creativa — Schumpeter (1942)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Destrucción Creativa — Schumpeter (1942)</p>
                </div>
                </div>
        `
    },

    'tema2-2': {
        title: '2.2 Paradigmas Tecnológicos',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-project-diagram"></i> 2.2 Naturaleza de los Paradigmas Tecnológicos</h3>
                <p>Giovanni Dosi (1982) introdujo el concepto de <strong>paradigma tecnológico</strong> como un modelo de solución de problemas técnicos que define la dirección del cambio tecnológico durante un período determinado. Al igual que los paradigmas científicos de Kuhn, los tecnológicos crean trayectorias predecibles y generan resistencia al cambio.</p>
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> El paradigma TIC en el siglo XXI</h4>
                    <p>Vivimos en la era del paradigma de las TIC, caracterizado por digitalización, IA, Big Data y conectividad ubicua. Carlota Pérez (2002) denomina a este período la <em>quinta revolución tecnológica</em>, cuyo núcleo es la microelectrónica y el software.</p>
                    <p class="source"><i class="fas fa-link"></i> Pérez, C. (2002). <em>Technological Revolutions and Financial Capital</em>. Edward Elgar. — Dosi, G. (1982). <em>Research Policy, 11</em>(3), 147–162.</p>
                </div>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/2-2.jpg" alt="Paradigmas Tecnológicos — Dosi (1982) y Pérez (2002)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Paradigmas Tecnológicos — Dosi (1982) y Pérez (2002)</p>
                </div>
                </div>
            <div class="content-section">
                <h3><i class="fas fa-trophy"></i> 2.2.1 Innovación Tecnológica y Competitividad</h3>
                <p>Porter (1990) argumenta en <em>The Competitive Advantage of Nations</em> que la tecnología es uno de los principales determinantes de la ventaja competitiva nacional e industrial.</p>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-bolt"></i><h4>Velocidad de Adopción</h4></div><p>Adoptar tecnologías emergentes antes que los competidores genera ventajas de pionero: mayor cuota de mercado y curvas de aprendizaje adelantadas.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-lock"></i><h4>Barreras de Entrada</h4></div><p>Patentes, algoritmos exclusivos y datos propietarios crean barreras difíciles de superar para los competidores.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-compress-arrows-alt"></i><h4>Reducción de Costos</h4></div><p>Automatización y optimización tecnológica permiten estructuras de costos más eficientes y mejores márgenes operativos.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-heart"></i><h4>Experiencia del Cliente</h4></div><p>La personalización habilitada por datos e IA genera fidelización y permite cobrar precios diferenciados.</p></div>
                </div>
                <p class="source"><i class="fas fa-link"></i> Porter, M. E. (1990). <em>The Competitive Advantage of Nations</em>. Free Press.</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/2-2-1.jpg" alt="Innovación Tecnológica y Ventaja Competitiva — Porter (1990)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Innovación Tecnológica y Ventaja Competitiva — Porter (1990)</p>
                </div>
                </div>
        `
    },

    'tema2-3': {
        title: '2.3 Competencias de la Innovación Tecnológica',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-medal"></i> 2.3 Competencias Básicas de la Innovación Tecnológica</h3>
                <p>La OCDE (2019), en su Marco de Competencias para la Innovación, identifica capacidades clave que trascienden el conocimiento técnico y son necesarias tanto en individuos como en organizaciones.</p>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-brain"></i><h4>Pensamiento Creativo</h4></div><p>Capacidad de generar ideas novedosas, combinar conceptos de dominios diferentes y ver oportunidades donde otros ven obstáculos. Base del Design Thinking (Brown, 2008).</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-search-plus"></i><h4>Vigilancia Tecnológica</h4></div><p>Monitoreo sistemático del entorno para identificar tendencias emergentes, tecnologías disruptivas y amenazas competitivas antes de que impacten el negocio.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-handshake"></i><h4>Gestión de Alianzas y Open Innovation</h4></div><p>Habilidad para construir ecosistemas de colaboración con universidades, startups, clientes y proveedores (Chesbrough, 2003).</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-chart-pie"></i><h4>Gestión de Proyectos de I+D</h4></div><p>Competencia para planificar, ejecutar y evaluar proyectos de innovación bajo incertidumbre y recursos limitados, con metodologías ágiles.</p></div>
                </div>
                <p class="source"><i class="fas fa-link"></i> Brown, T. (2008). Design thinking. <em>Harvard Business Review, 86</em>(6), 84–92.</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/2-3.jpg" alt="Competencias de la Innovación Tecnológica (OCDE 2019)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Competencias de la Innovación Tecnológica (OCDE 2019)</p>
                </div>
                </div>
        `
    },

    'tema2-4': {
        title: '2.4 El Proceso de Innovación Tecnológica',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-route"></i> 2.4 El Proceso de Innovación Tecnológica</h3>
                <p>Tidd y Bessant (2018) proponen un modelo de cuatro fases (Buscar, Seleccionar, Implementar y Capturar valor) ampliamente adoptado. En la práctica, el proceso es iterativo y requiere revisión constante.</p>
                <div class="table-responsive">
                    <table class="content-table">
                        <thead><tr><th>Etapa</th><th>Actividades Clave</th><th>Herramientas</th></tr></thead>
                        <tbody>
                            <tr><td><strong>1. Ideación</strong></td><td>Identificar oportunidades, generar y seleccionar ideas con base en necesidades reales</td><td>Brainstorming, Design Thinking, SCAMPER</td></tr>
                            <tr><td><strong>2. Investigación</strong></td><td>Analizar viabilidad técnica, estudiar el mercado, revisar estado del arte y patentes</td><td>Análisis de patentes (IMPI, WIPO), benchmarking</td></tr>
                            <tr><td><strong>3. Desarrollo</strong></td><td>Diseñar, prototipar y probar la solución en ciclos cortos</td><td>Metodologías ágiles (Scrum, Kanban), MVPs</td></tr>
                            <tr><td><strong>4. Validación</strong></td><td>Probar con usuarios reales, ajustar y preparar el escalado</td><td>Lean Startup (Ries, 2011), pruebas A/B</td></tr>
                            <tr><td><strong>5. Lanzamiento</strong></td><td>Comercializar, comunicar y escalar la innovación al mercado objetivo</td><td>Estrategia GTM, marketing digital, KPIs de adopción</td></tr>
                        </tbody>
                    </table>
                </div>
                <p class="source"><i class="fas fa-link"></i> Tidd, J., &amp; Bessant, J. (2018). <em>Managing Innovation</em> (6.ª ed.). Wiley.</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/2-4.jpg" alt="Proceso de Innovación Tecnológica — Tidd y Bessant (2018)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Proceso de Innovación Tecnológica — Tidd y Bessant (2018)</p>
                </div>
                </div>
        `
    },

    'tema2-5': {
        title: '2.5 Herramientas para Innovar',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-toolbox"></i> 2.5 Herramientas para Innovar</h3>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-drafting-compass"></i><h4>Design Thinking</h4></div><p>Metodología centrada en el usuario de IDEO/Stanford d.school. Cinco etapas: <em>Empatizar → Definir → Idear → Prototipar → Evaluar</em>.</p><p class="source">Brown, T. (2009). <em>Change by Design</em>. HarperCollins.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-seedling"></i><h4>Lean Startup</h4></div><p>Ciclo Construir-Medir-Aprender de Eric Ries (2011). Permite validar hipótesis con el mínimo de recursos a través del MVP.</p><p class="source">Ries, E. (2011). <em>The Lean Startup</em>. Crown Business.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-th"></i><h4>Business Model Canvas</h4></div><p>Herramienta visual de 9 bloques de Osterwalder y Pigneur (2010): Propuesta de Valor, Segmentos, Canales, Relaciones, Ingresos, Recursos, Actividades, Socios y Costos.</p><p class="source">Osterwalder, A., &amp; Pigneur, Y. (2010). <em>Business Model Generation</em>. Wiley.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-random"></i><h4>SCAMPER</h4></div><p>Técnica de creatividad de Bob Eberle (1996): <em>Sustituir, Combinar, Adaptar, Modificar, Poner en otros usos, Eliminar, Reordenar</em>.</p><p class="source">Eberle, B. (1996). <em>Scamper</em>. Prufrock Press.</p></div>
                </div>
                <div class="highlight-box" style="margin-top:1rem;">
                    <h4><i class="fas fa-book"></i> Bibliografía oficial del curso (ESCOM-IPN)</h4>
                    <p>Estas herramientas también están respaldadas por las siguientes fuentes del plan de estudios:</p>
                    <ul>
                        <li>Ries, E. (2013). <em>El método Lean Startup</em>. Deusto México (ISBN: 9788423409495).</li>
                        <li>Osterwalder, A. &amp; Pigneur, Y. (2014). <em>Generación de modelos de negocio</em>. Deusto (ISBN: 9788423427994).</li>
                        <li>Ismail, S., Malone, M. &amp; Van Geest, Y. (2016). <em>Organizaciones Exponenciales</em>. Bubok Publishing (ISBN: 9788468086316).</li>
                        <li>Kelley, J. &amp; Littman, T. (2009). <em>Las diez caras de la innovación</em>. Paidós Ibérica (ISBN: 9788449323263).</li>
                    </ul>
                </div>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/2-5.jpg" alt="Herramientas para Innovar: Design Thinking, Lean Startup, SCAMPER" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Herramientas para Innovar: Design Thinking, Lean Startup, SCAMPER</p>
                </div>
                </div>
        `
    },

    'actividades2': {
        title: 'Actividades - Unidad II: Innovación Tecnológica',
        content: `
            <div class="activities-content">
                <div class="activities-header"><h3><i class="fas fa-tasks"></i> Actividades de Aprendizaje</h3><p>Unidad II: Innovación Tecnológica — Prácticas 1 y 2</p></div>
                <div class="activity-card">
                    <span class="activity-number">Práctica 1</span>
                    <h4><i class="fas fa-flask"></i> Competencias Básicas de Innovación Tecnológica</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>Investiga el proceso de I+D+I de una empresa tecnológica (Google, Tesla, CEMEX, Grupo Bimbo, etc.).</li><li>Reporte que incluya: inversión en I+D como % de ventas, patentes registradas (fuente: WIPO o IMPI), principales innovaciones e impacto competitivo.</li><li>Compara con un competidor directo en términos de innovación.</li></ol></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable</h5><p>Reporte comparativo de 4–5 cuartillas con referencias en APA 7.</p></div>
                    </div>
                </div>
                <div class="activity-card">
                    <span class="activity-number">Práctica 2</span>
                    <h4><i class="fas fa-tools"></i> Herramientas para Innovar — Design Thinking</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>En equipo, seleccionen un problema tecnológico de su comunidad escolar o barrio.</li><li>Apliquen las 5 etapas del Design Thinking (Brown, 2009) con evidencias de entrevistas u observación.</li><li>Construyan un prototipo de baja fidelidad.</li><li>Presenten los resultados al grupo.</li></ol></div>
                        <div class="activity-group-work"><p><i class="fas fa-users"></i> <strong>Trabajo en equipo:</strong> 4–5 personas.</p></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable</h5><p>Prototipo físico o digital + presentación del proceso (8–10 diapositivas) con referencias.</p></div>
                    </div>
                </div>
            </div>
        `
    },

    'quiz2': {
        title: 'Cuestionario - Unidad II: Innovación Tecnológica',
        content: `<div class="quiz-intro"><h3><i class="fas fa-question-circle"></i> Cuestionario de Autoevaluación</h3><p>Unidad II: Innovación Tecnológica.</p><div class="quiz-info"><div class="quiz-info-item"><i class="fas fa-clock"></i><span>15 minutos</span></div><div class="quiz-info-item"><i class="fas fa-list"></i><span>10 preguntas</span></div><div class="quiz-info-item"><i class="fas fa-redo"></i><span>2 intentos</span></div><div class="quiz-info-item"><i class="fas fa-star"></i><span>Mínimo 60%</span></div></div><button id="startQuiz2" class="btn-primary" onclick="startQuiz(2)"><i class="fas fa-play"></i> Iniciar Cuestionario</button></div>`
    },

    // =============================================
    // UNIDAD 3: EMPRENDIMIENTO
    // =============================================

    'tema3-1': {
        title: '3.1 La Empresa',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-building"></i> 3.1 La Empresa: Fundamentos</h3>
                <p>La Real Academia Española (RAE, 2023) define <strong>empresa</strong> como la <em>"unidad de organización dedicada a actividades industriales, mercantiles o de prestación de servicios con fines lucrativos"</em>. Desde una perspectiva económica más amplia, la empresa combina capital, trabajo y tecnología para crear valor en el mercado.</p>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-flag"></i><h4>3.1.1 Propósito</h4></div><p>Más allá de la generación de utilidades, el propósito moderno incluye la creación de valor para todos los <em>stakeholders</em>: clientes, empleados, comunidad y accionistas (Business Roundtable, 2019).</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-th-list"></i><h4>3.1.2 Clasificación</h4></div><p>En México, la Secretaría de Economía clasifica las empresas por tamaño (micro, pequeña, mediana, grande) según número de empleados y ventas anuales, por sector y por origen de capital.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-sync"></i><h4>3.1.3 Ciclo de Vida</h4></div><p>Las empresas atraviesan etapas: <em>Nacimiento → Crecimiento → Madurez → Renovación o Declive</em>. Greiner (1972) identificó cinco fases de crecimiento, cada una con su propia crisis de transición.</p></div>
                </div>
                <p class="source"><i class="fas fa-link"></i> Real Academia Española. (2023). <em>Diccionario de la lengua española</em> (23.ª ed., versión 23.7). <a href="https://dle.rae.es/empresa" target="_blank">https://dle.rae.es/empresa</a></p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/3-1.jpg" alt="La Empresa — Fundamentos, propósito y ciclo de vida" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> La Empresa — Fundamentos, propósito y ciclo de vida</p>
                </div>
                </div>
        `
    },

    'tema3-2': {
        title: '3.2 Emprendimiento',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-rocket"></i> 3.2 Emprendimiento: Conceptos Fundamentales</h3>
                <p>La RAE (2023) define <strong>emprender</strong> como <em>"acometer y comenzar una obra, un negocio, un empeño, especialmente si encierran dificultad o peligro"</em>. En el ámbito económico, Schumpeter (1934) vinculó el emprendimiento directamente con la innovación: el emprendedor es el agente que introduce nuevas combinaciones de factores productivos.</p>
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-list-ul"></i> 3.2.1 Tipos de Emprendimiento</h4>
                        <ul>
                            <li><strong>Necesidad:</strong> Motivado por la falta de alternativas de empleo (GEM, 2023).</li>
                            <li><strong>Oportunidad:</strong> Basado en identificar y explotar una brecha de mercado.</li>
                            <li><strong>Social:</strong> Orientado a resolver problemas sociales con modelos sostenibles (Dees, 1998).</li>
                            <li><strong>Intraemprendimiento:</strong> Innovación dentro de organizaciones existentes (Pinchot, 1985).</li>
                            <li><strong>Tecnológico:</strong> Basado en tecnología como ventaja diferencial central.</li>
                        </ul>
                    </div>
                    <div class="column-box">
                        <h4><i class="fas fa-star"></i> 3.2.2 Características del Emprendedor</h4>
                        <ul>
                            <li>Tolerancia a la incertidumbre y al riesgo calculado</li>
                            <li>Orientación al logro (McClelland, 1961)</li>
                            <li>Capacidad de liderazgo y construcción de equipos</li>
                            <li>Creatividad y pensamiento lateral (De Bono, 1970)</li>
                            <li>Orientación al cliente y al mercado</li>
                            <li>Habilidad de networking y comunicación</li>
                        </ul>
                    </div>
                </div>
                <div class="highlight-box">
                    <h4><i class="fas fa-chart-line"></i> 3.2.3 Importancia del Emprendimiento en México</h4>
                    <p>Según el INEGI (2022), en México existen más de 4.1 millones de unidades económicas, de las cuales el 99.8% son MiPyMEs. Estas generan el 70% del empleo formal y contribuyen con aproximadamente el 52% del PIB nacional.</p>
                    <p class="source"><i class="fas fa-link"></i> INEGI. (2022). <em>Censos Económicos 2019</em>. <a href="https://www.inegi.org.mx/programas/ce/2019/" target="_blank">https://www.inegi.org.mx/programas/ce/2019/</a></p>
                </div>
                <p class="source"><i class="fas fa-link"></i> Real Academia Española. (2023). <em>Diccionario de la lengua española</em>. <a href="https://dle.rae.es/emprender" target="_blank">https://dle.rae.es/emprender</a></p>
                <p class="source"><i class="fas fa-book"></i> <strong>Bibliografía oficial del curso (ESCOM-IPN):</strong> Fernández, S. &amp; Sansó, S. (2017). <em>Misión emprender</em>. Conecta (ISBN: 9788416029938). — Trias de Bes, F. (2021). <em>El libro negro del emprendedor</em>. Ediciones Urano (ISBN: 9780077483166). — Maxwell, J. (2012). <em>El talento nunca es suficiente</em>. Thomas Nelson (ISBN: 9780881130720).</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/3-2.jpg" alt="Emprendimiento — Tipos y características del emprendedor" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Emprendimiento — Tipos y características del emprendedor</p>
                </div>
                </div>
        `
    },

    'tema3-3': {
        title: '3.3 Clases de Emprendedor',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-user-tie"></i> 3.3 Clases de Emprendedor</h3>
                <p>Gerber (1995) en <em>The E-Myth Revisited</em> propone tres arquetipos presentes en todo fundador: el emprendedor (visionario), el gerente (organizador) y el técnico (ejecutor). El desequilibrio entre estos perfiles explica muchos fracasos empresariales.</p>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-lightbulb"></i><h4>El Visionario</h4></div><p>Orientado al futuro y a la disrupción. Crea categorías nuevas de mercado. Su fortaleza es la visión; su reto, aprender a ejecutar y delegar.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-cog"></i><h4>El Técnico</h4></div><p>Experto en su área, construye negocios desde su conocimiento especializado. Necesita desarrollar habilidades de gestión y ventas para no enfocarse solo en el producto.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-chart-bar"></i><h4>El Gestor</h4></div><p>Habilidoso para organizar, planear y optimizar. Convierte ideas en sistemas eficientes. Puede carecer de visión creativa para generar disrupciones.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-users"></i><h4>El Conector (Networker)</h4></div><p>Construye ecosistemas de relaciones y alianzas estratégicas. Su red es su principal activo. Esencial en la economía de plataformas.</p></div>
                </div>
                <p class="source"><i class="fas fa-link"></i> Gerber, M. E. (1995). <em>The E-Myth Revisited</em>. HarperCollins.</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/3-3.jpg" alt="Clases de Emprendedor — Gerber (1995)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Clases de Emprendedor — Gerber (1995)</p>
                </div>
                </div>
        `
    },

    'tema3-4': {
        title: '3.4 El Proceso Emprendedor',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-map-signs"></i> 3.4 El Proceso Emprendedor</h3>
                <p>Timmons y Spinelli (2007) describen el proceso emprendedor como la identificación, evaluación y explotación de oportunidades. Según el GEM (2023), los factores que más inciden en el éxito son: la oportunidad percibida, las capacidades del emprendedor y el entorno institucional.</p>
                <div class="table-responsive">
                    <table class="content-table">
                        <thead><tr><th>Fase</th><th>Descripción</th><th>Resultado</th></tr></thead>
                        <tbody>
                            <tr><td><strong>1. Identificación de oportunidad</strong></td><td>Reconocer necesidades insatisfechas o problemas relevantes en el mercado.</td><td>Oportunidad validada</td></tr>
                            <tr><td><strong>2. Evaluación de la idea</strong></td><td>Analizar viabilidad técnica, económica y de mercado.</td><td>Concepto de negocio</td></tr>
                            <tr><td><strong>3. Desarrollo del plan</strong></td><td>Estructurar el modelo de negocio (BMC) y el plan estratégico.</td><td>Plan de negocio</td></tr>
                            <tr><td><strong>4. Obtención de recursos</strong></td><td>Conseguir financiamiento, talento, infraestructura y alianzas.</td><td>Recursos asegurados</td></tr>
                            <tr><td><strong>5. Lanzamiento</strong></td><td>Poner en marcha la empresa y generar ingresos con el MVP.</td><td>Empresa operando</td></tr>
                            <tr><td><strong>6. Gestión y crecimiento</strong></td><td>Optimizar, escalar y consolidar la posición en el mercado.</td><td>Empresa consolidada</td></tr>
                        </tbody>
                    </table>
                </div>
                <p class="source"><i class="fas fa-link"></i> Timmons, J. A., &amp; Spinelli, S. (2007). <em>New Venture Creation</em> (7.ª ed.). McGraw-Hill.</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/3-4.jpg" alt="El Proceso Emprendedor — Timmons y Spinelli (2007)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> El Proceso Emprendedor — Timmons y Spinelli (2007)</p>
                </div>
                </div>
        `
    },

    'actividades3': {
        title: 'Actividades - Unidad III: Emprendimiento',
        content: `
            <div class="activities-content">
                <div class="activities-header"><h3><i class="fas fa-tasks"></i> Actividades de Aprendizaje</h3><p>Unidad III: Emprendimiento — Prácticas 3, 4 y 5</p></div>
                <div class="activity-card">
                    <span class="activity-number">Práctica 3</span>
                    <h4><i class="fas fa-store"></i> Primeros Pasos de una Empresa</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>Define el giro y nombre de tu empresa ficticia.</li><li>Investiga los pasos legales para constituirla en México: denominación en el Registro Público de Comercio, escritura constitutiva ante Notario, registro en SAT (RFC), inscripción al IMSS y alta municipal.</li><li>Elabora un organigrama básico y define los roles del equipo fundador.</li><li>Presenta el proceso en un infographic digital.</li></ol></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable</h5><p>Infographic digital del proceso + documento de descripción de la empresa (2 cuartillas) con fuentes legales citadas.</p></div>
                    </div>
                </div>
                <div class="activity-card">
                    <span class="activity-number">Práctica 4</span>
                    <h4><i class="fas fa-tags"></i> Los Tipos de Emprendimiento</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>Selecciona un caso de emprendimiento social (ej. Échale a tu Casa) y uno tecnológico (ej. Clip, Bitso, Kavak) en México.</li><li>Compara ambos en: motivación fundadora, modelo de negocio, impacto medible y desafíos.</li><li>Elabora conclusiones apoyadas en la tipología del GEM (2023).</li></ol></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable</h5><p>Análisis comparativo en formato tabla + conclusiones (1 cuartilla) con referencias.</p></div>
                    </div>
                </div>
                <div class="activity-card">
                    <span class="activity-number">Práctica 5</span>
                    <h4><i class="fas fa-user-cog"></i> El Proceso Emprendedor</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>Identifica y entrevista a un emprendedor de tu comunidad (puede ser por videollamada).</li><li>Documenta las fases de su proceso emprendedor según Timmons y Spinelli (2007).</li><li>Identifica las características del emprendedor presentes (McClelland, Gerber).</li><li>Redacta un caso de estudio en formato académico.</li></ol></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable</h5><p>Caso de estudio (4–5 cuartillas) + constancia de la entrevista + referencias en APA 7.</p></div>
                    </div>
                </div>
            </div>
        `
    },

    'quiz3': {
        title: 'Cuestionario - Unidad III: Emprendimiento',
        content: `<div class="quiz-intro"><h3><i class="fas fa-question-circle"></i> Cuestionario de Autoevaluación</h3><p>Unidad III: Emprendimiento.</p><div class="quiz-info"><div class="quiz-info-item"><i class="fas fa-clock"></i><span>15 minutos</span></div><div class="quiz-info-item"><i class="fas fa-list"></i><span>10 preguntas</span></div><div class="quiz-info-item"><i class="fas fa-redo"></i><span>2 intentos</span></div><div class="quiz-info-item"><i class="fas fa-star"></i><span>Mínimo 60%</span></div></div><button id="startQuiz3" class="btn-primary" onclick="startQuiz(3)"><i class="fas fa-play"></i> Iniciar Cuestionario</button></div>`
    },

    // =============================================
    // UNIDAD 4: EMPRENDIMIENTO TECNOLÓGICO
    // =============================================

    'tema4-1': {
        title: '4.1 Emprendimiento Tecnológico y Emprendedor',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-microchip"></i> 4.1 Emprendimiento Tecnológico</h3>
                <p>Bailetti (2012) define el <strong>emprendimiento tecnológico</strong> como la creación de valor mediante la conformación de equipos que combinan activos científicos y tecnológicos con otros recursos para capturar oportunidades derivadas del cambio tecnológico. A diferencia del emprendimiento tradicional, su ventaja diferencial es la tecnología como palanca de escala.</p>
                <div class="highlight-box">
                    <h4><i class="fas fa-star"></i> 4.1.1 Principios del Emprendimiento Tecnológico</h4>
                    <p>Principios clave: escalabilidad, uso de datos para decisiones, iteración rápida, construcción de plataformas y efectos de red. Las empresas tecnológicas pueden crecer a costo marginal casi cero, generando modelos con retornos crecientes a escala (Arthur, 1996).</p>
                    <p class="source"><i class="fas fa-link"></i> Arthur, W. B. (1996). Increasing returns and the new world of business. <em>Harvard Business Review, 74</em>(4), 100–109.</p>
                </div>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-expand-arrows-alt"></i><h4>Escalabilidad</h4></div><p>Capacidad de crecer rápidamente sin incrementar costos en la misma proporción. Una plataforma puede servir a 1,000 o 1,000,000 de usuarios con la misma infraestructura base.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-network-wired"></i><h4>Efectos de Red</h4></div><p>El valor del producto aumenta con cada nuevo usuario (ley de Metcalfe). Redes sociales y marketplaces generan ventajas competitivas casi insuperables una vez alcanzada la masa crítica.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-database"></i><h4>Datos como Activo Estratégico</h4></div><p>Los datos de usuarios permiten mejorar el producto continuamente, personalizar la experiencia y generar nuevos modelos de ingreso (World Economic Forum, 2020).</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-globe"></i><h4>Alcance Global desde el Día 1</h4></div><p>La tecnología elimina barreras geográficas. Una startup puede operar globalmente con inversión mínima en infraestructura física (modelo <em>born global</em>, Oviatt &amp; McDougall, 1994).</p></div>
                </div>
                <p class="source"><i class="fas fa-link"></i> Bailetti, T. (2012). Technology entrepreneurship. <em>Technology Innovation Management Review, 2</em>(2), 5–12.</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/4-1.jpg" alt="Emprendimiento Tecnológico — Bailetti (2012)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Emprendimiento Tecnológico — Bailetti (2012)</p>
                </div>
                </div>
        `
    },

    'tema4-2': {
        title: '4.2 La Idea del Negocio',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-lightbulb"></i> 4.2 La Idea del Negocio Tecnológico</h3>
                <p>Shane y Venkataraman (2000) distinguen entre <strong>oportunidad empresarial</strong> e <strong>idea de negocio</strong>: una idea solo se convierte en oportunidad cuando existe un mercado dispuesto a pagar por la solución. La validación de la oportunidad es el paso crítico que separa las ideas de los negocios viables.</p>
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-search"></i> Fuentes de Ideas de Negocio</h4>
                        <ul>
                            <li>Observación de problemas cotidianos no resueltos (enfoque <em>Jobs to be Done</em>, Christensen)</li>
                            <li>Tendencias tecnológicas emergentes: IA generativa, IoT, Blockchain, computación cuántica</li>
                            <li>Necesidades insatisfechas en el trabajo o la vida personal</li>
                            <li>Mejora sustancial de productos o servicios existentes</li>
                            <li>Transferencia de modelos exitosos a mercados desatendidos</li>
                            <li>Investigación académica con potencial de comercialización (spin-off)</li>
                        </ul>
                    </div>
                    <div class="column-box">
                        <h4><i class="fas fa-filter"></i> Criterios para Evaluar una Idea</h4>
                        <ul>
                            <li><strong>Problema real:</strong> ¿Resuelve un dolor verdadero del cliente?</li>
                            <li><strong>Mercado suficiente:</strong> ¿Existe TAM-SAM-SOM viable?</li>
                            <li><strong>Ventaja diferencial:</strong> ¿Por qué tu solución es sustancialmente mejor?</li>
                            <li><strong>Viabilidad técnica:</strong> ¿Es posible construirlo con tecnología actual?</li>
                            <li><strong>Modelo de negocio:</strong> ¿Cómo genera y captura valor económico?</li>
                            <li><strong>Equipo:</strong> ¿Tiene las competencias para ejecutarlo?</li>
                        </ul>
                    </div>
                </div>
                <p class="source"><i class="fas fa-link"></i> Shane, S., &amp; Venkataraman, S. (2000). The promise of entrepreneurship as a field of research. <em>Academy of Management Review, 25</em>(1), 217–226.</p>
                <p class="source"><i class="fas fa-book"></i> <strong>Bibliografía oficial del curso (ESCOM-IPN):</strong> Thiel, P. &amp; Masters, M. (2021). <em>De Cero a Uno: Cómo inventar el futuro</em>. Ediciones Culturales Paidós (ISBN: 9786075690773). — Guy, K. (2016). <em>El arte de empezar 2.0</em>. Deusto (ISBN: 9788423424795). — Startup México: <a href="https://www.startupmexico.com/" target="_blank">https://www.startupmexico.com/</a></p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/4-2.jpg" alt="La Idea del Negocio Tecnológico — Oportunidad vs. Idea" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> La Idea del Negocio Tecnológico — Oportunidad vs. Idea</p>
                </div>
                </div>
        `
    },

    'tema4-3': {
        title: '4.3 Innovaciones Centradas en el Usuario',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-user-circle"></i> 4.3 Innovaciones Centradas en el Usuario (UCI)</h3>
                <p>Von Hippel (2005) documentó que los <strong>usuarios líderes</strong> (<em>lead users</em>) son fuente privilegiada de innovación: enfrentan antes que otros las necesidades que el mercado masivo desarrollará, y tienden a crear sus propias soluciones. Esto dio origen al concepto de <em>User-Centered Innovation</em> (UCI).</p>
                <div class="highlight-box">
                    <h4><i class="fas fa-info-circle"></i> 4.3.1 Principios de UCI</h4>
                    <p>Empatía profunda con el usuario (observación etnográfica), prototipado rápido y barato, pruebas frecuentes con usuarios reales, iteración basada en feedback y co-diseño con los propios usuarios. En Ciencia de Datos, esto implica involucrar a los usuarios finales en la definición de los datos que necesitan y cómo quieren visualizarlos.</p>
                    <p class="source"><i class="fas fa-link"></i> Von Hippel, E. (2005). <em>Democratizing Innovation</em>. MIT Press. <a href="https://web.mit.edu/evhippel/www/books.htm" target="_blank">https://web.mit.edu/evhippel/www/books.htm</a></p>
                </div>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-map"></i><h4>Customer Journey Map</h4></div><p>Herramienta visual que documenta la experiencia completa del usuario, identificando puntos de dolor (<em>pain points</em>) y momentos de oportunidad a lo largo de cada etapa del recorrido.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-user-friends"></i><h4>Personas de Usuario</h4></div><p>Perfiles semi-ficticios de arquetipos de usuarios basados en investigación cualitativa y cuantitativa, que guían decisiones de diseño centradas en necesidades reales (Cooper, 1999).</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-comments"></i><h4>Entrevistas de Descubrimiento</h4></div><p>Conversaciones no dirigidas para entender los <em>jobs to be done</em>, dolores y ganancias reales del usuario, más allá de lo que creen que quieren (Blank, 2013).</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-pencil-ruler"></i><h4>Prototipado Rápido</h4></div><p>Construcción de versiones simplificadas para validar supuestos clave con usuarios reales antes de invertir en desarrollo completo.</p></div>
                </div>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/4-3.jpg" alt="Innovación Centrada en el Usuario — Von Hippel (2005)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Innovación Centrada en el Usuario — Von Hippel (2005)</p>
                </div>
                </div>
        `
    },

    'tema4-4': {
        title: '4.4 Viabilidad Inicial de la Idea de Negocio',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-check-double"></i> 4.4 Viabilidad Inicial de la Idea de Negocio</h3>
                <p>Bygrave y Zacharakis (2011) proponen evaluar al menos cinco dimensiones de viabilidad antes de comprometer recursos significativos en el desarrollo de una idea de negocio.</p>
                <div class="table-responsive">
                    <table class="content-table">
                        <thead><tr><th>Dimensión</th><th>Preguntas Clave</th><th>Herramienta</th></tr></thead>
                        <tbody>
                            <tr><td><strong>Mercado</strong></td><td>¿Existe demanda real? ¿Cuál es el TAM-SAM-SOM? ¿Quién es el segmento objetivo?</td><td>Encuestas, entrevistas, análisis de mercado</td></tr>
                            <tr><td><strong>Técnica</strong></td><td>¿Es posible construirlo con tecnología actual? ¿Qué infraestructura y talento se requiere?</td><td>Prototipo técnico, Prueba de Concepto (POC)</td></tr>
                            <tr><td><strong>Financiera</strong></td><td>¿Puede generar ingresos suficientes? ¿Cuándo alcanza el punto de equilibrio?</td><td>Proyección financiera, análisis break-even</td></tr>
                            <tr><td><strong>Legal y regulatoria</strong></td><td>¿Existen regulaciones que lo limiten? ¿Se puede proteger la propiedad intelectual (IMPI, WIPO)?</td><td>Análisis regulatorio, búsqueda de patentes</td></tr>
                            <tr><td><strong>Equipo</strong></td><td>¿El equipo fundador tiene las competencias necesarias? ¿Qué habilidades faltan?</td><td>Análisis de capacidades, plan de contratación</td></tr>
                        </tbody>
                    </table>
                </div>
                <p class="source"><i class="fas fa-link"></i> Bygrave, W. D., &amp; Zacharakis, A. (2011). <em>Entrepreneurship</em> (2.ª ed.). Wiley.</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/4-4.jpg" alt="Viabilidad Inicial de la Idea de Negocio — 5 Dimensiones" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Viabilidad Inicial de la Idea de Negocio — 5 Dimensiones</p>
                </div>
                </div>
        `
    },

    'actividades4': {
        title: 'Actividades - Unidad IV: Emprendimiento Tecnológico',
        content: `
            <div class="activities-content">
                <div class="activities-header"><h3><i class="fas fa-tasks"></i> Actividades de Aprendizaje</h3><p>Unidad IV: Emprendimiento Tecnológico — Prácticas 6, 7, 8 y 9</p></div>
                <div class="activity-card">
                    <span class="activity-number">Práctica 6</span>
                    <h4><i class="fas fa-microchip"></i> Análisis de Emprendimientos Tecnológicos</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>Selecciona una startup tecnológica latinoamericana (Clip, Konfio, Bitso, Kavak, Nubank, etc.).</li><li>Analiza: problema que resuelve, tecnología utilizada, BMC y métricas de crecimiento (usuarios, ingresos, valuación).</li><li>Identifica los principios del emprendimiento tecnológico presentes (Bailetti, 2012).</li></ol></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable</h5><p>Presentación de caso (10 diapositivas) + reporte ejecutivo (2 cuartillas) con referencias en APA 7.</p></div>
                    </div>
                </div>
                <div class="activity-card">
                    <span class="activity-number">Prácticas 7 y 8</span>
                    <h4><i class="fas fa-lightbulb"></i> Desarrollo de Idea de Negocio e Innovación Centrada en el Usuario</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>Define una idea de negocio tecnológico original relacionada con Ciencia de Datos.</li><li>Realiza al menos 3 entrevistas de descubrimiento con usuarios potenciales (metodología Blank, 2013).</li><li>Construye un Customer Journey Map y 2 Personas del usuario objetivo.</li><li>Refina tu idea a partir de los aprendizajes obtenidos.</li></ol></div>
                        <div class="activity-group-work"><p><i class="fas fa-users"></i> <strong>Trabajo en equipo:</strong> 3–4 personas. Este proyecto continuará en la Unidad V.</p></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable</h5><p>Journey Map + Personas + Descripción refinada de la idea (3 cuartillas) con evidencias de entrevistas.</p></div>
                    </div>
                </div>
                <div class="activity-card">
                    <span class="activity-number">Práctica 9</span>
                    <h4><i class="fas fa-check-circle"></i> Análisis de Viabilidad Inicial</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>Aplica el análisis de viabilidad en las 5 dimensiones (Bygrave &amp; Zacharakis, 2011).</li><li>Calcula el TAM-SAM-SOM con fuentes de datos reales (INEGI, Statista, etc.).</li><li>Realiza una proyección financiera básica a 3 años.</li><li>Presenta tus conclusiones con evidencias.</li></ol></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable</h5><p>Reporte de viabilidad (5–6 cuartillas) con análisis cuantitativo, cualitativo y referencias en APA 7.</p></div>
                    </div>
                </div>
            </div>
        `
    },

    'quiz4': {
        title: 'Cuestionario - Unidad IV: Emprendimiento Tecnológico',
        content: `<div class="quiz-intro"><h3><i class="fas fa-question-circle"></i> Cuestionario de Autoevaluación</h3><p>Unidad IV: Emprendimiento Tecnológico.</p><div class="quiz-info"><div class="quiz-info-item"><i class="fas fa-clock"></i><span>15 minutos</span></div><div class="quiz-info-item"><i class="fas fa-list"></i><span>10 preguntas</span></div><div class="quiz-info-item"><i class="fas fa-redo"></i><span>2 intentos</span></div><div class="quiz-info-item"><i class="fas fa-star"></i><span>Mínimo 60%</span></div></div><button id="startQuiz4" class="btn-primary" onclick="startQuiz(4)"><i class="fas fa-play"></i> Iniciar Cuestionario</button></div>`
    },

    // =============================================
    // UNIDAD 5: PLAN DE NEGOCIO
    // =============================================

    'tema5-1': {
        title: '5.1 Planeación Estratégica',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-chess"></i> 5.1 Planeación Estratégica</h3>
                <p>Mintzberg, Ahlstrand y Lampel (1998) definen la <strong>estrategia</strong> como el patrón en una corriente de decisiones. La <strong>planeación estratégica</strong> es el proceso mediante el cual una organización define su dirección a largo plazo, establece prioridades y asigna recursos. En startups tecnológicas, este proceso debe ser ágil y revisable con frecuencia.</p>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-globe-americas"></i><h4>5.1.1 Análisis Externo</h4></div><p>Evaluación del entorno: mercado, competencia, tendencias tecnológicas, regulación y macroeconomía. Identifica oportunidades y amenazas mediante el análisis PESTEL.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-building"></i><h4>5.1.2 Análisis Interno</h4></div><p>Evaluación de recursos y capacidades propias. La Teoría de Recursos y Capacidades (Barney, 1991) sugiere que la ventaja sostenible proviene de recursos VRIN: Valiosos, Raros, Inimitables y No sustituibles.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-landmark"></i><h4>5.1.3 Análisis PESTEL</h4></div><p>Herramienta de análisis macroentorno: Político, Económico, Social, Tecnológico, Ecológico y Legal. Permite anticipar cambios en el contexto que afectan la viabilidad del negocio.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-th-large"></i><h4>5.1.4 Análisis FODA</h4></div><p>Integra el análisis interno (Fortalezas y Debilidades) con el externo (Oportunidades y Amenazas) para generar estrategias FO, FA, DO y DA.</p></div>
                </div>
                <p class="source"><i class="fas fa-link"></i> Mintzberg, H., Ahlstrand, B., &amp; Lampel, J. (1998). <em>Strategy Safari</em>. Free Press.</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/5-1.jpg" alt="Planeación Estratégica — Análisis PESTEL y FODA" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Planeación Estratégica — Análisis PESTEL y FODA</p>
                </div>
                </div>
        `
    },

    'tema5-2': {
        title: '5.2 Análisis de Competitividad de Porter',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-chess-queen"></i> 5.2 Las 5 Fuerzas Competitivas de Porter</h3>
                <p>Michael Porter (1980) propuso en <em>Competitive Strategy</em> el modelo de las <strong>cinco fuerzas</strong> que determinan la rentabilidad a largo plazo de una industria. Sigue siendo el marco de análisis competitivo más citado en la literatura de estrategia empresarial.</p>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-fist-raised"></i><h4>1. Rivalidad entre Competidores</h4></div><p>Intensidad de la competencia entre actores actuales. La intensifican: muchos competidores de tamaño similar, crecimiento lento del mercado, altos costos fijos y productos poco diferenciados.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-door-open"></i><h4>2. Amenaza de Nuevos Entrantes</h4></div><p>Posibilidad de que nuevas empresas ingresen al mercado. Las barreras de entrada —tecnología propietaria, capital requerido, regulación, efectos de red— determinan la intensidad de esta fuerza.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-exchange-alt"></i><h4>3. Poder de Sustitutos</h4></div><p>Amenaza de productos o servicios alternativos que satisfacen la misma necesidad a menor precio o con mejor desempeño. La tecnología frecuentemente crea sustitutos inesperados.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-truck"></i><h4>4. Poder de Proveedores</h4></div><p>Capacidad de los proveedores para imponer precios y condiciones. Crítico en sectores con pocos proveedores de tecnología especializada (semiconductores, servicios en la nube).</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-shopping-cart"></i><h4>5. Poder de Compradores</h4></div><p>Influencia de los clientes para exigir mejores precios o condiciones. En mercados digitales, la información asimétrica se reduce y los clientes tienen más poder comparativo.</p></div>
                </div>
                <p class="source"><i class="fas fa-link"></i> Porter, M. E. (1980). <em>Competitive Strategy</em>. Free Press.</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/5-2.jpg" alt="Las 5 Fuerzas Competitivas de Porter (1980)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Las 5 Fuerzas Competitivas de Porter (1980)</p>
                </div>
                </div>
        `
    },

    'tema5-3': {
        title: '5.3 Modelo de Negocio',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-th"></i> 5.3 Modelo de Negocio (Business Model Canvas)</h3>
                <p>Osterwalder y Pigneur (2010) definen un <strong>modelo de negocio</strong> como la lógica mediante la cual una organización <em>"crea, entrega y captura valor"</em>. El Business Model Canvas (BMC) es la herramienta más difundida para diseñar esta lógica en 9 bloques integrados.</p>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-bullhorn"></i><h4>5.3.1 Plan de Mercadotecnia</h4></div><p>Define la estrategia para llegar al cliente objetivo: segmentación (STP), mezcla de marketing (4P o 7P) y métricas de adquisición (CAC) y retención (LTV).</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-industry"></i><h4>5.3.2 Plan de Producción</h4></div><p>Especifica cómo se producirá el producto o servicio: procesos, tecnologías, capacidad instalada, control de calidad (ISO 9001) y gestión de la cadena de suministro.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-user-check"></i><h4>5.3.3 Gestión de Clientes (CRM)</h4></div><p>Estrategias de retención: medir satisfacción con NPS (<em>Net Promoter Score</em>), gestionar quejas y maximizar el Valor de Vida del Cliente (LTV).</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-boxes"></i><h4>5.3.4 Gestión de Proveedores (SCM)</h4></div><p>Gestión estratégica de la cadena de suministro: selección, evaluación y desarrollo de proveedores para garantizar calidad, continuidad y costos competitivos.</p></div>
                </div>
                <p class="source"><i class="fas fa-link"></i> Osterwalder, A., &amp; Pigneur, Y. (2010). <em>Business Model Generation</em>. Wiley.</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/5-3.jpg" alt="Business Model Canvas — Osterwalder y Pigneur (2010)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Business Model Canvas — Osterwalder y Pigneur (2010)</p>
                </div>
                </div>
        `
    },

    'tema5-4': {
        title: '5.4 Validación de Iniciativas de Negocios (Startups)',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-vials"></i> 5.4 Validación de Iniciativas de Negocios</h3>
                <p>Eric Ries (2011) define la <strong>startup</strong> como <em>"una institución humana diseñada para crear nuevos productos y servicios bajo condiciones de incertidumbre extrema"</em>. La <strong>validación</strong> es el proceso de probar las hipótesis fundamentales del negocio con evidencia real antes de comprometer grandes recursos.</p>
                <div class="two-column-grid">
                    <div class="column-box">
                        <h4><i class="fas fa-route"></i> El ciclo Construir-Medir-Aprender</h4>
                        <ul>
                            <li><strong>Construir:</strong> Desarrollar el MVP con el mínimo de funcionalidades para aprender.</li>
                            <li><strong>Medir:</strong> Recolectar datos de comportamiento real de usuarios con métricas accionables.</li>
                            <li><strong>Aprender:</strong> Analizar datos y decidir si perseverar (<em>persevere</em>), pivotar (<em>pivot</em>) o abandonar.</li>
                        </ul>
                        <p class="source">Ries, E. (2011). <em>The Lean Startup</em>. Crown Business.</p>
                    </div>
                    <div class="column-box">
                        <h4><i class="fas fa-tasks"></i> Tipos de Validación</h4>
                        <ul>
                            <li><strong>Del problema:</strong> ¿El problema existe y es relevante?</li>
                            <li><strong>De la solución:</strong> ¿Los usuarios encuentran valor en tu solución?</li>
                            <li><strong>Del modelo:</strong> ¿Están dispuestos a pagar por ello?</li>
                            <li><strong>Del canal:</strong> ¿Puedes llegar a ellos de forma eficiente y rentable?</li>
                        </ul>
                    </div>
                </div>
                <div class="highlight-box">
                    <h4><i class="fas fa-lightbulb"></i> El MVP no es un producto malo</h4>
                    <p>El Producto Mínimo Viable (MVP) es la versión más simple del producto que permite recolectar el máximo aprendizaje validado con el mínimo esfuerzo. Su objetivo no es impresionar sino aprender con velocidad y bajo costo.</p>
                </div>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/5-4.jpg" alt="Ciclo Construir-Medir-Aprender — Lean Startup (Ries, 2011)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Ciclo Construir-Medir-Aprender — Lean Startup (Ries, 2011)</p>
                </div>
                </div>
        `
    },

    'tema5-5': {
        title: '5.5 Financiamiento y Rentabilidad',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-coins"></i> 5.5 Financiamiento y Rentabilidad</h3>
                <p>La estructura de financiamiento evoluciona con la etapa del emprendimiento. Gompers y Lerner (2004) describen el ecosistema de capital de riesgo como el mecanismo principal para financiar empresas de alto crecimiento e incertidumbre en etapas tempranas.</p>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-piggy-bank"></i><h4>Bootstrapping</h4></div><p>Financiamiento propio con ahorros personales o reinversión de ingresos. Mantiene control total del fundador pero puede limitar la velocidad de crecimiento en mercados competitivos.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-user-tie"></i><h4>Ángeles Inversionistas</h4></div><p>Individuos de alto patrimonio que invierten en etapas tempranas (<em>seed</em>) a cambio de participación accionaria. Aportan mentoría y red de contactos. En México: Angel Hub, ARCANGELES.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-rocket"></i><h4>Capital de Riesgo (VC)</h4></div><p>Fondos especializados en startups de alto crecimiento. Buscan retornos de 10x o más. Implica ceder participación y aceptar gobiernos corporativos más estrictos. En México: ALLVP, Mountain Nazca, Ignia.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-university"></i><h4>Fondos Públicos</h4></div><p>CONAHCYT, NAFIN, SE y fondos estatales apoyan emprendimientos con capital semilla, créditos blandos y programas de aceleración. Requieren menor dilución pero más trámites burocráticos.</p></div>
                </div>
                <div class="highlight-box">
                    <h4><i class="fas fa-calculator"></i> Métricas de Rentabilidad Clave</h4>
                    <p><strong>CAC</strong> (Costo de Adquisición de Cliente), <strong>LTV</strong> (Valor de Vida del Cliente — la relación LTV/CAC debe ser mayor a 3), <strong>MRR/ARR</strong> (Ingresos Recurrentes Mensuales/Anuales), <strong>Runway</strong> (meses de operación con capital disponible) y <strong>Burn Rate</strong> (velocidad de gasto mensual).</p>
                </div>
                <p class="source"><i class="fas fa-link"></i> Gompers, P., &amp; Lerner, J. (2004). <em>The Venture Capital Cycle</em> (2.ª ed.). MIT Press.</p>
                <p class="source"><i class="fas fa-book"></i> <strong>Bibliografía oficial del curso (ESCOM-IPN):</strong> Nacional Financiera. (2022). <em>Inicio</em>. <a href="https://www.nafintecapacita.com/" target="_blank">https://www.nafintecapacita.com/</a></p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/5-5.jpg" alt="Financiamiento y Rentabilidad — Ecosistema emprendedor" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Financiamiento y Rentabilidad — Ecosistema emprendedor</p>
                </div>
                </div>
        `
    },

    'tema5-6': {
        title: '5.6 Crecimiento Inteligente de Empresas Privadas',
        content: `
            <div class="content-section">
                <h3><i class="fas fa-chart-line"></i> 5.6 Crecimiento Inteligente de Empresas Privadas</h3>
                <p>Ansoff (1957) propuso la <strong>Matriz de Crecimiento</strong> para clasificar las estrategias de expansión según dos dimensiones: mercados (actuales vs. nuevos) y productos (actuales vs. nuevos). Es el marco más citado para decisiones de crecimiento empresarial.</p>
                <div class="info-cards-grid">
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-expand"></i><h4>Estrategias de Crecimiento (Ansoff, 1957)</h4></div><ul style="margin:0;padding-left:1rem;"><li><strong>Penetración:</strong> Más del mismo producto en el mismo mercado.</li><li><strong>Desarrollo de producto:</strong> Nuevo producto para el mismo mercado.</li><li><strong>Desarrollo de mercado:</strong> Mismo producto en nuevos mercados.</li><li><strong>Diversificación:</strong> Nuevo producto en nuevo mercado. Mayor riesgo.</li></ul></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-balance-scale"></i><h4>Crecimiento vs. Rentabilidad</h4></div><p>El dilema de las startups: crecer rápido quemando capital (<em>blitzscaling</em>, Hoffman &amp; Yeh, 2018) vs. crecer rentable y sosteniblemente. La decisión depende del tamaño del mercado, la competencia y el capital disponible.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-plug"></i><h4>Escalabilidad Tecnológica</h4></div><p>Diseñar infraestructura tecnológica para soportar el crecimiento: arquitecturas de microservicios, cloud computing (AWS, Google Cloud, Azure) y automatización DevOps.</p></div>
                    <div class="info-card"><div class="info-card-header"><i class="fas fa-handshake"></i><h4>Alianzas Estratégicas</h4></div><p>Asociaciones con empresas complementarias para acceder a nuevos mercados, tecnologías o capacidades sin el costo de desarrollarlas internamente (Open Innovation, Chesbrough, 2003).</p></div>
                </div>
                <p class="source"><i class="fas fa-link"></i> Ansoff, H. I. (1957). Strategies for diversification. <em>Harvard Business Review, 35</em>(5), 113–124.</p>
            
                <div class="section-image" style="text-align:center;margin-top:1.8rem;">
                    <img style="display:block;margin:0 auto;max-width:100%;width:680px;border-radius:10px;box-shadow:0 4px 18px rgba(0,0,0,0.12);" src="images/5-6.jpg" alt="Crecimiento Inteligente — Matriz de Ansoff (1957)" onerror="this.parentElement.style.display='none'">
                    <p style="margin-top:0.55rem;font-size:0.82rem;color:#7a8499;font-style:italic;"><i class="fas fa-image"></i> Crecimiento Inteligente — Matriz de Ansoff (1957)</p>
                </div>
                </div>
        `
    },

    'actividades5': {
        title: 'Actividades - Unidad V: Plan de Negocio',
        content: `
            <div class="activities-content">
                <div class="activities-header"><h3><i class="fas fa-tasks"></i> Actividades de Aprendizaje</h3><p>Unidad V: Plan de Negocio — Prácticas 10 al 14</p></div>
                <div class="activity-card">
                    <span class="activity-number">Práctica 10</span>
                    <h4><i class="fas fa-chess"></i> Planeación Estratégica de una Empresa</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>Elabora un análisis PESTEL para el entorno de tu startup con evidencias de fuentes confiables.</li><li>Realiza un análisis FODA completo (mínimo 4 elementos por cuadrante) y genera estrategias FO, FA, DO y DA.</li><li>Define la misión, visión y valores de tu empresa.</li><li>Establece 3 objetivos estratégicos SMART para el primer año.</li></ol></div>
                        <div class="activity-group-work"><p><i class="fas fa-users"></i> Continuación del proyecto de equipo.</p></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable</h5><p>Documento de planeación estratégica (5–6 cuartillas) con matrices visuales y referencias en APA 7.</p></div>
                    </div>
                </div>
                <div class="activity-card">
                    <span class="activity-number">Práctica 11</span>
                    <h4><i class="fas fa-chess-queen"></i> Análisis de Competitividad de Porter</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>Define la industria de tu startup con datos de mercado (INEGI, Statista, IBISWorld).</li><li>Analiza cada una de las 5 fuerzas con evidencia concreta y cuantificada.</li><li>Califica la intensidad de cada fuerza (alta, media, baja) y justifica con datos.</li><li>Concluye con la estrategia competitiva recomendada (liderazgo en costos, diferenciación o enfoque, según Porter).</li></ol></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable</h5><p>Análisis de las 5 Fuerzas en formato visual + reporte ejecutivo (2 cuartillas) con referencias.</p></div>
                    </div>
                </div>
                <div class="activity-card">
                    <span class="activity-number">Práctica 12</span>
                    <h4><i class="fas fa-th"></i> Modelo de Negocio — Business Model Canvas</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>Completa los 9 bloques del BMC con información específica y medible (Osterwalder &amp; Pigneur, 2010).</li><li>Desarrolla el plan de mercadotecnia, producción, gestión de clientes y proveedores.</li><li>Identifica las 3 hipótesis más riesgosas de tu modelo.</li></ol></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable</h5><p>BMC completo en formato visual digital + descripción de cada bloque crítico.</p></div>
                    </div>
                </div>
                <div class="activity-card">
                    <span class="activity-number">Práctica 13</span>
                    <h4><i class="fas fa-vials"></i> Validación de Iniciativas — Lean Startup</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>Define las 3 hipótesis más críticas de tu modelo de negocio.</li><li>Diseña un experimento (landing page, encuesta, prototipo clicable) para validar al menos una hipótesis con usuarios reales.</li><li>Ejecuta el experimento y documenta resultados con métricas cuantitativas.</li><li>Decide con base en datos: ¿perseveras, pivotas o abandonas? Justifica con evidencia.</li></ol></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable</h5><p>Reporte de validación con evidencias del experimento + decisión justificada.</p></div>
                    </div>
                </div>
                <div class="activity-card">
                    <span class="activity-number">Práctica 14 — Proyecto Final</span>
                    <h4><i class="fas fa-coins"></i> Plan de Negocio Integrador: Rentabilidad y Financiamiento</h4>
                    <div class="activity-description">
                        <div class="activity-tasks"><h5><i class="fas fa-list-ol"></i> Instrucciones</h5><ol><li>Proyección de ingresos y gastos a 3 años con supuestos explícitos y fuentes de datos.</li><li>Cálculo del punto de equilibrio (<em>break-even analysis</em>).</li><li>Definición de la estrategia de financiamiento con justificación (Gompers &amp; Lerner, 2004).</li><li>Presentación final del plan de negocio completo ante el grupo y evaluadores externos.</li></ol></div>
                        <div class="activity-group-work"><p><i class="fas fa-star"></i> <strong>Proyecto Final:</strong> Entregable integrador que reúne todo el trabajo del semestre.</p></div>
                        <div class="activity-deliverable"><h5><i class="fas fa-upload"></i> Entregable Final</h5><p>Plan de negocio completo (15–20 cuartillas) en formato APA 7 + presentación ejecutiva de 15 minutos.</p></div>
                    </div>
                </div>
            </div>
        `
    },

    'quiz5': {
        title: 'Cuestionario - Unidad V: Plan de Negocio',
        content: `<div class="quiz-intro"><h3><i class="fas fa-question-circle"></i> Cuestionario de Autoevaluación</h3><p>Unidad V: Plan de Negocio.</p><div class="quiz-info"><div class="quiz-info-item"><i class="fas fa-clock"></i><span>15 minutos</span></div><div class="quiz-info-item"><i class="fas fa-list"></i><span>10 preguntas</span></div><div class="quiz-info-item"><i class="fas fa-redo"></i><span>2 intentos</span></div><div class="quiz-info-item"><i class="fas fa-star"></i><span>Mínimo 60%</span></div></div><button id="startQuiz5" class="btn-primary" onclick="startQuiz(5)"><i class="fas fa-play"></i> Iniciar Cuestionario</button></div>`
    }
};

// Exponer globalmente
window.courseContent = courseContent;
console.log('✅ Contenido de Innovación y Emprendimiento Tecnológico cargado:', Object.keys(courseContent).length, 'secciones');

// ============================================
// SECCIÓN EXTRA: BIBLIOGRAFÍA OFICIAL DEL CURSO (Plan de Estudios ESCOM-IPN)
// ============================================
courseContent['bibliografia'] = {
    title: 'Bibliografía Oficial del Curso',
    content: `
        <div class="content-section">
            <h3><i class="fas fa-book-open"></i> Bibliografía Oficial — Plan de Estudios ESCOM-IPN</h3>
            <p>La siguiente bibliografía corresponde al plan de estudios oficial de la asignatura <strong>Innovación y Emprendimiento Tecnológico</strong> de la Licenciatura en Ciencia de Datos, ESCOM-IPN. Las fuentes se clasifican como <strong>B</strong> (Básica) y <strong>C</strong> (Complementaria).</p>

            <div class="highlight-box">
                <h4><i class="fas fa-star"></i> Bibliografía Básica (B)</h4>
                <p>Fuentes de lectura obligatoria según el programa oficial.</p>
            </div>

            <div class="table-responsive">
                <table class="content-table">
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Autor(es)</th>
                            <th>Año</th>
                            <th>Título</th>
                            <th>Editorial / ISBN</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><span style="background:#013A63;color:#fff;padding:2px 8px;border-radius:4px;font-weight:bold;">B</span></td>
                            <td>Fernández, S. &amp; Sansó, S.</td>
                            <td>2017</td>
                            <td><em>Misión emprender</em></td>
                            <td>Conecta / 9788416029938</td>
                        </tr>
                        <tr>
                            <td><span style="background:#013A63;color:#fff;padding:2px 8px;border-radius:4px;font-weight:bold;">B</span></td>
                            <td>Ismail, S., Malone, M. &amp; Van Geest, Y.</td>
                            <td>2016</td>
                            <td><em>Organizaciones Exponenciales</em></td>
                            <td>Bubok Publishing / 9788468086316</td>
                        </tr>
                        <tr>
                            <td><span style="background:#013A63;color:#fff;padding:2px 8px;border-radius:4px;font-weight:bold;">B</span></td>
                            <td>Ries, E.</td>
                            <td>2013</td>
                            <td><em>El método Lean Startup</em></td>
                            <td>Deusto México / 9788423409495</td>
                        </tr>
                        <tr>
                            <td><span style="background:#013A63;color:#fff;padding:2px 8px;border-radius:4px;font-weight:bold;">B</span></td>
                            <td>Thiel, P. &amp; Masters, M.</td>
                            <td>2021</td>
                            <td><em>De Cero a Uno: Cómo inventar el futuro</em></td>
                            <td>Ediciones Culturales Paidós / 9786075690773</td>
                        </tr>
                        <tr>
                            <td><span style="background:#013A63;color:#fff;padding:2px 8px;border-radius:4px;font-weight:bold;">B</span></td>
                            <td>Trias de Bes, F.</td>
                            <td>2021</td>
                            <td><em>El libro negro del emprendedor</em></td>
                            <td>Ediciones Urano / 9780077483166</td>
                        </tr>
                        <tr>
                            <td><span style="background:#1A5276;color:#fff;padding:2px 8px;border-radius:4px;font-weight:bold;">C</span></td>
                            <td>Collins, J.</td>
                            <td>2014</td>
                            <td><em>Empresas que perduran</em></td>
                            <td>NORMA EDICIONES S.A. DE C.V. / 9799660494645</td>
                        </tr>
                        <tr>
                            <td><span style="background:#1A5276;color:#fff;padding:2px 8px;border-radius:4px;font-weight:bold;">C</span></td>
                            <td>Guy, K.</td>
                            <td>2016</td>
                            <td><em>El arte de empezar 2.0: La guía definitiva para empezar cualquier negocio en un mundo 2.0</em></td>
                            <td>Deusto / 9788423424795</td>
                        </tr>
                        <tr>
                            <td><span style="background:#1A5276;color:#fff;padding:2px 8px;border-radius:4px;font-weight:bold;">C</span></td>
                            <td>Kelley, J. &amp; Littman, T.</td>
                            <td>2009</td>
                            <td><em>Las diez caras de la innovación: estrategias para una creatividad excelente</em></td>
                            <td>Paidós Ibérica / 9788449323263</td>
                        </tr>
                        <tr>
                            <td><span style="background:#1A5276;color:#fff;padding:2px 8px;border-radius:4px;font-weight:bold;">C</span></td>
                            <td>Maxwell, J.</td>
                            <td>2012</td>
                            <td><em>El talento nunca es suficiente</em></td>
                            <td>Thomas Nelson / 9780881130720</td>
                        </tr>
                        <tr>
                            <td><span style="background:#1A5276;color:#fff;padding:2px 8px;border-radius:4px;font-weight:bold;">C</span></td>
                            <td>Osterwalder, A. &amp; Pigneur, Y.</td>
                            <td>2014</td>
                            <td><em>Generación de modelos de negocio</em></td>
                            <td>Deusto / 9788423427994</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="highlight-box" style="margin-top:1.5rem;">
                <h4><i class="fas fa-globe"></i> Recursos Digitales Oficiales</h4>
                <ul>
                    <li>Nacional Financiera. (2022). <em>Inicio</em>. <a href="https://www.nafintecapacita.com/" target="_blank">https://www.nafintecapacita.com/</a></li>
                    <li>Startup México. (2022). <em>Inicio</em>. <a href="https://www.startupmexico.com/" target="_blank">https://www.startupmexico.com/</a></li>
                    <li>Universidad Carlos III de Madrid. (2022). <em>Emprendimiento tecnológico</em>. edX. <a href="https://www.edx.org/es/ocurso/emprendimiento-tecnologico" target="_blank">https://www.edx.org/es/ocurso/emprendimiento-tecnologico</a></li>
                </ul>
            </div>

            <p class="source"><i class="fas fa-file-alt"></i> Fuente: Plan de Estudios oficial de la asignatura Innovación y Emprendimiento Tecnológico — ESCOM, IPN. Hoja 6 de 7.</p>
        </div>

        <div class="content-section">
            <h3><i class="fas fa-link"></i> Conexión con el Contenido del Curso</h3>
            <p>A continuación se indica en qué unidad o tema se aplica cada fuente bibliográfica oficial:</p>
            <div class="table-responsive">
                <table class="content-table">
                    <thead>
                        <tr><th>Obra</th><th>Aplicación en el curso</th></tr>
                    </thead>
                    <tbody>
                        <tr><td><strong>Ries, E. — El método Lean Startup (2013)</strong></td><td>Unidad II (Herramientas para Innovar), Unidad V (Validación de Startups, ciclo BML, MVP)</td></tr>
                        <tr><td><strong>Osterwalder &amp; Pigneur — Generación de modelos de negocio (2014)</strong></td><td>Unidad II (BMC como herramienta), Unidad V (Modelo de Negocio, 9 bloques)</td></tr>
                        <tr><td><strong>Ismail et al. — Organizaciones Exponenciales (2016)</strong></td><td>Unidad II (Paradigmas tecnológicos, escalabilidad), Unidad IV (Emprendimiento tecnológico)</td></tr>
                        <tr><td><strong>Thiel, P. — De Cero a Uno (2021)</strong></td><td>Unidad IV (La idea del negocio, monopolio y ventaja diferencial), Unidad V (Crecimiento)</td></tr>
                        <tr><td><strong>Trias de Bes — El libro negro del emprendedor (2021)</strong></td><td>Unidad III (Proceso emprendedor, errores frecuentes)</td></tr>
                        <tr><td><strong>Fernández &amp; Sansó — Misión emprender (2017)</strong></td><td>Unidad III (Clases de emprendedor, motivaciones)</td></tr>
                        <tr><td><strong>Collins — Empresas que perduran (2014)</strong></td><td>Unidad I (La empresa innovadora, características de permanencia)</td></tr>
                        <tr><td><strong>Guy, K. — El arte de empezar 2.0 (2016)</strong></td><td>Unidad III (Primeros pasos de una empresa), Unidad IV (La idea del negocio)</td></tr>
                        <tr><td><strong>Kelley &amp; Littman — Las diez caras de la innovación (2009)</strong></td><td>Unidad I (Clasificación, reglas de innovación), Unidad II (Herramientas para innovar)</td></tr>
                        <tr><td><strong>Maxwell — El talento nunca es suficiente (2012)</strong></td><td>Unidad III (Características del emprendedor, liderazgo y competencias)</td></tr>
                        <tr><td><strong>Nacional Financiera (nafintecapacita.com)</strong></td><td>Unidad V (Financiamiento: créditos y fondos públicos en México)</td></tr>
                        <tr><td><strong>Startup México (startupmexico.com)</strong></td><td>Unidad IV (Ecosistema emprendedor en México, casos locales)</td></tr>
                        <tr><td><strong>edX — Emprendimiento tecnológico, UC3M (2022)</strong></td><td>Unidad IV (Competencias del emprendedor tecnológico, recursos MOOC)</td></tr>
                    </tbody>
                </table>
            </div>
        </div>
    `
};
console.log('✅ Bibliografía oficial del plan de estudios ESCOM-IPN agregada.');
