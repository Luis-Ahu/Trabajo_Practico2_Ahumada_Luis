const juegos = [
    { nombre: "Minecraft",categoria: "supervivencia"},
    { nombre: "Fortnite",categoria: "battle royale"},
    { nombre: "ARK", categoria: "supervivencia"},
    { nombre: "GTA V", categoria: "accion-aventura"},
    { nombre: "The Forest", categoria: "supervivencia"},
    { nombre: "LOL", categoria: "MOBA"},
]

const listado = document.getElementById("lista");
const botonTodos = document.getElementById("botonTodos");
const botonSupervivencia = document.getElementById("botonSupervivencia");

function mostrarJuegos(juegos) {
    listado.innerHTML = "";

    juegos.forEach((juego) => {
        listado.innerHTML += `<div class='juego'>${juego.nombre} - ${juego.categoria}</div>`;
    });
}

mostrarJuegos(juegos);

botonTodos.addEventListener("click", () => {
    mostrarJuegos(juegos);
});

botonSupervivencia.addEventListener("click", () => {
    const juegosSupervivencia = juegos.filter(juego => juego.categoria === "supervivencia");
    mostrarJuegos(juegosSupervivencia);
});