// ============================================
// MAIN.JS - FUNCIONALIDAD PRINCIPAL
// INNOVACIÓN Y EMPRENDIMIENTO TECNOLÓGICO
// ============================================

// ============================================
// CONFIGURACIÓN DE VISIBILIDAD DE UNIDADES
// Cambiar a 'false' para ocultar una unidad
// ============================================
const UNIDAD_1_VISIBLE = true;  // Unidad I: Innovación
const UNIDAD_2_VISIBLE = true;  // Unidad II: Innovación Tecnológica
const UNIDAD_3_VISIBLE = true;  // Unidad III: Emprendimiento
const UNIDAD_4_VISIBLE = true;  // Unidad IV: Emprendimiento Tecnológico
const UNIDAD_5_VISIBLE = true;  // Unidad V: Plan de Negocio

// Array de configuración para fácil acceso
const UNIDADES_VISIBLES = [
    UNIDAD_1_VISIBLE,
    UNIDAD_2_VISIBLE,
    UNIDAD_3_VISIBLE,
    UNIDAD_4_VISIBLE,
    UNIDAD_5_VISIBLE
];

document.addEventListener('DOMContentLoaded', function() {
    initTabs();
    initSidebar();
    initModals();
    initSearch();
    applyUnitsVisibility();
});

// ============================================
// SISTEMA DE PESTAÑAS
// ============================================
function initTabs() {
    const navTabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    navTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            navTabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const content = document.getElementById(tabId);
            if (content) content.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ============================================
// SIDEBAR - MENÚ DE CONTENIDOS
// ============================================
function initSidebar() {
    const sectionTitles = document.querySelectorAll('.section-title');
    const contentLinks = document.querySelectorAll('.submenu a');

    sectionTitles.forEach(title => {
        title.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            if (section === 'examen') {
                showExamSection();
                return;
            }
            this.classList.toggle('expanded');
            const submenu = this.nextElementSibling;
            if (submenu && submenu.classList.contains('submenu')) {
                submenu.classList.toggle('show');
            }
        });
    });

    contentLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const contentId = this.getAttribute('data-content');
            contentLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            loadContent(contentId);
        });
    });
}

function loadContent(contentId) {
    const content = window.courseContent[contentId];
    if (!content) {
        console.error('Contenido no encontrado:', contentId);
        return;
    }
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

    const dynamicContent = document.getElementById('dynamic-content');
    dynamicContent.innerHTML = `
        <div class="content-card">
            <h2><i class="fas fa-book"></i> ${content.title}</h2>
            ${content.content}
        </div>
    `;
    dynamicContent.classList.add('active');

    if (contentId.startsWith('quiz')) {
        const unitNumber = parseInt(contentId.replace('quiz', ''));
        if (window.updateQuizStartButton) {
            setTimeout(() => window.updateQuizStartButton(unitNumber), 100);
        }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.loadContent = loadContent;

function showExamSection() {
    document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('examen-section').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// MODALES
// ============================================
function initModals() {
    const manualBtn = document.getElementById('manualBtn');
    const manualModal = document.getElementById('manualModal');
    if (manualBtn) {
        manualBtn.addEventListener('click', (e) => {
            e.preventDefault();
            manualModal.classList.add('show');
        });
    }

    const contactBtn = document.getElementById('contactBtn');
    if (contactBtn) {
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'mailto:mparedesnescom@gmail.com';
        });
    }

    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.remove('show');
        });
    });

    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) this.classList.remove('show');
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.show').forEach(m => m.classList.remove('show'));
        }
    });
}

// ============================================
// BÚSQUEDA
// ============================================
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const searchResults = document.getElementById('searchResults');

    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query.length < 2) {
            alert('Por favor ingresa al menos 2 caracteres para buscar.');
            return;
        }
        const results = [];
        for (const [key, content] of Object.entries(window.courseContent)) {
            const title = content.title.toLowerCase();
            const text = content.content.toLowerCase();
            if (title.includes(query) || text.includes(query)) {
                let snippet = '';
                const index = text.indexOf(query);
                if (index !== -1) {
                    const start = Math.max(0, index - 50);
                    const end = Math.min(text.length, index + 100);
                    snippet = '...' + content.content.substring(start, end).replace(/<[^>]+>/g, '') + '...';
                }
                results.push({ key, title: content.title, snippet });
            }
        }

        if (results.length === 0) {
            searchResults.innerHTML = '<p style="text-align:center;color:#64748b;padding:20px;">No se encontraron resultados para "<strong>' + query + '</strong>"</p>';
        } else {
            searchResults.innerHTML = results.map(r => `
                <div class="search-result-item" onclick="loadContent('${r.key}'); searchModal.classList.remove('show');">
                    <h4><i class="fas fa-file-alt"></i> ${r.title}</h4>
                    <p>${r.snippet}</p>
                </div>
            `).join('');
        }
        searchModal.classList.add('show');
    }

    if (searchBtn) searchBtn.addEventListener('click', performSearch);
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performSearch();
        });
    }

    const closeSearch = document.getElementById('closeSearch');
    if (closeSearch) {
        closeSearch.addEventListener('click', () => searchModal.classList.remove('show'));
    }
    if (searchModal) {
        searchModal.addEventListener('click', function(e) {
            if (e.target === this) this.classList.remove('show');
        });
    }
}

