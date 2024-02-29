const inputItem = document.querySelector("#inputItem");
const btnAgregarItem = document.querySelector("#btnAgregarItem");
const listaItems = document.querySelector("#listaItems");

//evento del boton agregar
btnAgregarItem.addEventListener("click", agregarItem);

function agregarItem() {
  const trItem = document.createElement("tr"); // <tr></tr>
  const tdItem1 = document.createElement("td"); // <td></td>
  const tdItem2 = document.createElement("td"); // <td></td>

  const trLength = document.querySelectorAll("tbody tr");
  trItem.id='listItem_'+trLength.length;

  if (inputItem.value != "") {
    trItem.appendChild(tdItem1); // <tr><td></td></tr>
    trItem.appendChild(tdItem2); // // <tr><td></td><td></td></tr>
    listaItems.append(trItem);
    trItem.setAttribute("id", "trFila");
    const btnEliminar = document.createElement("button");
    tdItem2.append(btnEliminar);

    tdItem1.innerText = inputItem.value;

    btnEliminar.addEventListener("click", eliminarItem);
    btnEliminar.innerText = "Eliminar";
    btnEliminar.setAttribute("class", "btn btn-dark");
    btnEliminar.setAttribute("id", "btnEliminar");

    function eliminarItem() {
      listaItems.removeChild(trItem);
    }
  }
}
