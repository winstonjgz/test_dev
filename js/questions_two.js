// Definición de lenguajes
const languages = ["Python", "JavaScript", "Java", "C#", "PHP", "C++"];

// Definición de categorías
const categories = {
    "Lógica y resolución": { description: "Te enfocas en la resolución de problemas complejos y la estructura del código." },
    "Ciencia de datos": { description: "Te interesa el análisis de datos, el machine learning y la inteligencia artificial." },
    "Interfaz/UX": { description: "Disfrutas creando experiencias de usuario interactivas y visualmente atractivas." },
    "Aplicaciones empresariales": { description: "Te atrae el desarrollo de sistemas robustos y escalables para grandes organizaciones." },
    "Videojuegos/rendimiento": { description: "Buscas crear aplicaciones con alta eficiencia y rendimiento, como videojuegos o sistemas embebidos." },
    "Automatización/scripting": { description: "Prefieres automatizar tareas repetitivas y crear scripts para optimizar procesos." },
    "Web/tecnologías modernas": { description: "Te apasiona el desarrollo de sitios web y aplicaciones modernas con las últimas tecnologías." },
};

// Preguntas con opciones más explícitas y peso para lenguajes y categorías
const questions = [
    {
        text: "¿Prefieres trabajar con datos o con interfaces gráficas?",
        options: [
            { text: "Datos (Data Science, Análisis)", value: "Python", category: "Ciencia de datos" },
            { text: "Interfaces gráficas (Front-end, UX)", value: "JavaScript", category: "Interfaz/UX" }
        ]
    },
    {
        text: "¿Te atrae más la inteligencia artificial que el diseño web?",
        options: [
            { text: "Inteligencia Artificial y Machine Learning", value: "Python", category: "Ciencia de datos" },
            { text: "Diseño y desarrollo web", value: "JavaScript", category: "Web/tecnologías modernas" }
        ]
    },
    {
        text: "¿Disfrutas crear sitios web interactivos?",
        options: [
            { text: "Sí, me encanta la interactividad en la web (Front-end)", value: "JavaScript", category: "Web/tecnologías modernas" },
            { text: "Me interesa más el lado del servidor y la gestión de datos (Back-end)", value: "PHP", category: "Aplicaciones empresariales" }
        ]
    },
    {
        text: "¿Qué prefieres: rendimiento o legibilidad del código?",
        options: [
            { text: "Máximo rendimiento y control (ej. videojuegos, sistemas operativos)", value: "C++", category: "Videojuegos/rendimiento" },
            { text: "Código claro, fácil de leer y escribir rápidamente", value: "Python", category: "Lógica y resolución" }
        ]
    },
    {
        text: "¿Te gustaría trabajar en aplicaciones móviles nativas para Android?",
        options: [
            { text: "Sí, con un enfoque en la plataforma Android", value: "Java", category: "Aplicaciones empresariales" },
            { text: "Prefiero soluciones multiplataforma o web móviles", value: "JavaScript", category: "Web/tecnologías modernas" }
        ]
    },
    {
        text: "¿Te interesa el desarrollo de videojuegos de alto rendimiento?",
        options: [
            { text: "Sí, para juegos AAA y motores gráficos", value: "C++", category: "Videojuegos/rendimiento" },
            { text: "Me interesa el desarrollo de juegos con Unity", value: "C#", category: "Videojuegos/rendimiento" }
        ]
    },
    {
        text: "¿Prefieres trabajar en backend web que en frontend?",
        options: [
            { text: "Sí, la lógica del servidor, bases de datos y APIs", value: "PHP", category: "Aplicaciones empresariales" },
            { text: "Prefiero construir sistemas robustos y escalables para empresas", value: "Java", category: "Aplicaciones empresariales" }
        ]
    },
    {
        text: "¿Te interesan los sistemas de control industrial o embebidos?",
        options: [
            { text: "Sí, a bajo nivel y con alta eficiencia", value: "C++", category: "Videojuegos/rendimiento" },
            { text: "Sí, en entornos empresariales y control de hardware", value: "C#", category: "Aplicaciones empresariales" }
        ]
    },
    {
        text: "¿Te atrae más la ciencia de datos que el desarrollo web?",
        options: [
            { text: "Absolutamente, análisis, estadísticas y modelos", value: "Python", category: "Ciencia de datos" },
            { text: "Me inclino más por la creación de sitios y aplicaciones web", value: "PHP", category: "Web/tecnologías modernas" }
        ]
    },
    {
        text: "¿Prefieres trabajar en grandes empresas con soluciones corporativas?",
        options: [
            { text: "Sí, en entornos empresariales consolidados", value: "Java", category: "Aplicaciones empresariales" },
            { text: "Sí, especialmente en ecosistemas Microsoft", value: "C#", category: "Aplicaciones empresariales" }
        ]
    },
    {
        text: "¿Quieres aprender un lenguaje usado en startups y ciencia de datos?",
        options: [
            { text: "Sí, que sea versátil y con gran comunidad", value: "Python", category: "Ciencia de datos" },
            { text: "Sí, para aplicaciones web modernas y flexibles", value: "JavaScript", category: "Web/tecnologías modernas" }
        ]
    },
    {
        text: "¿Te interesa el desarrollo web clásico (CMS, WordPress, etc)?",
        options: [
            { text: "Sí, desarrollo de sitios y CMS tradicionales", value: "PHP", category: "Web/tecnologías modernas" },
            { text: "No tanto, prefiero frameworks modernos y single-page applications", value: "JavaScript", category: "Web/tecnologías modernas" }
        ]
    },
    {
        text: "¿Te resulta más cómodo tipar menos y moverte rápido?",
        options: [
            { text: "Sí, prefiero la agilidad y prototipado rápido", value: "JavaScript", category: "Lógica y resolución" },
            { text: "Sí, me gusta la sintaxis limpia y la concisión", value: "Python", category: "Lógica y resolución" }
        ]
    },
    {
        text: "¿Prefieres un lenguaje que se ejecute directamente en el navegador?",
        options: [
            { text: "Sí, para crear experiencias interactivas en el cliente", value: "JavaScript", category: "Web/tecnologías modernas" },
            { text: "No necesariamente, prefiero lenguajes de servidor o backend", value: "Python", category: "Web/tecnologías modernas" }
        ]
    },
    {
        text: "¿Qué valoras más: comunidad y recursos, o rendimiento y control?",
        options: [
            { text: "Comunidad grande, muchos recursos y librerías", value: "JavaScript", category: "Lógica y resolución" },
            { text: "Control granular del hardware y máximo rendimiento", value: "C++", category: "Videojuegos/rendimiento" }
        ]
    },
    {
        text: "¿Te interesa el desarrollo multiplataforma con tecnologías Microsoft?",
        options: [
            { text: "Sí, utilizando frameworks como .NET, Xamarin", value: "C#", category: "Aplicaciones empresariales" },
            { text: "Me inclino más por ecosistemas abiertos y multiplataforma", value: "Java", category: "Aplicaciones empresariales" }
        ]
    },
    {
        text: "¿Tienes interés en herramientas como Laravel, Symfony o WordPress?",
        options: [
            { text: "Sí, frameworks y CMS para desarrollo web", value: "PHP", category: "Web/tecnologías modernas" },
            { text: "No, prefiero herramientas de Front-end o frameworks de JavaScript", value: "JavaScript", category: "Web/tecnologías modernas" }
        ]
    },
    {
        text: "¿Cuál prefieres para automatizar tareas o hacer prototipos rápidos?",
        options: [
            { text: "Python, por su sintaxis clara y librerías", value: "Python", category: "Automatización/scripting" },
            { text: "Java, para sistemas robustos y escalables", value: "Java", category: "Automatización/scripting" }
        ]
    },
    {
        text: "¿Quieres trabajar en desarrollo de APIs y servicios web robustos?",
        options: [
            { text: "Sí, con un enfoque en la escalabilidad empresarial", value: "Java", category: "Aplicaciones empresariales" },
            { text: "Sí, para backends flexibles y con integración de datos", value: "Python", category: "Aplicaciones empresariales" }
        ]
    },
    {
        text: "¿Te interesa la creación de videojuegos con Unity?",
        options: [
            { text: "Sí, Unity es mi motor de elección", value: "C#", category: "Videojuegos/rendimiento" },
            { text: "Prefiero otros motores o desarrollo de bajo nivel", value: "C++", category: "Videojuegos/rendimiento" }
        ]
    },
    {
        text: "¿Qué prefieres: un lenguaje interpretado o compilado?",
        options: [
            { text: "Interpretado (mayor flexibilidad, prototipado rápido)", value: "Python", category: "Lógica y resolución" },
            { text: "Compilado (mayor rendimiento, control de recursos)", value: "C++", category: "Videojuegos/rendimiento" }
        ]
    },
    {
        text: "¿Prefieres backend tradicional o moderno y basado en servicios?",
        options: [
            { text: "Tradicional, con CMS y frameworks web maduros", value: "PHP", category: "Aplicaciones empresariales" },
            { text: "Moderno, basado en microservicios y la nube", value: "Java", category: "Aplicaciones empresariales" }
        ]
    },
    {
        text: "¿Te interesa el scripting, automatización y análisis de datos?",
        options: [
            { text: "Sí, para tareas de sistema, web scraping y ciencia de datos", value: "Python", category: "Automatización/scripting" },
            { text: "Sí, en el ecosistema Microsoft o para automatización empresarial", value: "C#", category: "Automatización/scripting" }
        ]
    },
    {
        text: "¿Te atraen los frameworks web como Flask, Django o Express?",
        options: [
            { text: "Sí, para desarrollo web ágil y con enfoque en datos", value: "Python", category: "Web/tecnologías modernas" },
            { text: "Sí, para aplicaciones full-stack y APIs con Node.js", value: "JavaScript", category: "Web/tecnologías modernas" }
        ]
    },
    {
        text: "¿Cuál prefieres para construir aplicaciones en la nube empresarial?",
        options: [
            { text: "Java, por su robustez y ecosistema empresarial", value: "Java", category: "Aplicaciones empresariales" },
            { text: "C#, por su integración con Azure y servicios de Microsoft", value: "C#", category: "Aplicaciones empresariales" }
        ]
    },
    {
        text: "¿Prefieres resolver problemas matemáticos o diseñar experiencias visuales?",
        options: [
            { text: "Resolver problemas matemáticos y algoritmos complejos", value: "Python", category: "Ciencia de datos" },
            { text: "Diseñar y desarrollar interfaces de usuario y experiencias visuales", value: "JavaScript", category: "Interfaz/UX" }
        ]
    },
    {
        text: "¿Te interesa desarrollar sistemas ERP o CRM empresariales?",
        options: [
            { text: "Sí, para soluciones de negocio grandes y complejas", value: "C#", category: "Aplicaciones empresariales" },
            { text: "Sí, para soluciones web y de gestión de datos", value: "PHP", category: "Aplicaciones empresariales" }
        ]
    },
    {
        text: "¿Te interesa construir bots o automatizar con IA?",
        options: [
            { text: "Sí, con librerías de IA y aprendizaje automático", value: "Python", category: "Automatización/scripting" },
            { text: "Sí, para sistemas de bots robustos y escalables", value: "Java", category: "Automatización/scripting" }
        ]
    },
    {
        text: "¿Qué prefieres: escalabilidad o facilidad de aprendizaje?",
        options: [
            { text: "Escalabilidad y rendimiento para grandes sistemas", value: "Java", category: "Aplicaciones empresariales" },
            { text: "Facilidad de aprendizaje y rapidez en el desarrollo", value: "Python", category: "Lógica y resolución" }
        ]
    },
    {
        text: "¿Con qué lenguaje te sientes más cómodo para comenzar un proyecto web?",
        options: [
            { text: "JavaScript, por su omnipresencia en el navegador y Node.js", value: "JavaScript", category: "Web/tecnologías modernas" },
            { text: "PHP, por su madurez y facilidad para el desarrollo web de servidor", value: "PHP", category: "Web/tecnologías modernas" }
        ]
    },
    {
        text: "¿Qué te parece más interesante: programación orientada a objetos o scripting simple?",
        options: [
            { text: "Programación Orientada a Objetos (POO) y sistemas complejos", value: "Java", category: "Lógica y resolución" },
            { text: "Scripting simple y programación funcional", value: "Python", category: "Lógica y resolución" }
        ]
    },
    {
        text: "¿Te gustaría desarrollar para dispositivos móviles con Xamarin?",
        options: [
            { text: "Sí, utilizando el ecosistema .NET", value: "C#", category: "Aplicaciones empresariales" },
            { text: "No, prefiero el desarrollo nativo o frameworks como React Native", value: "Java", category: "Aplicaciones empresariales" }
        ]
    },
    {
        text: "¿Preferís manipular archivos, datos y automatizar procesos?",
        options: [
            { text: "Sí, para tareas de sistema y análisis de datos", value: "Python", category: "Automatización/scripting" },
            { text: "Sí, a bajo nivel y con gran eficiencia", value: "C++", category: "Automatización/scripting" }
        ]
    },
    {
        text: "¿Te interesa trabajar con servidores y bases de datos web?",
        options: [
            { text: "Sí, en el backend web y la gestión de contenido", value: "PHP", category: "Web/tecnologías modernas" },
            { text: "Sí, para APIs RESTful y sistemas de bases de datos NoSQL", value: "JavaScript", category: "Web/tecnologías modernas" }
        ]
    },
    {
        text: "¿Preferís trabajar en aplicaciones de escritorio o aplicaciones web?",
        options: [
            { text: "Aplicaciones de escritorio robustas y de alto rendimiento", value: "C#", category: "Aplicaciones empresariales" },
            { text: "Aplicaciones web modernas y multiplataforma", value: "JavaScript", category: "Web/tecnologías modernas" }
        ]
    },
    {
        text: "¿Qué te resulta más atractivo: rendimiento extremo o facilidad multiplataforma?",
        options: [
            { text: "Rendimiento extremo y control a bajo nivel", value: "C++", category: "Videojuegos/rendimiento" },
            { text: "Facilidad de desarrollo y ejecución en múltiples plataformas", value: "Python", category: "Lógica y resolución" }
        ]
    },
    {
        text: "¿Qué lenguaje se adapta mejor a tu estilo de aprendizaje visual?",
        options: [
            { text: "JavaScript, por su inmediatez en el navegador y herramientas de desarrollo visual", value: "JavaScript", category: "Interfaz/UX" },
            { text: "Python, por su sintaxis clara y uso en herramientas de visualización de datos", value: "Python", category: "Ciencia de datos" }
        ]
    },
    {
        text: "¿Te gustaría crear herramientas de análisis de datos o dashboards?",
        options: [
            { text: "Sí, con librerías potentes de análisis de datos", value: "Python", category: "Ciencia de datos" },
            { text: "Sí, para visualizaciones interactivas en la web", value: "JavaScript", category: "Interfaz/UX" }
        ]
    },
    {
        text: "¿Qué valorás más: robustez o simplicidad?",
        options: [
            { text: "Robustez, seguridad y rendimiento en sistemas críticos", value: "Java", category: "Aplicaciones empresariales" },
            { text: "Simplicidad, rapidez de desarrollo y facilidad de lectura", value: "Python", category: "Lógica y resolución" }
        ]
    },
    {
        text: "¿Te interesa más la lógica de negocio o la interfaz del usuario?",
        options: [
            { text: "La lógica de negocio y el backend de las aplicaciones", value: "Java", category: "Aplicaciones empresariales" },
            { text: "La interfaz de usuario y la experiencia visual", value: "JavaScript", category: "Interfaz/UX" }
        ]
    },
    {
        text: "¿Querés aprender un lenguaje muy usado en backend tradicional?",
        options: [
            { text: "Sí, con una gran base instalada y frameworks maduros", value: "PHP", category: "Web/tecnologías modernas" },
            { text: "Sí, para sistemas empresariales y escalables", value: "Java", category: "Aplicaciones empresariales" }
        ]
    },
    {
        text: "¿Qué prefieres para empezar: facilidad o demanda laboral?",
        options: [
            { text: "Facilidad de aprendizaje y una curva suave", value: "Python", category: "Lógica y resolución" },
            { text: "Demanda laboral alta en el sector empresarial", value: "Java", category: "Aplicaciones empresariales" }
        ]
    },
    {
        text: "¿Qué prefieres para apps en tiempo real como chats o juegos web?",
        options: [
            { text: "JavaScript (Node.js) por su asincronía y WebSockets", value: "JavaScript", category: "Web/tecnologías modernas" },
            { text: "C++ por su rendimiento y control para lógicas de juego complejas", value: "C++", category: "Videojuegos/rendimiento" }
        ]
    },
    {
        text: "¿Qué te gustaría construir: interfaces modernas o sistemas robustos?",
        options: [
            { text: "Interfaces modernas y dinámicas en el navegador", value: "JavaScript", category: "Interfaz/UX" },
            { text: "Sistemas robustos, escalables y seguros para empresas", value: "Java", category: "Aplicaciones empresariales" }
        ]
    },
    {
        text: "¿Te interesa un lenguaje ampliamente usado en educación y ciencia?",
        options: [
            { text: "Sí, por su simplicidad y librerías científicas", value: "Python", category: "Ciencia de datos" },
            { text: "Sí, por su rigurosidad y uso en ingeniería de software", value: "Java", category: "Lógica y resolución" }
        ]
    },
    {
        text: "¿Cuál usarías para resolver problemas técnicos complejos?",
        options: [
            { text: "C++ por su control de bajo nivel y eficiencia", value: "C++", category: "Lógica y resolución" },
            { text: "Java por su robustez, seguridad y ecosistema de herramientas", value: "Java", category: "Lógica y resolución" }
        ]
    },
    {
        text: "¿Qué prefieres para trabajar en la nube: integración o eficiencia?",
        options: [
            { text: "Integración con servicios de la nube y escalabilidad", value: "Java", category: "Aplicaciones empresariales" },
            { text: "Eficiencia y rapidez en el desarrollo de microservicios", value: "Python", category: "Aplicaciones empresariales" }
        ]
    },
    {
        text: "¿Cuál te resulta más accesible como primer lenguaje?",
        options: [
            { text: "Python, por su sintaxis intuitiva y legibilidad", value: "Python", category: "Lógica y resolución" },
            { text: "JavaScript, por su inmediatez en el navegador y recursos abundantes", value: "JavaScript", category: "Lógica y resolución" }
        ]
    }
];

