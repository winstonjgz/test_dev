// Definición de las preguntas del test
const questions = [
    {
        text: "¿Qué te atrae más al ver una aplicación web?",
        options: ["frontend: El diseño visual", "backend: Cómo procesa los datos"]
    },
    {
        text: "¿Cuál de estos lenguajes se usa comúnmente para crear interfaces web?",
        options: ["backend: Python", "frontend: HTML", "backend: SQL", "backend: Bash"]
    },
    {
        text: "Si una aplicación no muestra los datos correctamente, ¿qué revisarías primero?",
        options: ["backend: El servidor", "frontend: El CSS"]
    },
    {
        text: "¿Qué hace este fragmento de código? document.querySelector('#boton').addEventListener('click', () => alert('Hola!'));",
        options: ["frontend: Muestra un mensaje al hacer clic", "backend: Llama a una API"]
    },
    {
        text: "¿Qué disfrutas más?",
        options: ["frontend: Hacer que algo se vea bien", "backend: Que los datos se procesen correctamente"]
    },
    {
        text: "¿Cuál de estos archivos suele estar más relacionado con el backend?",
        options: ["frontend: index.html", "backend: server.js"]
    },
    {
        text: "¿Qué herramienta se utiliza más para diseñar interfaces gráficas?",
        options: ["frontend: Figma", "backend: Postman"]
    },
    {
        text: "¿Qué comando usarías para hacer una consulta a una base de datos SQL?",
        options: ["backend: SELECT * FROM", "frontend: console.log"]
    },
    {
        text: "¿Qué tecnología está más relacionada con el desarrollo de API REST?",
        options: ["backend: Express.js", "frontend: Bootstrap"]
    },
    {
        text: "¿Qué propiedad de CSS sirve para cambiar el color del texto?",
        options: ["frontend: color", "backend: print"]
    },
    {
        text: "¿Qué lenguaje se usa para estructurar páginas web?",
        options: ["frontend: HTML", "backend: PHP"]
    },
    {
        text: "¿Qué parte del sistema maneja la lógica de negocio?",
        options: ["backend: Servidor", "frontend: Interfaz"]
    },
    {
        text: "¿Cuál prefieres al resolver un problema?",
        options: ["backend: Algoritmos eficientes", "frontend: Diseño intuitivo"]
    },
    {
        text: "¿Qué herramienta usas para probar endpoints de APIs?",
        options: ["backend: Postman", "frontend: Figma"]
    },
    {
        text: "¿Qué formato se usa para comunicar datos en APIs?",
        options: ["backend: JSON", "frontend: SVG"]
    },
    {
        text: "¿Dónde se usa CSS?",
        options: ["frontend: Estilos visuales", "backend: Configuraciones del servidor"]
    },
    {
        text: "¿Cuál se relaciona más con el control de sesiones de usuario?",
        options: ["backend: Autenticación JWT", "frontend: Cambiar temas de color"]
    },
    {
        text: "¿Qué tecnología se usa más para animaciones web?",
        options: ["frontend: CSS transitions", "backend: SQL procedures"]
    },
    {
        text: "¿Qué prefieres en un equipo?",
        options: ["frontend: Diseñar experiencia de usuario", "backend: Optimizar rendimiento de bases de datos"]
    },
    {
        text: "¿Qué es más importante para ti en una aplicación?",
        options: ["frontend: Que se vea profesional", "backend: Que responda rápido"]
    },
    {
        text: "¿Qué framework se asocia a frontend?",
        options: ["frontend: React", "backend: Django"]
    },
    {
        text: "¿Qué prefieres aprender?",
        options: ["backend: Estructuras de datos", "frontend: Técnicas de diseño"]
    },
    {
        text: "¿Qué significa API?",
        options: ["backend: Application Programming Interface", "frontend: Advanced Page Interaction"]
    },
    {
        text: "¿Qué parte del desarrollo usa más SQL?",
        options: ["backend: Bases de datos", "frontend: Hoja de estilos"]
    },
    {
        text: "¿Qué rol te llama más la atención?",
        options: ["frontend: Diseñador UI/UX", "backend: Arquitecto de Software"]
    }
];

const questionsContainer = document.getElementById("questionsContainer");

// Función para renderizar las preguntas dinámicamente
function renderQuestions() {
    questionsContainer.innerHTML = ''; // Limpiar preguntas anteriores
    questions.forEach((q, index) => {
        const div = document.createElement("div");
        div.className = "question";
        const h3 = document.createElement("h3");
        h3.innerText = `${index + 1}. ${q.text}`;
        div.appendChild(h3);

        const optionsDiv = document.createElement("div");
        optionsDiv.className = "options";
        q.options.forEach((opt, i) => {
            const [type, text] = opt.split(": ");
            const id = `q${index + 1}_${i}`; // ID único para cada radio button
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="q${index + 1}" value="${type.trim()}" required> ${text.trim()}`;
            optionsDiv.appendChild(label);
        });
        div.appendChild(optionsDiv);
        questionsContainer.appendChild(div);
    });
}

// Lógica para manejar el envío del formulario
document.getElementById("testForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar el envío por defecto del formulario

    let frontend = 0;
    let backend = 0;
    const formData = new FormData(this); // Obtener los datos del formulario

    // Iterar sobre los valores del formulario para calcular los puntajes
    for (let value of formData.values()) {
        if (value === "frontend") frontend++;
        if (value === "backend") backend++;
    }

    // Ocultar el formulario y mostrar la sección de resultados
    document.getElementById("testForm").style.display = "none";
    document.getElementById("resultSection").style.display = "block";

    // Obtener el contexto del canvas para el gráfico
    const ctx = document.getElementById("resultChart").getContext("2d");

    // Crear el gráfico de barras con los resultados
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Frontend', 'Backend'],
            datasets: [{
                label: 'Puntaje por perfil',
                data: [frontend, backend],
                backgroundColor: ['#36a2eb', '#ff6384'] // Colores para las barras
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false } // Ocultar la leyenda
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: { stepSize: 1 } // Asegurar que los ticks sean enteros
                }
            }
        }
    });

    // Mostrar el texto del resultado basado en los puntajes
    const resultText = document.getElementById("resultText");
    if (frontend > backend) {
        resultText.innerText = "Tu perfil se inclina hacia Frontend. Tienes afinidad con el diseño, interacción y experiencia del usuario.";
    } else if (backend > frontend) {
        resultText.innerText = "Tu perfil se inclina hacia Backend. Muestras interés en la lógica, datos y funcionamiento del sistema.";
    } else {
        resultText.innerText = "Tienes un perfil equilibrado entre Frontend y Backend. Podrías explorar un camino Fullstack.";
    }
});

// Lógica del Modal
const welcomeModal = document.getElementById("welcomeModal");
const closeModalBtn = document.getElementById("closeModalBtn");

// Función para ocultar el modal
function hideModal() {
    welcomeModal.style.display = "none";
}

// Mostrar el modal cuando el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {
    renderQuestions(); // Asegurarse de que las preguntas se rendericen
    welcomeModal.style.display = "flex"; // Mostrar el modal
});

// Ocultar el modal al hacer clic en el botón
closeModalBtn.addEventListener("click", hideModal);

// También se podría ocultar el modal si se hace clic fuera de él (opcional)
// welcomeModal.addEventListener("click", (event) => {
//     if (event.target === welcomeModal) {
//         hideModal();
//     }
// });
