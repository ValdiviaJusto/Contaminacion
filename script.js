// --- Data de Productos ---
const productosData = [
    {
        id: 1,
        nombre: "Bolsas Reutilizables",
        img: "bolsas_reutilizables_1778876679172.png",
        desc: "Hechas de tela duradera, perfectas para las compras del mercado.",
        beneficio: "Reemplazan más de 500 bolsas plásticas al año.",
        impacto: "Impulsadas por la Ley N.º 30884, que aplica el Impuesto al Consumo de Bolsas de Plástico (ICBPER). Al usar bolsas de tela de manera constante, evitas pagar impuestos adicionales y proteges las playas de Ventanilla.",
        recomendaciones: ["Lávalas semanalmente", "Ten una siempre a mano en tu bolso o auto", "Usa tamaños diferentes para frutas y abarrotes"]
    },
    {
        id: 2,
        nombre: "Envases Biodegradables",
        img: "envases_biodegradables_1778873129638.png",
        desc: "Tapers y contenedores hechos de fibras de caña o bambú.",
        beneficio: "Se degradan en 90 días frente a 400 años del Tecnopor.",
        impacto: "Bajo la Ley N.º 30884 (Vigente desde 2021) se prohibió totalmente la fabricación y uso de envases de Tecnopor para alimentos en el Perú. Estos envases compostables son la alternativa legal y segura que regresa a la tierra.",
        recomendaciones: ["Úsalos para compras de comida preparada", "Deséchalos en contenedores de compost", "No los laves si están muy engrasados, entiérralos"]
    },
    {
        id: 3,
        nombre: "Botellas Reutilizables",
        img: "botellas_reutilizables_1778876693030.png",
        desc: "Termos de acero inoxidable que mantienen la temperatura.",
        beneficio: "Evita el uso diario de botellas PET de un solo uso.",
        impacto: "La Ley N.º 30884 prohíbe el uso de botellas PET de un solo uso en áreas naturales y entidades del Estado. Un termo de acero previene la ingesta de microplásticos y cumple con esta normativa nacional.",
        recomendaciones: ["Lava con agua caliente y bicarbonato", "Llévala al mercado para pedir jugos frescos", "Personalízala para no perderla"]
    },
    {
        id: 4,
        nombre: "Sorbetes Ecológicos",
        img: "sorbetes_ecologicos_1778876706777.png",
        desc: "Sorbetes de bambú o metal con su cepillo limpiador.",
        beneficio: "Salva a miles de especies marinas de asfixia.",
        impacto: "La fabricación, distribución y entrega de sorbetes de plástico está totalmente prohibida en Perú desde diciembre de 2019 (Ley N.º 30884). Las alternativas de bambú son la opción legal y 100% orgánica.",
        recomendaciones: ["Límpialos inmediatamente después de usar", "Guárdalos en su funda de tela", "Dile al vendedor 'Sin cañita por favor'"]
    },
    {
        id: 5,
        nombre: "Cepillos Ecológicos",
        img: "cepillos_ecologicos_1778876729955.png",
        desc: "Cepillos de dientes y de limpieza con mangos de bambú.",
        beneficio: "100% biodegradable en su mango de madera.",
        impacto: "Fomentado bajo el D.L. 1278 (Ley de Gestión Integral de Residuos Sólidos) que exige la minimización de residuos. El plástico de los cepillos convencionales no se recicla, mientras que el bambú es ultra sostenible.",
        recomendaciones: ["Seca el mango después de usar", "Cámbialo cada 3 meses", "Corta las cerdas antes de enterrar el mango"]
    },
    {
        id: 6,
        nombre: "Cubiertos de Madera",
        img: "cubiertos_madera_1778873143136.png",
        desc: "Set de tenedor, cuchara y cuchillo de bambú portátiles.",
        beneficio: "Rechaza los cubiertos plásticos que te dan en la calle.",
        impacto: "Según la Ley N.º 30884 de Plásticos de un Solo Uso, está prohibida la fabricación, importación y entrega de cubiertos de plástico en el país. Estas opciones de bambú son 100% legales, higiénicas y ultra ligeras.",
        recomendaciones: ["Lávalos a mano", "Déjalos secar al aire libre", "No los sumerjas en agua por mucho tiempo"]
    },
    {
        id: 7,
        nombre: "Bolsas Compostables",
        img: "bolsas_compostables_1778876742714.png",
        desc: "Bolsas a base de almidón de maíz para residuos.",
        beneficio: "Se degradan en la tierra sin dejar microplásticos.",
        impacto: "Para ser legales en Perú, estas bolsas deben contar con certificado bajo la Norma Técnica Peruana NTP 900.080 (D.S. N° 006-2019-MINAM). A diferencia de las 'oxo-biodegradables' ilegales, estas se vuelven tierra.",
        recomendaciones: ["Úsalas para tus residuos de cocina", "Mantenlas lejos del sol hasta su uso", "No las mezcles con plásticos regulares"]
    },
    {
        id: 8,
        nombre: "Bolsas de Papel Kraft",
        img: "bolsas_papel_kraft_1778876351584.png",
        desc: "Bolsas resistentes hechas de papel reciclable, con certificación oficial.",
        beneficio: "100% reciclables y biodegradables según NTP-ISO 18606:2021.",
        impacto: "Promovidas y reguladas por la Ley N.º 30884 (Diciembre 2018) para reemplazar al plástico de un solo uso. El papel reduce dramáticamente la contaminación en los ecosistemas costeros.",
        recomendaciones: ["Reutilízalas para regalos o compras secas", "Evita mojar la base para que no se rompan", "Deposítalas en el tacho de reciclaje de papel/cartón"]
    }
];