let selectedQuestions = []; // Array para almacenar las 15 preguntas aleatorias
let langScores = {}; // Puntajes para lenguajes
let catScores = {};  // Puntajes para categorías

/**
 * Inicializa los puntajes de lenguajes y categorías a cero.
 */
function initializeScores() {
    languages.forEach(lang => langScores[lang] = 0);
    Object.keys(categories).forEach(cat => catScores[cat] = 0);
}

/**
 * Obtiene un número específico de preguntas aleatorias sin repetición.
 * @param {Array} arr - El array de preguntas original.
 * @param {number} n - El número de preguntas a seleccionar.
 * @returns {Array} Un nuevo array con las preguntas seleccionadas aleatoriamente.
 */
function getRandomQuestions(arr, n) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

/**
 * Renderiza las preguntas en el contenedor HTML.
 */
function renderQuestions() {
    questionsContainer.innerHTML = ''; // Limpiar preguntas anteriores
    selectedQuestions.forEach((q, index) => {
        const div = document.createElement("div");
        div.className = "question";
        const h3 = document.createElement("h3");
        h3.innerText = `${index + 1}. ${q.text}`;
        div.appendChild(h3);

        const optionsDiv = document.createElement("div");
        optionsDiv.className = "options";
        q.options.forEach((option, optionIndex) => {
            const label = document.createElement("label");
            // Guardamos el valor completo de la opción (lenguaje y categoría)
            label.innerHTML = `<input type="radio" name="q${index}" value="${option.value}__${option.category}" required> ${option.text}`;
            optionsDiv.appendChild(label);
        });
        div.appendChild(optionsDiv);
        questionsContainer.appendChild(div);
    });
}

