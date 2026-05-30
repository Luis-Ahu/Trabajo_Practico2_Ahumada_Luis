const tarjetas = document.querySelectorAll(".tarjeta");
const contador = document.getElementById("contador");

tarjetas.forEach((tarjeta) => {
    tarjeta.addEventListener("click", () => {
        tarjeta.classList.toggle("destacados");

        const seleccionadas =
            document.querySelectorAll(".destacados").length;

        contador.textContent =
            `Tarjetas seleccionadas: ${seleccionadas}`;
    });

});