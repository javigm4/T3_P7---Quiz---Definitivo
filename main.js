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
  ["Jane Austen", "Cervantes", "William Shakerpeare", "Charles Dicksen"],
  ["7", "8", "9", "10"],
];

let indice = 0;
p.textContent = preguntas[indice];
if ((indice = 0)) {
  previousButton.className = "footer-btn:disabled"; //aqui me quede
}

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

const answerButtons = [];

for (let i = 0; i < respuestas.length; i++) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.className = "answer-btn";

  li.appendChild(button);
  ul.appendChild(li);
}

// Botones
function incrementar() {
  if (indice < preguntas.length - 1) {
    indice++;
    actualizarPregunta();
  }
}
//prueba
function decrease() {
  if (indice > 0) {
    indice--;
    actualizarPregunta();
  }
}
//adasdadsaasdad
// Actualizar la pregunta
function actualizarPregunta() {
  p.textContent = preguntas[indice];
}

function actualizarRespuesta() {
  const respuestasActuales = respuestas[indice]; // Obtiene las respuestas para la pregunta actual
  // Crear los botones de respuesta y agregarlos a answerButtons
  for (let i = 0; i < respuestas[0].length; i++) {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.className = "answer-btn";
    answerButtons.push(button); // Agregar el botón al arreglo answerButtons
    li.appendChild(button);
    ul.appendChild(li);
  }
}
nextButton.addEventListener("click", incrementar);
previousButton.addEventListener("click", decrease);

container.appendChild(div);
actualizarPregunta(); // Inicializar la primera pregunta
actualizarRespuesta();