// ============================================
// BÚSQUEDA EN GLOSARIO
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const glossarySearch = document.getElementById('glossarySearch');
    if (glossarySearch) {
        glossarySearch.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            const glossaryItems = document.querySelectorAll('.glossary-item');
            const glossaryLetters = document.querySelectorAll('.glossary-letter');
            if (query === '') {
                glossaryItems.forEach(item => item.style.display = 'block');
                glossaryLetters.forEach(letter => letter.style.display = 'block');
                return;
            }
            glossaryLetters.forEach(letter => letter.style.display = 'none');
            glossaryItems.forEach(item => {
                const term = item.querySelector('dt').textContent.toLowerCase();
                const definition = item.querySelector('dd').textContent.toLowerCase();
                if (term.includes(query) || definition.includes(query)) {
                    item.style.display = 'block';
                    const prevLetter = item.previousElementSibling;
                    if (prevLetter && prevLetter.classList.contains('glossary-letter')) {
                        prevLetter.style.display = 'block';
                    }
                } else {
                    item.style.display = 'none';
                }
            });
        });
    }
});

// ============================================
// RESPONSIVE - TOGGLE SIDEBAR
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'sidebar-toggle';
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    toggleBtn.style.cssText = `
        display: none;
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
        color: white;
        border: none;
        font-size: 1.2rem;
        cursor: pointer;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    `;
    document.body.appendChild(toggleBtn);

    function checkMobile() {
        if (window.innerWidth <= 1024) {
            toggleBtn.style.display = 'block';
        } else {
            toggleBtn.style.display = 'none';
            document.querySelector('.sidebar').classList.remove('open');
        }
    }
    checkMobile();
    window.addEventListener('resize', checkMobile);

    toggleBtn.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('open');
    });

    document.querySelectorAll('.submenu a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 1024) {
                document.querySelector('.sidebar').classList.remove('open');
            }
        });
    });
});

// ============================================
// CONTROL DE VISIBILIDAD DE UNIDADES
// ============================================
function applyUnitsVisibility() {
    const menuSections = document.querySelectorAll('.menu-section');
    menuSections.forEach((section) => {
        const sectionTitle = section.querySelector('.section-title');
        if (!sectionTitle) return;
        const sectionId = sectionTitle.getAttribute('data-section');
        if (sectionId && sectionId.startsWith('unidad')) {
            const unitNumber = parseInt(sectionId.replace('unidad', ''));
            if (unitNumber >= 1 && unitNumber <= 5) {
                const isVisible = UNIDADES_VISIBLES[unitNumber - 1];
                section.style.display = isVisible ? '' : 'none';
            }
        }
    });
    filterAccessibleContent();
}

function filterAccessibleContent() {
    const originalLoadContent = window.loadContent || loadContent;
    window.loadContent = function(contentId) {
        const unitNumber = getUnitFromContentId(contentId);
        if (unitNumber !== null && !UNIDADES_VISIBLES[unitNumber - 1]) {
            console.warn('Acceso denegado: La unidad ' + unitNumber + ' no está disponible.');
            return;
        }
        originalLoadContent(contentId);
    };
}

function getUnitFromContentId(contentId) {
    const patterns = [
        { prefix: 'tema1-', unit: 1 },
        { prefix: 'tema2-', unit: 2 },
        { prefix: 'tema3-', unit: 3 },
        { prefix: 'tema4-', unit: 4 },
        { prefix: 'tema5-', unit: 5 },
        { prefix: 'quiz1', unit: 1 },
        { prefix: 'quiz2', unit: 2 },
        { prefix: 'quiz3', unit: 3 },
        { prefix: 'quiz4', unit: 4 },
        { prefix: 'quiz5', unit: 5 },
        { prefix: 'actividades1', unit: 1 },
        { prefix: 'actividades2', unit: 2 },
        { prefix: 'actividades3', unit: 3 },
        { prefix: 'actividades4', unit: 4 },
        { prefix: 'actividades5', unit: 5 }
    ];
    for (const pattern of patterns) {
        if (contentId.startsWith(pattern.prefix)) return pattern.unit;
    }
    return null;
}

function submitActivity(activityNumber) {
    const confirmed = confirm(`¿Estás seguro de que deseas enviar la Actividad ${activityNumber}?`);
    if (confirmed) {
        alert(`¡Actividad ${activityNumber} enviada correctamente!\n\nRecibirás retroalimentación de tu profesor pronto.`);
    }
}
window.submitActivity = submitActivity;

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

window.addEventListener('beforeunload', function(e) {
    const examContainer = document.getElementById('exam-container');
    if (examContainer && examContainer.style.display !== 'none') {
        e.preventDefault();
        e.returnValue = '¿Estás seguro de que deseas salir? Perderás el progreso del examen.';
        return e.returnValue;
    }
});

console.log('✅ Página de Innovación y Emprendimiento Tecnológico cargada correctamente');
