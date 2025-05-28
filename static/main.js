const API_BASE = "http://localhost:8000/api";

function limpiarFormulario() {
  document.getElementById("form-agenda").reset();
  contactoEnEdicion = null;
  document.querySelector("button[type='submit']").textContent =
    "Agregar Contacto";
}

async function cargarProvincias() {
  const response = await fetch(`${API_BASE}/provincias/`);
  const provincias = await response.json();
  const select = document.getElementById("provincia");

  provincias.forEach((p) => {
    const option = document.createElement("option");
    option.value = p.id;
    option.textContent = p.nombre;
    select.appendChild(option);
  });
}

async function cargarContactos() {
  const response = await fetch(`${API_BASE}/contactos/`);
  const contactos = await response.json();
  const tbody = document.getElementById("agenda-body");
  tbody.innerHTML = "";

  contactos.forEach((c) => {
    const row = document.createElement("tr");
    row.innerHTML = `
  <td>${c.nombre}</td>
  <td>${c.apellido}</td>
  <td>${c.telefono}</td>
  <td>${c.provincia_detalle.nombre}</td>
  <td>
    <button class = "btn btn-outline-primary" onclick="editarContacto(${c.id})"><i class="bi bi-pencil"></i> Editar</button>
    <button class = "btn btn-outline-danger " onclick="eliminarContacto(${c.id})"><i class="bi bi-trash"></i> Eliminar</button>
  </td>
`;

    tbody.appendChild(row);
  });
}

let contactoEnEdicion = null;
async function editarContacto(id) {
  const response = await fetch(`${API_BASE}/contactos/${id}/`);
  const contacto = await response.json();

  document.getElementById("nombre").value = contacto.nombre;
  document.getElementById("apellido").value = contacto.apellido;
  document.getElementById("telefono").value = contacto.telefono;
  document.getElementById("provincia").value = contacto.provincia;

  contactoEnEdicion = id;

  document.querySelector("button[type='submit']").textContent =
    "Guardar Cambios";
}

async function eliminarContacto(id) {
  await fetch(`${API_BASE}/contactos/${id}/`, { method: "DELETE" });
  cargarContactos();
}

document.getElementById("form-agenda").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;
  const provincia = document.getElementById("provincia").value;

  const datos = { nombre, apellido, telefono, provincia };

  if (contactoEnEdicion) {
    // edita el contacto seleccionado

    await fetch(`${API_BASE}/contactos/${contactoEnEdicion}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
    contactoEnEdicion = null;
    document.querySelector("button[type='submit']").textContent =
      "Agregar Contacto";
  } else {
    // Crear
    await fetch(`${API_BASE}/contactos/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
  }

  e.target.reset();
  cargarContactos();
});

cargarProvincias();
cargarContactos();
