// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value;

    if (nombre === "") {
        alert("Escribe un nombre");
    } else {
        amigos.push(nombre);
        document.getElementById("amigo").value = "";
        mostrarLista();
    }
}

function mostrarLista() {
    let lista = "";
    for (let i = 0; i < amigos.length; i++) {
        lista += "<li>" + (i + 1) + ". " + amigos[i] + "</li>";
    }
    document.getElementById("listaAmigos").innerHTML = lista;
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres para sortear");
    } else {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSecreto = amigos[indice];

        // 🔹 Mostrar el resultado con alert
        alert("🎉 El amigo secreto es: " + amigoSecreto);

        // Reiniciar todo
        amigos = [];
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("amigo").value = "";
    }
}
