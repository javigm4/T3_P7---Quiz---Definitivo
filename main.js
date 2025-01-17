import "./style.css";

// --- Variables Globales ---
const container = document.createElement("div");
container.className = "container";

const h2 = document.createElement("h2");
h2.className = "h2";
h2.textContent = "Quiz Question";

const p = document.createElement("p");
p.className = "p";

// --- Definición de Preguntas ---
const quiz = {
  pregunta1: {
    pregunta: "What is the capital of France?",
    respuestas: ["Berlin", "Madrid", "Paris", "Rome"],
    correcta: "Paris",
  },
  pregunta2: {
    pregunta: "Which is the world's largest river?",
    respuestas: ["Amazon", "Nilo", "Yangsté", "Miño"],
    correcta: "Nilo",
  },
  pregunta3: {
    pregunta: "Who wrote Romeo and Juliet?",
    respuestas: [
      "Jane Austen",
      "Cervantes",
      "William Shakespeare",
      "Charles Dickens",
    ],
    correcta: "William Shakespeare",
  },
  pregunta4: {
    pregunta: "How many planets are there in our Solar System?",
    respuestas: ["7", "8", "9", "10"],
    correcta: "8",
  },
};

// --- Variables de Control ---
const preguntasKeys = Object.keys(quiz);
let indice = 0;
let nRespuestasSeleccionadas = 0;
const respuestasSeleccionadas = Array(preguntasKeys.length).fill(null);

// --- Elementos del DOM ---
const ul = document.createElement("ul");
document.body.appendChild(container);
container.appendChild(h2);
container.appendChild(p);
container.appendChild(ul);

const div = document.createElement("div");
const previousButton = document.createElement("button");
previousButton.textContent = "Previous";
previousButton.className = "footer-btn";

const nextButton = document.createElement("button");
nextButton.textContent = "Next";
nextButton.className = "footer-btn";

const checkButton = document.createElement("button");
checkButton.textContent = "Check";
checkButton.className = "footer-btn";
checkButton.disabled = true;

div.appendChild(previousButton);
div.appendChild(nextButton);
div.appendChild(checkButton);

// --- Inicializar Respuestas ---
const answerButtons = [];

// --- Funciones del Quiz ---
function actualizarPregunta() {
  p.textContent = quiz[preguntasKeys[indice]].pregunta; // Actualiza el texto de la pregunta
}

function comprobarRespuestas() {
  let Ncorrectas = 0; // Reiniciar el contador de respuestas correctas

  preguntasKeys.forEach((key, index) => {
    if (
      quiz[key].respuestas[respuestasSeleccionadas[index]] ===
      quiz[key].correcta
    ) {
      Ncorrectas++;
    }
  });

  return Ncorrectas; // Retornar el total de respuestas correctas
}

function alertRespuestasCorrectas(totalCorrectas) {
  alert(totalCorrectas + " answers from " + preguntasKeys.length);
}

function actualizarBotones() {
  ul.innerHTML = ""; // Limpiar la lista actual de botones
  const respuestasActuales = quiz[preguntasKeys[indice]].respuestas; // Obtiene las respuestas para la pregunta actual

  answerButtons.length = 0; // Limpiar el estado anterior para los botones

  for (let i = 0; i < respuestasActuales.length; i++) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = respuestasActuales[i]; // Asigna la respuesta al botón

    // Establecer el color de fondo si es la respuesta seleccionada
    if (respuestasSeleccionadas[indice] === i) {
      button.classList.add("selected");
      button.style.backgroundColor = "#3CB371"; // Color verde para el botón seleccionado
    }

    button.addEventListener("click", () => {
      if (respuestasSeleccionadas[indice] === null) {
        nRespuestasSeleccionadas++; // Aumentar el contador si es una nueva selección
      }

      // Guardar el índice de la respuesta seleccionada para la pregunta actual
      respuestasSeleccionadas[indice] = i;

      // Restablecer el color de fondo de todos los botones
      answerButtons.forEach((btn) => {
        btn.style.backgroundColor = "";
        btn.classList.remove("selected");
      });

      // Marcar el botón clickeado como seleccionado
      button.classList.add("selected");
      button.style.backgroundColor = "#3CB371"; // Color verde para el botón clicado
      checkButton.disabled = nRespuestasSeleccionadas < 4; // Activar el botón Check si hay 4 respuestas seleccionadas
    });

    li.appendChild(button);
    answerButtons.push(button); // Agregar el botón al arreglo
    ul.appendChild(li);
  }
} //sdd

// --- Eventos de Botones ---
checkButton.addEventListener("click", () => {
  const totalCorrectas = comprobarRespuestas(); // Comprobar todas las respuestas
  alertRespuestasCorrectas(totalCorrectas); // Mostrar alerta con la puntuación
});

nextButton.addEventListener("click", () => {
  if (indice < preguntasKeys.length - 1) {
    indice++;
    actualizarPregunta();
    actualizarBotones();
  }
});

previousButton.addEventListener("click", () => {
  if (indice > 0) {
    indice--;
    actualizarPregunta();
    actualizarBotones();
  }
});

// --- Inicializar la Interfaz ---
actualizarPregunta();
actualizarBotones();
container.appendChild(div);
