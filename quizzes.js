// ============================================
// SISTEMA DE CUESTIONARIOS POR UNIDAD
// INNOVACIÓN Y EMPRENDIMIENTO TECNOLÓGICO
// ============================================

const quizConfig = {
    timePerQuiz: 15,
    maxAttempts: 2,
    passingScore: 60
};

let quizState = {
    currentQuiz: null,
    currentQuestion: 0,
    answers: [],
    timeRemaining: 0,
    timerInterval: null,
    attempts: {},
    bestScores: {},
    lastResults: null
};

// =============================================
// FUNCIONES DE LOCALSTORAGE
// =============================================
function saveQuizState() {
    const stateToSave = {
        currentQuiz: quizState.currentQuiz,
        currentQuestion: quizState.currentQuestion,
        answers: quizState.answers,
        timeRemaining: quizState.timeRemaining,
        attempts: quizState.attempts
    };
    localStorage.setItem('quizState_innov', JSON.stringify(stateToSave));
}

function loadQuizState() {
    const saved = localStorage.getItem('quizState_innov');
    if (saved) {
        const parsed = JSON.parse(saved);
        quizState.attempts = parsed.attempts || {};
        if (parsed.currentQuiz && parsed.timeRemaining > 0) {
            quizState.currentQuiz = parsed.currentQuiz;
            quizState.currentQuestion = parsed.currentQuestion;
            quizState.answers = parsed.answers;
            quizState.timeRemaining = parsed.timeRemaining;
        }
    }
}

function saveAttempts() {
    localStorage.setItem('quizAttempts_innov', JSON.stringify(quizState.attempts));
}

function loadAttempts() {
    const saved = localStorage.getItem('quizAttempts_innov');
    if (saved) quizState.attempts = JSON.parse(saved);
}

function saveBestScore(unitNumber, score) {
    const key = 'bestScore_innov_' + unitNumber;
    const current = parseInt(localStorage.getItem(key) || '0');
    if (score > current) localStorage.setItem(key, score.toString());
}

function getBestScore(unitNumber) {
    return parseInt(localStorage.getItem('bestScore_innov_' + unitNumber) || '0');
}

