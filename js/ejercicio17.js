function manejarTareas() {
  let tareas = obtenerTareas();

  function agregarTarea() {
    let tarea = document.getElementById("entradaTarea").value;

    if (tarea.trim() == "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El campo no puede estar vacío!",
      });
    } else {
      document.getElementById("entradaTarea").value = "";

      tareas.push(tarea);

      let arregloTareas = JSON.stringify(tareas);
      localStorage.setItem("arregloTareasGuardado", arregloTareas);

      renderizarTareas();
    }
  }

  function eliminarTarea(indice) {
    Swal.fire({
      title: "¿Eliminar tarea?",
      text: "Esta acción eliminará la tarea.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((opcion) => {
      if (opcion.isConfirmed) {
        tareas.splice(indice, 1);

        let arregloTareas = JSON.stringify(tareas);
        localStorage.setItem("arregloTareasGuardado", arregloTareas);

        renderizarTareas();
      }
    });
  }

  function renderizarTareas() {
    let lista = document.getElementById("listaTareas");

    lista.innerHTML = "";

    for (let i = 0; i < tareas.length; i++) {
      lista.innerHTML += `<p> ${tareas[i]} <button onclick="gestor.eliminarTarea(${i})">Eliminar</button></p>`;
    }
  }

  return {
    agregarTarea: agregarTarea,
    eliminarTarea: eliminarTarea,
    renderizarTareas: renderizarTareas,
  };
}

function obtenerTareas() {
  let tareasGuardadas = localStorage.getItem("arregloTareasGuardado");

  if (tareasGuardadas !== null) {
    return JSON.parse(tareasGuardadas);
  } else {
    return [];
  }
}

let gestor = manejarTareas();
gestor.renderizarTareas();
