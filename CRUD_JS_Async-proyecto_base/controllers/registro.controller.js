import { clientServices } from "../service/client-service.js";

const registro = document.querySelector("[data-form]");

registro.addEventListener("submit", (evento) => {
  evento.preventDefault();
  const nombre = document.querySelector("[data-nombre]").value;
  const email = document.querySelector("[data-email]").value;
  clientServices
    .crearCliente(nombre, email)
    .then(() => {
      window.location.href = 'registro_completado.html'
    })
    .catch((err) => console.log(err));
});