// =============================================
// BANCO DE PREGUNTAS POR UNIDAD
// =============================================
const quizQuestions = {
    1: [
        {
            question: "¿Cuál es el objetivo fundamental de la innovación en una empresa?",
            options: ["Reducir costos de producción", "Generar valor para clientes, accionistas y la sociedad", "Registrar patentes", "Contratar más personal técnico"],
            correct: 1,
            feedback: "La innovación tiene como objetivo fundamental generar valor en múltiples dimensiones: económico, para el cliente y social."
        },
        {
            question: "¿Qué tipo de innovación implica cambios graduales y continuos sobre productos existentes?",
            options: ["Innovación disruptiva", "Innovación radical", "Innovación incremental", "Innovación abierta"],
            correct: 2,
            feedback: "La innovación incremental son mejoras continuas y graduales sobre productos o procesos ya existentes, con bajo riesgo y resultados predecibles."
        },
        {
            question: "¿Qué es la innovación disruptiva?",
            options: ["Pequeñas mejoras a un producto", "Transformaciones que crean nuevos mercados o desplazan actores establecidos", "Innovación exclusivamente tecnológica", "Innovación en procesos de manufactura"],
            correct: 1,
            feedback: "La innovación disruptiva crea nuevos mercados o desplaza a los actores establecidos, generalmente apoyándose en tecnología emergente."
        },
        {
            question: "¿Cuál de los siguientes NO es un tipo de innovación según su área de aplicación?",
            options: ["Innovación de producto", "Innovación de proceso", "Innovación financiera especulativa", "Innovación organizacional"],
            correct: 2,
            feedback: "Los tipos principales de innovación son: de producto, de proceso, de mercado y organizacional. La especulación financiera no es una categoría de innovación empresarial."
        },
        {
            question: "¿Qué distingue a una empresa innovadora?",
            options: ["Tener el mayor número de empleados del sector", "Incorporar la innovación como parte central de su estrategia y cultura", "Registrar la mayor cantidad de marcas comerciales", "Ser la empresa más antigua del mercado"],
            correct: 1,
            feedback: "Una empresa innovadora incorpora la innovación sistemáticamente en su estrategia, cultura y operaciones, no solo como actividad ocasional."
        },
        {
            question: "La innovación abierta se caracteriza por:",
            options: ["Generar toda la innovación internamente", "Colaborar con externos como universidades, startups y clientes", "Innovar solo con recursos propios", "Copiar innovaciones de la competencia"],
            correct: 1,
            feedback: "La innovación abierta implica colaborar con actores externos (universidades, startups, clientes) para co-crear soluciones, potenciando la capacidad innovadora."
        },
        {
            question: "Según Peter Drucker, la innovación es:",
            options: ["Un gasto que deben minimizar las empresas", "La herramienta específica de los emprendedores para explotar el cambio", "Un proceso exclusivo de empresas tecnológicas", "Una actividad solo para grandes corporaciones"],
            correct: 1,
            feedback: "Drucker define la innovación como la herramienta específica de los emprendedores, el medio por el cual explotan el cambio como oportunidad."
        },
        {
            question: "¿Cuál es una regla fundamental de la innovación exitosa?",
            options: ["Innovar sin importar si hay mercado para el resultado", "Orientarse al mercado: partir de necesidades reales del cliente", "Mantener los proyectos de innovación en secreto absoluto", "Innovar solo en el producto principal de la empresa"],
            correct: 1,
            feedback: "Una regla fundamental es la orientación al mercado: toda innovación debe partir de una necesidad real del cliente; innovar sin conexión con el usuario raramente genera valor."
        },
        {
            question: "La innovación frugal se caracteriza por:",
            options: ["Usar el mayor presupuesto disponible", "Soluciones de alto impacto con el mínimo de recursos", "Innovar solo en países desarrollados", "Aplicar únicamente en empresas pequeñas"],
            correct: 1,
            feedback: "La innovación frugal produce soluciones de alto impacto con mínimos recursos, orientadas especialmente a poblaciones con acceso limitado."
        },
        {
            question: "¿Qué implica la innovación de mercado?",
            options: ["Cambiar el logo de la empresa", "Explorar nuevos segmentos, canales o estrategias de posicionamiento", "Mejorar la maquinaria de producción", "Contratar más personal de ventas"],
            correct: 1,
            feedback: "La innovación de mercado implica la exploración de nuevos segmentos de clientes, canales de distribución o estrategias de posicionamiento diferentes."
        }
    ],
    2: [
        {
            question: "¿Qué significa I+D+I en el contexto empresarial?",
            options: ["Inversión, Desarrollo e Integración", "Investigación, Desarrollo e Innovación", "Información, Datos e Inteligencia", "Industria, Diseño e Implementación"],
            correct: 1,
            feedback: "I+D+I significa Investigación, Desarrollo e Innovación: la cadena de valor del conocimiento que va desde generar saber científico hasta crear impacto económico."
        },
        {
            question: "¿Qué es un paradigma tecnológico según Giovanni Dosi?",
            options: ["Un producto tecnológico nuevo", "Un modelo de solución de problemas que define la dirección del cambio tecnológico", "Una patente tecnológica", "Un programa de capacitación tecnológica"],
            correct: 1,
            feedback: "Un paradigma tecnológico es un modelo o patrón de solución de problemas que define la dirección del cambio tecnológico en una industria durante un período determinado."
        },
        {
            question: "¿Cuál es una característica de la 'destrucción creativa' de Schumpeter?",
            options: ["Las empresas nunca desaparecen", "La innovación tecnológica desplaza industrias obsoletas y crea nuevas oportunidades", "La tecnología no afecta el empleo", "El mercado siempre favorece a las empresas tradicionales"],
            correct: 1,
            feedback: "Schumpeter describe la destrucción creativa como el proceso por el cual la innovación tecnológica desplaza industrias y empresas obsoletas mientras crea nuevas oportunidades."
        },
        {
            question: "¿Cuál es el método de Design Thinking correcto en orden?",
            options: ["Prototipar → Definir → Empatizar → Idear → Evaluar", "Empatizar → Definir → Idear → Prototipar → Evaluar", "Idear → Empatizar → Prototipar → Definir → Evaluar", "Definir → Idear → Empatizar → Evaluar → Prototipar"],
            correct: 1,
            feedback: "El orden correcto del Design Thinking es: Empatizar → Definir → Idear → Prototipar → Evaluar."
        },
        {
            question: "¿Qué es la vigilancia tecnológica?",
            options: ["Instalar cámaras de seguridad en la empresa", "Monitoreo sistemático del entorno para identificar tendencias y tecnologías emergentes", "Control de calidad en producción", "Supervisión del uso de dispositivos por empleados"],
            correct: 1,
            feedback: "La vigilancia tecnológica es el monitoreo sistemático del entorno tecnológico para identificar tendencias emergentes, tecnologías disruptivas y amenazas competitivas."
        },
        {
            question: "¿En qué consiste el ciclo Construir-Medir-Aprender del Lean Startup?",
            options: ["Planear a 5 años, ejecutar y evaluar al final", "Construir un MVP, medir con datos reales y aprender para iterar", "Construir el producto completo antes de salir al mercado", "Medir primero el mercado y luego construir"],
            correct: 1,
            feedback: "El ciclo Lean Startup propone: Construir un MVP → Medir comportamiento real de usuarios → Aprender y decidir si perseverar, pivotar o abandonar."
        },
        {
            question: "¿Qué ventaja competitiva genera la adopción temprana de tecnología?",
            options: ["Ninguna, la tecnología siempre está disponible para todos", "Ventaja de pionero: mayor cuota de mercado y curvas de aprendizaje adelantadas", "Solo beneficios fiscales", "Reducción de la competencia"],
            correct: 1,
            feedback: "Las empresas que adoptan tecnologías emergentes antes que sus competidores obtienen ventajas de pionero: mayor cuota de mercado inicial y curvas de aprendizaje adelantadas."
        },
        {
            question: "¿Qué es el MVP (Minimum Viable Product)?",
            options: ["El producto más caro del catálogo", "La versión más simple que permite recolectar el máximo aprendizaje con mínimo esfuerzo", "El producto más completo posible", "Un producto para clientes premium"],
            correct: 1,
            feedback: "El MVP es la versión más simple de un producto que permite recolectar el máximo aprendizaje validado con el mínimo esfuerzo. Su objetivo es aprender, no impresionar."
        },
        {
            question: "La técnica SCAMPER propone transformar ideas existentes mediante:",
            options: ["Solo mejorar el diseño visual", "Sustituir, Combinar, Adaptar, Modificar, Poner en otros usos, Eliminar, Reordenar", "Análisis financiero detallado", "Estudio de mercado tradicional"],
            correct: 1,
            feedback: "SCAMPER es una técnica creativa que propone: Sustituir, Combinar, Adaptar, Modificar, Poner en otros usos, Eliminar y Reordenar elementos de ideas existentes."
        },
        {
            question: "¿Cómo genera ventaja competitiva la innovación tecnológica mediante datos?",
            options: ["Los datos no aportan ventaja competitiva", "Los datos propietarios permiten mejorar el producto continuamente y personalizar la experiencia", "Solo sirven para reportes internos", "Los datos son un pasivo legal"],
            correct: 1,
            feedback: "Los datos generados por usuarios son un activo estratégico que permite mejorar el producto continuamente, personalizar la experiencia y tomar mejores decisiones."
        }
    ],
    3: [
        {
            question: "¿Cómo se define el emprendimiento?",
            options: ["Solo la creación de empresas grandes", "El proceso de identificar oportunidades, movilizar recursos y crear valor asumiendo riesgos", "Exclusivamente actividades de tecnología", "La gestión de empresas ya establecidas"],
            correct: 1,
            feedback: "El emprendimiento es el proceso mediante el cual individuos identifican oportunidades, movilizan recursos y crean valor asumiendo riesgos calculados."
        },
        {
            question: "¿Qué es el intraemprendimiento?",
            options: ["Emprendimiento fuera del país", "Innovación emprendedora dentro de organizaciones existentes", "Emprendimiento informal", "Emprendimiento de subsistencia"],
            correct: 1,
            feedback: "El intraemprendimiento es la innovación y el espíritu emprendedor aplicados dentro de organizaciones ya existentes, creando nuevos productos, servicios o procesos."
        },
        {
            question: "¿Cuál de las siguientes es una característica clave del emprendedor?",
            options: ["Aversión total al riesgo", "Tolerancia a la incertidumbre y el riesgo calculado", "Preferencia por el trabajo individual", "Resistencia a los cambios del mercado"],
            correct: 1,
            feedback: "Una característica fundamental del emprendedor es la tolerancia a la incertidumbre y al riesgo calculado, combinada con persistencia y orientación al logro."
        },
        {
            question: "¿Qué porcentaje aproximado del empleo formal generan las MiPyMEs en México?",
            options: ["Menos del 20%", "Alrededor del 72%", "Exactamente el 50%", "Más del 90%"],
            correct: 1,
            feedback: "En México, las MiPyMEs representan más del 99% de las empresas y generan alrededor del 72% del empleo formal, evidenciando su papel central en la economía."
        },
        {
            question: "¿Cuál es la primera fase del proceso emprendedor?",
            options: ["Obtención de financiamiento", "Identificación de la oportunidad de negocio", "Lanzamiento del producto", "Contratación de personal"],
            correct: 1,
            feedback: "La primera fase del proceso emprendedor es la identificación de oportunidades: reconocer necesidades insatisfechas o problemas relevantes en el mercado."
        },
        {
            question: "El emprendimiento social se caracteriza por:",
            options: ["Maximizar exclusivamente las utilidades", "Resolver problemas sociales con modelos de negocio sostenibles", "Operar solo con fondos gubernamentales", "Evitar cualquier actividad comercial"],
            correct: 1,
            feedback: "El emprendimiento social está orientado a resolver problemas sociales utilizando modelos de negocio que sean económicamente sostenibles."
        },
        {
            question: "¿Qué es el ciclo de vida de las empresas?",
            options: ["El tiempo que dura el contrato de arrendamiento", "Las etapas: Nacimiento → Crecimiento → Madurez → Renovación o Declive", "El período fiscal anual", "La duración de los productos en el mercado"],
            correct: 1,
            feedback: "El ciclo de vida de las empresas describe las etapas que atraviesan: Nacimiento, Crecimiento, Madurez y finalmente Renovación o Declive."
        },
        {
            question: "¿Qué perfil tiene el emprendedor tipo 'Conector'?",
            options: ["Experto técnico que desarrolla productos", "Constructor de ecosistemas de relaciones y alianzas estratégicas", "Gestiona y optimiza procesos", "Visiona el futuro y crea nuevas categorías"],
            correct: 1,
            feedback: "El emprendedor 'Conector' construye ecosistemas de relaciones y alianzas estratégicas; su red de contactos es su principal activo competitivo."
        },
        {
            question: "¿Qué implica la clasificación de empresas por tamaño?",
            options: ["Solo el número de empleados", "Categorización en micro, pequeña, mediana y grande empresa según criterios de empleados e ingresos", "Solo el capital social de la empresa", "El número de sucursales"],
            correct: 1,
            feedback: "La clasificación por tamaño categoriza las empresas en micro, pequeña, mediana y grande, generalmente considerando número de empleados e ingresos anuales."
        },
        {
            question: "¿Cuál es el propósito moderno de la empresa según la visión de grupos de interés?",
            options: ["Exclusivamente maximizar ganancias para accionistas", "Crear valor para todos los grupos de interés: clientes, empleados, comunidad y accionistas", "Solo generar empleos", "Únicamente satisfacer al cliente final"],
            correct: 1,
            feedback: "La visión moderna de propósito empresarial reconoce que la empresa debe crear valor para todos sus grupos de interés (stakeholders), no solo para los accionistas."
        }
    ],
    4: [
        {
            question: "¿Qué es la escalabilidad en el contexto del emprendimiento tecnológico?",
            options: ["La capacidad de una empresa de contratar más empleados", "Crecer rápidamente sin incrementar costos en la misma proporción", "Aumentar el precio de los productos", "Expandirse a nivel local únicamente"],
            correct: 1,
            feedback: "La escalabilidad es la capacidad de crecer rápidamente sin incrementar costos en la misma proporción. Una app puede servir a millones de usuarios con la misma infraestructura base."
        },
        {
            question: "¿Qué son los efectos de red?",
            options: ["El costo de las conexiones a internet", "Cuando el valor del producto aumenta con cada nuevo usuario", "Las comisiones de las redes sociales", "Los gastos de marketing digital"],
            correct: 1,
            feedback: "Los efectos de red ocurren cuando el valor del producto o plataforma aumenta con cada nuevo usuario, generando ventajas competitivas casi insuperables."
        },
        {
            question: "¿Cuáles son los criterios para evaluar si una idea es una oportunidad de negocio?",
            options: ["Solo que sea tecnológicamente posible", "Problema real, mercado suficiente, ventaja diferencial, viabilidad técnica y financiera", "Que sea original y nunca se haya hecho", "Solo que tenga financiamiento asegurado"],
            correct: 1,
            feedback: "Una idea se evalúa como oportunidad considerando: problema real, mercado suficiente, ventaja diferencial, viabilidad técnica, modelo de negocio viable y equipo capacitado."
        },
        {
            question: "¿Qué es una Persona en el contexto de innovación centrada en el usuario?",
            options: ["Un empleado del área de Recursos Humanos", "Un perfil semi-ficticio de usuario representativo para guiar decisiones de diseño", "El fundador de la startup", "El cliente más importante de la empresa"],
            correct: 1,
            feedback: "Las Personas son perfiles semi-ficticios de usuarios representativos que ayudan al equipo a tomar decisiones de diseño centradas en necesidades reales del usuario objetivo."
        },
        {
            question: "¿Por qué los datos son considerados un activo estratégico en el emprendimiento tecnológico?",
            options: ["Solo por su valor legal", "Permiten mejorar el producto continuamente y personalizar la experiencia del usuario", "Son obligatorios por ley", "Solo tienen valor para fines de marketing"],
            correct: 1,
            feedback: "Los datos generados por usuarios son un activo estratégico que permite mejorar el producto continuamente, personalizar experiencias y tomar decisiones basadas en evidencia."
        },
        {
            question: "¿Qué implica el análisis TAM-SAM-SOM?",
            options: ["Un análisis de proveedores", "Mercado total disponible, mercado disponible servible y mercado obtenible", "Un análisis de competencia", "Un análisis de recursos humanos"],
            correct: 1,
            feedback: "TAM es el mercado total disponible, SAM es el mercado disponible servible con tu modelo, y SOM es el mercado obtenible realista a corto plazo."
        },
        {
            question: "¿Cuál es el objetivo principal de las entrevistas de descubrimiento?",
            options: ["Vender el producto a posibles clientes", "Entender los trabajos, dolores y ganancias reales del usuario, más allá de lo que creen querer", "Evaluar la competencia", "Reclutar personal para la startup"],
            correct: 1,
            feedback: "Las entrevistas de descubrimiento buscan entender profundamente los trabajos, dolores y ganancias reales del usuario, sin influir en sus respuestas con ideas preconcebidas."
        },
        {
            question: "¿Qué dimensión de viabilidad evalúa si existen regulaciones que limiten el negocio?",
            options: ["Viabilidad técnica", "Viabilidad de mercado", "Viabilidad legal", "Viabilidad de equipo"],
            correct: 2,
            feedback: "La viabilidad legal evalúa si existen regulaciones que limiten el negocio y si se puede proteger la propiedad intelectual de la solución."
        },
        {
            question: "¿Qué caracteriza principalmente al emprendimiento tecnológico frente al tradicional?",
            options: ["Mayor número de empleados", "Escalabilidad, uso de datos, efectos de red y potencial de alcance global desde el inicio", "Menor inversión inicial siempre", "Solo opera en mercados locales"],
            correct: 1,
            feedback: "El emprendimiento tecnológico se caracteriza por su potencial de escalabilidad, uso estratégico de datos, aprovechamiento de efectos de red y capacidad de alcance global."
        },
        {
            question: "¿Cuál es la función principal de un Journey Map?",
            options: ["Mapear la ruta de entrega de productos", "Documentar la experiencia completa del usuario identificando puntos de dolor y oportunidades", "Planear viajes de negocios", "Definir el organigrama de la empresa"],
            correct: 1,
            feedback: "El Journey Map es una herramienta visual que documenta la experiencia completa del usuario con un producto o servicio, identificando puntos de dolor y oportunidades de mejora."
        }
    ],
    5: [
        {
            question: "¿Qué analiza el análisis PESTEL?",
            options: ["Solo el entorno económico", "Factores Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales del entorno externo", "Solo el mercado competitivo", "Los procesos internos de la empresa"],
            correct: 1,
            feedback: "El análisis PESTEL examina los factores del entorno externo: Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales que pueden afectar a la empresa."
        },
        {
            question: "¿Cuántas fuerzas contempla el modelo de Porter?",
            options: ["3 fuerzas", "4 fuerzas", "5 fuerzas", "7 fuerzas"],
            correct: 2,
            feedback: "El modelo de Michael Porter contempla 5 fuerzas: rivalidad entre competidores, amenaza de nuevos entrantes, poder de sustitutos, poder de proveedores y poder de compradores."
        },
        {
            question: "¿Cuántos bloques tiene el Business Model Canvas?",
            options: ["5 bloques", "7 bloques", "9 bloques", "12 bloques"],
            correct: 2,
            feedback: "El Business Model Canvas de Osterwalder y Pigneur tiene 9 bloques que describen cómo una empresa crea, entrega y captura valor."
        },
        {
            question: "¿Qué es el Burn Rate en una startup?",
            options: ["La tasa de crecimiento de ingresos", "La velocidad a la que la empresa gasta su capital", "El porcentaje de clientes que cancelan", "El costo de adquisición de un cliente"],
            correct: 1,
            feedback: "El Burn Rate es la velocidad a la que una startup gasta su capital disponible, generalmente expresado en dinero por mes. Es clave para calcular el Runway."
        },
        {
            question: "¿Qué evalúa el análisis FODA interno?",
            options: ["Oportunidades y Amenazas", "Fortalezas y Debilidades de la organización", "Solo las fortalezas financieras", "Solo los recursos tecnológicos"],
            correct: 1,
            feedback: "El análisis interno del FODA evalúa las Fortalezas (recursos y capacidades superiores) y Debilidades (limitaciones o desventajas) de la propia organización."
        },
        {
            question: "¿Qué significa LTV en el contexto de métricas de startup?",
            options: ["Localización, Tecnología y Ventas", "Valor de Vida del Cliente (Lifetime Value)", "Límite de Transacciones por Ventana", "Lanzamiento Total de Versiones"],
            correct: 1,
            feedback: "LTV (Lifetime Value) es el Valor de Vida del Cliente: el ingreso total que se espera obtener de un cliente durante toda su relación con la empresa."
        },
        {
            question: "¿Qué es el bootstrapping como estrategia de financiamiento?",
            options: ["Buscar inversores de capital riesgo", "Financiamiento propio con ahorros o reinversión de ingresos, sin deuda ni socios externos", "Solicitar créditos bancarios", "Participar en programas gubernamentales"],
            correct: 1,
            feedback: "El bootstrapping es el financiamiento propio con ahorros personales o reinversión de ingresos. Mantiene el control total pero puede limitar la velocidad de crecimiento."
        },
        {
            question: "¿Qué propone la Matriz de Ansoff para el crecimiento empresarial?",
            options: ["Solo la expansión geográfica", "Penetración de mercado, desarrollo de mercado, desarrollo de producto y diversificación", "Solo el desarrollo de nuevos productos", "La reducción de costos como única estrategia"],
            correct: 1,
            feedback: "La Matriz de Ansoff propone cuatro estrategias de crecimiento: penetración de mercado, desarrollo de mercado, desarrollo de producto y diversificación, con diferente nivel de riesgo."
        },
        {
            question: "¿Cuándo es recomendable usar la estrategia de 'pivotar' en una startup?",
            options: ["Cuando la empresa es muy exitosa", "Cuando los datos de validación muestran que la hipótesis principal no se confirma", "Cuando se agota el financiamiento inicial", "Siempre al inicio del emprendimiento"],
            correct: 1,
            feedback: "Se pivota cuando los datos de validación muestran que una hipótesis fundamental del modelo de negocio no se confirma y es necesario cambiar de dirección estratégica."
        },
        {
            question: "¿Qué son los ángeles inversionistas?",
            options: ["Fondos gubernamentales de apoyo", "Individuos con alto patrimonio que invierten capital en etapas tempranas a cambio de participación accionaria", "Bancos especializados en startups", "Aceleradoras universitarias"],
            correct: 1,
            feedback: "Los ángeles inversionistas son individuos con alto patrimonio que invierten en startups en etapas tempranas a cambio de participación accionaria, aportando también mentoría y red de contactos."
        }
    ]
};