// --- Inicialización ---
document.addEventListener('DOMContentLoaded', () => {

    // 1. Loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }, 800);

    // 2. Renderizar Productos
    const productsGrid = document.getElementById('products-grid');
    if (productsGrid) {
        productosData.forEach((prod, index) => {
            const delay = index * 100;
            const card = `
                <div class="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 fade-in-up flex flex-col h-full" style="transition-delay: ${delay}ms">
                    <div class="relative h-48 overflow-hidden group">
                        <img src="${prod.img}" alt="${prod.nombre}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110">
                        <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div class="p-6 flex flex-col flex-grow">
                        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">${prod.nombre}</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">${prod.desc}</p>
                        <div class="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                            <div class="flex items-center gap-2 text-eco-600 dark:text-eco-400 text-sm font-medium mb-4">
                                <svg class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                ${prod.beneficio}
                            </div>
                            <button onclick="openModal(${prod.id})" class="w-full py-2.5 rounded-xl border-2 border-eco-500 text-eco-600 dark:text-eco-400 font-semibold hover:bg-eco-500 hover:text-white transition-colors">
                                Ver información
                            </button>
                        </div>
                    </div>
                </div>
            `;
            productsGrid.innerHTML += card;
        });
    }

    // 3. Menú Móvil
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Cerrar menú móvil al hacer clic en un enlace
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // 4. Navbar Sticky Effect & Scroll to Top
    const navbar = document.getElementById('navbar');
    const btnUp = document.getElementById('btn-up');

    if (navbar && btnUp) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('glass-nav', 'py-2');
                navbar.classList.remove('bg-transparent', 'py-4');
                btnUp.classList.remove('opacity-0', 'pointer-events-none');
                btnUp.classList.add('opacity-100');
            } else {
                navbar.classList.remove('glass-nav', 'py-2');
                navbar.classList.add('bg-transparent', 'py-4');
                btnUp.classList.add('opacity-0', 'pointer-events-none');
                btnUp.classList.remove('opacity-100');
            }
        });

        btnUp.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // 5. Dark Mode Toggle
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeToggleBtnMobile = document.getElementById('theme-toggle-mobile');
    const darkIcon = document.getElementById('theme-toggle-dark-icon');
    const lightIcon = document.getElementById('theme-toggle-light-icon');
    const darkIconMobile = document.getElementById('theme-toggle-dark-icon-mobile');
    const lightIconMobile = document.getElementById('theme-toggle-light-icon-mobile');

    if (themeToggleBtn && themeToggleBtnMobile) {
        // Set initial theme based on localStorage or system config
        if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            document.documentElement.classList.remove('light');
            lightIcon.classList.remove('hidden');
            lightIconMobile.classList.remove('hidden');
        } else {
            document.documentElement.classList.remove('dark');
            document.documentElement.classList.add('light');
            darkIcon.classList.remove('hidden');
            darkIconMobile.classList.remove('hidden');
        }

        function toggleTheme() {
            darkIcon.classList.toggle('hidden');
            lightIcon.classList.toggle('hidden');
            darkIconMobile.classList.toggle('hidden');
            lightIconMobile.classList.toggle('hidden');

            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                document.documentElement.classList.add('light');
                localStorage.setItem('color-theme', 'light');
                updateChartsTheme('light');
            } else {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
                localStorage.setItem('color-theme', 'dark');
                updateChartsTheme('dark');
            }
        }

        themeToggleBtn.addEventListener('click', toggleTheme);
        themeToggleBtnMobile.addEventListener('click', toggleTheme);
    }

    // 6. Scroll Animations (Intersection Observer)
    const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');

                // Si es la sección de contadores, inicializar conteo
                if (entry.target.id === 'counters-section' && !entry.target.dataset.counted) {
                    startCounters();
                    entry.target.dataset.counted = true;
                }

                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up, #counters-section').forEach(el => observer.observe(el));

    // 7. Contadores Animados
    function startCounters() {
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // menor = más rápido

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    }

    // 8. Chart.js Initialization
    initCharts();

    // 9. Formulario Validación
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const nombre = document.getElementById('nombre');
            const errNombre = document.getElementById('err-nombre');
            if (nombre.value.trim() === '') {
                errNombre.classList.remove('hidden');
                nombre.classList.add('border-red-500');
                isValid = false;
            } else {
                errNombre.classList.add('hidden');
                nombre.classList.remove('border-red-500');
            }

            const correo = document.getElementById('correo');
            const errCorreo = document.getElementById('err-correo');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(correo.value.trim())) {
                errCorreo.classList.remove('hidden');
                correo.classList.add('border-red-500');
                isValid = false;
            } else {
                errCorreo.classList.add('hidden');
                correo.classList.remove('border-red-500');
            }

            const mensaje = document.getElementById('mensaje');
            const errMensaje = document.getElementById('err-mensaje');
            if (mensaje.value.trim() === '') {
                errMensaje.classList.remove('hidden');
                mensaje.classList.add('border-red-500');
                isValid = false;
            } else {
                errMensaje.classList.add('hidden');
                mensaje.classList.remove('border-red-500');
            }

            if (isValid) {
                const btn = form.querySelector('button[type="submit"]');
                btn.innerHTML = `<div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Enviando...`;

                // Simular envío
                setTimeout(() => {
                    document.getElementById('success-msg').classList.remove('hidden');
                    form.reset();
                    btn.innerHTML = `<span>Mensaje Enviado</span><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`;
                    btn.classList.replace('bg-eco-600', 'bg-green-600');

                    setTimeout(() => {
                        document.getElementById('success-msg').classList.add('hidden');
                        btn.innerHTML = `<span>Enviar Mensaje</span><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>`;
                        btn.classList.replace('bg-green-600', 'bg-eco-600');
                    }, 5000);
                }, 1500);
            }
        });
    }
});

