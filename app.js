// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Creamos un array vacío para guardar los nombres
let amigos = [];

// Función para agregar un nombre al array
function agregarAmigo() {
    // Obtenemos el valor escrito en el input
    let input = document.getElementById("Nombre amigo/a");
    let nombre = input.value; 

    // Guardamos el nombre en el array
    amigos.push(nombre);

    // Mostramos el contenido del array en consola
    console.log(amigos);

    // Limpiamos el input
    input.value = "";
}
