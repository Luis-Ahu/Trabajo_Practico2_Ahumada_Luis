const meriendas = ["Torta de chocolate", "Galletitas de avena", "Muffins de arándanos",
    "Panqueques con miel", "Sándwich de jamón y queso"];

const listasMeriendas=document.getElementById("listasMeriendas");
const botonDeCantidad=document.getElementById("botonDeCantidad");
const cantidad=document.getElementById("cantidad");

meriendas.forEach((merienda) => {
    listasMeriendas.innerHTML += "<div>" + merienda + "</div>";
});


botonDeCantidad.addEventListener("click", () => {
    cantidad.textContent = "Cantidad de meriendas: " + meriendas.length;
});