// --- Lógica del Modal ---
const modalContainer = document.getElementById('modal-container');
const modalBackdrop = document.getElementById('modal-backdrop');
const modalContent = document.getElementById('modal-content');
const modalBody = document.getElementById('modal-body');
const modalClose = document.getElementById('modal-close');

function openModal(id) {
    const product = productosData.find(p => p.id === id);
    if (!product) return;

    const recsHTML = product.recomendaciones.map(r => `<li class="flex items-start mb-2"><svg class="w-5 h-5 text-eco-500 mr-2 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg><span class="text-gray-600 dark:text-gray-300">${r}</span></li>`).join('');

    modalBody.innerHTML = `
        <div class="h-64 w-full relative">
            <img src="${product.img}" alt="${product.nombre}" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            <h2 class="absolute bottom-6 left-6 text-3xl font-bold text-white">${product.nombre}</h2>
        </div>
        <div class="p-6 md:p-8 space-y-6">
            <div>
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <svg class="w-5 h-5 text-eco-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    Descripción
                </h4>
                <p class="text-gray-600 dark:text-gray-400">${product.desc}</p>
            </div>
            <div class="bg-eco-50 dark:bg-gray-700/50 p-4 rounded-2xl border-l-4 border-eco-500">
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Impacto Ecológico</h4>
                <p class="text-gray-700 dark:text-gray-300 text-sm md:text-base">${product.impacto}</p>
            </div>
            <div>
                <h4 class="text-lg font-bold text-gray-900 dark:text-white mb-3">Recomendaciones de uso</h4>
                <ul class="text-sm md:text-base">
                    ${recsHTML}
                </ul>
            </div>
        </div>
    `;

    modalContainer.classList.remove('hidden');
    // Trigger reflow
    void modalContainer.offsetWidth;
    modalBackdrop.classList.remove('opacity-0');
    modalBackdrop.classList.add('opacity-100');
    modalContent.classList.remove('opacity-0', 'scale-95');
    modalContent.classList.add('opacity-100', 'scale-100');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalBackdrop.classList.remove('opacity-100');
    modalBackdrop.classList.add('opacity-0');
    modalContent.classList.remove('opacity-100', 'scale-100');
    modalContent.classList.add('opacity-0', 'scale-95');

    setTimeout(() => {
        modalContainer.classList.add('hidden');
        document.body.style.overflow = '';
    }, 300);
}

