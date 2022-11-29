const crearNuevoRegistro = (nombre, email) => {
  const registro = document.createElement("tr");
  const contenido = `
        <td class="td" data-td>
            ${nombre}
        </td>
        <td>
            ${email}
        </td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a
                    href="../screens/editar_cliente.html"
                    class="simple-button simple-button--edit"
                    >
                        Editar
                    </a>
                </li>
                <li>
                    <button
                    class="simple-button simple-button--delete"
                    type="button"
                    >
                        Eliminar
                    </button>
                </li>
            </ul>
        </td>
        `;
  registro.innerHTML = contenido;
  return registro;
};

const table = document.querySelector("[data-table]");

const http = new XMLHttpRequest();

//abrir http (metodo,url)

//CRUD - Metodos HTPP
//Create - POST
//Read - GET
//Update - PUT/PATCH
//Delete - DELETE

http.open("GET", "http://localhost:3000/perfil");

http.send();

http.onload = () => {
  const data = JSON.parse(http.response);
  data.forEach((perfil) => {
    const nuevoRegistro = crearNuevoRegistro(perfil.nombre, perfil.email);
    table.appendChild(nuevoRegistro);
  });
};
