import "./style.css";

const container = document.createElement("div");
container.className = "container";
const h2 = document.createElement("h2");
h2.className = "container h2";
h2.textContent = "Quiz Question";
const p = document.createElement("p");
p.className = "container p";
//dasd
const preguntas = [
  "¿Cuál es la capital de Francia?",
  "¿Cuál es el río más grande del mundo?",
  "¿Quién escribió Romeo y Julieta?",
  "¿Cuántos planetas hay en nuestro Sistema Solar?",
];
const respuestas = [
  ["Berlín", "Madrid", "París", "Roma"],
  ["Amazonas", "Nilo", "Yangtsé", "Miño"],
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
previousButton.textContent = "Anterior";
previousButton.className = "footer-btn";

const nextButton = document.createElement("button");
nextButton.textContent = "Siguiente";
nextButton.className = "footer-btn";
div.appendChild(previousButton);
div.appendChild(nextButton);

// Declarar el array de botones de respuesta fuera de cualquier función
const answerButtons = [];
for (let i = 0; i < respuestas[indice].length; i++) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.className = "answer-btn";
  answerButtons.push(button); // Añadir el botón al array
  li.appendChild(button);
  ul.appendChild(li);
}

function incrementar() {
  if (indice < preguntas.length - 1) {
    indice++;
    actualizarPregunta();
    actualizarRespuesta();
  }
}

function decrease() {
  if (indice > 0) {
    indice--;
    actualizarPregunta();
    actualizarRespuesta();
  }
}

function actualizarPregunta() {
  p.textContent = preguntas[indice];
}

function actualizarRespuesta() {
  const respuestasActuales = respuestas[indice];
  for (let i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = respuestasActuales[i];
  }
}

nextButton.addEventListener("click", incrementar);
previousButton.addEventListener("click", decrease);

container.appendChild(div);
actualizarPregunta(); // Inicializar la primera pregunta
actualizarRespuesta(); // Inicializar el primer conjunto de respuestas
