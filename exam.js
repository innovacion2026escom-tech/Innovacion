// ============================================
// SISTEMA DE EXAMEN FINAL
// INNOVACIÓN Y EMPRENDIMIENTO TECNOLÓGICO
// ============================================

const examQuestions = [
    {
        id: 1,
        question: "¿Cuál es el objetivo fundamental de la innovación en una empresa?",
        options: [
            "Generar valor para clientes, accionistas y la sociedad",
            "Reducir exclusivamente los costos operativos",
            "Contratar más personal técnico especializado",
            "Registrar el mayor número de patentes posible"
        ],
        correct: 0,
        feedback: "La innovación tiene como objetivo fundamental generar valor en múltiples dimensiones: económico, para el cliente y para la sociedad en general."
    },
    {
        id: 2,
        question: "¿Qué significa I+D+I en el contexto empresarial?",
        options: [
            "Inversión, Desarrollo e Integración",
            "Información, Datos e Inteligencia",
            "Investigación, Desarrollo e Innovación",
            "Industria, Diseño e Implementación"
        ],
        correct: 2,
        feedback: "I+D+I corresponde a Investigación, Desarrollo e Innovación: la cadena de valor del conocimiento tecnológico que va desde generar saber científico hasta crear impacto económico."
    },
    {
        id: 3,
        question: "¿Cuál de los siguientes es un ejemplo de innovación disruptiva?",
        options: [
            "Mejorar el empaque de un producto existente",
            "Agregar una nueva función menor a una app ya existente",
            "La aparición de plataformas de streaming que desplazaron al videoclub tradicional",
            "Reducir el precio de un producto ya establecido"
        ],
        correct: 2,
        feedback: "La innovación disruptiva crea nuevos mercados o desplaza a actores establecidos. El streaming es un ejemplo clásico: creó un nuevo mercado y eliminó prácticamente al videoclub físico."
    },
    {
        id: 4,
        question: "¿Cuál es la secuencia correcta del proceso de Design Thinking?",
        options: [
            "Prototipar → Idear → Empatizar → Definir → Evaluar",
            "Empatizar → Definir → Idear → Prototipar → Evaluar",
            "Definir → Empatizar → Prototipar → Idear → Evaluar",
            "Idear → Definir → Empatizar → Evaluar → Prototipar"
        ],
        correct: 1,
        feedback: "El orden correcto del Design Thinking es: Empatizar (entender al usuario) → Definir (enmarcar el problema) → Idear (generar soluciones) → Prototipar (construir) → Evaluar (probar)."
    },
    {
        id: 5,
        question: "¿Qué es el emprendimiento tecnológico?",
        options: [
            "Cualquier empresa que vende productos electrónicos",
            "El modelo de negocio sustentado en tecnología como elemento diferenciador central",
            "Emprendimiento exclusivamente de software",
            "Empresas que solo operan en internet"
        ],
        correct: 1,
        feedback: "El emprendimiento tecnológico es aquel cuyo modelo de negocio se sustenta en el desarrollo, aplicación o comercialización de tecnología como elemento diferenciador central."
    },
    {
        id: 6,
        question: "¿Cuántas fuerzas contempla el modelo competitivo de Michael Porter?",
        options: ["3 fuerzas", "4 fuerzas", "5 fuerzas", "6 fuerzas"],
        correct: 2,
        feedback: "El modelo de Porter contempla 5 fuerzas: rivalidad entre competidores actuales, amenaza de nuevos entrantes, poder de sustitutos, poder de proveedores y poder de compradores."
    },
    {
        id: 7,
        question: "¿Cuál es la función del Business Model Canvas?",
        options: [
            "Diseñar el logotipo de la empresa",
            "Describir visualmente cómo una empresa crea, entrega y captura valor",
            "Calcular los impuestos de la empresa",
            "Elaborar el organigrama empresarial"
        ],
        correct: 1,
        feedback: "El Business Model Canvas describe la lógica mediante la cual una empresa crea, entrega y captura valor, mediante 9 bloques interrelacionados de forma visual."
    },
    {
        id: 8,
        question: "¿Qué es el MVP (Minimum Viable Product)?",
        options: [
            "El producto más caro y completo del catálogo",
            "El producto más barato de la línea",
            "La versión más simple que permite aprender el máximo con mínimo esfuerzo",
            "Un producto exclusivo para clientes premium"
        ],
        correct: 2,
        feedback: "El MVP es la versión más simple de un producto que permite recolectar el máximo aprendizaje validado con el mínimo esfuerzo y recursos invertidos."
    },
    {
        id: 9,
        question: "¿Qué evalúa el análisis FODA?",
        options: [
            "Solo las fortalezas financieras de la empresa",
            "Fortalezas, Oportunidades, Debilidades y Amenazas internas y externas",
            "Solo las amenazas del mercado",
            "Únicamente los recursos tecnológicos disponibles"
        ],
        correct: 1,
        feedback: "El FODA evalúa Fortalezas y Debilidades (análisis interno) y Oportunidades y Amenazas (análisis externo) para definir estrategias empresariales."
    },
    {
        id: 10,
        question: "¿Qué son los efectos de red en el contexto de plataformas tecnológicas?",
        options: [
            "Los costos de infraestructura de internet",
            "Cuando el valor de la plataforma aumenta con cada nuevo usuario",
            "Los efectos negativos de las redes sociales",
            "Los gastos de publicidad en redes digitales"
        ],
        correct: 1,
        feedback: "Los efectos de red ocurren cuando el valor de una plataforma o producto aumenta con cada nuevo usuario que se une, generando ventajas competitivas difíciles de superar."
    },
    {
        id: 11,
        question: "¿Cuál es la diferencia entre la investigación básica y la aplicada en I+D?",
        options: [
            "No hay diferencia, son términos intercambiables",
            "La básica genera nuevo conocimiento sin aplicación inmediata; la aplicada busca resolver problemas concretos",
            "La básica es más costosa siempre",
            "La aplicada solo la realizan empresas privadas"
        ],
        correct: 1,
        feedback: "La investigación básica genera nuevo conocimiento sin una aplicación comercial inmediata, mientras que la investigación aplicada está orientada a resolver problemas concretos del mundo real."
    },
    {
        id: 12,
        question: "¿Qué es el bootstrapping como estrategia de financiamiento?",
        options: [
            "Obtener fondos de capital de riesgo (VC)",
            "Financiarse con ahorros propios o reinversión de ingresos sin deuda externa",
            "Participar en programas de aceleración pagados",
            "Buscar ángeles inversionistas desde el inicio"
        ],
        correct: 1,
        feedback: "El bootstrapping es financiarse con recursos propios (ahorros personales o reinversión de ingresos), lo que mantiene el control total pero puede limitar la velocidad de crecimiento."
    },
    {
        id: 13,
        question: "¿Cuáles son los tipos de emprendimiento según la motivación del emprendedor?",
        options: [
            "Solo comercial y social",
            "Subsistencia, oportunidad, social, intraemprendimiento y tecnológico, entre otros",
            "Solo tecnológico y tradicional",
            "Solo formal e informal"
        ],
        correct: 1,
        feedback: "Los tipos de emprendimiento incluyen: de subsistencia (motivado por necesidad), de oportunidad, social, intraemprendimiento (dentro de organizaciones) y tecnológico."
    },
    {
        id: 14,
        question: "¿Qué implica la 'destrucción creativa' de Schumpeter?",
        options: [
            "Destruir empresas competidoras ilegalmente",
            "La innovación desplaza industrias obsoletas creando nuevas oportunidades de valor",
            "Eliminar empleos como estrategia de eficiencia",
            "Reducir la producción para aumentar precios"
        ],
        correct: 1,
        feedback: "La destrucción creativa de Schumpeter describe cómo la innovación tecnológica continuamente desplaza a las industrias y empresas obsoletas, creando nuevas oportunidades económicas."
    },
    {
        id: 15,
        question: "¿Cuál es el propósito del ciclo Construir-Medir-Aprender del Lean Startup?",
        options: [
            "Construir el producto completo antes de salir al mercado",
            "Validar hipótesis de negocio iterativamente con el mínimo de recursos",
            "Medir solo las ganancias al final del año",
            "Construir primero, aprender después de 5 años"
        ],
        correct: 1,
        feedback: "El ciclo Lean Startup busca validar hipótesis de negocio de forma iterativa: construir un MVP, medir con datos reales y aprender para decidir si perseverar, pivotar o abandonar."
    },
    {
        id: 16,
        question: "¿Qué analiza el PESTEL en la planeación estratégica?",
        options: [
            "Solo el análisis de competidores directos",
            "Los factores Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales del entorno",
            "Solo las fortalezas internas de la empresa",
            "El análisis del flujo de efectivo"
        ],
        correct: 1,
        feedback: "El PESTEL analiza los factores del macroentorno: Políticos, Económicos, Sociales, Tecnológicos, Ecológicos y Legales que pueden impactar a la organización."
    },
    {
        id: 17,
        question: "¿Por qué son importantes los datos como activo estratégico en startups tecnológicas?",
        options: [
            "Solo tienen valor para cumplir regulaciones",
            "Permiten mejorar el producto continuamente, personalizar experiencias y tomar mejores decisiones",
            "Solo sirven para fines de auditoría fiscal",
            "No tienen relevancia competitiva"
        ],
        correct: 1,
        feedback: "Los datos son un activo estratégico porque permiten mejorar productos continuamente, personalizar la experiencia del usuario, predecir comportamientos y tomar decisiones basadas en evidencia."
    },
    {
        id: 18,
        question: "¿Cuál es la diferencia entre escalabilidad y crecimiento en una startup?",
        options: [
            "Son exactamente lo mismo",
            "La escalabilidad implica crecer ingresos sin incrementar costos en la misma proporción",
            "El crecimiento es solo para grandes empresas",
            "La escalabilidad solo aplica a startups de software"
        ],
        correct: 1,
        feedback: "La escalabilidad implica crecer ingresos y usuarios sin que los costos aumenten en la misma proporción. No todo crecimiento es escalable; una empresa puede crecer en ingresos pero también en costos."
    },
    {
        id: 19,
        question: "¿Qué es un paradigma tecnológico según Dosi?",
        options: [
            "Un producto tecnológico revolucionario",
            "Un modelo de solución de problemas que define la dirección del cambio tecnológico",
            "Un programa de capacitación empresarial",
            "Una norma técnica internacional"
        ],
        correct: 1,
        feedback: "Un paradigma tecnológico es un modelo o patrón de solución de problemas que define la trayectoria y dirección del cambio tecnológico en una industria durante un período determinado."
    },
    {
        id: 20,
        question: "¿Cuál es la característica más distintiva del emprendedor social?",
        options: [
            "Busca únicamente la maximización de utilidades",
            "Resuelve problemas sociales con modelos de negocio sostenibles",
            "Solo opera con subsidios gubernamentales",
            "No puede tener socios inversionistas"
        ],
        correct: 1,
        feedback: "El emprendedor social se distingue por orientar su negocio a resolver problemas sociales de manera sostenible, balanceando el impacto social con la viabilidad económica."
    },
    {
        id: 21,
        question: "¿Qué herramienta visual documenta la experiencia completa del usuario con un producto?",
        options: ["Business Model Canvas", "Análisis FODA", "Journey Map", "Diagrama de Gantt"],
        correct: 2,
        feedback: "El Journey Map es la herramienta visual que documenta la experiencia completa del usuario con un producto o servicio, identificando puntos de dolor y oportunidades de mejora."
    },
    {
        id: 22,
        question: "¿Qué significa el término 'pivotar' en el contexto de startups?",
        options: [
            "Cambiar el nombre de la empresa",
            "Cambiar de dirección estratégica cuando los datos muestran que la hipótesis principal no funciona",
            "Expandirse a un nuevo país",
            "Contratar a un nuevo CEO"
        ],
        correct: 1,
        feedback: "Pivotar significa cambiar de dirección estratégica de manera estructurada, generalmente cuando los datos de validación muestran que una hipótesis clave del modelo de negocio no se confirma."
    },
    {
        id: 23,
        question: "¿Cuál es el ciclo de vida típico de una empresa?",
        options: [
            "Creación → Éxito → Fracaso",
            "Nacimiento → Crecimiento → Madurez → Renovación o Declive",
            "Solo crecimiento continuo sin fin",
            "Inicio → Expansión → Venta obligatoria"
        ],
        correct: 1,
        feedback: "El ciclo de vida de las empresas sigue el patrón: Nacimiento, Crecimiento, Madurez y finalmente Renovación o Declive, aunque no todas las empresas atraviesan todas las etapas."
    },
    {
        id: 24,
        question: "¿Qué mide el CAC (Costo de Adquisición de Cliente)?",
        options: [
            "El costo total de producción",
            "El costo promedio de conseguir a un nuevo cliente",
            "El costo de retener a un cliente existente",
            "El precio al que se vende cada producto"
        ],
        correct: 1,
        feedback: "El CAC (Customer Acquisition Cost) mide el costo promedio de conseguir a un nuevo cliente, incluyendo todos los gastos de marketing y ventas divididos entre los nuevos clientes obtenidos."
    },
    {
        id: 25,
        question: "La innovación organizacional implica:",
        options: [
            "Cambiar el producto principal de la empresa",
            "Cambios en estructura, cultura o prácticas de gestión para mejorar la capacidad de respuesta",
            "Solo rediseñar el organigrama jerárquico",
            "Cambiar la imagen corporativa"
        ],
        correct: 1,
        feedback: "La innovación organizacional comprende cambios en la estructura empresarial, cultura corporativa o prácticas de gestión que mejoran la capacidad de respuesta y adaptabilidad de la organización."
    }
];

