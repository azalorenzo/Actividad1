let estudiantes = [];

function agregar() {
  let nombre = document.getElementById("estudiante").value;
  let calificacion = document.getElementById("calificacion").value;

  if (nombre == "" || calificacion == "") {
    document.getElementById("advertencia").innerHTML = "Todos los campos son obligatorios";
  } else {
    if (!isNaN(nombre)) {
      document.getElementById("advertencia").innerHTML = "El nombre del estudiante no puede ser un número";
    } else if (isNaN(calificacion)) {
      document.getElementById("advertencia").innerHTML = "Calificacion debe ser un numero";
    } else {
      document.getElementById("advertencia").innerHTML = "";
      calificacion = parseFloat(calificacion);
      let estudiante = { nombre: nombre, calificacion: calificacion };

      estudiantes.push(estudiante);
      mostrarEstudiantes();
      document.getElementById("estudiante").value = "";
      document.getElementById("calificacion").value = "";
    }
  }
}

function calcular() {
  if (estudiantes.length == 0) {
    document.getElementById("advertencia").innerHTML = "Ingrese un alumno";
  } else {
    document.getElementById("advertencia").innerHTML = "";
    let suma = estudiantes.reduce((acc, estudiante) => acc + estudiante.calificacion, 0);
    let promedio = suma / estudiantes.length;
    let calificacionMasAlta = Math.max(...estudiantes.map((estudiante) => estudiante.calificacion));

    let calificacionMasBaja = Math.min(...estudiantes.map((estudiante) => estudiante.calificacion));

    let estudianteMayor = estudiantes.find((estudiante) => estudiante.calificacion == calificacionMasAlta);

    let estudianteMenor = estudiantes.find((estudiante) => estudiante.calificacion == calificacionMasBaja);

    document.getElementById("calificacionPromedio").value = promedio;
    document.getElementById("calificacionAlta").value = estudianteMayor.nombre;
    document.getElementById("calificacionBaja").value = estudianteMenor.nombre;
  }
}

function mostrarEstudiantes() {
  let lista = document.getElementById("listaEstudiantes");
  lista.innerHTML = "";

  for (let i = 0; i < estudiantes.length; i++) {
    lista.innerHTML += "<p>" + estudiantes[i].nombre + " - Calificación: " + estudiantes[i].calificacion + "</p>";
  }
}
