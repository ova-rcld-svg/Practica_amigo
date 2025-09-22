// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Creamos un array vacío para guardar los nombres
let amigos = [];

// Función para agregar un nombre al array
function agregarAmigo() {
    // Obtenemos el valor escrito en el input
    let input = document.getElementById("amigo");
    let nombre = input.value; 

      if (nombre === "") {
        alert("Por favor escribe un nombre válido");
        return; // salimos si está vacío
    }

    amigos.push(nombre);
    input.value = ""; // limpiar campo

    mostrarLista(); // llamamos a la función que actualiza la lista
}

function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpiar antes de pintar de nuevo

    // Recorremos con un bucle for y mostramos con numeración
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += "<li>" + (i + 1) + ". " + amigos[i] + "</li>";
    }
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear");
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = "<li>🎉 El amigo secreto es: " + amigos[indice] + "</li>";
    }
}