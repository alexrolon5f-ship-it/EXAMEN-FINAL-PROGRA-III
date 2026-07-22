// formulario de contacto, valida y manda con emailjs
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const boton = document.getElementById("button");
  const modal = document.getElementById("modalEnviado");

  if (form) {

    const SERVICE_ID = "default_service";
    const TEMPLATE_ID = "template_a7m704x";

    function mostrarError(campo, mensaje) {
      const grupo = campo.closest(".campo");
      grupo.classList.add("invalido");
      let error = grupo.querySelector(".error");

      if (error) {
        error.textContent = mensaje;
      } else {
        error = document.createElement("span");
        error.className = "error";
        error.textContent = mensaje;
        grupo.appendChild(error);
      }
    }

    function limpiarError(campo) {
      const grupo = campo.closest(".campo");
      grupo.classList.remove("invalido");
    }

    function validarFormulario() {
      let valido = true;
      const campos = form.querySelectorAll("input[required], select[required], textarea[required]");

      campos.forEach(function (campo) {
        limpiarError(campo);

        if (campo.type === "checkbox" || campo.type === "radio") {
          // no se valida acá

        } else if (campo.value.trim() === "") {
          mostrarError(campo, "Este campo es obligatorio.");
          valido = false;

        } else if (campo.type === "email") {
          const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (regexEmail.test(campo.value)) {
            // correo válido
          } else {
            mostrarError(campo, "Ingresá un correo válido.");
            valido = false;
          }

        } else if (campo.type === "tel") {
          const regexTel = /^[+]?[0-9\s]{6,}$/;
          if (regexTel.test(campo.value)) {
            // teléfono válido
          } else {
            mostrarError(campo, "Ingresá un teléfono válido.");
            valido = false;
          }
        }
      });

      return valido;
    }

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (validarFormulario()) {
        boton.value = "Enviando...";
        boton.disabled = true;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form)
          .then(function () {
            boton.value = "Enviar mensaje";
            boton.disabled = false;

            if (modal) {
              modal.classList.add("activo");
            }
            form.reset();
          })
          .catch(function (err) {
            boton.value = "Enviar mensaje";
            boton.disabled = false;
            alert("Ocurrió un error al enviar el mensaje. Intentá nuevamente.");
            console.error(err);
          });

      } else {
        // el formulario tiene campos inválidos: llevo al primero para que se note cuál es
        const primerError = form.querySelector(".campo.invalido");
        if (primerError) {
          primerError.scrollIntoView({ behavior: "smooth", block: "center" });
          const campo = primerError.querySelector("input, select, textarea");
          if (campo) campo.focus();
        }
      }
    });

  } else {

  }
});