if (modalClose && modalBackdrop) {
    modalClose.addEventListener('click', closeModal);
    modalBackdrop.addEventListener('click', closeModal);
}

// --- Lógica Chart.js ---
let chart1, chart2;

function initCharts() {
    const ctx1El = document.getElementById('impactChart1');
    const ctx2El = document.getElementById('impactChart2');

    if (!ctx1El || !ctx2El) return;

    const ctx1 = ctx1El.getContext('2d');
    const ctx2 = ctx2El.getContext('2d');
    const isDark = document.documentElement.classList.contains('dark');
    const textColor = isDark ? '#D1D5DB' : '#4B5563';
    const gridColor = isDark ? '#374151' : '#E5E7EB';

    // Chart 1: Bar
    chart1 = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ['2025 (Proyección)', '2026 (Meta)'],
            datasets: [
                {
                    label: 'Plástico de un solo uso (Ton)',
                    data: [60, 20],
                    backgroundColor: '#EF4444',
                    borderRadius: 6
                },
                {
                    label: 'Alternativas Ecológicas (Ton)',
                    data: [75, 120],
                    backgroundColor: '#10B981',
                    borderRadius: 6
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: textColor } }
            },
            scales: {
                y: { grid: { color: gridColor }, ticks: { color: textColor } },
                x: { grid: { display: false }, ticks: { color: textColor } }
            }
        }
    });

    // Chart 2: Doughnut
    chart2 = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: ['Bolsas de Tela/Kraft', 'Envases Compostables', 'Botellas Reutilizables', 'Otros (Sorbetes, Cubiertos)'],
            datasets: [{
                data: [55, 35, 20, 10],
                backgroundColor: ['#F59E0B', '#10B981', '#3B82F6', '#8B5CF6'],
                borderWidth: 0,
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'bottom', labels: { color: textColor, padding: 20 } }
            },
            cutout: '70%'
        }
    });
}

function updateChartsTheme(theme) {
    if (!chart1 || !chart2) return;
    const textColor = theme === 'dark' ? '#D1D5DB' : '#4B5563';
    const gridColor = theme === 'dark' ? '#374151' : '#E5E7EB';

    chart1.options.plugins.legend.labels.color = textColor;
    chart1.options.scales.x.ticks.color = textColor;
    chart1.options.scales.y.ticks.color = textColor;
    chart1.options.scales.y.grid.color = gridColor;
    chart1.update();

    chart2.options.plugins.legend.labels.color = textColor;
    chart2.update();
}