// =============================================
// LÓGICA DEL EXAMEN
// =============================================
let examState = {
    questions: [],
    currentQuestion: 0,
    answers: [],
    timeRemaining: 0,
    timerInterval: null,
    started: false,
    completed: false
};

const EXAM_CONFIG = {
    totalQuestions: 20,
    timeLimit: 60,
    passingScore: 70
};

function initExam() {
    loadExamAttempt();
    const startBtn = document.getElementById('start-exam-btn');
    if (startBtn) startBtn.addEventListener('click', startExam);
}

function loadExamAttempt() {
    const saved = localStorage.getItem('examAttempt_innov');
    if (saved) {
        const data = JSON.parse(saved);
        if (data.completed) {
            showExamCompleted(data.score, data.date);
        }
    }
}

function startExam() {
    const shuffled = [...examQuestions].sort(() => Math.random() - 0.5);
    examState.questions = shuffled.slice(0, EXAM_CONFIG.totalQuestions);
    examState.currentQuestion = 0;
    examState.answers = new Array(EXAM_CONFIG.totalQuestions).fill(null);
    examState.timeRemaining = EXAM_CONFIG.timeLimit * 60;
    examState.started = true;

    document.getElementById('exam-intro').style.display = 'none';
    document.getElementById('exam-container').style.display = 'block';

    renderExamQuestion(0);
    startExamTimer();
}