// =============================================
// FUNCIONES DEL SISTEMA DE QUIZ
// =============================================
function startQuiz(unitNumber) {
    loadAttempts();
    const attempts = quizState.attempts[unitNumber] || 0;
    if (attempts >= quizConfig.maxAttempts) {
        const bestScore = getBestScore(unitNumber);
        alert(`Has agotado los ${quizConfig.maxAttempts} intentos para este cuestionario.\nTu mejor calificación fue: ${bestScore}%`);
        return;
    }

    const questions = quizQuestions[unitNumber];
    if (!questions) {
        alert('Cuestionario no disponible para esta unidad.');
        return;
    }

    quizState.currentQuiz = unitNumber;
    quizState.currentQuestion = 0;
    quizState.answers = new Array(questions.length).fill(null);
    quizState.timeRemaining = quizConfig.timePerQuiz * 60;

    renderQuiz(unitNumber);
    startTimer();
}

function renderQuiz(unitNumber) {
    const questions = quizQuestions[unitNumber];
    const dynamicContent = document.getElementById('dynamic-content');

    dynamicContent.innerHTML = `
        <div class="content-card">
            <h2><i class="fas fa-question-circle"></i> Cuestionario Unidad ${unitNumber}</h2>
            <div class="quiz-container" id="quiz-container">
                <div class="quiz-header">
                    <div class="quiz-progress">
                        <span id="question-counter">Pregunta 1 de ${questions.length}</span>
                        <div class="progress-bar"><div class="progress-fill" id="progress-fill" style="width: ${(1/questions.length)*100}%"></div></div>
                    </div>
                    <div class="quiz-timer" id="quiz-timer">
                        <i class="fas fa-clock"></i> <span id="timer-display">${quizConfig.timePerQuiz}:00</span>
                    </div>
                </div>
                <div id="question-container"></div>
                <div class="quiz-navigation">
                    <button class="btn-secondary" id="prev-btn" onclick="prevQuestion()" disabled>
                        <i class="fas fa-arrow-left"></i> Anterior
                    </button>
                    <button class="btn-primary" id="next-btn" onclick="nextQuestion()">
                        Siguiente <i class="fas fa-arrow-right"></i>
                    </button>
                    <button class="btn-success" id="submit-btn" onclick="submitQuiz()" style="display:none">
                        <i class="fas fa-check"></i> Terminar
                    </button>
                </div>
            </div>
        </div>
    `;
    dynamicContent.classList.add('active');
    renderQuestion(0);
}

