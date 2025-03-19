// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Arreglo donde guardaremos los nombres
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Añade un nombre, que no este vacio");
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombre);
    input.value = ""; // Limpiar el campo de texto
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let indiceGanador = Math.floor(Math.random() * amigos.length);
    let ganador = amigos[indiceGanador];

    // Mostrar el ganador en el resultado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li class="winner">🎉 El amigo secreto es: ${ganador} 🎉</li>`;
}
