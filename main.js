import "./style.css";

const container = document.createElement("div");
container.className = "container";
const h2 = document.createElement("h2");
h2.className = "h2";
h2.textContent = "Quiz Question";
const p = document.createElement("p");
p.className = "p";

const quiz = {
  pregunta1: {
    pregunta: "What is the capital of France?",
    respuestas: ["Berlin", "Madrid", "Paris", "Rome"],
  },
  pregunta2: {
    pregunta: "Which is the world's largest river?",
    respuestas: ["Amazon", "Nilo", "Yangsté", "Miño"],
  },
  pregunta3: {
    pregunta: "Who wrote Romeo and Juliet?",
    respuestas: [
      "Jane Austen",
      "Cervantes",
      "William Shakespeare",
      "Charles Dickens",
    ],
  },
  pregunta4: {
    pregunta: "How many planets are there in our Solar System?",
    respuestas: ["7", "8", "9", "10"],
  },
};

const preguntasKeys = Object.keys(quiz);
let indice = 0;

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
div.appendChild(previousButton);
div.appendChild(nextButton);

// Inicializar los botones de respuesta
const answerButtons = [];

// Funciones de navegación
function incrementar() {
  if (indice < preguntasKeys.length - 1) {
    indice++;
    actualizarPregunta();
    actualizarBotones(); // Actualizar botones de respuesta
  }
}

function decrease() {
  if (indice > 0) {
    indice--;
    actualizarPregunta();
    actualizarBotones(); // Actualizar botones de respuesta
  }
}

// Actualizar la pregunta
function actualizarPregunta() {
  p.textContent = quiz[preguntasKeys[indice]].pregunta; // Actualiza el texto de la pregunta
}

// Actualizar los botones de respuesta
function actualizarBotones() {
  ul.innerHTML = ""; // Limpiar la lista actual de botones
  const respuestasActuales = quiz[preguntasKeys[indice]].respuestas; // Obtiene las respuestas para la pregunta actual

  for (let i = 0; i < respuestasActuales.length; i++) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = "answer-btn";
    button.textContent = respuestasActuales[i]; // Asigna la respuesta al botón

    button.addEventListener("click", () => {
      answerButtons.forEach((btn) => {
        btn.style.backgroundColor = ""; // Restablece el color de fondo
        btn.style.color = ""; // Restablece el color del texto si lo deseas
      });

      button.style.backgroundColor = "#3CB371";
    });
    li.appendChild(button);
    ul.appendChild(li);
  }
}

// Eventos de los botones
nextButton.addEventListener("click", incrementar);
previousButton.addEventListener("click", decrease);

// Inicializa la primera pregunta y los botones de respuesta
actualizarPregunta();
actualizarBotones();
container.appendChild(div);