function renderQuestion(index) {
    const unitNumber = quizState.currentQuiz;
    const questions = quizQuestions[unitNumber];
    const question = questions[index];
    const container = document.getElementById('question-container');

    container.innerHTML = `
        <div class="question-card">
            <h3 class="question-text">${index + 1}. ${question.question}</h3>
            <div class="options-list">
                ${question.options.map((opt, i) => `
                    <div class="option-item ${quizState.answers[index] === i ? 'selected' : ''}" onclick="selectAnswer(${i})">
                        <span class="option-letter">${String.fromCharCode(65+i)}</span>
                        <span class="option-text">${opt}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    const counter = document.getElementById('question-counter');
    if (counter) counter.textContent = `Pregunta ${index + 1} de ${questions.length}`;

    const fill = document.getElementById('progress-fill');
    if (fill) fill.style.width = `${((index + 1) / questions.length) * 100}%`;

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');

    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.style.display = index === questions.length - 1 ? 'none' : 'inline-flex';
    if (submitBtn) submitBtn.style.display = index === questions.length - 1 ? 'inline-flex' : 'none';
}

function selectAnswer(optionIndex) {
    quizState.answers[quizState.currentQuestion] = optionIndex;
    renderQuestion(quizState.currentQuestion);
    saveQuizState();
}