/**
 * Calcula los resultados del test basándose en las respuestas del usuario.
 * @param {FormData} formData - Los datos del formulario con las respuestas.
 */
function calculateResults(formData) {
    initializeScores(); // Reiniciar puntajes antes de calcular

    selectedQuestions.forEach((q, index) => {
        const selectedOptionValue = formData.get(`q${index}`);
        if (selectedOptionValue) {
            // El valor ahora es "lenguaje__categoria"
            const [lang, category] = selectedOptionValue.split('__');

            // Sumar punto al lenguaje seleccionado
            if (langScores.hasOwnProperty(lang)) {
                langScores[lang]++;
            }

            // Sumar punto a la categoría asociada a la opción seleccionada
            if (catScores.hasOwnProperty(category)) {
                catScores[category]++;
            }
        }
    });
}

/**
 * Muestra los resultados en el DOM.
 */
function displayResults() {
    document.getElementById("testForm").style.display = "none";
    document.getElementById("resultSection").style.display = "block";

    // Gráfico de barras para lenguajes
    const ctx = document.getElementById("resultChart").getContext("2d");
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: languages,
            datasets: [{
                label: 'Afinidad con lenguaje',
                data: languages.map(lang => langScores[lang]),
                backgroundColor: [
                    '#4BC0C0', '#FFCE56', '#36A2EB', '#9966FF', '#FF6384', '#6c757d'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true, ticks: { stepSize: 1 } } // Asegura que los ticks sean enteros
            }
        }
    });

    // Texto resultado lenguaje dominante
    const maxLang = Object.entries(langScores).reduce((a, b) => a[1] > b[1] ? a : b);
    const resultText = document.getElementById("resultText");
    resultText.innerText = `Según tus respuestas, tu lenguaje más afín es: ${maxLang[0]} (${maxLang[1]} puntos). ¡Podrías empezar a aprenderlo!`;

    // Mostrar fortalezas y debilidades en categorías
    const categorySummary = document.getElementById("categorySummary");

    // Ordenar categorías de mayor a menor puntaje
    const sortedCats = Object.entries(catScores).sort((a, b) => b[1] - a[1]);
    const topCat = sortedCats[0];
    const lowCat = sortedCats[sortedCats.length - 1];

    categorySummary.innerHTML = `
                <h3>Perfil de fortalezas y áreas a reforzar</h3>
                <p><strong>Fortaleza principal:</strong> ${topCat[0]} (${topCat[1]} respuestas relacionadas)</p>
                <p>${categories[topCat[0]].description}</p>
                <p><strong>Área para explorar/mejorar:</strong> ${lowCat[0]} (${lowCat[1]} respuestas relacionadas)</p>
                <p>${categories[lowCat[0]].description}</p>
                <p>Te recomendamos enfocar tu aprendizaje en fortalecer tus áreas menos exploradas para un desarrollo equilibrado y explorar a fondo tus fortalezas.</p>
            `;
}

// --- Lógica principal al cargar la página ---
document.addEventListener("DOMContentLoaded", () => {
    selectedQuestions = getRandomQuestions(questions, 15);
    renderQuestions();
});

document.getElementById("testForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    calculateResults(formData);
    displayResults();
});
