import "./style.css";

const container = document.createElement("div");
container.className = "container";
const h2 = document.createElement("h2");
h2.className = "container h2";
h2.textContent = "Quiz Question";
const p = document.createElement("p");
p.className = "container p";

const preguntas = [
  "What is the capital of France?",
  "Which is the world's largest river?",
  "Who wrote Romeo and Juliet?",
  "How many planets are there in our Solar System?",
];
const respuestas = [
  ["Berlin", "Madrid", "Paris", "Rome"],
  ["Amazon", "Nilo", "Yangsté", "Miño"],
  ["Jane Austen", "Cervantes", "William Shakespeare", "Charles Dickens"],
  ["7", "8", "9", "10"],
];

let indice = 0;
p.textContent = preguntas[indice];

const ul = document.createElement("ul");
const body = document.querySelector("body");

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

// Crear un arreglo para almacenar los botones de respuesta
const answerButtons = [];

// Crear los botones de respuesta y agregarlos al arreglo
for (let i = 0; i < 4; i++) {
  // Cambié aquí para que sea 4 en lugar de respuestas.length
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.className = "answer-btn";
  answerButtons.push(button); // Agregar el botón al arreglo answerButtons
  li.appendChild(button);
  ul.appendChild(li);
}

// Botones
function incrementar() {
  if (indice < preguntas.length - 1) {
    indice++;
    actualizarPregunta();
    actualizarRespuesta(); // Llamar a actualizarRespuesta al cambiar de pregunta
  }
}

function decrease() {
  if (indice > 0) {
    indice--;
    actualizarPregunta();
    actualizarRespuesta(); // Llamar a actualizarRespuesta al cambiar de pregunta
  }
}

// Actualizar la pregunta
function actualizarPregunta() {
  p.textContent = preguntas[indice];
}

// Actualizar las respuestas
function actualizarRespuesta() {
  const respuestasActuales = respuestas[indice]; // Obtiene las respuestas para la pregunta actual
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = respuestasActuales[i]; // Actualiza el texto de cada botón de respuesta
  }
}

nextButton.addEventListener("click", incrementar);
previousButton.addEventListener("click", decrease);

container.appendChild(div);
actualizarPregunta(); // Inicializar la primera pregunta
actualizarRespuesta(); // Inicializar las respuestas para la primera pregunta