function nextQuestion() {
    const questions = quizQuestions[quizState.currentQuiz];
    if (quizState.currentQuestion < questions.length - 1) {
        quizState.currentQuestion++;
        renderQuestion(quizState.currentQuestion);
    }
}

function prevQuestion() {
    if (quizState.currentQuestion > 0) {
        quizState.currentQuestion--;
        renderQuestion(quizState.currentQuestion);
    }
}

function submitQuiz() {
    if (!confirm('¿Estás seguro de que deseas terminar el cuestionario?')) return;
    clearInterval(quizState.timerInterval);
    calculateResults();
}

function calculateResults() {
    const unitNumber = quizState.currentQuiz;
    const questions = quizQuestions[unitNumber];
    let correct = 0;

    questions.forEach((q, i) => {
        if (quizState.answers[i] === q.correct) correct++;
    });

    const score = Math.round((correct / questions.length) * 100);
    const passed = score >= quizConfig.passingScore;

    quizState.attempts[unitNumber] = (quizState.attempts[unitNumber] || 0) + 1;
    saveAttempts();
    saveBestScore(unitNumber, score);

    showResults(score, correct, questions.length, passed);
}

function showResults(score, correct, total, passed) {
    const unitNumber = quizState.currentQuiz;
    const questions = quizQuestions[unitNumber];
    const attemptsLeft = quizConfig.maxAttempts - (quizState.attempts[unitNumber] || 0);
    const dynamicContent = document.getElementById('dynamic-content');

    dynamicContent.innerHTML = `
        <div class="content-card">
            <h2><i class="fas fa-poll"></i> Resultados del Cuestionario</h2>
            <div class="quiz-results">
                <div class="results-score ${passed ? 'passed' : 'failed'}">
                    <div class="score-circle">
                        <span class="score-number">${score}%</span>
                        <span class="score-label">${passed ? '✅ Aprobado' : '❌ Reprobado'}</span>
                    </div>
                    <div class="score-details">
                        <p><strong>${correct}</strong> de <strong>${total}</strong> preguntas correctas</p>
                        <p>Intentos restantes: <strong>${attemptsLeft}</strong></p>
                        <p>Calificación mínima: <strong>${quizConfig.passingScore}%</strong></p>
                    </div>
                </div>
                <div class="results-review">
                    <h3><i class="fas fa-list-check"></i> Revisión de Respuestas</h3>
                    ${questions.map((q, i) => `
                        <div class="review-item ${quizState.answers[i] === q.correct ? 'correct' : 'incorrect'}">
                            <p><strong>${i+1}. ${q.question}</strong></p>
                            <p class="your-answer">Tu respuesta: ${quizState.answers[i] !== null ? q.options[quizState.answers[i]] : 'Sin responder'}</p>
                            ${quizState.answers[i] !== q.correct ? `<p class="correct-answer">Respuesta correcta: ${q.options[q.correct]}</p>` : ''}
                            <p class="feedback-text"><i class="fas fa-info-circle"></i> ${q.feedback}</p>
                        </div>
                    `).join('')}
                </div>
                ${attemptsLeft > 0 && !passed ? `
                    <div style="text-align:center;margin-top:20px;">
                        <button class="btn-primary" onclick="startQuiz(${unitNumber})">
                            <i class="fas fa-redo"></i> Intentar de nuevo (${attemptsLeft} intento${attemptsLeft > 1 ? 's' : ''} restante${attemptsLeft > 1 ? 's' : ''})
                        </button>
                    </div>
                ` : ''}
            </div>
        </div>
    `;
}

