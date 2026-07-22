// Maneja el modal de "leer más" en la página de blog/noticias
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modalNoticia");

  if (modal) {
    const fecha = document.getElementById("noticiaFecha");
    const titulo = document.getElementById("noticiaTitulo");
    const contenido = document.getElementById("noticiaContenido");

    document.querySelectorAll(".leer-mas").forEach(function (boton) {
      boton.addEventListener("click", function () {
        fecha.textContent = this.dataset.fecha;
        titulo.textContent = this.dataset.titulo;
        contenido.textContent = this.dataset.contenido;
        modal.classList.add("activo");
      });
    });

  } else {

  }
});
