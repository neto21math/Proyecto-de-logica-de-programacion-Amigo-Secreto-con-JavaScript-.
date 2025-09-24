// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde se guardan los nombres
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
  const input = document.getElementById("inputName");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingrese un nombre válido.");
    return;
  }

  // Agregar a la lista
  amigos.push(nombre);

  // Mostrar en la lista HTML
  actualizarLista();

  // Limpiar input
  input.value = "";
}

// Actualiza la lista en la página
function actualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // limpiar antes de volver a llenar

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Sortea un amigo al azar
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indice];

  document.getElementById("resultado").textContent =
    `🎉 El amigo secreto es: ${amigoSecreto}`;
}
