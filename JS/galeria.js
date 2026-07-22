// Lightbox simple para la galería de imágenes
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modalGaleria");

  if (modal) {
    const imgGrande = document.getElementById("imgGaleriaGrande");

    document.querySelectorAll(".galeria-cuadricula img").forEach(function (img) {
      img.addEventListener("click", function () {
        imgGrande.src = this.src;
        modal.classList.add("activo");
      });
    });

  } else {
    
  }
});
