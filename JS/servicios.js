// Maneja el modal de "ver más" en la página de servicios
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modalServicio");

  if (modal) {
    const titulo = document.getElementById("servicioTitulo");
    const descripcion = document.getElementById("servicioDescripcion");
    const precio = document.getElementById("servicioPrecio");

    document.querySelectorAll(".ver-mas").forEach(function (boton) {
      boton.addEventListener("click", function () {
        titulo.textContent = this.dataset.nombre;
        descripcion.textContent = this.dataset.descripcion;
        precio.textContent = this.dataset.precio;
        modal.classList.add("activo");
      });
    });

  } else {
 
  }
});