function startTimer() {
    clearInterval(quizState.timerInterval);
    quizState.timerInterval = setInterval(() => {
        quizState.timeRemaining--;
        updateTimerDisplay();
        if (quizState.timeRemaining <= 0) {
            clearInterval(quizState.timerInterval);
            alert('¡Se agotó el tiempo! El cuestionario se enviará automáticamente.');
            calculateResults();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(quizState.timeRemaining / 60);
    const seconds = quizState.timeRemaining % 60;
    const display = document.getElementById('timer-display');
    if (display) {
        display.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        const timerEl = document.getElementById('quiz-timer');
        if (timerEl) {
            timerEl.style.color = quizState.timeRemaining < 60 ? '#ef4444' : '';
        }
    }
}

function updateQuizStartButton(unitNumber) {
    loadAttempts();
    const attempts = quizState.attempts[unitNumber] || 0;
    const bestScore = getBestScore(unitNumber);
    const btn = document.getElementById(`startQuiz${unitNumber}`);
    if (!btn) return;

    if (attempts >= quizConfig.maxAttempts) {
        btn.disabled = true;
        btn.innerHTML = `<i class="fas fa-lock"></i> Sin intentos disponibles (Mejor: ${bestScore}%)`;
        btn.style.background = '#94a3b8';
    } else if (attempts > 0) {
        btn.innerHTML = `<i class="fas fa-redo"></i> Reintentar (${quizConfig.maxAttempts - attempts} intento restante) | Mejor: ${bestScore}%`;
    }
}

window.startQuiz = startQuiz;
window.selectAnswer = selectAnswer;
window.nextQuestion = nextQuestion;
window.prevQuestion = prevQuestion;
window.submitQuiz = submitQuiz;
window.updateQuizStartButton = updateQuizStartButton;

document.addEventListener('DOMContentLoaded', () => {
    loadAttempts();
    console.log('✅ Sistema de cuestionarios de Innovación y Emprendimiento Tecnológico inicializado');
});