function renderExamQuestion(index) {
    const question = examState.questions[index];
    const container = document.getElementById('exam-question-container');

    container.innerHTML = `
        <div class="exam-question-header">
            <span class="question-number">Pregunta ${index + 1} de ${EXAM_CONFIG.totalQuestions}</span>
            <div class="exam-progress-bar">
                <div class="exam-progress-fill" style="width: ${((index + 1) / EXAM_CONFIG.totalQuestions) * 100}%"></div>
            </div>
        </div>
        <div class="question-card">
            <h3 class="question-text">${question.question}</h3>
            <div class="options-list">
                ${question.options.map((opt, i) => `
                    <div class="option-item ${examState.answers[index] === i ? 'selected' : ''}" onclick="selectExamAnswer(${i})">
                        <span class="option-letter">${String.fromCharCode(65 + i)}</span>
                        <span class="option-text">${opt}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    `;

    updateExamNavButtons(index);
}

function selectExamAnswer(optionIndex) {
    examState.answers[examState.currentQuestion] = optionIndex;
    renderExamQuestion(examState.currentQuestion);
}

function updateExamNavButtons(index) {
    const prevBtn = document.getElementById('exam-prev-btn');
    const nextBtn = document.getElementById('exam-next-btn');
    const submitBtn = document.getElementById('exam-submit-btn');
    const answeredCount = document.getElementById('answered-count');

    if (prevBtn) prevBtn.disabled = index === 0;
    if (nextBtn) nextBtn.style.display = index === EXAM_CONFIG.totalQuestions - 1 ? 'none' : 'inline-flex';
    if (submitBtn) submitBtn.style.display = index === EXAM_CONFIG.totalQuestions - 1 ? 'inline-flex' : 'none';
    if (answeredCount) {
        const answered = examState.answers.filter(a => a !== null).length;
        answeredCount.textContent = `${answered}/${EXAM_CONFIG.totalQuestions} respondidas`;
    }
}

function nextExamQuestion() {
    if (examState.currentQuestion < EXAM_CONFIG.totalQuestions - 1) {
        examState.currentQuestion++;
        renderExamQuestion(examState.currentQuestion);
    }
}

function prevExamQuestion() {
    if (examState.currentQuestion > 0) {
        examState.currentQuestion--;
        renderExamQuestion(examState.currentQuestion);
    }
}

function submitExam() {
    const unanswered = examState.answers.filter(a => a === null).length;
    if (unanswered > 0) {
        if (!confirm(`Tienes ${unanswered} pregunta(s) sin responder. ¿Deseas enviar el examen de todas formas?`)) return;
    } else {
        if (!confirm('¿Estás seguro de que deseas enviar el examen?')) return;
    }

    clearInterval(examState.timerInterval);
    calculateExamResults();
}

function calculateExamResults() {
    let correct = 0;
    examState.questions.forEach((q, i) => {
        if (examState.answers[i] === q.correct) correct++;
    });

    const score = Math.round((correct / EXAM_CONFIG.totalQuestions) * 100);
    const passed = score >= EXAM_CONFIG.passingScore;
    const date = new Date().toLocaleDateString('es-MX');

    localStorage.setItem('examAttempt_innov', JSON.stringify({ completed: true, score, date, passed }));

    document.getElementById('exam-container').style.display = 'none';
    showExamResults(score, correct, passed);
}

function showExamResults(score, correct, passed) {
    const resultsDiv = document.getElementById('exam-results');
    resultsDiv.style.display = 'block';
    resultsDiv.innerHTML = `
        <div class="exam-results-container">
            <div class="results-header ${passed ? 'passed' : 'failed'}">
                <i class="fas ${passed ? 'fa-trophy' : 'fa-times-circle'}"></i>
                <h2>${passed ? '¡Felicidades! Examen Aprobado' : 'Examen No Aprobado'}</h2>
            </div>
            <div class="results-score">
                <div class="score-circle ${passed ? 'passed' : 'failed'}">
                    <span class="score-number">${score}%</span>
                    <span class="score-label">${correct}/${EXAM_CONFIG.totalQuestions} correctas</span>
                </div>
                <div class="score-info">
                    <p>Calificación mínima requerida: <strong>${EXAM_CONFIG.passingScore}%</strong></p>
                    <p>Resultado: <strong>${passed ? '✅ APROBADO' : '❌ NO APROBADO'}</strong></p>
                    <p>Fecha: <strong>${new Date().toLocaleDateString('es-MX')}</strong></p>
                </div>
            </div>
            <div class="results-review">
                <h3><i class="fas fa-list-check"></i> Revisión detallada</h3>
                ${examState.questions.map((q, i) => `
                    <div class="review-item ${examState.answers[i] === q.correct ? 'correct' : 'incorrect'}">
                        <p><strong>${i + 1}. ${q.question}</strong></p>
                        <p class="your-answer">Tu respuesta: ${examState.answers[i] !== null ? q.options[examState.answers[i]] : 'Sin responder'}</p>
                        ${examState.answers[i] !== q.correct ? `<p class="correct-answer">Correcta: ${q.options[q.correct]}</p>` : ''}
                        <p class="feedback-text"><i class="fas fa-info-circle"></i> ${q.feedback}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function showExamCompleted(score, date) {
    const startBtn = document.getElementById('start-exam-btn');
    if (startBtn) {
        startBtn.disabled = true;
        startBtn.innerHTML = `<i class="fas fa-lock"></i> Examen completado (${score}% — ${date})`;
        startBtn.style.background = score >= EXAM_CONFIG.passingScore ? '#10b981' : '#ef4444';
    }
}

function startExamTimer() {
    clearInterval(examState.timerInterval);
    examState.timerInterval = setInterval(() => {
        examState.timeRemaining--;
        const minutes = Math.floor(examState.timeRemaining / 60);
        const seconds = examState.timeRemaining % 60;
        const display = document.getElementById('exam-timer-display');
        if (display) {
            display.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
            if (examState.timeRemaining < 300) display.style.color = '#ef4444';
        }
        if (examState.timeRemaining <= 0) {
            clearInterval(examState.timerInterval);
            alert('¡Tiempo agotado! El examen se enviará automáticamente.');
            calculateExamResults();
        }
    }, 1000);
}

window.startExam = startExam;
window.selectExamAnswer = selectExamAnswer;
window.nextExamQuestion = nextExamQuestion;
window.prevExamQuestion = prevExamQuestion;
window.submitExam = submitExam;

document.addEventListener('DOMContentLoaded', initExam);
console.log('✅ Sistema de examen final de Innovación y Emprendimiento Tecnológico cargado');
